import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000; 

app.use(cors());
app.use(express.json());

const skills = [
  { id: 1, name: 'JavaScript', level: '80%' },
  { id: 2, name: 'TypeScript', level: '80%' },
  { id: 3, name: 'C#', level: '70%' },
  { id: 4, name: 'Dart', level: '70%' },
  { id: 5, name: 'Java', level: '70%' },
  { id: 6, name: 'Python', level: '65%' },
  { id: 7, name: 'React', level: '80%' },
  { id: 8, name: 'Express', level: '80%' },
  { id: 9, name: 'Node.js', level: '80%' },
  { id: 10, name: 'ASP.NET Core', level: '70%' },
  { id: 11, name: 'Flutter', level: '70%' },
  { id: 12, name: 'HTML', level: '85%' },
  { id: 13, name: 'CSS', level: '80%' },
  { id: 14, name: 'Bootstrap', level: '75%' },
  { id: 15, name: 'MySQL', level: '70%' },
];

app.get('/api/skills', (req, res) => {
  res.json(skills);
});

app.use((req, res) => {
  res.status(404).json({ message: 'Rute Not Found.' });
});

app.listen(port, () => {
  console.log(`API listening at https://portfoliowebsitev2-api.onrender.com`);
});
