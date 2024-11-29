// src/controllers/createPost.ts

export const createPost = (title: string, content: string) => {
    if (!title || !content) {
      throw new Error("Title and content are required");
    }
    return { id: Math.floor(Math.random() * 1000), title, content };
  };