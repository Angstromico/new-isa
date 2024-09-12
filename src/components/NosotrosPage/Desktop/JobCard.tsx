
interface JobCardProps {
  Description: string;
  image: string;
  email: string;
  emailIcon: string;
}

const JobCard: React.FC<JobCardProps> = ({ Description, image, email, emailIcon }) => {
  return (
    <div className="w-11/12 mt-8 mx-auto my-8 bg-black rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden pr-12 pl-12">
      <div className="md:w-1/2 h-64 md:h-auto pl-6">
        <img
          src={image} 
          alt="Buildings"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="md:w-1/2 p-8 flex flex-col items-center justify-center bg-[#1E1E1E] text-white rounded-lg">
        <h2 className="text-[50px] font-bold mb-4">{Description}</h2>
        <div className="flex items-center">
          <img
            src={emailIcon} 
            alt="Email Icon"
            className="w-[38px] h-[38px] mr-2"
          />
          <a href={`mailto:${email}`} className="text-[30] underline">
            {email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

