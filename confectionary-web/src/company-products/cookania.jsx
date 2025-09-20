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
        <ProCompo h2="Cookania Milkabisk" src={CookaniaProducts.Milkabisk} perPiece={10} perboxCut={170} perBoxHole={160} perBoxRetail={180} />
        <ProCompo h2="Cookania Khaskhati Rs:10" src={CookaniaProducts.KhasKhatai} perPiece={10} perboxCut={170} perBoxHole={160} perBoxRetail={180} />
        <ProCompo h2="Cookania Khaskhati Rs:20" src={CookaniaProducts.KhasKhatai} perPiece={10} perboxCut={170} perBoxHole={160} perBoxRetail={180}  imgClassName="w-30 h-20 m-14" />
        <ProCompo h2="Cookania Pikanut" src={CookaniaProducts.Pikanut} perPiece={10} perboxCut={170} perBoxHole={160} perBoxRetail={180} />
        <ProCompo h2="Cookania Chocochip" src={CookaniaProducts.Chocochip} perPiece={10} perboxCut={170} perBoxHole={160} perBoxRetail={180} />
        <ProCompo h2="Cookania Chocolava" src={CookaniaProducts.Chocolava} perPiece={10} perboxCut={170} perBoxHole={160} perBoxRetail={180} imgClassName=""/>
        <ProCompo h2="Cookania Cocodelight" src={CookaniaProducts.Cocodelight} perPiece={10} perboxCut={170} perBoxHole={160} perBoxRetail={180} />
        <ProCompo h2="Cookania Lemonsandwich" src={CookaniaProducts.Lemon} perPiece={10} perboxCut={170} perBoxHole={160} perBoxRetail={180} />
        <ProCompo h2="Cookania Chocolatesandwich" src={CookaniaProducts.ChocolateSand} perPiece={10} perboxCut={170} perBoxHole={160} perBoxRetail={180} />
        <ProCompo h2="Cookania Zeera" src={CookaniaProducts.Zeera} perPiece={10} perboxCut={170} perBoxHole={160} perBoxRetail={180} />
        <ProCompo h2="Cookania Dreamcream StrawBerry" src={CookaniaProducts.DreamCreamStraw} perPiece={10} perboxCut={170} perBoxHole={160} perBoxRetail={180} />
        <ProCompo h2="Cookania Dreamcream Chocolate" src={CookaniaProducts.DreamCreamChoc} perPiece={10} perboxCut={170} perBoxHole={160} perBoxRetail={180} />
        <ProCompo h2="Cookania Teatime Chocolate Rs:10" src={CookaniaProducts.TeatimeChoco10} perPiece={10} perboxCut={170} perBoxHole={160} perBoxRetail={180} />
        <ProCompo h2="Cookania Teatime Chocolate Rs:40" src={CookaniaProducts.TeatimeChoco10} perPiece={40} perboxCut={230} perBoxHole={220} perBoxRetail={240}  imgClassName="w-20 h-30 my-9" />
        <ProCompo h2="Cookania Teatime Plain Rs:10" src={CookaniaProducts.TeatimeSada40} perPiece={10} perboxCut={170} perBoxHole={160} perBoxRetail={180} imgClassName="w-20 h-50 " />
        <ProCompo h2="Cookania Teatime Plain Rs:40" src={CookaniaProducts.TeatimeSada40} perPiece={40} perboxCut={225} perBoxHole={220} perBoxRetail={240} imgClassName="m-9" />
      </div>
    </div>
  );
}

export default Cookania;
