import React from "react";
import Image from "next/image";

import { Lock } from "lucide-react";
type Props = {};

const PaymentSecurity = (props: Props) => {
  return (
    <div className="flex md:w-full border mt-2 justify-center rounded-sm flex-col gap-1 items-center">
      <div className="flex  p-1 items-center gap-4">
        <p className="text-[#696969]">Free shipping</p>

        <div className="flex border-l pl-1 ">
          <Lock color="#696969" size={20} />
          <p className="text-[#696969] pl-1">Secure 256-bit SSL encryption</p>
        </div>
      </div>
      <div className="flex p-3 items-center border-t justify-center gap-1">
        {/* payments methods */}
        <Image
          alt="payment method"
          className="flex"
          height={30}
          width={20}
          src={"/assets/payments/visa.png"}
        />
        <Image
          alt="payment method"
          className="flex"
          height={30}
          width={20}
          src={"/assets/payments/shop_pay.png"}
        />
        <Image
          alt="payment method"
          className="flex"
          height={30}
          width={20}
          src={"/assets/payments/paypal.png"}
        />
        <Image
          alt="payment method"
          className="flex"
          height={30}
          width={20}
          src={"/assets/payments/mastercard.png"}
        />
        <Image
          alt="payment method"
          className="flex"
          height={30}
          width={20}
          src={"/assets/payments/gpay.png"}
        />
        <Image
          alt="payment method"
          className="flex"
          height={30}
          width={20}
          src={"/assets/payments/apple_pay.png"}
        />
        <Image
          alt="payment method"
          className="flex"
          height={30}
          width={20}
          src={"/assets/payments/amex.png"}
        />
      </div>
    </div>
  );
};

export default PaymentSecurity;
