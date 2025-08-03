import { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [selected, setSelected] = useState('book');

  let content;
  if (selected === 'book') {
    content = <BookDetails />;
  } else if (selected === 'blog') {
    content = <BlogDetails />;
  } else {
    content = <CourseDetails />;
  }

  return (
    <div className="App">
      <h1>📖 Blogger App</h1>
      <button onClick={() => setSelected('book')}>Show Book</button>
      <button onClick={() => setSelected('blog')}>Show Blog</button>
      <button onClick={() => setSelected('course')}>Show Course</button>
      <hr />
      {content}
    </div>
  );
}

export default App;