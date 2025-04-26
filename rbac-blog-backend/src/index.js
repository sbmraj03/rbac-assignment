const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const blogRoutes = require('./routes/blogRoutes');

// Load env variables
dotenv.config();

// Connect Database
connectDB();

const app = express();

// Enable CORS
app.use(cors());

app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/blogs', blogRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
