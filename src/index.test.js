import { generateColorForString } from './color.js';

test('color match', () => {
  const string = 'jan';
  const generatedColor = generateColorForString(string);

  expect(generatedColor).toBe(string);
});