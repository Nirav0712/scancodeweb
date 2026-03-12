export default function Herosection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/herosection/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Overlay (optional) */}
      {/* <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] z-10"></div> */}

      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-center h-full text-white">
        <h1 className="text-5xl font-bold">Hero Section</h1>
      </div>

    </div>
  );
}