require('dotenv').config();

const server = require('./api/server');

const PORT = process.env.PORT || 5000;
server.listen(3001, () => console.log(`Server listening on port ${PORT}`));