import { Percent } from "lucide-react";
import React from "react";

type Props = {};

const OfferBox = (props: Props) => {
  return (
    <div className="flex items-center max-w-full justify-evenly md:w-full bg-[#EDF3FD] rounded-md p-4">
      <div className="flex items-center justify-center rounded-full w-6 bg-[#2C7EF8] h-6">
        <Percent size={18} />
      </div>

      {/* SAVE 50% */}
      <p className="text-black flex pl-2 whitespace-pre-wrap">
        Save <span className="text-[#2C7EF8]"> 53% </span> and get{" "}
        <span className="text-[#2C7EF8]"> 6 extra Clarifion </span> for only{" "}
        <span className="text-[#2C7EF8]">$14 Each.</span>
      </p>
    </div>
  );
};

export default OfferBox;
