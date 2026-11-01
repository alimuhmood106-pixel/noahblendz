/* =====================================================================
 * NOAHBLENDZ — EDITABLE CONTENT
 * Prices, hours, phone, links and photos all live here.
 * ===================================================================== */
import fade from "@/assets/barber-fade.jpg.asset.json";
import cutting from "@/assets/barber-cutting.jpg.asset.json";
import barberPortrait from "@/assets/barber-barber-portrait.jpg.asset.json";
import sideprofile from "@/assets/barber-sideprofile.jpg.asset.json";
import curly from "@/assets/barber-portrait-curly.jpg.asset.json";
import comb from "@/assets/barber-closeup-comb.jpg.asset.json";
import blowdry from "@/assets/barber-blowdry.jpg.asset.json";
import texturedFringe from "@/assets/textured-fringe.png.asset.json";
import kidsTextured from "@/assets/kids-textured-cut.png.asset.json";
import freestyleFade from "@/assets/freestyle-fade.png.asset.json";

export type Lang = "en" | "ku" | "ar";

export const SITE = {
  name: "NoahBlendz",
  phoneDisplay: "+964 773 457 7053",
  phoneHref: "tel:+9647734577053",
  instagram: "https://www.instagram.com/nawabarber/",
  instagramHandle: "@nawabarber",
  directions:
    "https://www.google.com/maps/search/?api=1&query=NoahBlendz%20Majidi%20Mall%2C%20Sulaymaniyah%2C%20Sulaymaniyah%20Governorate%2C%2046001",
  mapEmbed: "https://www.google.com/maps?q=Majidi+Mall+Sulaymaniyah&output=embed",
  address: "Majidi Mall, Sulaymaniyah, Sulaymaniyah Governorate, 46001, Iraq",
  shareImage:
    "https://id-preview--819756bc-fa15-4ba8-8bd0-eb9ca67a755b.lovable.app" + fade.url,
};

/* ---- Services: one price list, edit freely ---- */
export const SERVICES: { price: string; name: Record<Lang, string> }[] = [
  { price: "15,000 IQD", name: { en: "Classic Haircut", ku: "قژبڕینی کلاسیک", ar: "قصة كلاسيكية" } },
  { price: "15,000 IQD", name: { en: "Skin Fade", ku: "سکین فەید", ar: "سكن فيد" } },
  { price: "15,000 IQD", name: { en: "Taper Fade", ku: "تەیپەر فەید", ar: "تيبر فيد" } },
  { price: "15,000 IQD", name: { en: "Textured / Curly Cut", ku: "قژی لوول / تێکسچەر", ar: "قصة الشعر الكيرلي / تكستشر" } },
  { price: "15,000 IQD", name: { en: "Scissor Cut & Style", ku: "قژبڕین بە مەقەست و ستایل", ar: "قص بالمقص وتصفيف" } },
  { price: "15,000 IQD", name: { en: "Kids Cut", ku: "قژبڕینی منداڵان", ar: "قصة أطفال" } },
];

/* ---- Hours: PLACEHOLDER — replace with real hours ---- */
export const HOURS: { days: Record<Lang, string>; time: string }[] = [
  { days: { en: "Sat – Thu", ku: "شەممە – پێنجشەممە", ar: "السبت – الخميس" }, time: "11:00 – 22:00" },
  { days: { en: "Friday", ku: "هەینی", ar: "الجمعة" }, time: "15:00 – 22:00" },
];

