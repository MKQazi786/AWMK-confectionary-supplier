import React from "react";
import { NavLink, Link } from "react-router-dom";
import PP from "../photos/Khubaib.png";
import PP2 from "../photos/khubaib2.png";
import FP from "../photos/p1.jpg";
import FP2 from "../photos/p2.jpg";
import FP3 from "../photos/p3.jpg";
import FP4 from "../photos/p4.jpg";
import FP5 from "../photos/p5.jpg";
import FP6 from "../photos/p6.jpg";

function Home() {
  return (
    <div>
      <div className="grid place-items-center sm:mt-4">
        <img src={PP2} alt="image2" className="sm:w-96 w-48" />
      </div>

      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        AW&MK Confectionary Supplier
      </h1>

      <div className="grid grid-cols-3 gap-4 p-4 justify-items-center">
        <img src={FP3} alt="Father Pic" width={300} />
        <img src={FP4} alt="Father Pic" width={300} />
        <img src={FP6} alt="Father Pic" width={300} />
        <img src={FP5} alt="Father Pic" width={300} />
        <img src={FP} alt="Father Pic" width={300} />
        <img src={FP2} alt="Father Pic" width={300} />
      </div>

      <div className="mt-20 xl:px-20" >
        <h2 className="text-4xl font-bold sm:text-5xl text-center mt-4">
          Abdul Waheed & Muhammad Khubaib <br />
          <span className="sm:block text-2xl mt-2 text-center flex flex-col p-4">
            <p>
              Assalam-u-Alaikum! My name is Muhammad Khubaib, and the above
              pictures are of my father. The bond between a father and son is
              the true identity of this business. Keeping this precious
              relationship in mind, we have named this website and our business
              AW&MK Confectionery Supplier.
            </p>
            <p className="pt-4">
              "A father’s guidance and a son’s trust, Together they build dreams
              that last. Side by side in every endeavor, A bond of love that
              breaks never."
            </p>
          </span>
        </h2>
      </div>

      <aside>
        <div className="flex flex-col-reverse sm:flex sm:flex-row-reverse sm:items-center">
          <div className="max-w-xl sm:mt-1 space-y-8 text-center sm:text-right p-2">
            <h2 className="text-4xl font-bold sm:text-5xl">
              For Website Development <br />
              <span className="hidden sm:block text-4xl mt-2">
                <p>You can click </p>
              </span>
            </h2>
            <a
              href="https://mkqazi786.work.gd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75 cursor-pointer"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              &nbsp; MKQazi786.work.gd
            </a>
          </div>
          <div className="inset-0 w-full sm:my-20 sm:pt-1 h-full">
            <img
              src={PP}
              alt="image1"
              className="sm:w-96 w-48 place-self-center sm:place-self-start"
            />
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Home;
