import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3009;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'commissioning-engine' });
});

app.post('/api/commission/validate', (req, res) => {
  const { installationId, capacity, location } = req.body;
  
  res.json({
    installationId,
    status: 'validated',
    capacity,
    location,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Commissioning Engine API running on port ${PORT}`);
});
