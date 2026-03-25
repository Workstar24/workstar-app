const express = require('express');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const { findUser, saveUser } = require('./database');
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  if (findUser(email)) return res.json({ msg: 'Email already exists!' });
  const hashed = await bcrypt.hash(password, 10);
  saveUser({ email, password: hashed });
  res.json({ msg: 'Account created! 🎉' });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = findUser(email);
  if (!user) return res.json({ msg: 'User not found!' });
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.json({ msg: 'Wrong password!' });
  res.json({ msg: 'Welcome back! ✅' });
});

app.listen(3000, () => {
  console.log('✅ App running! Go to http://localhost:3000');
});
