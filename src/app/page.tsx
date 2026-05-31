"use client";

import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterCard from '@/components/sections/footer/FooterCard';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Facebook, Instagram, Twitter } from "lucide-react";

const assetMap = {
  "hero-main": {
    "url": "https://img.freepik.com/free-photo/stylish-woman-fashion-pose-urban_freepik-image.jpg",    "alt": "امرأة ترتدي ملابس أنيقة من المتجر"
  },
  "about-story": {
    "url": "https://img.freepik.com/free-photo/fashion-workshop-creative-process_freepik-image.jpg",    "alt": "fashion workshop creative process"
  },
  "feature-quality": {
    "url": "https://img.freepik.com/free-photo/high-quality-fabric-textile-texture_freepik-image.jpg",    "alt": "high quality fabric textile texture"
  },
  "feature-shipping": {
    "url": "https://img.freepik.com/free-photo/fast-delivery-package-express-service_freepik-image.jpg",    "alt": "fast delivery package express service"
  },
  "feature-support": {
    "url": "https://img.freepik.com/free-photo/customer-service-support-center-online_freepik-image.jpg",    "alt": "customer service support center online"
  },
  "product-1": {
    "url": "https://img.freepik.com/free-photo/elegant-formal-dress-red_freepik-image.jpg",    "alt": "فستان سهرة أحمر أنيق"
  },
  "product-2": {
    "url": "https://img.freepik.com/free-photo/stylish-mens-suit-blue_freepik-image.jpg",    "alt": "بدلة كلاسيكية زرقاء للرجال"
  },
  "product-3": {
    "url": "https://img.freepik.com/free-photo/casual-summer-dress-floral-pattern_freepik-image.jpg",    "alt": "فستان صيفي مزهر مريح"
  },
  "product-4": {
    "url": "https://img.freepik.com/free-photo/trendy-jeans-men-fashion-streetwear_freepik-image.jpg",    "alt": "جينز رجالي أزرق عصري"
  },
  "product-5": {
    "url": "https://img.freepik.com/free-photo/elegant-blouse-women-office-wear_freepik-image.jpg",    "alt": "بلوزة نسائية حريرية أنيقة"
  },
  "product-6": {
    "url": "https://img.freepik.com/free-photo/winter-coat-men-stylish-outerwear_freepik-image.jpg",    "alt": "معطف رجالي شتوي أنيق"
  },
  "testimonial-1": {
    "url": "https://img.freepik.com/free-photo/happy-customer-smiling-elegant_freepik-image.jpg",    "alt": "صورة سارة أحمد"
  },
  "testimonial-2": {
    "url": "https://img.freepik.com/free-photo/stylish-man-confident-look_freepik-image.jpg",    "alt": "صورة محمد خالد"
  },
  "testimonial-3": {
    "url": "https://img.freepik.com/free-photo/young-woman-excited-shopping_freepik-image.jpg",    "alt": "صورة ليلى فهد"
  },
  "testimonial-4": {
    "url": "https://img.freepik.com/free-photo/mature-woman-elegant-style_freepik-image.jpg",    "alt": "صورة أحمد محمود"
  },
  "testimonial-5": {
    "url": "https://img.freepik.com/free-photo/fashion-blogger-stylish-pose_freepik-image.jpg",    "alt": "صورة نورة سعيد"
  },
  "faq-image": {
    "url": "https://img.freepik.com/free-photo/customer-support-headset-woman_freepik-image.jpg",    "alt": "امرأة تجيب على استفسارات العملاء"
  },
  "contact-illustration": {
    "url": "https://img.freepik.com/free-photo/customer-service-contact-center_freepik-image.jpg",    "alt": "صورة توضيحية لخدمة العملاء"
  }
};

function resolveAsset(id) {
  const asset = assetMap[id];
  return asset ? asset.url : '';
}

