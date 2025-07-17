const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
// Add others as needed

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/subtrack', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("MongoDB Error", err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/subscriptions', subscriptionRoutes);


const emailRoutes = require('./routes/emailRoutes');
app.use('/api/emails', emailRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
