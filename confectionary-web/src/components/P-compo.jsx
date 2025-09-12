import React from "react";

function ProCompo({
  h2,
  src,
  perPiece,
  perboxCut,
  perBoxHole,
  perBoxRetail,
  imgClassName,
}) {
  return (
    <div className="p-6 space-y-4 text-center rounded-2xl">
      <h2 className="text-2xl font-bold text-gray-800">{h2}</h2>

      <img
        src={src}
        alt={h2}
        className={`w-40 mx-auto rounded-lg ${imgClassName} hover:scale-110 transition cursor-pointer`}
      />

      <div className="mt-4 space-y-2">
        <p className="text-gray-700">
          Per Piece: <span className="font-semibold">Rs. {perPiece}</span>
        </p>
        <p className="text-gray-400 line-through text-lg">
          Box: Rs.{perboxCut}
        </p>

        <p className="text-green-600 font-bold text-2xl">Rs.{perBoxHole}</p>

        <p className="text-gray-700">
          Retail Price: <span className="font-semibold">Rs.{perBoxRetail}</span>
        </p>
      </div>

      <button className="mt-4 w-full bg-gradient-to-r to-orange-500 from-orange-700 text-white font-semibold py-2 rounded-xl hover:scale-105 transition cursor-pointer">
        Buy Now
      </button>
    </div>
  );
}

export default ProCompo;
