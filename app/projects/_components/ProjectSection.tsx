import React from "react";
import ProjectCard from "./ProjectCard";
import Button from "@/components/Button";

const ProjectSection = () => {
  return (
    <section className="mt-10 h-full flex flex-col items-center">
      <div className=" h-full  md:space-y-11 ">
        <div className="h-96   md:flex " ><ProjectCard>Spotify Clone</ProjectCard></div>
        <div className="h-96  md:flex"><ProjectCard>Netflix Clone</ProjectCard></div>
        <div className="h-96"><ProjectCard>Keeper</ProjectCard></div>
        <div className="h-96"><ProjectCard>Foodle</ProjectCard></div>
      </div>
      <Button label="See all" linkField="https://github.com/Arman6117/" className="w-[20rem]"/>
    </section>
  );
};

export default ProjectSection;
