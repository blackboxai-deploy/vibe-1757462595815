'use client'

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://placehold.co/1920x1080?text=مزرعة+أبو+الذهب+منظر+جميل+للمزرعة+مع+المسبح+والجلسات+الخارجية+في+أجواء+ريفية+ساحرة"
          alt="مزرعة أبو الذهب - منظر جميل للمزرعة مع المسبح والجلسات الخارجية"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
          مزرعة أبو الذهب
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 drop-shadow-lg">
          أجواء ريفية ساحرة – مثالية للعائلات والمجموعات
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:0785447506"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            📞 احجز الآن: 0785447506
          </a>
          <a
            href="https://wa.me/9625447506"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            💬 واتساب للحجز
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}