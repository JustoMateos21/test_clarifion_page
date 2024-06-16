import React from "react";
import Rating from "../review_rating/rating";
import Image from "next/image";

type Props = {
  name: string;
  rating: number;
  description: string;
  offer_price: number;
  normal_price: number;
  stock: number;
};

const ProductDescription = (props: Props) => {
  return (
    <section className="flex   items-start justify-around  pt-4 ">
      <div className="flex  md:p-8 items-center justify-center p-1 rounded-md bg-[#2C7EF8]">
        <Image
          alt="product"
          src={"/assets/pd_container.png"}
          width={80}
          className="md:flex  md:object-cover"
          height={80}
        />
      </div>
      <div className="md:grid grid p-1   grid-cols-2  md:grid-rows-[70%_30%]">
        {/* FIRST ROW*/}
        <div className="flex row-span-1 col-span-2 pl-4 justify-start h-full">
          <div className="grid grid-cols-2 h-full w-full">
            <div className="flex col-span-1 items-start flex-col h-full">
              <h4 className="pb-2 text-black font-normal">{props.name}</h4>
              {/* RATING */}
              <Rating rating={5} />
              <div className="flex items-center">
                <Image
                  height={14}
                  width={14}
                  alt="circle"
                  src={"/assets/vectors/circle.png"}
                />
                <span className="flex">
                  <p className="text-gray-900">{props.stock} left in Stock</p>
                </span>
              </div>
            </div>
            {/* PRODUCT PRICE */}
            <div className="flex  w-full justify-start h-full">
              <p className="text-[#969696] p-1 line-through text-[10px]">
                ${props.normal_price}
              </p>
              <p className="text-[#2C7EF8]">${props.offer_price}</p>
            </div>
          </div>
        </div>

        {/* SECOND  ROW*/}

        <span className="flex col-span-2">
          <p className="text-black hidden md:flex md:col-span-4  ">
            {props.description}
          </p>
        </span>
      </div>
    </section>
  );
};

export default ProductDescription;
