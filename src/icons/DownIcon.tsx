interface DownIconProps {
  className?: string;
  isOpen?: boolean;
}

export const DownIcon = ({ className = "w-[10px] h-[5px]", isOpen = true }: DownIconProps) => {
  return (
    <svg 
      width="10" 
      height="5" 
      viewBox="0 0 10 5" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-transform duration-200 ${isOpen ? '' : 'rotate-180'}`}
    >
      <path 
        d="M5.00043 4.65375L0.59668 0.25H9.40418L5.00043 4.65375Z" 
        fill="currentColor"
      />
    </svg>
  );
};