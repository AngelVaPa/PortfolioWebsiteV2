import express from 'express';
import cors from 'cors';
import skills from './skills/skills.json';

const app = express();

app.use(cors());

app.get('/api/skills', (req, res) => {
  res.json(skills);
});

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
