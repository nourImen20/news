import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import './writearticle.scss'; // Import your CSS file for styling

const WriteArticle = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handlePublish = () => {
    // Handle publishing logic here
  };

  return (
    <div className="write-article-container" id="writearticlepage">
      <div className="write-article-header">
        <input
          type="text"
          placeholder="Title of article"
          className="article-title-input"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className={`write-article-content ${isFocused || content.trim() ? 'focused' : ''}`}>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={handleContentChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Write your article..."
          style={{ height: '400px'}} // Adjust the height as needed
        />
      </div>
      <div className="publish-button-container">
        <button type="button" className="btn btn-outline-danger" onClick={handlePublish}>Publish</button>
      </div>
    </div>
  );
};

export default WriteArticle;
