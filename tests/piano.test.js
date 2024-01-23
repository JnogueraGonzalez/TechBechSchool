const fs = require('fs');
const { JSDOM } = require("jsdom");

let dom;
let window;
let document;

test("playSound function is defined", async () => {
  const html = fs.readFileSync('C:/ruta/completa/al/piano.html', 'utf8');
  dom = new JSDOM(html, {
        resources: "usable",
        runScripts: "dangerously"
    });

    window = dom.window;
    document = dom.window.document;

    const playSoundFunction = document.querySelector("function[playSound]");
    expect(playSoundFunction).toBeDefined();
});
