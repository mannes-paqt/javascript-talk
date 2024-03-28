// Import requirements
import express from "express";
import cors from "cors";

// Create app
const app = express();
app.use(cors());

async function asyncFunction(duration = 2000) {
  console.log('Starting async function');
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Async function done');
      resolve();
    }, duration);
  });
}

// Add a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/async', (req, res) => {
  asyncFunction();
  res.send("Message received: didn't wait"); // Response is instant, asyncFunction runs 'in background'
})

app.get('/async-await', async (req, res) => {
  await asyncFunction();
  res.send("Message received: waited"); // Respose is much later, waits for asyncFunction to complete
})

// Start the application
app.listen(3000, () => console.log('App is listening on port 3000.'));
