const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/event-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/events", router); // localhost:5000/events

mongoose
    .connect(
        "mongodb://admin:anish123@ac-afbk2vi-shard-00-00.3u2eg94.mongodb.net:27017,ac-afbk2vi-shard-00-01.3u2eg94.mongodb.net:27017,ac-afbk2vi-shard-00-02.3u2eg94.mongodb.net:27017/?ssl=true&replicaSet=atlas-119wuu-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors'); // Import the CORS middleware

// const app = express();
// app.use(express.json());

// // Connect to MongoDB
// mongoose
// .connect("mongodb://admin:anish123@ac-afbk2vi-shard-00-00.3u2eg94.mongodb.net:27017,ac-afbk2vi-shard-00-01.3u2eg94.mongodb.net:27017,ac-afbk2vi-shard-00-02.3u2eg94.mongodb.net:27017/?ssl=true&replicaSet=atlas-119wuu-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0")
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// // Middleware to enable CORS
// app.use(cors()); // Add this line to enable CORS

// // Routes
// const eventsRouter = require('./routes/events');
// app.use('/events', eventsRouter);

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


