import React, { useEffect, useRef } from 'react';
const QuillEditor = () => {
  const quillRef = useRef(null);

  useEffect(() => {
    let quill = null;

    const loadQuill = async () => {
      const { default: Quill } = await import('quill');
      quill = new Quill(quillRef.current, {
        theme: 'snow',
        placeholder: 'Once apon a time...',
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean'],
          ],
        },
      });

      quill.on('text-change', () => {
        const content = quill.root.innerHTML;
        console.log(content);
      });
    };

    loadQuill();

    return () => {
      if (quill) {
        quill.off('text-change');
        quill = null;
      }
    };
  }, []);

  return (
    <div
      ref={quillRef}
      className="bg-gray-100 min-h-screen"
    />
  );
};

export default QuillEditor;
