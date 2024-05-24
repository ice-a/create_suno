const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch').default; // 使用CommonJS版本的node-fetch
const cors = require('cors'); // 引入cors中间件
const config = require('dotenv').config();
const app = express();
const PORT = 3000;

app.use(cors()); // 使用cors中间件
app.use(bodyParser.json());
// 1d658d84eb7145b08ccffd02cf33cfdc

app.post('/generate-music', async (req, res) => {
  const { prompt } = req.body;
  console.log(config)
  console.log(prompt);
  const options = {
    method: "post",
    headers: {
      "accept": "application/json",
      "authorization": "Bearer 1d658d84eb7145b08ccffd02cf33cfdc",
      "content-type": "application/json"
    },
    body: JSON.stringify({
      "prompt": prompt
    })
  };

  try {
    const response = await fetch("https://api.acedata.cloud/suno/audios", options);
    const data = await response.json();        
    res.json(data);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});