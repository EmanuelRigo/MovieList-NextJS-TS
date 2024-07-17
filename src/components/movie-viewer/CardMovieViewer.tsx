import Image from "next/image";
import React from "react";

const CardMovieViewer = () => {
  return (
    <div className="p-4 h-full">
      <div className="flex flex-col p-4 h-full bg-gray-700 rounded-lg">
        <Image
          src="/images/poster.jpg"
          width={500}
          height={500}
          sizes="width: 100%"
          alt="Picture of the author"
          className="w-full h-1/3 object-cover rounded-lg"
        />
        <h3>DUNE</h3>
        <p>2020</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
          molestias enim repudiandae blanditiis minima doloremque praesentium,
          animi, voluptate odio a atque repellendus quis deserunt maxime sit
          soluta similique laboriosam quod.
        </p>
      </div>
    </div>
  );
};

export default CardMovieViewer;
