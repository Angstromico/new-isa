import InteractiveComponent from './InteractiveComponentMobile';
import Card from './cardMobile';
import JobCard from './JobCard';
import { IMAGES_URL } from '@/constants';

const NosotrosMobile: React.FC<{ attributes: any }> = ({attributes }) =>  {

  const cardsValue = attributes.contenido.filter(
    (item: any) => item.__typename === "ComponentComponentesValuesCards"
  );
  const jobCardValues = attributes.contenido.filter(
    (item: any) => item.__typename === "ComponentComponentesJobCard"
  );

  const jobCard = jobCardValues[0];



  const extraCards = cardsValue.slice(0).map((card: any) => ({
    title: card.Title,
    text: card.Description,
    imageUrl: IMAGES_URL+card.Image.data.attributes.url,
    imageFirst: card.Image_Orientation,
  }));

  return (
    <div className="p-4 space-y-8">
      <InteractiveComponent attributes={attributes} />
      <div className="space-y-4">
        {extraCards.map((card, index) => (
          <Card key={index} title={card.title} imageUrl={card.imageUrl} text={card.text} />
        ))}
      </div>
      <div className="flex items-center mb-4">
        <div className="w-[10px] h-[70px] bg-gradient-to-b from-azulGradiente to-verdeGradiente mr-4"></div>
        <div>
          <h2 className="text-white text-[30px] font-bold">TRABAJE CON</h2>
          <h2 className="text-white text-[30px] font-bold">NOSOTROS</h2>
        </div>
      </div>
      <JobCard
        imageUrl={IMAGES_URL+ jobCard.Image.data.attributes.url}
        subtitle={jobCard.Description}
        email={jobCard.email_name}
        emailIcon={IMAGES_URL+jobCard.Icon.data.attributes.url}
      />
    </div>
  );
};

export default NosotrosMobile;
