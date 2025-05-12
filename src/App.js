import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Layout from "./components/Layout";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout></Layout>}>
               <Route index element={<Home />} />
               <Route path="blog" element={<Blog />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
