import React from "react";
import { HomeCard} from "../components/home/HomeCard";
import { About } from "../components/home/About";

function Home(): JSX.Element {
  return (
    <div className="p-[1rem] flex flex-col bg-auto bg-[url('../assets/images/lines_modified_image.png')]">
      <HomeCard />
      <About />
    </div>
  );
}

export { Home };