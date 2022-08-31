'use strict'

const herois = [
    'Iron - Wounded, captured and forced to build a weapon by …make the world a safer, better place as Iron Man.',
    'Thanos - The Mad Titan Thanos, a melancholy, brooding indiv…he became more powerful than any of his brethren.',
    'SpiderMan - Peter’s relatively normal life changed abruptly du…it escaped and bit Peter before it was destroyed.',
    'Thor - As the Norse God of thunder and lightning, Thor wi…never, ever stop fighting for a worthwhile cause.',
    'CaptainAmerica - Vowing to serve his country any way he could, youn… living, breathing symbol of freedom and liberty.'
]

const criarContainer = (array) => {
    const listaHeroes = array.split(' - ')
    let titulo = listaHeroes[0];
    let conteudo = listaHeroes[1];

    const ul = document.querySelector('ul')
    const div = document.createElement('divs')
    div.classList.add('item')

    div.innerHTML = `
        <li>
            <h2>${titulo}</h2>
            <span>${conteudo}</h2>
        </li>
    `
    ul.appendChild(div);
}

herois.forEach(criarContainer)

console.log();
