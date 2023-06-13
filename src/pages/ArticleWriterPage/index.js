import React, { useState } from 'react';
import QuillEditor from '../../components/Editor';
import SelectDropdown from '../../components/Select';
import Button from '../../components/Button';

const ArticleWriterPage = () => {
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateClick = () => {
    setIsGenerating(true);

    const loremIpsumWords = [
      'Lorem',
      'ipsum',
      'dolor',
      'sit',
      'amet,',
      'consectetur',
      'adipiscing',
      'elit.',
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      setGeneratedContent((prevContent) => {
        const currentContent = prevContent.trim();
        if (currentContent === '') {
          return loremIpsumWords[currentIndex];
        } else {
          return currentContent + ' ' + loremIpsumWords[currentIndex];
        }
      });
      currentIndex++;

      if (currentIndex === loremIpsumWords.length) {
        setIsGenerating(false);
        clearInterval(interval);
      }
    }, 500);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-4">
        <SelectDropdown />
        <Button
          className="w-40"
          onClick={handleGenerateClick}
          disabled={isGenerating}
        >
          {isGenerating ? 'Generating...' : 'Generate'}
        </Button>
      </div>
      <QuillEditor generatedContent={generatedContent} />
    </div>
  );
};

export default ArticleWriterPage;