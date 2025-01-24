function Logo() {
    return (
    <div className="flex items-center gap-4 sm:gap-6">
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#003366] to-[#002244] p-[3px] shadow-lg">
          <div className="h-full w-full rounded-full bg-white flex items-center justify-center overflow-hidden">
            <div className="relative flex items-center justify-center w-full h-full">
              <div className="absolute w-14 h-14 border-[4px] border-[#003366] rounded-full opacity-90"></div>
              <div className="absolute w-14 h-14 border-[4px] border-[#003366] rounded-full transform rotate-45 opacity-80"></div>
              <div className="absolute w-14 h-14 border-[4px] border-[#002244] rounded-full transform -rotate-45 opacity-70"></div>
              <div className="relative z-10 bg-white rounded-full p-2">
                <span className="text-base font-black text-[#003366] tracking-wider">GSK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xs sm:text-sm font-serif font-bold text-[#003366] leading-tight tracking-tight">
          Gastroenterology Society
        </span>
        <span className="text-xs sm:text-sm font-serif font-bold text-[#003366] leading-tight tracking-tight">
          of Kenya
        </span>
        <span className="text-[8px] sm:text-[10px] font-serif text-[#003366]/80 mt-0.5">
          Advancing Digestive Health Care
        </span>
      </div>
    </div>
  );
}

export default Logo;