const express = require('express');
const axios = require('axios');

const app = express();

const app = require('./api/chat');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Proxy listening on port ${PORT}`);
});
