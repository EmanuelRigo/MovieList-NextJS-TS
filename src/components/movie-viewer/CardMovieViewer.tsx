import Image from "next/image";
import React from "react";

const CardMovieViewer = () => {
  return (
    <div className="p-4 h-full ">
      <div className="flex flex-col p-4 h-full bg-gray-800 rounded-lg">
        <div className=" h-full bg-black rounded-lg bg-opacity-50">
          <div className="h-4/6 relative">
            <Image
              src="/images/poster.jpg"
              layout="fill"
              objectFit="cover"
              alt="Picture of the author"
              className="object-cover rounded-lg "
            />
          </div>
          <div className="px-3">
            <h3 className="text-white pt-4 pb-2">DUNE</h3>
            <p className="text-white pb-2">2020</p>
            <p className="text-xs text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              molestias enim repudiandae blanditiis minima doloremque
              praesentium, animi, voluptate odio a atque repellendus quis
              deserunt maxime sit soluta similique laboriosam quod.
            </p>
          </div>
        </div>

        <div className="flex justify-evenly">
          <div>VHS</div>
          <div>DVD</div>
          <div>BLU RAY</div>
        </div>
      </div>
    </div>
  );
};

export default CardMovieViewer;
