
const server = require("./src/server");
const { conn } = require('./src/db.js');
const { insertCountryToDB } = require('./src/utils/api')
require('dotenv').config()

// Sincronizar la base de datos y luego iniciar el servidor
conn.sync({ alter: true }).then(() => {
  // Iniciar el servidor
server.listen(process.env.PORT, async () => {
  // Insertar países en la base de datos antes de escuchar en el puerto
  await insertCountryToDB()
  console.log('Insert completed');
  console.log(`Server listening on port`, process.env.PORT);
})
}).catch(error => console.error(error))
