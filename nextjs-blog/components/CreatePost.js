// components/CreatePost.js
import React, { useState } from 'react';
import db from '../config/fire-conf';
import { getFirestore, collection, addDoc, query } from 'firebase/firestore';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [notification, setNotification] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const docRef = addDoc(collection(db, 'blog'), {
      title: title,
      content: content
    });

    console.log({
      title: title,
      content: content
    });

    setTitle('');
    setContent('');

    setNotification('Blogpost created');
    setTimeout(() => {
      setNotification('');
    }, 2000);
  };
  return (
    <div>
      <h2>Add Blog</h2>

      {notification}
      <form onSubmit={handleSubmit}>
        <div>
          Title
          <br />
          <input
            type="text"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          Content
          <br />
          <textarea
            value={content}
            onChange={({ target }) => setContent(target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};
export default CreatePost;
