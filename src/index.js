const express = require('express');

const app = express();

app.use(express.json());

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.get('/posts/:id', (req, res) => {
  const { id } = req.params;
  const post = posts.find(i => i.id === Number(id));
  if (!post) {
    return res.sendStatus(404);
  }
  res.json(post);
});

app.put('/posts/:id', (req, res) => {
  const { id } = req.params;
  const { author, content } = req.body;
  const post = posts.find(i => i.id === Number(id));
  if (!post) {
    return res.sendStatus(404);
  }
  post.author = author;
  post.content = content;
  res.json(post);
});

app.delete('/posts/:id', (req, res) => {
  const { id } = req.params;
  const postIndex = posts.findIndex(i => i.id === Number(id));
  if (postIndex === -1) {
    return res.sendStatus(404);
  }
  const deletedPost = posts.splice(postIndex, 1);
  res.json(deletedPost);
});

app.post('/posts', (req, res) => {
  const { author, content } = req.body;
  const newPost = { author, content, id: currentId++ };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.listen(3000, () => {
  console.log('server listen on port 3000');
});
