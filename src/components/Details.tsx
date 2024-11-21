import React from "react";

const Details = () => {
  return (
    <main className="flex flex-col mx:gap-5">
      <div className="flex flex-col gap-4">
        <span className="">
          <h5 className="font-kumbh text-Grayishblue font-semibold uppercase tracking-widest text-[14px]">
            Sneaker Company
          </h5>
        </span>
        <header className="">
          <h1 className="font-kumbh text-Black font-bold md:text-5xl mx:text-3xl leading-[50px]">
            Fall Limited Edition Sneakers
          </h1>
        </header>
      </div>

      <div className="flex flex-col gap-5">
        <div className="">
          <p className="font-mono md:font-medium mx:font-bold md:text-[16px] mx:text-[12.5px] text-GrayishBlue leading-[26.2px] -tracking-[2.5%]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
        </div>

        <div className="flex md:flex-col md:gap-3 mx:flex-row mx:justify-between ">
          <div className="flex flex-row gap-4">
            <span className="font-bold text-2xl font-kumbh">$125.00</span>
            <div className="bg-Black w-12 text-center h-6 mt-1 rounded-lg">
              <span className="text-White text-[13px] font-kumbh font-bold">
                50%
              </span>
            </div>
          </div>
          <div className="">
            <span className="text-lg font-kumbh font-medium text-Grayishblue line-through">
              $250.00
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Details;
