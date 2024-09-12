
interface CardProps {
  title: string;
  imageUrl: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, text }) => {
  return (
    <div className="bg-black  shadow-lg overflow-hidden w-full h-full items-center ">
      <img src={imageUrl} alt={title} className=" w-full object-cover rounded-bl-3xl rounded-tr-3xl h-48 " />
        <h2 className=" mt-6 text-white text-[30px] font-bold">{title}</h2>
        <div className="w-[177px] h-[5px] bg-gradient-to-r from-azulGradiente to-verdeGradiente mt-4 mb-6"></div>
        <p className="text-white text-[20px]">{text}</p>
    </div>
  );
};

export default Card;


