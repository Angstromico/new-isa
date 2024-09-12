import { IMAGES_URL } from '@/constants';
import { useMediaQuery } from 'react-responsive';

interface MainCardProps {
  title: string;
  info: string;
  icon: string;
  shadowLevel: number;
}

const MainCard: React.FC<MainCardProps> = ({ title, info, icon, shadowLevel }) => {
  const averageLetterWidthDesktop = 17; 
  const averageLetterWidthMobile = 15; 


  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });


  const titleWidth = isDesktop 
    ? title.length * averageLetterWidthDesktop 
    : title.length * averageLetterWidthMobile;

  const backGroundColor = [
    'bg-[#1C7E79]',
    'bg-[#176F69]',
    'bg-[#0D5D58]',
  ];

  const infoLines = info.split('\n');

  return (
    <div className={`p-6 ${backGroundColor[shadowLevel]} h-[361px] w-full rounded-bl-[20px] rounded-tr-[20px] md:h-[480px] md:w-[480px] md:rounded-bl-[40px] md:rounded-tr-[40px]`}>
      <img src={IMAGES_URL + icon} alt={title} className="mb-4 h-[75px] md:h-[121px] object-contain" />
      <h3 className={`text-white font-bold ${isDesktop ? 'text-[30px]' : 'text-[24px]'} mb-2 inline-block`}>
        {title}
      </h3>
      <div 
        className="h-[4px] mb-4 bg-gradient-to-r from-azulGradiente to-verdeGradiente" 
        style={{ width: `${titleWidth}px` }}
      ></div>
      <ul className="text-white text-base text-[28px] space-y-2">
        {infoLines.map((line, index) => (
          <li key={index} className="list-disc list-inside">
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainCard;
