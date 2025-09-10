export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            من نحن
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            مزرعة أبو الذهب، جنة ريفية في قلب محافظة الزرقاء
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-800">
                🌿 موقع استثنائي في الطبيعة
              </h3>
              <p className="text-gray-700 leading-relaxed">
                تقع مزرعة أبو الذهب في محافظة الزرقاء – منطقة بلعما – الزيتونة، 
                في قلب الطبيعة الخلابة. مكان مثالي للهروب من صخب المدينة والاستمتاع 
                بأجواء ريفية هادئة وساحرة.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-800">
                🏊‍♂️ مرافق متكاملة للعائلات
              </h3>
              <p className="text-gray-700 leading-relaxed">
                نوفر لكم تجربة مميزة مع مرافق متنوعة تناسب جميع أفراد العائلة:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  مسبح كبير للسباحة والاستجمام
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  جلسات خارجية مريحة وأنيقة
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  مشاوي مجهزة للشواء والطبخ
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  بيت أطفال آمن وممتع
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  أجواء عائلية دافئة ومناسبة للجميع
                </li>
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="lg:order-first">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://placehold.co/600x500?text=جلسات+خارجية+مريحة+في+مزرعة+أبو+الذهب+مع+منظر+طبيعي+جميل+وأشجار+خضراء"
                alt="جلسات خارجية مريحة في مزرعة أبو الذهب"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                <p className="text-white font-semibold text-lg">
                  أجواء ريفية ساحرة في قلب الطبيعة
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
              🏊‍♂️
            </div>
            <p className="text-gray-700 font-semibold">مسبح كبير</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
              🍖
            </div>
            <p className="text-gray-700 font-semibold">مشاوي مجهزة</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
              🏡
            </div>
            <p className="text-gray-700 font-semibold">بيت أطفال</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
              🌳
            </div>
            <p className="text-gray-700 font-semibold">أجواء طبيعية</p>
          </div>
        </div>
      </div>
    </section>
  )
}