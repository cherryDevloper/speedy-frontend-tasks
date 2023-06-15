import React, { useState } from 'react';
import QuillEditor from '../../components/Editor';
import SelectDropdown from '../../components/Select';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const ArticleWriterPage = () => {
  const [displayedWord, setDisplayedWord] = useState('');
  const [content, setContent] = useState('');
  const handleGenerateClick = () => {
    setDisplayedWord('lorem ipsum');
  };

  const navigate = useNavigate();
  return (
    <>
      <Button
        className={'mb-5'}
        onClick={() => navigate('/')}
      >
        Back
      </Button>
      <div className="flex flex-col">
        <QuillEditor
          toolbar
          content={content}
          onChange={(e) => setContent(e)}
          setContent={setContent}
        />
        <div className="felx mt-2 border rounder-md p-4 shadow-sm">
          <div className="flex justify-between mb-4">
            <SelectDropdown />
          </div>
          <span>{displayedWord}</span>
          <div className="flex justify-end items-end">
            <Button
              className="w-40"
              onClick={handleGenerateClick}
            >
              {'Generate'}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleWriterPage;
