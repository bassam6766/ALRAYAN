import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES } from "@shared/constants";

export default function Home() {
  // Sample products for demonstration
  const sampleProducts = [
    {
      id: 1,
      nameAr: "كرتون شد 25 حبة مناشف يد مطوية كويتنا",
      nameEn: "Box of 25 Folded Hand Towels",
      price: 4.0,
      originalPrice: 4.4,
      discount: 9,
      imageUrl: "https://via.placeholder.com/300x300?text=Product+1",
      isBestseller: true,
    },
    {
      id: 2,
      nameAr: "كرتون شد 50 حبة كلينكس علب كواليتي 150 ورقة",
      nameEn: "Box of 50 Kleenex Quality 150 Sheets",
      price: 6.75,
      originalPrice: 7.5,
      discount: 10,
      imageUrl: "https://via.placeholder.com/300x300?text=Product+2",
      isOnSale: true,
    },
    {
      id: 3,
      nameAr: "قفاز يدين فينيل 100 قفاز",
      nameEn: "Vinyl Gloves 100 Pieces",
      price: 1.75,
      originalPrice: 2.7,
      discount: 35,
      imageUrl: "https://via.placeholder.com/300x300?text=Product+3",
      isBestseller: true,
    },
    {
      id: 4,
      nameAr: "كرتون 40 حبة أكياس مناديل ورقية آسيا 600 ورقة",
      nameEn: "Box of 40 Asia Tissue Bags 600 Sheets",
      price: 6.25,
      originalPrice: 6.5,
      discount: 4,
      imageUrl: "https://via.placeholder.com/300x300?text=Product+4",
      isNewProduct: true,
    },
    {
      id: 5,
      nameAr: "بلاستيك تغليف الطعام كويتنا 45 سم",
      nameEn: "Al-Rayan Food Wrap 45cm",
      price: 2.5,
      originalPrice: 3.0,
      discount: 17,
      imageUrl: "https://via.placeholder.com/300x300?text=Product+5",
    },
    {
      id: 6,
      nameAr: "قصدير كويتنا 600 × 45 سم أزرق فاتح",
      nameEn: "Al-Rayan Aluminum Foil 600x45cm",
      price: 2.95,
      originalPrice: 3.5,
      discount: 16,
      imageUrl: "https://via.placeholder.com/300x300?text=Product+6",
      isBestseller: true,
    },
    {
      id: 7,
      nameAr: "معطر حمام كواليتي 120 جم كورة",
      nameEn: "Quality Bathroom Freshener 120g",
      price: 1.0,
      originalPrice: 1.2,
      discount: 17,
      imageUrl: "https://via.placeholder.com/300x300?text=Product+7",
    },
    {
      id: 8,
      nameAr: "ورق الزبدة كويتنا 30 سم",
      nameEn: "Al-Rayan Parchment Paper 30cm",
      price: 1.35,
      originalPrice: 1.65,
      discount: 18,
      imageUrl: "https://via.placeholder.com/300x300?text=Product+8",
      isOnSale: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AnnouncementBar />
      <Header />

      {/* Hero Section */}
      <section className="gradient-brand-rtl text-white py-12 md:py-20">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              أهلاً وسهلاً بك في متجر الريان
            </h2>
            <p className="text-lg md:text-xl mb-6 text-gray-100">
              متجرك الموثوق للمنتجات الاستهلاكية والتجارية بأفضل الأسعار والجودة العالية
            </p>
            <Link href="/offers">
              <button className="btn-secondary flex items-center gap-2">
                اكتشف العروض الخاصة
                <ArrowLeft size={20} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="section-title">الفئات الرئيسية</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map((category) => (
              <Link key={category.id} href={`/category/${category.slug}`}>
                <div className="p-4 bg-card rounded-lg border border-border hover:border-brand-gold hover:shadow-lg transition-all text-center cursor-pointer">
                  <div className="text-3xl mb-2">📦</div>
                  <h3 className="font-semibold text-sm text-foreground hover:text-brand-gold transition">
                    {category.nameAr}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title mb-0">الأكثر مبيعاً</h2>
            <Link href="/bestsellers">
              <button className="text-brand-gold hover:text-brand-blue transition flex items-center gap-2">
                عرض الكل
                <ArrowLeft size={20} />
              </button>
            </Link>
          </div>
          <div className="product-grid">
            {sampleProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Offers Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title mb-0">🔥 عروض الأسبوع</h2>
            <Link href="/offers">
              <button className="text-brand-gold hover:text-brand-blue transition flex items-center gap-2">
                عرض الكل
                <ArrowLeft size={20} />
              </button>
            </Link>
          </div>
          <div className="product-grid">
            {sampleProducts.slice(4, 8).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-brand-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="text-xl font-bold mb-2">توصيل سريع</h3>
              <p className="text-gray-200">توصيل بنفس اليوم للطلبات قبل 6 مساءً</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-bold mb-2">أسعار منخفضة</h3>
              <p className="text-gray-200">أفضل الأسعار مع خصومات حتى 40%</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-xl font-bold mb-2">جودة عالية</h3>
              <p className="text-gray-200">منتجات أصلية مع ضمان الجودة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container max-w-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">اشترك في نشرتنا البريدية</h2>
            <p className="text-muted-foreground mb-6">
              احصل على أحدث العروض والمنتجات الجديدة مباشرة في بريدك الإلكتروني
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold"
              />
              <button className="btn-secondary">اشترك</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
