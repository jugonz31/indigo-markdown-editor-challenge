import '@testing-library/jest-dom';
import { markdownParser } from '../../utils';

describe('markdownParser util', () => {
  it('should generate a h1 tag when input text starts with a number sign followed by a space', () => {
    expect(markdownParser('# test')).toBe('<h1>test</h1>');
  });

  it('should generate a h2 tag when input text starts with two number signs followed by a space', () => {
    expect(markdownParser('## test')).toBe('<h2>test</h2>');
  });

  it('should generate a hr tag when input text has only three hyphens', () => {
    expect(markdownParser('---')).toBe('<hr />');
  });

  it('should not generate a h1 tag when input text starts with a number sing but theres no space next', () => {
    expect(markdownParser('#test')).toBe('#test');
    expect(markdownParser('#test')).not.toBe('<h1>test</h1>');
  });

  it('should not generate a h2 tag when input text starts with two number sing but theres no space next', () => {
    expect(markdownParser('##test')).toBe('##test');
    expect(markdownParser('##test')).not.toBe('<h2>test</h2>');
  });

  it('should not generate a hr tag when input text has more tha only three hyphens in a single line', () => {
    expect(markdownParser('---test')).toBe('---test');
    expect(markdownParser('---test')).not.toBe('<hr />test');
  });

  it('should generate a p tag when input text is after an empty line', () => {
    expect(markdownParser('test\n\ninput')).toBe('test<p>input</p>');
  });
});
