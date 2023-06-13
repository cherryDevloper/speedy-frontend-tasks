import React, { useEffect, useRef, useMemo, useState } from 'react';

const QuillEditor = ({ generatedContent }) => {
  const quillRef = useRef(null);
  const quillInstance = useRef(null);
  useEffect(() => {
    let quill = null;
    const loadQuill = async () => {
      const { default: Quill } = await import('quill');
      quillInstance.current = new Quill(quillRef.current, {
        theme: 'snow',
        placeholder: 'Once upon a time...',
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

      quillInstance.current.on('text-change', () => {
        const content = quillInstance.current.root.innerHTML;
        console.log(content);
      });
      if (generatedContent) {
        quill.setContents(quill.clipboard.convert(generatedContent));
      }
    };

    loadQuill();

    return () => {
      if (quillInstance.current) {
        quillInstance.current.off('text-change');
        quillInstance.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (quillInstance.current && generatedContent) {
      quillInstance.current.root.innerHTML = generatedContent;
    }
  }, [generatedContent]);

  const memoizedEditor = useMemo(
    () => (
      <div
        ref={quillRef}
        className="bg-gray-100 min-h-screen"
      />
    ),
    []
  );

  return memoizedEditor;
};

export default QuillEditor;
