const express = require('express');
const app = express();
const port = 3000; // You can choose any available port

app.use(express.static(__dirname + '/public')); // Serve static files from your project directory

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
