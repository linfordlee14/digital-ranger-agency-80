const LinfyLogo = ({ className = '', iconOnly = false }: { className?: string; iconOnly?: boolean }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Shield + Circuit Icon */}
      <svg
        width="40"
        height="44"
        viewBox="0 0 40 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Outer shield shape - left half with notch */}
        <path
          d="M20 2C12 2 6 6 3 10C1.5 12.5 1 15 1 18C1 24 3 29 7 33C11 37 16 40 20 42C24 40 29 37 33 33C37 29 39 24 39 18C39 15 38.5 12.5 37 10C34 6 28 2 20 2Z"
          stroke="#00F0FF"
          strokeWidth="2.2"
          fill="none"
        />
        {/* Shield notch/cutout at top-right */}
        <path
          d="M24 2C24 2 26 6 26 10C26 14 24 16 20 16"
          stroke="#00F0FF"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Circuit line - vertical main trunk */}
        <path
          d="M18 12V20V30"
          stroke="#00F0FF"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Circuit branch - right */}
        <path
          d="M18 20H26"
          stroke="#00F0FF"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Circuit branch - left */}
        <path
          d="M18 26H12"
          stroke="#00F0FF"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Circuit node dots */}
        <circle cx="18" cy="12" r="2.5" fill="#00F0FF" />
        <circle cx="26" cy="20" r="2.5" fill="#00F0FF" />
        <circle cx="12" cy="26" r="2.5" fill="#00F0FF" />
        <circle cx="18" cy="30" r="2" fill="#00F0FF" />
      </svg>

      {/* Text */}
      {!iconOnly && (
        <div className="flex flex-col leading-tight">
          <span className="text-white font-semibold text-lg tracking-tight">
            Linfy
          </span>
          <span className="text-gray-400 text-[10px] uppercase tracking-widest">
            Tech Solutions
          </span>
        </div>
      )}
    </div>
  );
};

export default LinfyLogo;
