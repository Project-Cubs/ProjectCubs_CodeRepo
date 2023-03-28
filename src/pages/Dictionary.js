import React from "react";
import { Bookmark } from "../components/Bookmark/Bookmark";
import { Navbar } from "../components/Navbar/Navbar";

export const Dictionary = function () {

  return (
    <div className="App">
      <Navbar />
      <main>
        <h1>Bookmark</h1>
        <Bookmark />
      </main>
    </div>
  );
};
