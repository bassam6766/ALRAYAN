import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const announcements = [
    {
      ar: "التوصيل بنفس اليوم للطلبات قبل 6 مساءً",
      en: "Same day delivery for orders before 6 PM",
    },
    {
      ar: "خصومات حتى 40% على المنتجات المختارة",
      en: "Discounts up to 40% on selected products",
    },
    {
      ar: "شحن مجاني للطلبات فوق 50 دينار كويتي",
      en: "Free shipping for orders over 50 KWD",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-[oklch(0.4_0.3_250)] to-[oklch(0.7_0.2_60)] text-white py-3 overflow-hidden">
      <div className="container flex items-center justify-between">
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-2 animate-pulse">
            <span className="text-sm md:text-base font-semibold">
              {announcements[currentIndex].ar}
            </span>
          </div>
        </div>
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % announcements.length)}
          className="mr-4 hover:bg-white/20 p-2 rounded-full transition-colors"
          aria-label="Next announcement"
        >
          <ChevronLeft size={20} />
        </button>
      </div>
    </div>
  );
}
