import { generateColorForString } from './color.js';

test('Color for two strings not match', () => {
  const firstGeneratedColor = generateColorForString('foo');
  const secondGeneratedColor = generateColorForString('bar');

  expect(firstGeneratedColor).not.toBe(secondGeneratedColor);
});

test('Same string, same color', () => {
  const firstGeneratedColor = generateColorForString('foo');
  const secondGeneratedColor = generateColorForString('foo');

  expect(firstGeneratedColor).toBe(secondGeneratedColor);
});