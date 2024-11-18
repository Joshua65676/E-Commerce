// "use client"

// import { useState } from "react";
// import AddCart from "@/components/AddCart";
// import Cart from "@/components/Cart";

// export default function Parent() {
//   const [cartMessage, setCartMessage] = useState("Your cart is empty");

//   const handleAddToCart = () => {
//     setCartMessage("Add cart button is clicked");
//   };

//   return (
//     <main className="container max-w-[75rem] mx-auto w-full">
//       <section className="flex w-full justify-between items-center py-20 gap-40 ml-8">
//         <div className="">
//           <AddCart onAddToCart={handleAddToCart} />
//         </div>
//         <div className="">
//           <Cart message={cartMessage} />
//         </div>
//       </section>
//     </main>
//   );
// }
