import React from "react";

import AstronautImg from "../../assets/astronaut.svg";
import NickImg from "../../assets/nick.png";

const Home = () => {
  const frontendStacks = [
    {
      name: "react",
      icon: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
    },
    { name: "redux", icon: "https://cdn.worldvectorlogo.com/logos/redux.svg" },
    {
      name: "javascript",
      icon: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
    },
    { name: "html", icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    { name: "css", icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    {
      name: "boostrap",
      icon: "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg",
    },
    {
      name: "tailwindcss",
      icon: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    },
  ];

  const backendStacks = [
    {
      name: "nodejs",
      icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    },
    {
      name: "express",
      icon: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
    },
    { name: "sequelize", icon: "https://sequelize.org/img/logo.svg" },
    { name: "jwt", icon: "	https://cdn.worldvectorlogo.com/logos/jwt-3.svg" },
    { name: "java", icon: "	https://cdn.worldvectorlogo.com/logos/java-14.svg" },
    {
      name: "spring",
      icon: "https://cdn.worldvectorlogo.com/logos/spring-3.svg",
    },
  ];

  const othersStacks = [
    { name: "git", icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
    {
      name: "github",
      icon: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
    },
    {
      name: "docker",
      icon: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
    },
    {
      name: "figma",
      icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    },
    {
      name: "linux",
      icon: "https://www.vectorlogo.zone/logos/linux/linux-icon.svg",
    },
  ];

  return (
    <div>
      <section className="container mx-auto px-4 lg:px-14 xl:px-44">
        <div className="grid grid-cols-2 gap-7">
          <div className="col-span-2 md:col-span-1 flex flex-col justify-center gap-1">
            <p className="text-2xl font-semibold">Hola, Yo soy Nick Macedo</p>
            <p className="text-3xl font-bold">Desarrollador de Software</p>
            <p className="text-3xl font-bold">
              Ingeniero de Sistemas e Informatica
            </p>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              libero voluptatum fugiat velit ratione quaerat blanditiis! Nulla
              quaerat suscipit dolore!
            </p>
          </div>
          <div className="hidden md:-mr-10 md:col-span-1 md:flex justify-center">
            <img className="w-[490px] contrast-[1.2]" src={AstronautImg} />
          </div>
        </div>
      </section>
      <section className="bg-gray-200 flex flex-wrap justify-center px-8 py-7">
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center">
          <p className="text-2xl font-semibold">Sobre mi:</p>
          <p className="text-xl font-semibold">Desarrollador de Software</p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            libero voluptatum fugiat velit ratione quaerat blanditiis! Nulla
            quaerat suscipit dolore!
          </p>
        </div>
        <div className="w-full max-w-[300px] md:w-1/3 ">
          <img className="rounded-2xl contrast-[1.15]" src={NickImg} />
        </div>
      </section>
      <section className="flex flex-col items-center px-8 py-7 gap-4">
        <p className="text-2xl font-semibold">Stack de Tecnologias</p>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="rounded-lg bg-gray-200 p-6">
            <p className="text-xl font-semibold text-center mb-4">FrontEnd</p>
            <div className="grid grid-cols-4 gap-6 items-center">
              {frontendStacks.map((value) => {
                return (
                  <img
                    className="w-14"
                    key={value.name}
                    src={value.icon}
                    alt={value.name}
                  />
                );
              })}
            </div>
          </div>
          <div className="rounded-lg bg-gray-200 p-6">
            <p className="text-xl font-semibold text-center mb-4">BackEnd</p>
            <div className="grid grid-cols-4 gap-6 items-center">
              {backendStacks.map((value) => {
                return (
                  <img
                    className="w-14"
                    key={value.name}
                    src={value.icon}
                    alt={value.name}
                  />
                );
              })}
            </div>
          </div>
          <div className="rounded-lg bg-gray-200 p-6">
            <p className="text-xl font-semibold text-center mb-4">Otros</p>
            <div className="grid grid-cols-4 gap-6 items-center">
              {othersStacks.map((value) => {
                return (
                  <img
                    className="w-14 grayscale hover:grayscale-0"
                    key={value.name}
                    src={value.icon}
                    alt={value.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center px-8 py-7 gap-4">
        <p className="text-2xl font-semibold">Experiencia</p>
        <div className="flex flex-wrap justify-center gap-10">
          {[1, 2, 3].map(() => {
            return (
              <div className="p-6 max-w-sm rounded-lg hover:bg-gray-300">
                <p className="text-xl">
                  Analista de Datos |{" "}
                  <span className="underline font-semibold">
                    JS Consultores & Contratistas
                  </span>
                </p>
                <p>Setiembre 2022 - Diciembre 2022</p>
                <p className="text-justify text-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis libero voluptatum fugiat velit ratione quaerat
                  blanditiis! Nulla quaerat suscipit dolore!
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <p className="text-2xl font-semibold">Experiencia</p>
      </section>
    </div>
  );
};

export default Home;
