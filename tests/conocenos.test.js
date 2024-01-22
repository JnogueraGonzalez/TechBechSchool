// /TechBechSchool/src/js/__tests__/conocenos.test.js

const { cambiarTexto, obtenerTexto } = require('../conocenos');

// Supongamos que tienes un HTML de prueba con un elemento div con id "miElemento"
document.body.innerHTML = '<div class="imagen-con-texto">Texto Original</div>';

test('cambiarTexto cambia el texto del elemento correctamente', () => {
  cambiarTexto('imagen-con-texto', 'Nuevo Texto');
  expect(obtenerTexto('miElemento')).toBe('Nuevo Texto');
});

test('obtenerTexto devuelve null para un elemento inexistente', () => {
  expect(obtenerTexto('elementoInexistente')).toBeNull();
});
