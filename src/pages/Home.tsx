import React from "react";
import { HomeCard} from "../components/home/HomeCard";
import { About } from "../components/home/About";

function Home(): JSX.Element {
  return (
    <div className="p-[1rem] flex flex-col">
      <HomeCard />
      <About />
    </div>
  );
}

export { Home };