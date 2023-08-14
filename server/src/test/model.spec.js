const { Activity } = require('../db'); // Importa el modelo Activity desde el archivo db.js
const defineActivityModel = require('../models/Activity'); // Importa la función para definir el modelo Activity

describe('Activity Model', () => {
  // Antes de todas las pruebas, define el modelo si es necesario
  beforeAll(() => {
    if (!Activity) {
      // Si el modelo Activity no está definido en la instancia de Sequelize,
      // lo definimos utilizando la función defineActivityModel
      defineActivityModel(sequelize); // Asegúrate de tener acceso a la instancia sequelize
    }
  });

  // Prueba para verificar que el modelo Activity se definió correctamente
  it('should define the Activity model', () => {
    expect(Activity).toBeDefined(); // Verifica que el modelo Activity esté definido
    expect(Activity.name).toBe('Activity'); // Verifica que el nombre del modelo sea 'Activity'

    const attributes = Activity.rawAttributes; // Obtiene los atributos del modelo
    expect(attributes.id).toBeDefined(); // Verifica que el atributo id esté definido
    expect(attributes.name).toBeDefined(); // Verifica que el atributo name esté definido
    expect(attributes.difficulty).toBeDefined(); // Verifica que el atributo difficulty esté definido
    expect(attributes.duration).toBeDefined(); // Verifica que el atributo duration esté definido
    expect(attributes.season).toBeDefined(); // Verifica que el atributo season esté definido
    expect(attributes.img).toBeDefined(); // Verifica que el atributo img esté definido
  });
});
