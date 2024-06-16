import React from "react";
import Image from "next/image";
import Rating from "./rating";
type Props = {};

const Review = (props: Props) => {
  return (
    <div className="hidden md:flex p-10 bg-white rounded-md flex-col">
      <div className="items-center justify-start hidden md:flex border-red-600  ">
        <div className="flex border border-green-500">
          {/* IMAGE */}
          <Image
            height={50}
            className="flex object-cover"
            width={50}
            src={"/assets/person.png"}
            alt="person"
          />
        </div>
        <div className="flex flex-col pl-4 items-start justify-evenly">
          {/* RATING VAL, ETC*/}
          <Rating rating={5} />
          <span>
            <p className="text-black font-bold">Ken T.</p>
            <Image
              src={"/assets/vectors/verify.png"}
              height={20}
              width={20}
              alt="verified"
            />
            <p>Verified Customer</p>
          </span>
        </div>

        {/* VERIFIED LOGO */}
      </div>
      <div className="hidden md:flex">
        <p className="flex coursive text-black">
          “As soon as the Clarifions arrived I put one in my bedroom. This was
          late in the afternoon. When I went to the bedroom in the evening it
          smelled clean. When I went to bed I felt I could breathe better.
          Wonderful.”
        </p>
      </div>
    </div>
  );
};

export default Review;
