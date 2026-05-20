import { Link } from "wouter";
import { STORE_INFO } from "@shared/constants";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark-blue text-white mt-16">
      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-gold">عن الريان</h3>
            <p className="text-sm text-gray-300 mb-4">
              متجر متخصص في بيع المنتجات الاستهلاكية والتجارية بالجملة والتجزئة بأفضل الأسعار والجودة العالية.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-gold transition">f</a>
              <a href="#" className="hover:text-brand-gold transition">𝕏</a>
              <a href="#" className="hover:text-brand-gold transition">📷</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-gold">روابط سريعة</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-brand-gold transition">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/offers" className="hover:text-brand-gold transition">
                  العروض
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-gold transition">
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-gold transition">
                  من نحن
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-gold">السياسات</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-brand-gold transition">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-brand-gold transition">
                  سياسة الشحن والاسترجاع
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand-gold transition">
                  شروط الاستخدام
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-brand-gold transition">
                  الأسئلة الشائعة
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-gold">تواصل معنا</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <Phone size={18} className="flex-shrink-0 text-brand-gold" />
                <a href={`tel:${STORE_INFO.phone}`} className="hover:text-brand-gold transition">
                  {STORE_INFO.phone}
                </a>
              </li>
              <li className="flex gap-2">
                <Mail size={18} className="flex-shrink-0 text-brand-gold" />
                <a href={`mailto:${STORE_INFO.email}`} className="hover:text-brand-gold transition">
                  {STORE_INFO.email}
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin size={18} className="flex-shrink-0 text-brand-gold" />
                <span>{STORE_INFO.address.ar}</span>
              </li>
              <li className="flex gap-2">
                <Clock size={18} className="flex-shrink-0 text-brand-gold" />
                <span>{STORE_INFO.workingHours.start} - {STORE_INFO.workingHours.end}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between text-sm text-gray-300">
          <div>
            © 2026 متجر الريان. جميع الحقوق محفوظة.
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <img src="/payment-methods.png" alt="Payment Methods" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
