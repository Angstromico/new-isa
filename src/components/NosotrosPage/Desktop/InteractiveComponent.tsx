import { useState, useEffect, useRef } from 'react';
import anime from 'animejs';
import { IMAGES_URL } from '@/constants';

const InteractiveComponent: React.FC<{ attributes: any }> = ({ attributes }) => {
  const circlesNosotros = attributes.Circles_Nosotros || [];
  const [centerTitle, setCenterTitle] = useState<string | null>(null);
  const [centerText, setCenterText] = useState<string[] | null>(null); 
  const [centerImage, setCenterImage] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const titles = circlesNosotros.map((circle: any) => circle.title).reverse();
  const texts = circlesNosotros.map((circle: any) => circle.text).reverse();
  const images = circlesNosotros.map((circle: any) => IMAGES_URL + circle.carousel_images.data[0].attributes.url).reverse();
  const animationRef = useRef<anime.AnimeInstance | null>(null);

  useEffect(() => {
    const animation = anime({
      targets: '.animated-circle',
      r: [
        { value: 23, duration: 1500 },
        { value: 15, duration: 1500 }
      ],
      strokeWidth: [
        { value: 3, duration: 1500 },
        { value: 6, duration: 1500 }
      ],
      easing: 'easeInOutQuad',
      loop: true,
      autoplay: true
    });

    animationRef.current = animation;
  }, []);

  const handleMouseEnter = (index: number) => {
    setCenterTitle(titles[index]);
    setCenterText(splitTextToLines(texts[index], 50)); 
    setCenterImage(images[index]); 
    setHoveredIndex(index);
    if (animationRef.current) {
      animationRef.current.pause();
      const circles = document.querySelectorAll('.animated-circle');
      circles.forEach((circle, i) => {
        if (i !== index) {
          circle.setAttribute('r', '15');
          circle.setAttribute('stroke-width', '6');
        }
      });
    }
  };

  const handleMouseLeave = () => {
    setCenterTitle(null);
    setCenterText(null);
    setCenterImage(null); 
    setHoveredIndex(null);
    if (animationRef.current) {
      animationRef.current.play();
    }
  };

  const smallCircles = titles.map((title, index) => {
    const angle = (index * 360) / 10;
    const radius = 420;
    const x = 533.685 + radius * Math.cos((angle * Math.PI) / 180);
    const y = 533.685 + radius * Math.sin((angle * Math.PI) / 180);

    return (
      <circle
        key={index}
        cx={x}
        cy={y}
        r={hoveredIndex === index ? 23 : 15}
        fill="url(#gradient)"
        stroke="white"
        strokeWidth={hoveredIndex === index ? 3 : 6}
        className={`cursor-pointer ${hoveredIndex !== index ? 'animated-circle' : ''}`}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      />
    );
  });

  const splitTextToLines = (text: string, maxLineLength: number): string[] => {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
      if ((currentLine + word).length > maxLineLength) {
        lines.push(currentLine.trim());
        currentLine = word + ' ';
      } else {
        currentLine += word + ' ';
      }
    }
    lines.push(currentLine.trim());
    return lines;
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-gradient-to-t from-black to-transparent">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1067.37 1067.37"
        className="absolute top-[-300px] md:top-[-260px] "
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%">
            <stop offset="0%" style={{ stopColor: '#0F7D87', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#86B22C', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        <circle cx="533.685" cy="533.685" r="340" fill="white" stroke="url(#gradient)" strokeWidth="60" />
        {centerTitle && centerText ? (
          <>
            <g transform="translate(533.685, 533.685)">
              <image href={centerImage} x="-180" y="-80" width="120" height="120" />
              <text x="50" y="10" textAnchor="middle" fill="black" fontSize="45">
                {centerTitle}
              </text>
            </g>
            {centerText.map((line, index) => (
              <text key={index} x="533.685" y={610 + index * 20} textAnchor="middle" fill="black" fontSize="20">
                {line}
              </text>
            ))}
          </>
        ) : (
          <image
            href="/isa.svg"
            width="169.62"
            height="150.05"
            x="448.74"
            y="540.68"
          />
        )}

        <circle cx="533.685" cy="533.685" r="390" fill="transparent" stroke="url(#gradient)" strokeWidth="2" />
   
        <circle cx="533.685" cy="533.685" r="420" fill="transparent" stroke="url(#gradient)" strokeWidth="6" />
     
        {smallCircles}
      </svg>
    </div>
  );
};

export default InteractiveComponent;






