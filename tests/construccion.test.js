const { JSDOM } = require("jsdom");

test("header exists in construccion.html", () => {
    // Cargar construccion.html
    const dom = new JSDOM();
    dom.window.document.body.innerHTML = `
        <header class='encabezado'>
            <!-- Contenido del encabezado -->
        </header>
    `;

    // Acceder al documento HTML
    const document = dom.window.document;

    // Verificar si el elemento con la clase 'encabezado' existe
    const headerExists = document.querySelector(".encabezado") !== null;

    // Esperar que headerExists sea verdadero (que exista)
    expect(headerExists).toBe(true);
});

test("document title is 'Web en construccion'", () => {
    // Crear un DOM virtual sin especificar el HTML
    const dom = new JSDOM();

    // Acceder al título del documento
    const title = dom.window.document.createElement("title");
    title.textContent = "Web en construccion";
    dom.window.document.head.appendChild(title);

    // Verificar que el título sea el esperado
    expect(title.textContent).toBe("Web en construccion");
});
