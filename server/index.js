
const server = require("./src/server");
const { conn } = require('./src/db.js');
const { insertCountryToDB } = require('./src/utils/api')
const PORT = 3001;

conn.sync({ alter: true }).then(() => {
server.listen(PORT, async () => {
  await insertCountryToDB()
  console.log('Insert completed');
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
