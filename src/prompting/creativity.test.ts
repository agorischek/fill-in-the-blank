import { describe, expect, it } from 'vitest';

import { creativity } from './creativity.js';

describe('creativity', () => {
  it('Should render blanks', () => {
    const prompt = creativity();
    expect(prompt).not.toContain('{');
    expect(prompt).not.toContain('}');
  });
});
