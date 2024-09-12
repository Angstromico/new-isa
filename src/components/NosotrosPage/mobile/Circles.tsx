
interface CirclesProps {
  value: string;
  image: string;
}

const Circles: React.FC<CirclesProps> = ({ value, image }) => {
  return (
    <div className="absolute inset-x-0 top-0 flex flex-col items-center z-0" style={{ top: -100 }}>
      <svg width="100%" height="400" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%">
            <stop offset="0%" style={{ stopColor: '#0F7D87', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#86B22C', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="80" fill="white" stroke="url(#gradient)" strokeWidth="10" />
        <image x="88" y="100" width="30" height="30" dy="7" href={image} />
        <text x="100" y="140" textAnchor="middle" fill="black" fontSize="16" dy="5">
          {value}
        </text>
        <circle cx="100" cy="100" r="90" fill="transparent" stroke="url(#gradient)" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default Circles;



