import React from "react";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import { alert } from "@pnotify/core";

const App = () => {
  return (
    <>
      <h1
        onClick={() => {
          alert("Happy hacking! :)");
        }}
      >
        Happy hacking ! :)
      </h1>
    </>
  );
};

export default App;
