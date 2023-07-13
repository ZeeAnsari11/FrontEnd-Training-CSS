import "./styles.css";
import React from "react";
export default function App() {
  return (
    <div className="bg-white text-black flex">
      <div className="text-left flex-[0.5] p-5 space-y-5">
        <h1 className="font-bold ">
          Interview Prep Cources and practical for the students
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="flex justify-center  items-center bg-blue-500 flex-[0.5]">
        <img
          src="https://w7.pngwing.com/pngs/925/348/png-transparent-logo-online-and-offline-e-online-design-text-logo-online-and-offline.png"
          alt="LOgo"
          className=""
        />
      </div>
    </div>
  );
}
