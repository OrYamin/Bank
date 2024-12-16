const { errorMiddleware, loggingMiddleware} = require('./middlewares/middles');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const userRoutes = require('./routes/userRoutes');
const accountRoutes = require('./routes/accountRoutes');

// Middlewares
app.use(loggingMiddleware); // Middleware to log HTTP request
app.use(express.json()); // Middleware to parse JSON
app.use(cookieParser()); // Middleware to parse cookies

// Routes
app.use("/users", userRoutes);
app.use("/accounts", accountRoutes);

// Default route
app.get('/', (req, res) => {
    res.status(200).send(`Welcome to bank API`);
});

// Error-handling middleware (typically last)
app.use(errorMiddleware);

module.exports = app;
