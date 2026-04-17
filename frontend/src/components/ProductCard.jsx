const ProductCard = ({ product, variant }) => {
  const isBestSeller = variant === 'best-seller';

  return (
    /* Added 'group' to the parent so we can trigger child animations on hover 
       and 'hover:-translate-y-1' for that tactile desktop feel. */
    <div className="group flex flex-col items-center cursor-pointer transition-transform duration-200 hover:-translate-y-1">
      
      {/* Container with dynamic sizing for desktop vs mobile */}
      <div className={`p-1 border-[3px] transition-all duration-300 ${
        isBestSeller 
          ? 'border-doki-red bg-white scale-105 shadow-[4px_4px_0px_0px_rgba(255,45,45,1)]' 
          : 'border-black bg-gray-50 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
      }`}>
        
        {/* Aspect ratio box keeps images uniform in the grid */}
        <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" 
          />
        </div>
      </div>

      {/* Product Labeling */}
      <div className="mt-3 text-center w-full px-2">
        <p className="text-[10px] md:text-[12px] font-black italic uppercase leading-tight tracking-tighter text-black break-words">
          {product.name}
        </p>
        
        {/* The red line expands slightly on hover */}
        <div className="h-[2px] bg-doki-red w-4 mx-auto mt-1 transition-all duration-300 group-hover:w-8" />
      </div>
    </div>
  );
};

export default ProductCard;