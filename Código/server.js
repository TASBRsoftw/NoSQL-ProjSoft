const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const taskRoutes = require('./routes/tasks');
const seedTasks = require('./seed');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/tasks', taskRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('✅ Conectado ao MongoDB');
  await seedTasks(); // Chamada para popular o banco
  app.listen(PORT, () => {
    console.log(` Servidor rodando na porta ${PORT}`);
  });
})
.catch((error) => {
  console.error(' Erro ao conectar ao MongoDB:', error);
});
