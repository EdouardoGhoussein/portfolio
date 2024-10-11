import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technologie) => (
        <div className="w-28 h-28 relative group" key={technologie.name}>
          {/* Tooltip text */}
          <span className="whitespace-nowrap absolute bottom-28 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 w-auto">
            {technologie.name}
          </span>
          {/* 3D BallCanvas object */}
          <BallCanvas icon={technologie.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
