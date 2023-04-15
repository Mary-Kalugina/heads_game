// import { putMonster, removeMonster, changeCell } from
// const { JSDOM } = require('jsdom');

// const html = `
//   <div class="grid">
//     <div class="cell"></div>
//     <div class="cell"></div>
//     <div class="cell"></div>
//     <div class="cell"></div>
//     <div class="cell"></div>
//     <div class="cell"></div>
//     <div class="cell"></div>
//     <div class="cell"></div>
//     <div class="cell"></div>
//     <div class="cell"></div>
//     <div class="cell"></div>
//     <div class="cell"></div>
//     <div class="cell"></div>
//     <div class="cell"></div>
//     <div class="cell"></div>
//   </div>
// `;

// describe('changeCell', () => {
//   let dom;
//   let cells;
//   let oldCell;

//   beforeAll(() => {
//     dom = new JSDOM(html);
//     global.document = dom.window.document;
//     cells = document.querySelectorAll('.cell');
//   });

//   beforeEach(() => {
//     oldCell = cells[0];
//     oldCell.classList.add('monster');
//   });

//   afterEach(() => {
//     oldCell.classList.remove('monster');
//   });

//   test('moves the monster to a new cell', () => {
//     changeCell();

//     const newCell = document.querySelector('.monster');
//     expect(oldCell.classList.contains('monster')).toBe(false);
//     expect(newCell.classList.contains('monster')).toBe(true);
//     expect(newCell).not.toBe(oldCell);

//     oldCell = newCell;
//   });
// });
