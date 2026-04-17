import React from 'react';
// 1. Import the cart hook
import { useCart } from '../context/CartContext';

const OrderPage = () => {
  // 2. Destructure the live state and update functions
  const { cart, updateQty, totalAmount } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans uppercase overflow-x-hidden">
      
      {/* Title Ribbon */}
      <div className="bg-black text-white py-2 px-4 flex justify-center items-center border-b-4 border-doki-red">
        <span className="text-[10px] font-black uppercase italic tracking-[0.3em]">
          YOUR ORDERS
        </span>
      </div>

      <div className="p-6 flex-grow bg-white">
        {/* 3. Handle Empty State */}
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 opacity-30">
            <span className="text-4xl mb-2">☕</span>
            <p className="text-[10px] font-black italic">Your tray is empty</p>
          </div>
        ) : (
          cart.map(item => (
            <div key={item.id} className="flex items-start space-x-3 mb-6 animate-in fade-in slide-in-from-bottom-2">
              {/* Red Bordered Thumbnail */}
              <div className="border-[3px] border-doki-red p-1 bg-white shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-16 h-16 bg-gray-100 flex items-center justify-center overflow-hidden">
                   <img 
                    src={item.image || "/src/assets/DokiImg.png"} 
                    alt={item.name} 
                    className="w-full h-full object-cover grayscale" 
                   />
                </div>
              </div>

              <div className="flex-grow flex flex-col">
                {/* Item Header with Context-linked Qty Controls */}
                <div className="bg-black text-white px-3 py-1 flex justify-between items-center">
                  <span className="text-[10px] font-black italic tracking-widest">
                    {item.qty} {item.name}
                  </span>
                  <div className="flex items-center space-x-3 text-[10px] font-black">
                    {/* 4. Trigger updateQty from Context */}
                    <button 
                      onClick={() => updateQty(item.id, -1)}
                      className="hover:text-doki-red transition-colors w-4 h-4 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="bg-white text-black px-1.5 leading-none min-w-[18px] text-center">
                      {item.qty}
                    </span>
                    <button 
                      onClick={() => updateQty(item.id, 1)}
                      className="hover:text-doki-red transition-colors w-4 h-4 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                {/* Notes Area */}
                <div className="bg-doki-grey h-12 mt-1 p-2 text-[8px] italic text-gray-500 leading-tight">
                  No special instructions provided...
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Payment Summary Section - Only show if items exist */}
      {cart.length > 0 && (
        <div className="bg-doki-grey p-4 border-t-2 border-black">
          <div className="space-y-1 mb-4">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between text-[10px] font-black text-doki-red italic tracking-tighter">
                <span>{item.qty} {item.name}</span>
                <span>{item.price * item.qty}.P</span>
              </div>
            ))}
            
            {/* 5. Dynamic Total from Context */}
            <div className="border-t border-black mt-2 pt-1 flex justify-between text-[10px] font-black text-black">
              <span>TOTAL</span>
              <span>{totalAmount}.P</span>
            </div>
          </div>

          <button className="w-full bg-doki-red text-white py-3 font-black italic tracking-[0.2em] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
            CONFIRM PAYMENT
          </button>
        </div>
      )}

      {/* Footer Branding Bar */}
      <div className="bg-doki-red h-8 border-t-2 border-black mt-auto" />
    </div>
  );
};

export default OrderPage;