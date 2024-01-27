import { describe, expect, it } from 'vitest';

import { blank } from './blank.js';

describe('blank', () => {
  it('should render all unique items', () => {
    const numbers = blank('1', '2', '3', '4');
    const rendered = [numbers(), numbers(), numbers(), numbers()];
    const sorted = rendered.sort();
    expect(sorted).toEqual(['1', '2', '3', '4']);
  });

  it('should render all unique items twice', () => {
    const numbers = blank('1', '2', '3', '4');
    const rendered = [
      numbers(),
      numbers(),
      numbers(),
      numbers(),
      numbers(),
      numbers(),
      numbers(),
      numbers(),
    ];
    const sorted = rendered.sort();
    expect(sorted).toEqual(['1', '1', '2', '2', '3', '3', '4', '4']);
  });

  it('should not repeat the same item twice in a row', () => {
    const numbers = blank('1', '2', '3', '4');
    const rendered = [
      numbers(),
      numbers(),
      numbers(),
      numbers(),
      numbers(),
      numbers(),
      numbers(),
      numbers(),
    ];
    expect(rendered[0]).not.toBe(rendered[1]);
    expect(rendered[1]).not.toBe(rendered[2]);
    expect(rendered[2]).not.toBe(rendered[3]);
    expect(rendered[3]).not.toBe(rendered[4]);
    expect(rendered[4]).not.toBe(rendered[5]);
    expect(rendered[5]).not.toBe(rendered[6]);
    expect(rendered[6]).not.toBe(rendered[7]);
  });

  it('should render when used in a string without invocation', () => {
    const single = blank('item');
    const prompt = `Just one ${single}!`;
    expect(prompt).toBe('Just one item!');
  });

  it('should render when used in a string with invocation', () => {
    const single = blank('item');
    const prompt = `Just one ${single()}!`;
    expect(prompt).toBe('Just one item!');
  });
});
