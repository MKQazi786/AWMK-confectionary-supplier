import React from "react";
import Logos from "../company-logos/logo.js";
import CookaniaProducts from "../company-logos/cookania-products/cookania.js";
import ProCompo from "../components/P-compo.jsx";
import { Link } from "react-router-dom";

function Cookania() {
  return (
    <div>
      <div className="justify-items-center p-4 mb-8">
        <Link to="../products">
          <img className="justify-self-center" src={Logos.Cookania} alt="" />
        </Link>
        <div className="text-xl">
          <p className="text-3xl font-bold">These are products of Cookania</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-16 justify-center items-center mx-8">
        <ProCompo h2="Cookania Khaskhati" src={CookaniaProducts.KhasKhatai} perPiece={10} perboxCut={170} perBoxHole={160} perBoxRetail={180} />
        <ProCompo h2="Cookania Zeera" src={CookaniaProducts.Zeera} perPiece={10} perboxCut={170} perBoxHole={160} perBoxRetail={180} />
        <ProCompo h2="Cookania Teatime Chocolate" src={CookaniaProducts.TeatimeChoco10} perPiece={10} perboxCut={170} perBoxHole={160} perBoxRetail={180} />
        <ProCompo h2="Cookania Teatime Plain Rs:40" src={CookaniaProducts.TeatimeSada40} perPiece={40} perboxCut={225} perBoxHole={220} perBoxRetail={240} />
      </div>
    </div>
  );
}

export default Cookania;
