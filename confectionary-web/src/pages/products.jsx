import React from "react";
import Logos from "../company-logos/logo.js";
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div className="bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 p-4">
          Company Products
        </h1>
        <h2 className="text-3xl font-semibold text-gray-600 mb-4">
          Click the company Logo which company products you need.
        </h2>
      </div>

      <div id="products" className="pb-8">
        <div className="flex flex-wrap m-4 p-4 gap-8 justify-around items-center">
          <Link to="giggly">
            <img
              className="w-60 h-60 object-contain p-4 sm:p-0 cursor-pointer"
              src={Logos.Giggly}
              alt="Giggly"
            />
          </Link>

          <Link to="cookania">
            <img
              className="w-60 h-60 object-contain p-4 sm:p-0 cursor-pointer"
              src={Logos.Cookania}
              alt="Cookania"
            />
          </Link>

          <Link to="">
            <img
              className="w-60 h-60 object-contain p-4 sm:p-0 cursor-pointer"
              src={Logos.Bisconni}
              alt="Bisconni"
            />
          </Link>

          <Link to="">
            <img
              className="w-60 h-60 object-contain p-4 sm:p-0 cursor-pointer"
              src={Logos.Candyland}
              alt="Candyland"
            />
          </Link>

          <Link to="">
            <img
              className="w-60 h-60 object-contain p-4 sm:p-0 cursor-pointer"
              src={Logos.Dairymilk}
              alt="Dairymilk"
            />
          </Link>

          <Link to="">
            <img
              className="w-60 h-60 object-contain p-4 sm:p-0 cursor-pointer"
              src={Logos.Hilal}
              alt="Hilal"
            />
          </Link>

          <Link to="">
            <img
              className="w-60 h-60 object-contain p-4 sm:p-0 cursor-pointer"
              src={Logos.Innovative}
              alt="Innovative"
            />
          </Link>

          <Link to="">
            <img
              className="w-60 h-60 object-contain p-4 sm:p-0 cursor-pointer"
              src={Logos.Lu}
              alt="Lu"
            />
          </Link>

          <Link to="">
            <img
              className="w-60 h-60 object-contain p-4 sm:p-0 cursor-pointer"
              src={Logos.Lays}
              alt="lays"
            />
          </Link>

          <Link to="">
            <img
              className="w-60 h-60 object-contain p-4 sm:p-0 cursor-pointer"
              src={Logos.Slanty}
              alt="Slanty"
            />
          </Link>

          <Link to="">
            <img
              className="w-60 h-60 object-contain p-4  sm:p-0 cursor-pointer"
              src={Logos.Kurkure}
              alt="Kurkure"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Products;
