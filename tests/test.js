// test.js
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('Button click increments the counter', () => {
    // Carrega o HTML para o DOM
    const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');
    const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });
    const document = dom.window.document;

    // Simula o carregamento da página
    dom.window.document.addEventListener('DOMContentLoaded', () => {
        const button = document.getElementById('clickButton');
        const countDisplay = document.getElementById('count');

        // Simula o clique no botão
        button.click();
        button.click();

        // Verifica se o contador foi incrementado corretamente
        expect(countDisplay.textContent).toBe('2');
    });

    // Simula o DOMContentLoaded
    dom.window.document.dispatchEvent(new dom.window.Event('DOMContentLoaded'));
});
