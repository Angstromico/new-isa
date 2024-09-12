import MainCard from './MainCard';

interface MainCardsGridProps {
  cards: { title: string; info: string; icon: string }[];
}

const MainCardsGrid: React.FC<MainCardsGridProps> = ({ cards }) => {
  const groupedCards = [];
  for (let i = 0; i < cards.length; i += 3) {
    groupedCards.push(cards.slice(i, i + 3));
  }

  return (
    <div className="mt-[10px] mb-[15px] pr-[15px] pl-[10px] md:mt-[150px] md:mb-[150px] md:pl-[155px] md:pr-[155px]">
      {groupedCards.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className="flex flex-col items-center mb-[50px] md:flex-row md:justify-between md:items-start"
        >
          {group.map((card, cardIndex) => (
            <div
              key={cardIndex}
              className={`w-full mb-[20px] md:mb-0 md:w-1/3 ${cardIndex === 0 ? '' : 'md:ml-[50px]'}`}
            >
              <MainCard
                title={card.title}
                info={card.info}
                icon={card.icon}
                shadowLevel={cardIndex}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MainCardsGrid;
