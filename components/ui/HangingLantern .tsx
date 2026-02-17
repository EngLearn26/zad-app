const HangingLantern = ({ className, style }) => {
  return (
    <>
      <style>{`
        @keyframes swing {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        .lantern-swing {
          animation: swing 3s ease-in-out infinite;
          transform-origin: top center;
        }
      `}</style>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 200"
        className={`absolute top-20 z-10 pointer-events-none drop-shadow-md lantern-swing ${className}`}
        style={{ height: "120px", ...style }}
      >
        <line
          x1="50" y1="0" x2="50" y2="40"
          stroke="currentColor"
          strokeWidth="2"
          className="text-amber-700 dark:text-amber-500"
        />
        <circle
          cx="50" cy="40" r="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-amber-600 dark:text-amber-400"
        />
        <g
          className="text-amber-500 dark:text-amber-300"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"
          style={{ transform: 'scale(0.8)', transformOrigin: '50px 45px' }}
        >
          <path d="M30,60 Q50,35 70,60 L65,70 L35,70 Z" />
          <rect x="35" y="70" width="30" height="50" rx="2" fillOpacity="0.7" />
          <line x1="45" y1="70" x2="45" y2="120" strokeWidth="0.5" />
          <line x1="55" y1="70" x2="55" y2="120" strokeWidth="0.5" />
          <path d="M30,120 L70,120 L60,140 L40,140 Z" />
          <path d="M40,140 L60,140 L50,155 Z" />
        </g>
      </svg>
    </>
  );
};

export default HangingLantern;