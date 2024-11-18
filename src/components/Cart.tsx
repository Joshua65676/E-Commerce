import React from 'react';

interface CartProps {
  message: string;
}

const Cart: React.FC<CartProps> = ({ message }) => {
  return (
    <main className="w-[20rem] absolute right-20 top-24 bg-White shadow-xl h-48 rounded-b-lg">
      <section>
        <div className="p-3 pl-4 pb-3">
          <span className="text-[16px] font-kumbh font-semibold">Cart</span>
        </div>
        <div className="">
          <hr className="" />
        </div>
        <div className="text-center pt-12">
          <p className="text-[14px] font-kumbh">{message}</p>
        </div>
      </section>
    </main>
  );
};

export default Cart;
