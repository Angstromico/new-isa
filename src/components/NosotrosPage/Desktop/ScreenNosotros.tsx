import InteractiveComponent from './InteractiveComponent';
import CardComponent from './cardComponent';
import { IMAGES_URL } from '@/constants';

const MainNosotros: React.FC<{attributes: any }> = ({attributes }) => {

  const cardsValue = attributes.contenido.filter(
    (item: any) => item.__typename === "ComponentComponentesValuesCards"
  );
  const mainCard = cardsValue[0];
  return (
    <div className="relative w-full min-h-screen">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="h-[300px] bg-black"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(/fondoclaro.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <InteractiveComponent attributes={attributes}/>
      </div>
  {/* Tarjetas */}
  <div className=" absolute bottom-0 w-full mt-11 p-6 space-y-4">
    <CardComponent
      title={mainCard.Title}
      text={mainCard.Description}
      imageUrl={IMAGES_URL+mainCard.Image.data.attributes.url}
      imageFirst={mainCard.Image_Orientation}
      />
      </div>
    </div>
  );
};


export default MainNosotros;