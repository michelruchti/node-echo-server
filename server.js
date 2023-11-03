const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // You can change this to any port you prefer

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to log request details
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const headers = req.headers;
  const host = req.headers.host;
  const body = req.body;
  const ip = req.ip;

  // Log request details
  console.log(`[${timestamp}] ${method} ${url} - Body:`, body);

  // Pass control to the next middleware
  res.json({
    message: "Received",
    timestamp,
    ip,
    method,
    host,
    url,
    body,
    headers,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Echo server is running on http://localhost:${port}`);
});
