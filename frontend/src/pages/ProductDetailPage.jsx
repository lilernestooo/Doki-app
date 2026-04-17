import { useParams, useNavigate } from 'react-router-dom';
// 1. Import the cart hook
import { useCart } from '../context/CartContext';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // 2. Destructure the addToCart function
  const { addToCart } = useCart();

  // 3. Create a handler function
  const handleOrderNow = () => {
    // In a real app, you'd find the product by 'id' from a data file.
    // For now, we'll use the Coffee Jelly data from your mockup.
    const productData = {
      id: id || 3, // Fallback to 3 if id isn't in URL
      name: "COFFEE JELLY",
      price: 150,
      image: "/src/assets/coffee-jelly.png"
    };

    addToCart(productData); // Adds to global state
    navigate('/orders');    // Takes user to the cart
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans uppercase">
      {/* Product Image Section */}
      <div className="p-6 flex justify-center">
        <div className="w-full max-w-[300px] border-[6px] border-doki-red p-2 bg-white shadow-lg">
          <div className="aspect-square bg-gray-100 relative overflow-hidden">
             <img 
               src="/src/assets/coffee-jelly.png" 
               alt="Coffee Jelly" 
               className="w-full h-full object-cover" 
             />
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex-grow px-8 pb-10">
        <div className="text-center space-y-2 mb-6">
          <h1 className="text-2xl font-black italic tracking-tighter text-black">
            COFFEE JELLY
          </h1>
          <div className="h-[2px] bg-black w-1/4 mx-auto" />
        </div>

        <p className="text-[10px] leading-relaxed italic text-center font-medium lowercase first-letter:uppercase">
          Indulge in the rich, refreshing taste of our Coffee Jelly—a perfectly layered 
          treat made with smooth, creamy milk and soft, chewy cubes of coffee-infused jelly. 
          This delightful dessert not only satisfies your sweet cravings but also gives 
          you a gentle caffeine boost.
        </p>
      </div>

      {/* Bottom Action Section */}
      <div className="bg-doki-red p-4 border-t-2 border-black mt-auto">
        <button 
          // 4. Attach the new handler
          onClick={handleOrderNow}
          className="w-full bg-doki-red text-white py-3 font-black italic tracking-widest uppercase border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black transition-all active:translate-y-[2px] active:shadow-none"
        >
          ORDER NOW
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;