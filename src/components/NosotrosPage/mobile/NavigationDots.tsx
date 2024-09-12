
const NavigationDots: React.FC<{ currentIndex: number, values: string[], handleDotClick: (index: number) => void }> = ({ currentIndex, values, handleDotClick }) => {
  return (
    <div className="flex justify-center mt-4 w-30 h-3">
      {values.map((_, index) => (
        <div
          key={index}
          onClick={() => handleDotClick(index)}
          className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
            currentIndex === index ? 'border-2 border-verdeGradiente bg-transparent' : 'bg-verdeGradiente'
          }`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;



