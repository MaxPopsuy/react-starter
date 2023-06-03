import React from "react";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import { alert } from "@pnotify/core";
import { Routes, Route } from "react-router-dom";
import { routes } from "@config/router";

const App = () => {
  return (
    <>
      <Routes>
        {routes.map(({ Component, isPrivate, isPublicOnly, ...route }) => (
          <Route
            {...route}
            element={
              isPrivate ? (
                <PrivateRoute>
                  <Component socket={socket} />
                </PrivateRoute>
              ) : (
                <PublicRoute isPublicOnly={isPublicOnly}>
                  <Component socket={socket} />
                </PublicRoute>
              )
            }
          />
        ))}
      </Routes>
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
