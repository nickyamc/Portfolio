import React from "react";

const WorkCard = (props) => {
  const { job, company, time, description, url, image } = props;
  return (
    <div className="rounded-br-[50px] rounded-bl-lg text-left rounded-t-lg bg-white p-6 w-72 sm:w-80 md:w-96 font-open drop-shadow-md group/graf hover:drop-shadow-2xl relative overflow-hidden">
      <p className="text-lg font-semibold font-neo text-[#4f65f1]">{job}</p>
      <p className="text-sm text-[#8389aa] font-normal -mt-0.5">{time}</p>
      <p className="mt-5 line-clamp-4 text-sm md:text-base">{description}</p>
      <div className={`flex items-center gap-2 mt-7`}>
        <img className="w-6 h-6 rounded-full" src={image} alt={company} />
        {url ? (
          <a className="text-sm text-[#8389aa]" href={url}>
            @{company}
          </a>
        ) : (
          <p className="text-sm text-[#8389aa]">@{company}</p>
        )}
      </div>
      <div className="transition ease-in-out delay-150 duration-500 group-hover/graf:translate-x-5 rounded-full w-12 h-4 bg-[#ff5c88] absolute top-7 -left-12 rotate-12"></div>
      <div className="transition ease-in-out delay-150 duration-500 group-hover/graf:translate-y-5 rounded-full w-12 h-4 bg-[#4f65f1] absolute -top-7 left-4 -rotate-45"></div>
      <div className="transition ease-in-out delay-150 duration-500 group-hover/graf:-translate-y-6 rounded-full w-12 h-4 bg-[#51e8bf] absolute -bottom-8 right-4 rotate-[60deg]"></div>
      <div className="transition ease-in-out delay-150 duration-500 group-hover/graf:-translate-x-7 rounded-full w-12 h-4 bg-[#ffc15d] absolute bottom-9 -right-12 -rotate-12"></div>
    </div>
  );
};

export default WorkCard;
