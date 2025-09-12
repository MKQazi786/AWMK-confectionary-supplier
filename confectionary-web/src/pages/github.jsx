import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  let data = useLoaderData();
  // let [data,setData] = useState();
  // useEffect(() => {
  //   fetch("https://api.github.com/users/MKQazi786")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="text-center bg-gray-600 text-white text-3xl p-4 m-4 flex sm:flex-row-reverse flex-col items-center place-content-start gap-4">
      Github Followers: {data.followers}
      <img className="rounded-2xl" src={data.avatar_url} alt="github DP" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader= async ()=>{
    let response = await fetch('https://api.github.com/users/MKQazi786')
    return response.json();
}