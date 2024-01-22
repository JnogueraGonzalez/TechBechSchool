// // /TechBechSchool/src/js/piano.js

// function obtenerNotaPorId(id) {
//     // Lógica para obtener la nota de una tecla
//     // Aquí podrías usar el DOM para obtener el elemento por su ID y extraer la nota asociada
//     // (C, D, E, etc.) del contenido del elemento.
//     return 'C'; // Esto es solo un ejemplo, ajusta según tus necesidades.
//   }
  
//   // Exporta las funciones que quieres probar
//   module.exports = {
//     obtenerNotaPorId,
//     // Agrega más funciones según sea necesario
//   };

//   // jest.config.js
// module.exports = {
//     testEnvironment: 'jsdom',
//     // ... otras configuraciones ...
//   };
  
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Lee el contenido del archivo HTML
const html = fs.readFileSync(path.resolve(__dirname, '/pages/piano.html'), 'utf8');

// Configuración básica de jsdom
const dom = new JSDOM(html);
global.document = dom.window.document;

// Importa el archivo JavaScript que deseas probar
const { manejarEventoTecla } = require('./src/js/piano.js');

// Test de ejemplo
test('Manejar evento de tecla', () => {
  // Crea un elemento de tecla blanco
  const teclaBlanca = document.createElement('div');
  teclaBlanca.classList.add('white-key');
  teclaBlanca.id = 'one';

  // Simula un clic en la tecla
  manejarEventoTecla(teclaBlanca);

  // Realiza tus afirmaciones aquí, por ejemplo, verifica si la lógica de manejo de eventos funciona correctamente
  // Puedes asumir que tu lógica modificará algún estado o clase en la tecla, y puedes realizar afirmaciones en consecuencia.
  expect(teclaBlanca.classList.contains('clase-esperada')).toBe(true);
});
