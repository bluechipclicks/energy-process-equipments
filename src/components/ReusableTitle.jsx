// pages/index.tsx or components/TrapezoidBanner.tsx

export default function ReusableTitle({titl}) {
  return (
    <div className="relative  mb-12">
      {/* Trapezoid shape */}
      <div className=" h-10 bg-red-600 clip-trapezoid"></div>

      {/* Text on top of the shape */}
      <div className="absolute inset-0 flex items-center justify-center text-white font-bold  uppercase text-lg">
       Your Growth Partner
      </div>
    </div>
  );
}
