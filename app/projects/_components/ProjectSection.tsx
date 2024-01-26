import React from "react";
import ProjectCard from "./ProjectCard";
import Button from "@/components/Button";

const ProjectSection = () => {
  return (
    <section className="mt-10 h-full w-full flex flex-col items-center">
      <div className=" h-full  md:space-y-11 ">
        <div className="md:h-96 h-[30rem] max-h-[30rem]  md:flex ">
          <ProjectCard>Spotify Clone</ProjectCard>
        </div>
        <div className="md:h-96   h-[30rem] max-h-[30rem]   md:flex">
          <ProjectCard>Netflix Clone</ProjectCard>
        </div>
        <div className="md:h-96   h-[30rem] max-h-[30rem]   md:flex">
          <ProjectCard>Keeper</ProjectCard>
        </div>
        <div className="md:h-96   h-[30rem] max-h-[30rem]   md:flex">
          <ProjectCard>Foodle</ProjectCard>
        </div>
        {/* <div className="h-96"><ProjectCard>Foodle</ProjectCard></div> */}
      </div>
      <Button
        label="See all"
        linkField="https://github.com/Arman6117/"
        className="w-[30rem] text-xl"
      />
    </section>
  );
};

export default ProjectSection;
