import { generateColorForString } from './color.js';

test('Color for two strings not match', () => {
  const firstGeneratedColor = generateColorForString('aa');
  const secondGeneratedColor = generateColorForString('a');

  expect(firstGeneratedColor).not.toBe(secondGeneratedColor);
});