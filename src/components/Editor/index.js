import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';

Quill.register('modules/imageResize', ImageResize);

function TextEditor({ content, setContent, toolbar = false }) {
  const modules = {
    toolbar: toolbar
      ? [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ script: 'sub' }, { script: 'super' }],
          [{ direction: 'rtl' }],
          [{ color: [] }, { background: [] }],
          ['link', 'image'],
          ['clean'],
          ['align'], // Enable image alignment options
          ['alt', 'remove'], // Add alt text and remove options
          ['imageResize'], // Enable image resizing
        ]
      : null,
    imageResize: {
      modules: ['Resize', 'DisplaySize'],
    },
  };

  return (
    <ReactQuill
      value={content}
      onChange={setContent}
      modules={modules}
    />
  );
}

export default TextEditor;
