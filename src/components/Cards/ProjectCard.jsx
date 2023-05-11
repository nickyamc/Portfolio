import GithubIcon from "../../assets/svg/github-icon.svg";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const ProjectCard = (props) => {
  const { name, description, tecnologies, deploy, github, img } = props;
  return (
    <div className="w-[420px] overflow-hidden bg-white rounded-xl text-center drop-shadow-md group/backg hover:drop-shadow-2xl">
      <div className="overflow-hidden h-40">
        <img className="w-full" src={img} />
      </div>
      <div className="text-left font-open p-4">
        <p className="text-lg font-semibold font-neo text-[#4f65f1]">{name}</p>
        <p className="mt-2">{description}</p>
        <p className="mt-2 text-sm text-[#7889f4]">{tecnologies.join(" - ")}</p>
        <div className="mt-5 flex items-center">
          {github ? (
            <a href={github}>
              <img src={GithubIcon} className="w-6 h-6 hover:brightness-75" />
            </a>
          ) : null}
          {deploy ? (
            <a href={deploy}>
              <GlobeAltIcon className="w-6 h-6 text-[#98a2b8] hover:brightness-75" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
