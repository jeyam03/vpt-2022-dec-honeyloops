import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../components/Button";
import Inputfield from "../components/TextInput";
import { IoCloseOutline } from "react-icons/io5";

const Landing = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-purple-100">
      <nav className="bg-white flex items-center justify-between px-8 lg:px-[calc(100vw/12)] py-4">
        <div className="flex items-center space-x-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/207/207114.png"
            className="h-16"
          />
          <h1 className="text-black font-semibold text-2xl tracking-wider uppercase">BooksHub</h1>
        </div>
        <Inputfield className="w-1/2"/>
      </nav>
    </div>
  );
};

export default Landing;
