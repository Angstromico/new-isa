
import { IMAGES_URL } from '@/constants';

const ServiceBanner: React.FC<{ pageInfo: any }> = ({ pageInfo }) => {
  const { attributes } = pageInfo;

  const images = attributes.imagen.data;

  if (!images || images.length < 3) {
    return null; 
  }

  return (
    <div className="relative flex mb-[30px] mt-[80px] items-center justify-center bg-black md:mt-[-30px]">
      <div className="relative ml-[20px] mr-[20px] md:ml-[190px] md:mr-[190px]">

        <img src={IMAGES_URL + images[0].attributes.url} alt="Marco" className="w-full h-full object-cover" />
        
 
        <div className="absolute top-[-50px] left-[27px] w-[158px] h-[155px] md:top-[-250px] md:left-[110px] md:w-[750px] md:h-[750px]">
          <img src={IMAGES_URL + images[1].attributes.url} alt="Imagen 1" className="w-full h-full object-cover rounded-full" />
        </div>
        

        <div className="absolute top-[34px] left-[226px] w-[94px] h-[94px] md:top-[162px] md:left-[1040px] md:w-[430px] md:h-[430px]">
          <img src={IMAGES_URL + images[2].attributes.url} alt="Imagen 2" className="w-full h-full object-cover rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
