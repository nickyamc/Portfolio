import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";

const HorizontalSlider = ({ children }) => {
  const slider = useRef();

  const onClickLeft = () => {
    slider.current.scrollLeft -= 500;
  };

  const onClickRight = () => {
    slider.current.scrollLeft += 500;
  };

  return (
    <div className="min-w-[300px] max-w-7xl flex items-center">
      <ChevronLeftIcon
        onClick={onClickLeft}
        className="w-6 h-6 opacity-50 cursor-pointer hover:opacity-100"
        size={40}
      />
      <div
        ref={slider}
        className="w-full h-full py-3 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {children}
      </div>
      <ChevronRightIcon
        onClick={onClickRight}
        className="w-6 h-6 opacity-50 cursor-pointer hover:opacity-100"
        size={40}
      />
    </div>
  );
};

export default HorizontalSlider;
