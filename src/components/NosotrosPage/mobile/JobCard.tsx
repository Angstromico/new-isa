
interface JobCardProps {
  imageUrl: string;
  subtitle: string;
  email: string;
  emailIcon: string;
}

const JobCard: React.FC<JobCardProps> = ({ imageUrl, subtitle, email, emailIcon }) => {
  return (
    <div className="shadow-lg overflow-hidden rounded-tr-3xl rounded-bl-2xl h-80 bg-[#1E1E1E]">
      <img src={imageUrl} alt={subtitle} className="w-full h-36 object-cover rounded-tr-3xl rounded-bl-2xl "  />
      <div className="p-4 text-center ">
        <h3 className="mt-4 text-white text-2xl font-semibold">{subtitle}</h3>
        <div className="flex items-center justify-center mt-4">
          <img src={emailIcon} alt="Email icon" className="mr-4 h-[32px] w-[32px]  " />
          <a href={`mailto:${email}`} className="text-white">{email}</a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;




