-- ============================================
-- متجر الريان - قاعدة البيانات
-- ============================================

-- إنشاء قاعدة البيانات
CREATE DATABASE IF NOT EXISTS alrayan_store CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE alrayan_store;

-- جداول المستخدمين
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  openId VARCHAR(64) UNIQUE NOT NULL,
  name TEXT,
  email VARCHAR(320),
  loginMethod VARCHAR(64),
  role ENUM('user', 'admin') DEFAULT 'user' NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  lastSignedIn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- جدول الفئات
CREATE TABLE IF NOT EXISTS categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nameAr VARCHAR(255) NOT NULL,
  nameEn VARCHAR(255) NOT NULL,
  descriptionAr TEXT,
  descriptionEn TEXT,
  slug VARCHAR(255) UNIQUE NOT NULL,
  imageUrl TEXT,
  displayOrder INT DEFAULT 0,
  isActive BOOLEAN DEFAULT true,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- جدول المنتجات
CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  categoryId INT NOT NULL,
  nameAr VARCHAR(255) NOT NULL,
  nameEn VARCHAR(255) NOT NULL,
  descriptionAr TEXT,
  descriptionEn TEXT,
  sku VARCHAR(100) UNIQUE NOT NULL,
  price DECIMAL(10,3) NOT NULL,
  originalPrice DECIMAL(10,3),
  discount INT DEFAULT 0,
  imageUrl TEXT,
  imageUrls JSON DEFAULT '[]',
  quantity INT DEFAULT 0,
  minOrderQuantity INT DEFAULT 1,
  maxOrderQuantity INT,
  isBestseller BOOLEAN DEFAULT false,
  isNewProduct BOOLEAN DEFAULT false,
  isOnSale BOOLEAN DEFAULT false,
  isActive BOOLEAN DEFAULT true,
  displayOrder INT DEFAULT 0,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- جدول العروض
CREATE TABLE IF NOT EXISTS promotions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titleAr VARCHAR(255) NOT NULL,
  titleEn VARCHAR(255) NOT NULL,
  descriptionAr TEXT,
  descriptionEn TEXT,
  type ENUM('weekly', 'bulk', 'seasonal', 'special') NOT NULL,
  imageUrl TEXT,
  discountPercentage INT,
  discountAmount DECIMAL(10,3),
  minPurchaseAmount DECIMAL(10,3),
  startDate TIMESTAMP NOT NULL,
  endDate TIMESTAMP NOT NULL,
  isActive BOOLEAN DEFAULT true,
  displayOrder INT DEFAULT 0,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- جدول عربة التسوق
CREATE TABLE IF NOT EXISTS cartItems (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  productId INT NOT NULL,
  quantity INT NOT NULL,
  priceAtAddTime DECIMAL(10,3) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- جدول الطلبات
CREATE TABLE IF NOT EXISTS orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  orderNumber VARCHAR(50) UNIQUE NOT NULL,
  status ENUM('pending', 'confirmed', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending' NOT NULL,
  totalAmount DECIMAL(10,3) NOT NULL,
  discountAmount DECIMAL(10,3) DEFAULT 0,
  shippingCost DECIMAL(10,3) DEFAULT 0,
  finalAmount DECIMAL(10,3) NOT NULL,
  customerName VARCHAR(255) NOT NULL,
  customerEmail VARCHAR(320) NOT NULL,
  customerPhone VARCHAR(20) NOT NULL,
  shippingAddress TEXT NOT NULL,
  notes TEXT,
  items JSON NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- جدول الاستفسارات
CREATE TABLE IF NOT EXISTS contactInquiries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(320) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status ENUM('new', 'read', 'replied') DEFAULT 'new' NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- جدول التقييمات
CREATE TABLE IF NOT EXISTS reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  productId INT NOT NULL,
  userId INT NOT NULL,
  rating INT NOT NULL,
  titleAr VARCHAR(255),
  titleEn VARCHAR(255),
  reviewAr TEXT,
  reviewEn TEXT,
  isVerifiedPurchase BOOLEAN DEFAULT false,
  isApproved BOOLEAN DEFAULT false,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ============================================
-- بيانات تجريبية
-- ============================================

-- إضافة فئات
INSERT INTO categories (nameAr, nameEn, slug, displayOrder, isActive) VALUES
('المناديل والمناشف', 'Tissues & Towels', 'tissues-towels', 1, true),
('المنظفات والمعطرات', 'Cleaners & Fragrances', 'cleaners-fragrances', 2, true),
('تغليف وحفظ الأطعمة', 'Food Wrapping & Storage', 'food-wrapping', 3, true),
('البهارات والحبوب', 'Spices & Grains', 'spices-grains', 4, true),
('منتجات الوقاية', 'Protection Products', 'protection-products', 5, true),
('أدوات المطبخ', 'Kitchen Tools', 'kitchen-tools', 6, true);

-- إضافة منتجات تجريبية
INSERT INTO products (categoryId, nameAr, nameEn, sku, price, originalPrice, discount, quantity, minOrderQuantity, isBestseller, isActive) VALUES
(1, 'كرتون شد 25 حبة مناشف يد مطوية كويتنا', 'Box of 25 Folded Hand Towels', 'PROD-001', 4.000, 4.400, 9, 100, 1, true, true),
(1, 'كرتون شد 50 حبة كلينكس علب كواليتي 150 ورقة', 'Box of 50 Kleenex Quality 150 Sheets', 'PROD-002', 6.750, 7.500, 10, 80, 1, true, true),
(2, 'قفاز يدين فينيل 100 قفاز', 'Vinyl Gloves 100 Pieces', 'PROD-003', 1.750, 2.700, 35, 200, 1, true, true),
(3, 'كرتون 40 حبة أكياس مناديل ورقية آسيا 600 ورقة', 'Box of 40 Asia Tissue Bags 600 Sheets', 'PROD-004', 6.250, 6.500, 4, 60, 1, false, true),
(3, 'بلاستيك تغليف الطعام كويتنا 45 سم', 'Al-Rayan Food Wrap 45cm', 'PROD-005', 2.500, 3.000, 17, 150, 1, false, true),
(3, 'قصدير كويتنا 600 × 45 سم أزرق فاتح', 'Al-Rayan Aluminum Foil 600x45cm', 'PROD-006', 2.950, 3.500, 16, 120, 1, true, true),
(2, 'معطر حمام كواليتي 120 جم كورة', 'Quality Bathroom Freshener 120g', 'PROD-007', 1.000, 1.200, 17, 300, 1, false, true),
(3, 'ورق الزبدة كويتنا 30 سم', 'Al-Rayan Parchment Paper 30cm', 'PROD-008', 1.350, 1.650, 18, 180, 1, false, true);

-- إضافة عروض
INSERT INTO promotions (titleAr, titleEn, type, discountPercentage, startDate, endDate, isActive, displayOrder) VALUES
('عرض الأسبوع', 'Weekly Offer', 'weekly', 20, NOW(), DATE_ADD(NOW(), INTERVAL 7 DAY), true, 1),
('عروض الجملة', 'Bulk Offers', 'bulk', 15, NOW(), DATE_ADD(NOW(), INTERVAL 30 DAY), true, 2),
('عرض موسمي', 'Seasonal Sale', 'seasonal', 30, NOW(), DATE_ADD(NOW(), INTERVAL 60 DAY), true, 3);

-- ============================================
-- النهاية
-- ============================================
