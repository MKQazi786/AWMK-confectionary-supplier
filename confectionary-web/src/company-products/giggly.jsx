import React from "react";
import Logos from "../company-logos/logo.js";
import GigglyProducts from "../company-logos/giggly-products/giggly.js";
import ProCompo from "../components/P-compo.jsx";
import { Link } from "react-router-dom";

function Giggly() {
  return (
    <div>
      <div className="justify-items-center p-4 mb-8">
        <Link to="../products" > <img className="justify-self-center" src={Logos.Giggly} alt="" /></Link>
        <div className="text-xl">
          <p className="text-3xl font-bold">These are products of Giggly</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-16 justify-center items-center mx-8" >

        <ProCompo h2="Giggly Gummy Bear" src={GigglyProducts.Gummy} perPiece={10} perboxCut={190} perBoxHole={180} perBoxRetail={200} />
        <ProCompo h2="Giggly Opus Rs:5"  src={GigglyProducts.Opus5} perPiece={5} perboxCut={190} perBoxHole={180} perBoxRetail={200} imgClassName="w-40 h-40"/>
        <ProCompo h2="Giggly Opus Rs:10" src={GigglyProducts.Opus10} perPiece={10} perboxCut={190} perBoxHole={180} perBoxRetail={200} />
        <ProCompo h2="Giggly Opus Rs:30" src={GigglyProducts.Opus10} perPiece={30} perboxCut={280} perBoxHole={270} perBoxRetail={300} imgClassName="w-50 h-50" />
        <ProCompo h2="Giggly Tropic Rs:10" src={GigglyProducts.Tropic10} perPiece={10} perboxCut={170} perBoxHole={165} perBoxRetail={180} imgClassName="w-50 h-50" />
        <ProCompo h2="Giggly Bloon " src={GigglyProducts.Bloon} perPiece={10} perboxCut={190} perBoxHole={180} perBoxRetail={200} imgClassName="w-50 h-50" />
        <ProCompo h2="Giggly Glory " src={GigglyProducts.Glory} perPiece={10} perboxCut={230} perBoxHole={220} perBoxRetail={240} imgClassName="w-50 h-50" />
        <ProCompo h2="Giggly Fluffy" src={GigglyProducts.Fluffy} perPiece={10} perboxCut={190} perBoxHole={180} perBoxRetail={200}  imgClassName="w-50 h-50"/>
        <ProCompo h2="Giggly Pizzo" src={GigglyProducts.Pizzo5} perPiece={5} perboxCut={140} perBoxHole={135} perBoxRetail={150}  imgClassName="w-50 h-50"/>
        <ProCompo h2="Giggly Pizzo Rs:10" src={GigglyProducts.Pizzo10} perPiece={10} perboxCut={170} perBoxHole={165} perBoxRetail={180}  imgClassName="w-30 h-40"/>
        <ProCompo h2="Giggly Michlee" src={GigglyProducts.Michlee} perPiece={10} perboxCut={170} perBoxHole={165} perBoxRetail={180}  imgClassName="w-20 h-40"/>
        <ProCompo h2="Giggly Jet" src={GigglyProducts.Jet} perPiece={5} perboxCut={140} perBoxHole={135} perBoxRetail={150}  imgClassName="w-30 h-40"/> 
        <ProCompo h2="Giggly GoldBear Jelly" src={GigglyProducts.GoldBear} perPiece={5} perboxCut={140} perBoxHole={135} perBoxRetail={150} />
        <ProCompo h2="Giggly Star Jelly" src={GigglyProducts.Star5} perPiece={5} perboxCut={140} perBoxHole={135} perBoxRetail={150} />
        <ProCompo h2="Giggly Chatkhara Jelly" src={GigglyProducts.Chatkhari} perPiece={5} perboxCut={140} perBoxHole={135} perBoxRetail={150}  />
        <ProCompo h2="Giggly ABC Jelly" src={GigglyProducts.ABC} perPiece={5} perboxCut={140} perBoxHole={135} perBoxRetail={150}  />
        <ProCompo h2="Giggly Berry Jelly" src={GigglyProducts.Berry} perPiece={10} perboxCut={170} perBoxHole={165} perBoxRetail={180}  />
        <ProCompo h2="Giggly Badami" src={GigglyProducts.Badami} perPiece={5} perboxCut={140} perBoxHole={135} perBoxRetail={150} imgClassName="h-40" />
        <ProCompo h2="Giggly Filly Strawberry" src={GigglyProducts.FillyStrawberry} perPiece={2.5} perboxCut={95} perBoxHole={90} perBoxRetail={100}  />
        <ProCompo h2="Giggly Filly Orange" src={GigglyProducts.FillyOrange} perPiece={2.5} perboxCut={95} perBoxHole={90} perBoxRetail={100}  />
        <ProCompo h2="Giggly Filly Apple" src={GigglyProducts.FillyGreen} perPiece={2.5} perboxCut={95} perBoxHole={90} perBoxRetail={100}  />
        <ProCompo h2="Giggly Twisto Blackcurrent" src={GigglyProducts.TwistoBC5} perPiece={5} perboxCut={230} perBoxHole={225} perBoxRetail={250}  />
        <ProCompo h2="Giggly Twisto Orange" src={GigglyProducts.TwistoOrange5} perPiece={5} perboxCut={230} perBoxHole={225} perBoxRetail={250}  />
        <ProCompo h2="Giggly Twisto Strawberry" src={GigglyProducts.TwistoStrawberry5} perPiece={5} perboxCut={230} perBoxHole={225} perBoxRetail={250}  />
        <ProCompo h2="Giggly Twisto Twin" src={GigglyProducts.TwistoTwin5} perPiece={5} perboxCut={230} perBoxHole={225} perBoxRetail={250}  />
        <ProCompo h2="Giggly Boom Boom Bubble" src={GigglyProducts.BoomBoom} perPiece={5} perboxCut={230} perBoxHole={225} perBoxRetail={250}  />
        <ProCompo h2="Giggly Elaichi Bubble" src={GigglyProducts.Elaichi} perPiece={2.5} perboxCut={90} perBoxHole={85} perBoxRetail={90}  />
        
      </div>
    </div>
  );
}

export default Giggly;
