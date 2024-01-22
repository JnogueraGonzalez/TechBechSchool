const jestdom= require("@testing-library/jest-dom");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;



let dom;
let window;
let document;

test("header exists",async ()=> {
    dom= await JSDOM.fromFile("./index.html", {
        resources: "usable",
        runScripts: "dangerously"
    });

    window= dom.window
    document= dom.window.document

    const header = document.querySelector(".encabezado"); 
    expect(header).toBeInTheDocument(); 
})

test("img-container exists",async ()=> {
    dom= await JSDOM.fromFile("./index.html", {
        resources: "usable",
        runScripts: "dangerously"
    });

    window= dom.window
    document= dom.window.document

    const header = document.querySelector("contenido-principal."); 
    expect(header).toBeInTheDocument(); 
})

test('sum function adds two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

