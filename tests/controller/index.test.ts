import { createPost } from '../src/controller/index';

describe('Controller Tests', () => {
  it('should create a post with valid data', () => {
    const result = createPost('Title', 'Content');
    expect(result).toEqual({ id: 1, title: 'Title', content: 'Content' });
  });

  it('should throw an error when data is invalid', () => {
    expect(() => createPost('', '')).toThrow('Title and content are required');
  });
});