const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-8 mt-auto border-t-4 border-doki-red">
      <div className="flex flex-col items-center gap-4">
        <img src="/src/assets/DokiImg.png" className="h-6 invert opacity-50" />
        <div className="flex gap-6 text-[9px] font-black italic tracking-widest text-doki-red">
          <span>FB</span>
          <span>IG</span>
          <span>LOCATION</span>
        </div>
        <p className="text-[8px] font-bold opacity-30 italic">© 2026 DOKI CAFE PROJECT</p>
      </div>
    </footer>
  );
};

export default Footer;