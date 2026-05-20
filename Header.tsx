import { ShoppingCart, Search, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { STORE_INFO, CATEGORIES } from "@shared/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="bg-white border-b border-border sticky top-0 z-40 shadow-sm">
      {/* Top Bar */}
      <div className="bg-brand-primary text-white py-2">
        <div className="container flex items-center justify-between text-sm">
          <div className="flex gap-4">
            <a href={`tel:${STORE_INFO.phone}`} className="hover:text-opacity-80 transition">
              📞 {STORE_INFO.phone}
            </a>
            <span>|</span>
            <span>ساعات العمل: {STORE_INFO.workingHours.start} - {STORE_INFO.workingHours.end}</span>
          </div>
          <div className="flex gap-2">
            {user ? (
              <>
                <span>أهلاً {user.name}</span>
                <button
                  onClick={() => logout()}
                  className="hover:text-opacity-80 transition"
                >
                  تسجيل الخروج
                </button>
              </>
            ) : (
              <a href={getLoginUrl()} className="hover:text-opacity-80 transition">
                تسجيل الدخول
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <img src="/manus-storage/logo_6c488ab2.png" alt="Al-Rayan" className="h-12 w-12" />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-brand-blue">الريان</h1>
              <p className="text-xs text-muted-foreground">متجر الجملة والتجزئة</p>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 hidden md:flex mx-4">
            <div className="w-full flex items-center bg-muted rounded-lg px-3 py-2">
              <input
                type="text"
                placeholder="ابحث عن منتج..."
                className="flex-1 bg-transparent outline-none text-sm"
              />
              <Search size={18} className="text-muted-foreground" />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative">
              <ShoppingCart size={24} className="text-brand-blue hover:text-brand-gold transition" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-brand-blue"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-3 flex items-center bg-muted rounded-lg px-3 py-2">
          <input
            type="text"
            placeholder="ابحث عن منتج..."
            className="flex-1 bg-transparent outline-none text-sm"
          />
          <Search size={18} className="text-muted-foreground" />
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className={`border-t border-border ${isMenuOpen ? "block" : "hidden"} md:block`}>
        <div className="container py-3">
          <div className="flex flex-col md:flex-row gap-2 md:gap-6">
            <Link href="/" className="px-3 py-2 text-brand-blue hover:text-brand-gold transition font-medium">
              الرئيسية
            </Link>
            {CATEGORIES.slice(0, 5).map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className="px-3 py-2 text-foreground hover:text-brand-gold transition"
              >
                {cat.nameAr}
              </Link>
            ))}
            <Link href="/offers" className="px-3 py-2 text-red-500 hover:text-red-600 transition font-medium">
              🔥 العروض
            </Link>
            <Link href="/contact" className="px-3 py-2 text-foreground hover:text-brand-gold transition">
              اتصل بنا
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
