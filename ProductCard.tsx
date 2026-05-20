import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "wouter";
import { formatPrice, getDiscountDisplay } from "@shared/utils";

interface ProductCardProps {
  id: number;
  nameAr: string;
  nameEn: string;
  price: number;
  originalPrice?: number;
  discount: number;
  imageUrl?: string;
  isBestseller?: boolean;
  isNewProduct?: boolean;
  isOnSale?: boolean;
}

export default function ProductCard({
  id,
  nameAr,
  price,
  originalPrice,
  discount,
  imageUrl,
  isBestseller,
  isNewProduct,
  isOnSale,
}: ProductCardProps) {
  const finalPrice = originalPrice ? originalPrice - (originalPrice * discount) / 100 : price;
  const discountPercent = originalPrice ? getDiscountDisplay(originalPrice, finalPrice) : discount;

  return (
    <div className="product-card group">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-muted h-48 md:h-56">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={nameAr}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <span>صورة المنتج</span>
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {isBestseller && (
            <div className="bestseller-badge">الأكثر مبيعاً</div>
          )}
          {isNewProduct && (
            <div className="bg-brand-blue text-white px-2 py-1 rounded-md text-xs font-bold">
              جديد
            </div>
          )}
          {isOnSale && (
            <div className="bg-green-500 text-white px-2 py-1 rounded-md text-xs font-bold">
              عرض خاص
            </div>
          )}
          {discount > 0 && (
            <div className="discount-badge">
              -{discountPercent}%
            </div>
          )}
        </div>

        {/* Wishlist Button */}
        <button className="absolute bottom-2 left-2 bg-white rounded-full p-2 hover:bg-brand-gold hover:text-white transition-colors shadow-md">
          <Heart size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Product Name */}
        <Link href={`/product/${id}`}>
          <h3 className="font-semibold text-sm md:text-base text-foreground hover:text-brand-gold transition line-clamp-2 mb-2">
            {nameAr}
          </h3>
        </Link>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="price-display">{formatPrice(finalPrice)}</span>
          {originalPrice && originalPrice !== finalPrice && (
            <span className="original-price">{formatPrice(originalPrice)}</span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button className="w-full btn-secondary flex items-center justify-center gap-2 text-sm md:text-base">
          <ShoppingCart size={16} />
          أضف إلى العربة
        </button>
      </div>
    </div>
  );
}
