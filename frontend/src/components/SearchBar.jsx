const SearchBar = () => {
  return (
    <div className="relative w-full group">
      <input 
        type="text" 
        placeholder="Search..." 
        className="w-full bg-white rounded-full py-1 px-8 text-[10px] font-bold outline-none border border-transparent focus:border-black transition-all"
      />
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px]">🔍</span>
    </div>
  );
};

export default SearchBar;