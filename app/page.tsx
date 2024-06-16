"use client";

import Rating from "@/components/review_rating/rating";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Steps from "@/components/steps";
import TopBar from "@/components/top_bar";
import { ArrowRight, Lock, LockIcon, Percent, Star } from "lucide-react";
import Image from "next/image";
import ProductDescription from "@/components/product/product_description";
import Review from "@/components/review_rating/review";
import PaymentSecurity from "@/components/payments_security";
import ProductFeatures from "@/components/product/product_features";
import OfferBox from "@/components/offer_box";
import { useEffect, useState } from "react";

export default function Home() {
  const [pageA, setPageA] = useState<boolean>(false);

  useEffect(() => {
    setPageA(true);
  }, []);

  return (
    <main className="flex items-center flex-col min-h-screen bg-[#fff]">
      <Header />
      {/* Product container */}
      <h2 className="text-black text-center font-normal text-[32px]">
        Wait! Your order is in progress.
      </h2>
      <p className="text-black">Lorem ipsum dolor sit amet, consectetur</p>
      <Steps />

      {/* OVERALL PRODUCT SECTION */}
      <section className="md:m-10 md:gap-10 rounded-lg gap-2 md:grid md:py-10 md:grid-cols-2 md:items-start flex flex-col px-[3%] overflow-hidden bg-[#FAFAFA]">
        <div className="flex flex-col h-full  ">
          <Image
            height={300}
            width={300}
            src={"/assets/product.png"}
            className={`object-cover w-full md:w-auto ${
              pageA === false && "hidden"
            }`}
            alt="product"
          />
          <Review />
        </div>

        {/* Product rating, price, etc */}
        <section className="flex flex-col h-full md:justify-evenly md:items-start">
          <div className="hidden md:flex  text-2xl self-center items-center p-4 justify-center text-[#2C7EF8] px-2">
            <p className="text-center">
              ONE TIME ONLY{" "}
              <span className="text-black">
                special price
                <br /> for 6 extra Clarifion for only
              </span>{" "}
              $14 each ($84.00 total!)
            </p>
          </div>
          <ProductDescription
            name={"Clarifion Air Ionizer"}
            rating={5}
            description={
              "Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple."
            }
            offer_price={84}
            normal_price={180}
            stock={12}
          />

          <div className="flex md:hidden text-justify pt-4">
            <p className="text-black md:hidden flex text-sm whitespace-pre-line">
              Simply plug a Clarifion into any standard outlet and replace
              bulky, expensive air purifiers with a simple.
            </p>
          </div>

          <ProductFeatures />
          {/* OFFER BOX */}
          <OfferBox />

          <div className="flex flex-col w-full">
            <div className="flex  w-full justify-center p-4 mt-3 bg-[#59AE43] rounded-2xl items-center cursor-pointer">
              <p className="text-white">Yes - Claim my discount</p>
              <ArrowRight size={16} color="#fff" />
            </div>
            <PaymentSecurity />
          </div>
          <a href="#" className="text-red-400 pt-2 md:self-center underline">
            NO THANKS, I DON&apos;T WANT THIS
          </a>
          <div className="flex items-center p-4 gap-1">
            <Image
              height={48}
              width={48}
              alt="icon"
              className="flex"
              src={"/assets/satisfaction_guaranteed.png"}
            />
            <p className="text-black flex text-center text-xs md:text-base  ">
              If you are not completely thrilled with your Clarifion - We have a{" "}
              <span className="font-bold">30 day satisfaction guarantee.</span>{" "}
              Please refer to our return policy at the bottom of the page for
              more details. Happy Shopping!
            </p>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
