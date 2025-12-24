import { Link } from "react-router";
import { Fuel, Building2, UtensilsCrossed } from "lucide-react";
function HomeHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="src/assets/hero.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-6 leading-tight">
          Yenilikçi Teknoloji
          <br />
          Sürdürülebilir Çözümler
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light mb-10 max-w-3xl mx-auto leading-relaxed">
          Türkiye'den dünyaya, yakıt tasarrufundan yapı sistemlerine güvenilir
          iş ortağınız
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/urunler"
            className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-md text-base font-medium transition-colors"
          >
            Ürünlerimizi Keşfedin
          </Link>
          <Link
            to="/iletisim"
            className="border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-md text-base font-medium transition-colors"
          >
            Bize Ulaşın
          </Link>
        </div>
      </div>
    </section>
  );
}

function HomeServices() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-gray-600 mb-3 tracking-widest uppercase">
            Neler Sunuyoruz
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-gray-900 mb-6">
            Ürün ve Hizmetlerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Yakıt tasarruf sistemlerinden prefabrik yapılara, endüstriyel
            ekipmanlardan özel çözümlere
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* ECO2SAVER */}
          <div className="border border-gray-200 rounded-lg p-8 bg-white hover:shadow-xl transition-all duration-300 group">
            <Fuel className="h-10 w-10 text-gray-400 group-hover:text-green-600 transition-colors duration-300 mb-6" />
            <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4">
              ECO2SAVER
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Motorda herhangi bir değişiklik gerektirmeden anında yakıt
              tasarrufu sağlayan yenilikçi bir sistem. Daha temiz, daha ekonomik
              ve sürdürülebilir bir sürüş deneyimi.
            </p>
            <Link
              to="/eco2saver"
              className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md transition-colors"
            >
              Keşfet →
            </Link>
          </div>

          {/* Top Quality Homes */}
          <div className="border border-gray-200 rounded-lg p-8 bg-white hover:shadow-xl transition-all duration-300 group">
            <Building2 className="h-10 w-10 text-gray-400 group-hover:text-blue-600 transition-colors duration-300 mb-6" />
            <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4">
              Top Quality Homes
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Yapı teknolojileri ve modern yaşam çözümlerinde yüksek kalite,
              uzun ömür ve profesyonel işçilik sunan Türkiye'nin önde gelen
              hizmetleri.
            </p>
            <Link
              to="/cam-metal"
              className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md transition-colors"
            >
              Keşfet →
            </Link>
          </div>

          {/* Ferax Store */}
          <div className="border border-gray-200 rounded-lg p-8 bg-white hover:shadow-xl transition-all duration-300 group">
            <UtensilsCrossed className="h-10 w-10 text-gray-400 group-hover:text-orange-600 transition-colors duration-300 mb-6" />
            <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4">
              Ferax Store
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              ABS veya Polikarbonat malzemeden üretilmiş dayanıklı ve hijyenik
              servis ekipmanları. Büyük mutfak ve kantinler için ideal çözümler.
            </p>
            <Link
              to="/ferax"
              className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md transition-colors"
            >
              Keşfet →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeServices />
    </div>
  );
}
