import { useState, useEffect } from 'react';
import Circles from './Circles';
import ProgressBar from './ProgressBar';
import NavigationDots from './NavigationDots';
import { IMAGES_URL } from '@/constants';

const InteractiveComponent: React.FC<{ attributes: any }> = ({ attributes }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const circlesNosotros = attributes.Circles_Nosotros || [];
  const titles = circlesNosotros.map((circle: any) => circle.title);
  const texts = circlesNosotros.map((circle: any) => circle.text);
  const images = circlesNosotros.map((circle: any) => IMAGES_URL + circle.carousel_images.data[0].attributes.url);
  const progressBarWidth = `${(currentIndex + 1) / titles.length * 100}%`;
  const imageSource = images[currentIndex]; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative flex flex-col items-center min-h-fit bg-black">
      <Circles value={titles[currentIndex]} image={imageSource} />
      <div className="relative flex flex-col items-center mt-72 w-full">
        <NavigationDots currentIndex={currentIndex} values={titles} handleDotClick={handleDotClick} />
        <div className="text-left text-white mt-8 w-full text-lg h-auto">
          {texts[currentIndex]}
        </div>
        <ProgressBar progressBarWidth={progressBarWidth} />
      </div>
    </div>
  );
};

export default InteractiveComponent;













