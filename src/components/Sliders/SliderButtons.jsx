import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";

const TestSlider = ({ children }) => {
  const slider = useRef();

  const onClickLeft = () => {
    slider.current.scrollLeft -= 300;
  };

  const onClickRight = () => {
    slider.current.scrollLeft += 300;
  };

  return (
    <div className="flex items-center space-x-4 w-full">
      <ChevronLeftIcon
        onClick={onClickLeft}
        className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-600 hover:scale-125"
      />
      <div
        ref={slider}
        className="w-full pl-10 pt-10 pb-16 flex space-x-8 snap-x overflow-x-scroll scroll-smooth scrollbar-hide"
      >
        {children}
      </div>
      <ChevronRightIcon
        onClick={onClickRight}
        className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-600 hover:scale-125"
      />
    </div>
  );
};

export default TestSlider;