/* ---- Photos ---- */
export const PHOTOS = {
  texturedFringe: { src: texturedFringe.url, alt: "Fresh textured fringe with tapered sides" },
  kidsTextured: { src: kidsTextured.url, alt: "Smiling young client with a textured haircut" },
  freestyleFade: { src: freestyleFade.url, alt: "Side view of a textured cut with a shaved freestyle design" },
  fade: { src: fade.url, alt: "Low skin fade with textured top in front of the graffiti NOAH BLENDZ wall" },
  cutting: { src: cutting.url, alt: "Noah cutting a client's hair with gold scissors and a comb" },
  barber: { src: barberPortrait.url, alt: "Noah standing with arms crossed, mall lights behind him at night" },
  side: { src: sideprofile.url, alt: "Side profile of a client with a slicked-back, side-swept cut" },
  curly: { src: curly.url, alt: "Young man with a fresh curly cut in a striped shirt" },
  comb: { src: comb.url, alt: "Close-up of a comb lifting wet hair before the cut" },
  blowdry: { src: blowdry.url, alt: "Noah styling curly hair with a red blow dryer" },
};

/* ---- Copy in three languages ---- */
export const COPY = {
  en: {
    nav: { services: "Services", gallery: "Gallery", visit: "Visit", book: "Book" },
    hero: {
      tagline: "Clean blends. Sharp lines. Sulaymaniyah.",
      ig: "Book on Instagram",
      call: "Call Now",
      where: "Majidi Mall, Sulaymaniyah",
    },
    about: {
      eyebrow: "The chair",
      title: "No rush. No guessing.",
      body: [
        "Every cut starts with a conversation. You tell me what you want, how you wear it, what didn't work last time. Then I get to work.",
        "Old-school technique, scissors and clippers, mixed with what's actually happening in hair right now. Clean fades, real texture, lines that stay sharp for weeks.",
        "Small details are the whole job. That's where the time goes.",
      ],
      sign: "— Noah",
    },
    services: { eyebrow: "Price list", title: "Haircuts", note: "One price. Every cut gets the same attention." },
    gallery: { eyebrow: "Recent work", title: "Out of the chair", more: "See more on Instagram" },
    book: {
      eyebrow: "How to book",
      title: "Three steps.",
      steps: [
        ["DM or call", "Send a message on Instagram or give us a call."],
        ["Pick your time", "We'll find a slot that works for you."],
        ["Walk in, walk out sharp", "Show up on time. Leave looking right."],
      ],
      warn: "Book ahead. Spots fill up fast.",
    },
    visit: {
      eyebrow: "Visit",
      title: "Find the shop",
      directions: "Get Directions",
      hours: "Hours",
      hoursNote: "Hours may change on holidays. DM to confirm.",
      phone: "Phone",
      address: "Majidi Mall, Sulaymaniyah, 46001, Iraq",
    },
    cta: { title: "Ready for a fresh cut?" },
    footer: { rights: "© 2026 NoahBlendz" },
  },
  ku: {
    nav: { services: "خزمەتگوزاری", gallery: "وێنەکان", visit: "سەردان", book: "کات بگرە" },
    hero: {
      tagline: "فەیدی پاک. هێڵی تیژ. سلێمانی.",
      ig: "لە ئینستاگرام کات بگرە",
      call: "ئێستا پەیوەندی بکە",
      where: "مەجیدی مۆڵ، سلێمانی",
    },
    about: {
      eyebrow: "کورسییەکە",
      title: "پەلە نییە. مەزەندە نییە.",
      body: [
        "هەموو قژبڕینێک بە قسەکردن دەست پێدەکات. پێم دەڵێیت چیت دەوێت، چۆن قژت دادەنێیت، جاری پێشوو چی باش نەبوو. ئینجا دەست بە کار دەکەم.",
        "تەکنیکی کۆن، مەقەست و مەکینە، تێکەڵ لەگەڵ ئەوەی ئێستا لە دونیای قژدا هەیە. فەیدی پاک، تێکسچەری ڕاستەقینە، هێڵ کە بۆ چەند هەفتەیەک تیژ دەمێنێتەوە.",
        "وردەکارییەکان هەموو کارەکەن. کاتەکە لەوێدا دەڕوات.",
      ],
      sign: "— نۆح",
    },
    services: { eyebrow: "لیستی نرخ", title: "قژبڕین", note: "یەک نرخ. هەموو قژبڕینێک هەمان گرنگی پێدەدرێت." },
    gallery: { eyebrow: "کارە نوێکان", title: "لە کورسییەکەوە", more: "زیاتر لە ئینستاگرام ببینە" },
    book: {
      eyebrow: "چۆن کات بگریت",
      title: "سێ هەنگاو.",
      steps: [
        ["نامە بنێرە یان پەیوەندی بکە", "لە ئینستاگرام نامە بنێرە یان تەلەفۆن بکە."],
        ["کاتەکەت هەڵبژێرە", "کاتێک دەدۆزینەوە کە بۆت گونجاو بێت."],
        ["وەرە، بە ڕێکی بڕۆ", "لە کاتی خۆیدا وەرە. بە شێوەیەکی ڕێک بڕۆ."],
      ],
      warn: "پێشوەختە کات بگرە. شوێنەکان زوو پڕ دەبن.",
    },
    visit: {
      eyebrow: "سەردان",
      title: "دوکانەکە بدۆزەوە",
      directions: "ڕێنمایی ڕێگا",
      hours: "کاتەکانی کار",
      hoursNote: "لە پشووەکاندا کاتەکان دەگۆڕێن. نامە بنێرە بۆ دڵنیابوون.",
      phone: "تەلەفۆن",
      address: "مەجیدی مۆڵ، سلێمانی، ٤٦٠٠١، عێراق",
    },
    cta: { title: "ئامادەیت بۆ قژبڕینێکی نوێ؟" },
    footer: { rights: "© 2026 NoahBlendz" },
  },
  ar: {
    nav: { services: "الخدمات", gallery: "الصور", visit: "زورنا", book: "احجز" },
    hero: {
      tagline: "فيد نظيف. خطوط حادة. السليمانية.",
      ig: "احجز عبر إنستغرام",
      call: "اتصل الآن",
      where: "مجيدي مول، السليمانية",
    },
    about: {
      eyebrow: "الكرسي",
      title: "بدون استعجال. بدون تخمين.",
      body: [
        "كل قصة تبدأ بحديث. تخبرني ماذا تريد، كيف ترتّب شعرك، وما الذي لم ينجح في المرة السابقة. بعدها أبدأ الشغل.",
        "تقنية تقليدية بالمقص والماكينة، ممزوجة بأحدث ما يحدث في عالم الشعر. فيد نظيف، تكستشر حقيقي، وخطوط تبقى حادة لأسابيع.",
        "التفاصيل الصغيرة هي الشغل كله. وهناك يذهب الوقت.",
      ],
      sign: "— نوح",
    },
    services: { eyebrow: "قائمة الأسعار", title: "قصات الشعر", note: "سعر واحد. كل قصة تأخذ نفس الاهتمام." },
    gallery: { eyebrow: "أعمال حديثة", title: "من الكرسي", more: "شاهد المزيد على إنستغرام" },
    book: {
      eyebrow: "طريقة الحجز",
      title: "ثلاث خطوات.",
      steps: [
        ["راسلنا أو اتصل", "أرسل رسالة على إنستغرام أو اتصل بنا."],
        ["اختر وقتك", "نجد لك موعدًا يناسبك."],
        ["ادخل، واطلع مرتّب", "تعال في موعدك. واطلع بأفضل شكل."],
      ],
      warn: "احجز مسبقًا. المواعيد تمتلئ بسرعة.",
    },
    visit: {
      eyebrow: "زورنا",
      title: "موقع المحل",
      directions: "احصل على الاتجاهات",
      hours: "ساعات العمل",
      hoursNote: "قد تتغير الساعات في العطل. راسلنا للتأكيد.",
      phone: "الهاتف",
      address: "مجيدي مول، السليمانية، ٤٦٠٠١، العراق",
    },
    cta: { title: "جاهز لقصة جديدة؟" },
    footer: { rights: "© 2026 NoahBlendz" },
  },
} as const;
