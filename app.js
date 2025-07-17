const express = require('express');
const cors = require('cors'); // ✅ Import CORS
const connectDB = require('./config/database');

const app = express();

connectDB(); // ✅ Connect to MongoDB

const allowedOrigins = ['https://subtrack-grd2.vercel.app/']; // replace with your Vercel URL

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
 // ✅ Enable CORS for frontend-backend communication
app.use(express.json()); // ✅ Middleware to parse JSON requests

const subscriptionRoutes = require('./routes/subscriptionRoutes');
app.use('/api/subscriptions', subscriptionRoutes);

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);
const emailRoutes = require('./routes/emailRoutes');
app.use('/api/emails', emailRoutes);

app.listen(5000, () => console.log(`Server running on port 5000`));
