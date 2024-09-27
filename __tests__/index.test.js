import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import reverse from '../src/index.js';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});

test('reverse with log text', () => {
  const text = readFixtureFile('dom.html').trim();
  const expected = reverse(text);

  expect(reverse(text)).toEqual(expected);
});


/* eslint-disable @typescript-eslint/naming-convention */

// import { fileURLToPath } from 'url';
// import fs from 'fs';
// import path from 'path';
// import getFunction from '../functions.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const toHtmlList = getFunction();

// // BEGIN (write your solution here)
// const formats = ['csv', 'json', 'yml'];
// const getFixturePath = (name) => path.join(__dirname, '..', '__fixtures__', name);

// let expected;

// beforeEach(() => {
//   expected = fs.readFileSync(getFixturePath('result.html'), 'utf-8');
// });

// test.each(formats)('%s', (format) => {
//   const filePath = getFixturePath(`list.${format}`);
//   const actual = toHtmlList(filePath);
//   expect(actual).toEqual(expected.trim());
// });
// // END
