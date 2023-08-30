const server = require("./src/server");
const { conn } = require('./src/db.js');
const { insertCountryToDB } = require('./src/utils/api')
const PORT = process.env.PORT || 3001;

// Sincronizar la base de datos y luego iniciar el servidor
conn.sync({ alter: true }).then(() => {
  // Iniciar el servidor
server.listen(PORT, async () => {
  // Insertar países en la base de datos antes de escuchar en el puerto
  await insertCountryToDB()
  console.log('Insert completed');
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
