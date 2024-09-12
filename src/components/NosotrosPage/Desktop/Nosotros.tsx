import { useEffect } from 'react';
import MainNosotros from './ScreenNosotros';
import CardComponent from './cardComponent';
import JobCard from './JobCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IMAGES_URL } from '@/constants';



const NosotrosPage: React.FC<{ attributes: any }> = ({attributes }) => {

  const valuesCards = attributes.contenido.filter(
    (item: any) => item.__typename === "ComponentComponentesValuesCards"
  );
  const valueJobCards = attributes.contenido.filter(
    (item: any) => item.__typename === "ComponentComponentesJobCard"
  );

  const jobCard = valueJobCards[0];


  const extraCards = valuesCards.slice(1).map((card: any) => ({
    title: card.Title,
    text: card.Description,
    imageUrl: IMAGES_URL+card.Image.data.attributes.url,
    imageFirst: card.Image_Orientation,
  }));

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out',
      once: false,
    });

    const sections = document.querySelectorAll('.fade-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
          } else {
            entry.target.classList.remove('aos-animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <MainNosotros attributes={attributes}/>
      <div className="bg-black relative w-full p-6 space-y-4">
        {extraCards.map((card, index) => (
          <div data-aos="fade-right" key={index} className="fade-section">
            <CardComponent
              title={card.title}
              text={card.text}
              imageUrl={card.imageUrl}
              imageFirst={card.imageFirst}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center mb-8 mt-16 px-36 fade-section" data-aos="fade-right">
        <div className="w-[10px] h-[35px] bg-gradient-to-b from-azulGradiente to-verdeGradiente  mb-8"></div>
        <div>
          <h2 className="text-white text-[50px] font-bold mb-8 pl-12">{jobCard.Title}</h2>
        </div>
      </div>
      <div className="fade-section" data-aos="fade-right">
        <JobCard 
          Description={jobCard.Description }
          image={IMAGES_URL+jobCard.Image.data.attributes.url}
          email={jobCard.email_name}
          emailIcon={IMAGES_URL+jobCard.Icon.data.attributes.url}
        />
      </div>
    </div>
  );
};

export default NosotrosPage;










