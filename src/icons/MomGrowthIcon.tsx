interface MomGrowthIconProps {
  className?: string;
}

export const MomGrowthIcon = ({ className = "w-[24px] h-[10px]" }: MomGrowthIconProps) => {
  return (
    <svg 
      width="32" 
      height="10" 
      viewBox="14 5 32 10" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Left dash connecting to circle */}
      <line x1="15" y1="10" x2="26" y2="10" stroke="#B91C1C" strokeWidth="2"/>
      
      {/* Right dash connecting to circle */}
      <line x1="34" y1="10" x2="45" y2="10" stroke="#B91C1C" strokeWidth="2"/>
      
      {/* Circle marker in the center */}
      <circle cx="30" cy="10" r="4" fill="none" stroke="#B91C1C" strokeWidth="2"/>
    </svg>
  );
};