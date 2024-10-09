import express from 'express';
import cors from 'cors';
const app = express();
import skills from './skills/skills.json' assert { type: 'json' }; 

app.use(cors());

app.get('/api/skills', (req, res) => {
  res.json(skills); 
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
