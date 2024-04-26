import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import Header from "./Component/Header";
import { HomePage } from "./Pages/HomePage";


function App() {

  return (
    <Suspense fallback={"Loading"} >
      <Header/>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
      </Routes>
    </Suspense>
  )
}

export default App
