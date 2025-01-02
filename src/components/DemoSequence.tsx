import { useState, useEffect } from 'react';

const demoTexts = [
  { text: "Analyzing data...", icon: "📊" },
  { text: "Writing report...", icon: "📝" },
  { text: "Finalizing report...", icon: "✨" },
  { text: "Document Ready!", icon: "✅" }
];

export default function DemoSequence() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const typeText = () => {
      const { text, icon } = demoTexts[currentIndex];
      const fullText = `${icon} ${text}`;
      let charIndex = 0;

      const typeInterval = setInterval(() => {
        if (charIndex < fullText.length) {
          setCurrentText(fullText.substring(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
        }
      }, 40);

      setProgress(((currentIndex + 1) / demoTexts.length) * 100);

      const nextIndex = (currentIndex + 1) % demoTexts.length;
      const timeout = setTimeout(() => {
        if (nextIndex === 0) {
          setProgress(0);
        }
        setCurrentIndex(nextIndex);
      }, 3000);

      return () => {
        clearInterval(typeInterval);
        clearTimeout(timeout);
      };
    };

    typeText();
  }, [currentIndex]);

  return (
    <div className="bg-gray-800/50 backdrop-blur-xl rounded-lg p-6 relative overflow-hidden">
      <p className="font-mono text-lg">{currentText}</p>
      <div 
        className="absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}