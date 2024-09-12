
interface CardComponentProps {
  title: string;
  text: string;
  imageUrl: string;
  imageFirst: boolean;
}

const CardComponent: React.FC<CardComponentProps> = ({ title, text, imageUrl, imageFirst }) => {
  return (
    <div className="relative bg-transparent text-white rounded-lg overflow-hidden w-11/12  max mx-auto flex flex-row mt-4 pl-12 pr-12">
      {imageFirst ? (
        <>
          <div className="w-full  ">
            <img src={imageUrl} alt={title} className="w-full h-[240px] object-cover rounded-bl-[40px] rounded-tr-[40px] " />
          </div>
          <div className="w-full flex flex-col  pl-12 ">
            <h2 className="text-[50px] font-bold mb-2">{title}</h2>
            <hr className="w-[176px] h-[5px] border-0 bg-gradient-to-r from-azulGradiente to-verdeGradiente my-4 opacity-100" />
            <p className="text-[28px] text-left mt-8">{text}</p>
          </div>
        </>
      ) : (
        <>
          <div className="w-full flex flex-col  pr-12  ">
            <h2 className="text-[50px] font-bold mb-2 ">{title}</h2>
            <hr className="w-[176px] h-[5px] border-0 bg-gradient-to-r from-azulGradiente to-verdeGradiente  opacity-100" />
            <p className="text-[28px] text-left mt-8">{text}</p>
          </div>
          <div className="w-full ">
            <img src={imageUrl} alt={title} className="w-full h-[240px] object-cover rounded-bl-[40px] rounded-tr-[40px] " />
          </div>
        </>
      )}
    </div>
  );
};

export default CardComponent;