function resolveAlt(id, defaultAlt) {
  const asset = assetMap[id];
  return asset && asset.alt ? asset.alt : defaultAlt;
}

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="compact"
      sizing="large"
      background="aurora"
      cardStyle="subtle-shadow"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="glass"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="dream store ! "
          navItems={[
            { name: "الرئيسية", id: "#hero" },
            { name: "عنا", id: "#about" },
            { name: "المنتجات", id: "#products" },
            { name: "المراجعات", id: "#testimonials" },
            { name: "الأسئلة الشائعة", id: "#faq" },
            { name: "اتصل بنا", id: "#contact" }
          ]}
          button={{
            text: "تسوق الآن",            href: "#products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="اكتشف أحدث صيحات الموضة"
          description="استمتع بتجربة تسوق فريدة مع مجموعتنا الحصرية من الملابس الأنيقة والعصرية لكل مناسبة."
          background={{
            variant: "radial-gradient"
          }}
          buttons={[
            { text: "تسوق الآن", href: "#products" },
            { text: "تعرف علينا", href: "#about" }
          ]}
          imageSrc={resolveAsset("hero-main")}
          imageAlt={resolveAlt("hero-main", "stylish woman fashion pose urban")}
          mediaAnimation="slide-up"
          imagePosition="right"
          fixedMediaHeight={true}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="قصتنا: الأناقة والجودة في كل قطعة"
          description={[
            "نؤمن بأن الموضة هي تعبير عن الذات. لذلك، نسعى لتقديم تشكيلات مميزة تجمع بين أحدث الصيحات والجودة العالية، لتلبي ذوقك الرفيع وتجعلك تتألق في كل مناسبة.",            "بدأنا رحلتنا بشغف تجاه الموضة، وهدفنا أن نجعل تجربة التسوق ممتعة وسهلة. كل قطعة في متجرنا مختارة بعناية لضمان رضاك التام."
          ]}
          buttons={[
            { text: "المزيد عنا", href: "#" }
          ]}
          useInvertedBackground={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwelve
          features={[
            { id: "quality", label: "جودة عالية", title: "خامات مختارة بعناية", items: ["أقمشة فاخرة تدوم طويلاً", "تصميمات متقنة وتفاصيل دقيقة", "راحة لا مثيل لها في الارتداء"], buttons: [{ text: "اكتشف المزيد" }] },
            { id: "shipping", label: "توصيل سريع", title: "شحن سريع وموثوق", items: ["توصيل لجميع المدن", "تتبع الشحنات في الوقت الفعلي", "خيارات شحن مرنة"], buttons: [{ text: "تفاصيل الشحن" }] },
            { id: "support", label: "دعم العملاء", title: "خدمة عملاء مميزة", items: ["مساعدة فورية عبر الدردشة", "فريق دعم متاح 24/7", "حلول سريعة لجميع استفساراتك"], buttons: [{ text: "تواصل معنا" }] }
          ]}
          animationType="slide-up"
          title="لماذا تختار متجرنا؟"
          description="نقدم لك تجربة تسوق متكاملة مع اهتمامنا بالجودة والسرعة ودعم العملاء."
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          products={[
            { id: "1", brand: "Fashionista", name: "فستان سهرة أحمر", price: "4900د.ج", rating: 5, reviewCount: "120", imageSrc: resolveAsset("product-1"), imageAlt: resolveAlt("product-1", "elegant formal dress red") },
            { id: "2", brand: "Gentleman's Choice", name: "بدلة كلاسيكية زرقاء", price: "580 ريال", rating: 4, reviewCount: "85", imageSrc: resolveAsset("product-2"), imageAlt: resolveAlt("product-2", "stylish mens suit blue") },
            { id: "3", brand: "Summer Breeze", name: "فستان صيفي مزهر", price: "180 ريال", rating: 5, reviewCount: "150", imageSrc: resolveAsset("product-3"), imageAlt: resolveAlt("product-3", "casual summer dress floral pattern") },
            { id: "4", brand: "Urban Style", name: "جينز رجالي عصري", price: "160 ريال", rating: 4, reviewCount: "90", imageSrc: resolveAsset("product-4"), imageAlt: resolveAlt("product-4", "trendy jeans men fashion streetwear") },
            { id: "5", brand: "Elegant Wear", name: "بلوزة نسائية أنيقة", price: "220 ريال", rating: 5, reviewCount: "70", imageSrc: resolveAsset("product-5"), imageAlt: resolveAlt("product-5", "elegant blouse women office wear") },
            { id: "6", brand: "Winter Collection", name: "معطف رجالي فاخر", price: "490 ريال", rating: 5, reviewCount: "60", imageSrc: resolveAsset("product-6"), imageAlt: resolveAlt("product-6", "winter coat men stylish outerwear") }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          title="اكتشف مجموعتنا الحصرية"
          description="تصفح أحدث الأزياء والملابس التي تناسب جميع الأذواق والمناسبات."
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          plans={[
            { id: "cod", badge: "الأكثر شيوعًا", name: "الدفع عند الاستلام", price: "بدون رسوم إضافية", features: ["ادفع نقداً عند استلام طلبك", "تحقق من المنتج قبل الدفع", "مرونة وراحة"], buttons: [{ text: "المزيد من التفاصيل" }] },
            { id: "online", badge: "مفضل", name: "الدفع الإلكتروني الآمن", price: "خصم 5%", features: ["استخدم بطاقتك الائتمانية/المدى", "معاملات آمنة ومشفرة", "عملية دفع سريعة وسهلة"], buttons: [{ text: "ابدأ التسوق" }] },
            { id: "installments", badge: "خيارات ميسرة", name: "الدفع بالتقسيط", price: "بدون فوائد", features: ["قسّم دفعتك على 3-6 أشهر", "برنامج تقسيط سهل", "دون أعباء مالية إضافية"], buttons: [{ text: "استكشف الخيارات" }] }
          ]}
          animationType="slide-up"
          title="اختر طريقة الدفع المفضلة لديك"
          description="نوفر لك خيارات دفع متنوعة وآمنة لتناسب جميع احتياجاتك وتضمن تجربة تسوق مريحة."
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          testimonials={[
            { id: "1", name: "سارة أحمد", handle: "@SarahFashion", testimonial: "أحببت الجودة العالية والتصميمات الفريدة للملابس. خدمة العملاء كانت رائعة والتوصيل سريع جداً. بالتأكيد سأعود للتسوق مرة أخرى!", imageSrc: resolveAsset("testimonial-1"), imageAlt: resolveAlt("testimonial-1", "happy customer smiling elegant") },
            { id: "2", name: "محمد خالد", handle: "@KhalidStyle", testimonial: "متجر رائع! وجدت بدلة أنيقة تناسب جميع مناسباتي، والمقاس كان مثالياً. تجربة تسوق سلسة وخدمة احترافية.", imageSrc: resolveAsset("testimonial-2"), imageAlt: resolveAlt("testimonial-2", "stylish man confident look") },
            { id: "3", name: "ليلى فهد", handle: "@LaylaTrends", testimonial: "تشكيلة رائعة من الفساتين الصيفية! الألوان زاهية والخامات مريحة جداً. أنصح به بشدة لكل من يبحث عن الأناقة والراحة.", imageSrc: resolveAsset("testimonial-3"), imageAlt: resolveAlt("testimonial-3", "young woman excited shopping") },
            { id: "4", name: "أحمد محمود", handle: "@AhmedElegant", testimonial: "المعطف الشتوي الذي اشتريته فاق توقعاتي. جودة ممتازة وتصميم فاخر. بالتأكيد من أفضل المتاجر التي تعاملت معها.", imageSrc: resolveAsset("testimonial-4"), imageAlt: resolveAlt("testimonial-4", "mature woman elegant style") },
            { id: "5", name: "نورة سعيد", handle: "@NouraChic", testimonial: "أناقة لا تضاهى! كل قطعة في متجرهم تحكي قصة. خدمة عملاء متعاونة جداً وسريعة الاستجابة. شكراً لكم!", imageSrc: resolveAsset("testimonial-5"), imageAlt: resolveAlt("testimonial-5", "fashion blogger stylish pose") }
          ]}
          animationType="slide-up"
          title="ماذا يقول عملاؤنا عنا؟"
          description="شهادات من عملائنا الراضين حول جودة منتجاتنا وخدماتنا المميزة."
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          names={["Vogue Arabia", "Fashion Insider", "Saudi Trends", "Riyadh Style", "Luxury Living", "Modern Chic Mag", "Gulf Fashion Week"]}
          title="ثقة من الأسماء الرائدة"
          description="فخورون بشراكاتنا وتعاوننا مع أبرز المجلات والمنصات في عالم الموضة."
          textboxLayout="default"
          useInvertedBackground={false}
          showCard={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          faqs={[
            { id: "1", title: "ما هي سياسة الإرجاع والاستبدال؟", content: "يمكنك إرجاع أو استبدال أي منتج خلال 14 يوماً من تاريخ الشراء، بشرط أن يكون المنتج في حالته الأصلية مع فاتورة الشراء." },
            { id: "2", title: "كم يستغرق توصيل الطلب؟", content: "يستغرق التوصيل عادةً من 3 إلى 5 أيام عمل داخل المدن الرئيسية، وقد يختلف قليلاً للمناطق النائية." },
            { id: "3", title: "هل يمكنني تتبع طلبي؟", content: "نعم، بمجرد شحن طلبك، ستتلقى رسالة بريد إلكتروني تحتوي على رقم تتبع يمكنك استخدامه لمتابعة حالة الشحنة." },
            { id: "4", title: "هل تتوفر خدمة الدفع عند الاستلام؟", content: "نعم، نقدم خدمة الدفع عند الاستلام في معظم المناطق داخل المملكة العربية السعودية." }
          ]}
          imageSrc={resolveAsset("faq-image")}
          imageAlt={resolveAlt("faq-image", "customer support headset woman")}
          mediaAnimation="opacity"
          mediaPosition="left"
          title="الأسئلة الأكثر شيوعاً"
          description="هنا ستجد إجابات لأكثر الأسئلة تكراراً حول منتجاتنا وخدماتنا."
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="تواصل معنا"
          description="لديك سؤال أو استفسار؟ لا تتردد في التواصل معنا وسيقوم فريق الدعم لدينا بمساعدتك."
          inputs={[
            { name: "name", type: "text", placeholder: "اسمك الكامل", required: true },
            { name: "email", type: "email", placeholder: "بريدك الإلكتروني", required: true },
            { name: "phone", type: "tel", placeholder: "رقم هاتفك (اختياري)", required: false }
          ]}
          textarea={{
            name: "message",            placeholder: "رسالتك",            rows: 4,
            required: true
          }}
          useInvertedBackground={false}
          imageSrc={resolveAsset("contact-illustration")}
          imageAlt={resolveAlt("contact-illustration", "customer service contact center")}
          mediaAnimation="opacity"
          mediaPosition="right"
          buttonText="إرسال الرسالة"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="متجر ملابس"
          copyrightText="© 2024 متجر ملابس. جميع الحقوق محفوظة."
          socialLinks={[
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook link" },
            { icon: Instagram, href: "https://www.instagram.com/crevox.designe/#", ariaLabel: "Instagram link" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter link" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}