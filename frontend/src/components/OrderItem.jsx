const OrderItem = ({ name, price, qty }) => {
  return (
    <div className="flex w-full gap-3 mb-6 animate-fadeIn">
      {/* Red Bordered Image Box */}
      <div className="border-[3px] border-doki-red p-1 bg-white shrink-0">
        <div className="w-20 h-20 bg-gray-200">
          <img src="/src/assets/DokiImg.png" alt={name} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Control Area */}
      <div className="flex-grow flex flex-col">
        <div className="bg-black text-white flex justify-between items-center px-3 py-1 text-[10px] font-bold italic">
          <span className="tracking-widest">{qty} {name}</span>
          <div className="flex items-center gap-4">
            <button className="text-lg leading-none hover:text-doki-red">-</button>
            <span className="text-xs">1</span>
            <button className="text-lg leading-none hover:text-doki-red">+</button>
          </div>
        </div>
        
        {/* Grey Info Box */}
        <div className="bg-doki-grey flex-grow mt-1 p-2 text-[8px] italic text-gray-500 leading-tight">
          Standard serving, freshly brewed. <br />
          Customize notes here...
        </div>
      </div>
    </div>
  );
};

export default OrderItem;