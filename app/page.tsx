"use client";

import { useEffect } from "react";
import { ArrowDown, MessageCircle, Diamond, Award, TrendingUp, ShieldCheck, Gem, Gift, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";

const JewelleryScene = dynamic(() => import("./components/ScrollDiamond"), { ssr: false });

export default function Home() {
  // IntersectionObserver to trigger scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    document.querySelectorAll(".animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale-in").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const featureCards = [
    {
      icon: <Diamond className="w-8 h-8 text-accent" />,
      title: "100% Real Diamonds",
      description: "Physically, chemically, and optically identical to mined diamonds. Same fire, same brilliance, tested and proven."
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Certified Purity",
      description: "Every piece is strictly graded and certified by world's leading independent gemological labs (like IGI/GIA)."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Brilliant Value",
      description: "Enjoy larger, higher-quality diamonds and breathtaking designs at a smarter, more accessible value."
    }
  ];

  const purityCards = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-accent" />,
      title: "999 Purity Certified",
      description: "Guaranteed weight and fineness, backed by our 30+ year reputation."
    },
    {
      icon: <Gem className="w-8 h-8 text-accent" />,
      title: "Secure Investment",
      description: "An enduring hedge against inflation and a cornerstone of smart financial planning."
    },
    {
      icon: <Gift className="w-8 h-8 text-accent" />,
      title: "Festive & Auspicious Giving",
      description: "Beautifully packaged pieces perfect for celebrations, weddings, and generational gifting."
    }
  ];

  return (
    <main className="min-h-screen selection:bg-accent/30 relative text-primary font-sans bg-background overflow-x-hidden">

      {/* ── Floating Jewellery Background Layer ── */}
      <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
        {/* Ring – top-left, slow float */}
        <div
          className="absolute"
          style={{
            top: "6%",
            left: "-6%",
            width: "clamp(260px, 28vw, 480px)",
            animation: "jfloat1 14s ease-in-out infinite",
            opacity: 0.18,
            filter: "blur(0.5px) drop-shadow(0 0 40px #C5A05988)",
          }}
        >
          <Image
            src="/gold-ring-bg.jpg"
            alt=""
            width={480}
            height={480}
            className="w-full h-auto rounded-full object-cover"
            priority
          />
        </div>

        {/* Pendant – bottom-right, slow float offset */}
        <div
          className="absolute"
          style={{
            bottom: "8%",
            right: "-5%",
            width: "clamp(220px, 24vw, 420px)",
            animation: "jfloat2 18s ease-in-out infinite",
            opacity: 0.16,
            filter: "blur(0.5px) drop-shadow(0 0 40px #C5A05988)",
          }}
        >
          <Image
            src="/gold-pendant-bg.jpg"
            alt=""
            width={420}
            height={420}
            className="w-full h-auto rounded-full object-cover"
          />
        </div>

        {/* Ring duplicate – mid-right faded, for depth */}
        <div
          className="absolute"
          style={{
            top: "38%",
            right: "-8%",
            width: "clamp(180px, 18vw, 320px)",
            animation: "jfloat3 22s ease-in-out infinite",
            opacity: 0.10,
            filter: "blur(1.5px) drop-shadow(0 0 30px #C5A05966)",
          }}
        >
          <Image
            src="/gold-ring-bg.jpg"
            alt=""
            width={320}
            height={320}
            className="w-full h-auto rounded-full object-cover"
          />
        </div>

        {/* Pendant duplicate – top-right faded */}
        <div
          className="absolute"
          style={{
            top: "12%",
            right: "4%",
            width: "clamp(140px, 14vw, 240px)",
            animation: "jfloat1 20s ease-in-out infinite reverse",
            opacity: 0.09,
            filter: "blur(2px) drop-shadow(0 0 24px #C5A05955)",
          }}
        >
          <Image
            src="/gold-pendant-bg.jpg"
            alt=""
            width={240}
            height={240}
            className="w-full h-auto rounded-full object-cover"
          />
        </div>
      </div>

      {/* 3D Gold Jewellery – fixed background layer */}
      <JewelleryScene />

      {/* Hero Section */}
      <section className="relative z-[2] h-screen w-full overflow-hidden bg-black">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          {/* Mobile Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover md:hidden"
          >
            <source src="/Diamond_necklace_on_velvet_bust_20261007093533.mp4" type="video/mp4" />
          </video>
          {/* Desktop Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover hidden md:block"
          >
            <source src="/Diamond_necklace_on_velvet_bust_20261007080401.mp4" type="video/mp4" />
          </video>
          {/* Removed overlay to make video completely clear */}
          {/* Subtle golden shimmer line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[2px]"
            style={{
              background: "linear-gradient(90deg, transparent, #C5A059, transparent)",
              backgroundSize: "200% 100%",
              animation: "shimmer 4s linear infinite",
            }}
          ></div>
        </div>

        {/* Logo at the top */}
        <div className="absolute top-6 md:top-8 left-0 right-0 z-20 flex justify-center pointer-events-auto">
          <Image
            src="/logo2.jpg"
            alt="Amardeep Jewellers Logo"
            width={80}
            height={80}
            className="rounded-full shadow-lg border border-white/20 w-16 h-16 md:w-20 md:h-20 object-cover"
          />
        </div>

        {/* Top Heading */}
        <div className="absolute top-28 md:top-36 left-0 right-0 z-10 max-w-5xl mx-auto px-4 md:px-6 text-center pointer-events-auto">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] animate-hero">
            30+ Years of Jewellery Trust, <br className="hidden md:block" />
            <span className="italic text-accent drop-shadow-md">Reimagined for the Future</span>
          </h1>
        </div>

        {/* Bottom Buttons */}
        <div className="absolute bottom-12 md:bottom-16 left-0 right-0 z-10 max-w-5xl w-full mx-auto px-4 md:px-6 pointer-events-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-hero-delay-1">
            <a href="https://wa.me/message" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-4 bg-white text-primary hover:bg-gray-100 transition-all rounded-sm uppercase tracking-widest text-sm font-bold w-full sm:w-auto justify-center group shadow-lg">
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Connect on WhatsApp
            </a>
            <a href="#solitaires" className="flex items-center gap-2 px-8 py-4 bg-black/40 backdrop-blur-md border border-white/40 text-white hover:bg-white hover:text-primary transition-all rounded-sm uppercase tracking-widest text-sm font-bold w-full sm:w-auto justify-center shadow-lg">
              Explore Solitaires
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative z-10 py-16 md:py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center space-y-6 text-primary/85 md:text-xl leading-relaxed font-medium animate-on-scroll">
          <p>
            For over three decades, our family has had the privilege of being part of your most cherished milestones. Built on a foundation of uncompromised craftsmanship and trust, we are proud to write our next chapter.
          </p>
          <p>
            Stepping forward into a modern era, we are transforming our store into a dedicated destination for certified, brilliant, and sustainable lab-grown diamond jewellery—bringing you uncompromising luxury, purity, and beauty at a smarter value for today&apos;s conscious buyer.
          </p>
        </div>
      </section>

      {/* Section 2: The Future of Fine Jewellery */}
      <section className="relative z-10 py-16 md:py-32 px-6 overflow-hidden">
        {/* Mobile Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none md:hidden">
          <Image
            src="/diamonds_scattered_bg.jpg"
            alt="Glamorous Diamond Jewelry"
            fill
            className="object-cover opacity-100 object-center"
          />
          <div className="absolute inset-0 bg-white/10"></div>
        </div>

        {/* Desktop Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
          <Image
            src="/diamond_edges_bg.jpg"
            alt="Glamorous Diamond Jewelry"
            fill
            className="object-cover opacity-100 object-center"
          />
          <div className="absolute inset-0 bg-white/20"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-20 animate-on-scroll max-w-4xl mx-auto bg-white/85 backdrop-blur-md p-6 md:p-12 rounded-xl shadow-2xl border border-white/50">
            <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-4 md:mb-6 text-primary">
              The Future of Fine Jewellery
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <h3 className="text-xl md:text-2xl font-serif text-accent mb-6 font-medium">
              Chandigarh&apos;s very first exclusive lab-grown diamond store
            </h3>
            <p className="text-primary/90 md:text-lg mb-6 leading-relaxed font-medium">
              We are proud to pioneer a sustainable, brilliant new era of luxury in the region—combining our 30-year legacy with modern innovation.
            </p>
            <p className="text-primary/90 md:text-lg leading-relaxed font-medium">
              Our Lab Grown diamonds possess the exact same physical, chemical, and optical brilliance as mined diamonds—entirely conflict-free, environmentally responsible, and crafted for the conscious luxury buyer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featureCards.map((card, idx) => (
              <div
                key={idx}
                className={`animate-on-scroll stagger-${idx + 1} p-8 border border-primary/10 hover:border-accent/50 transition-colors bg-white/80 backdrop-blur-md shadow-sm flex flex-col items-center text-center group`}
              >
                <div className="mb-6 p-4 rounded-full bg-background border border-primary/5 group-hover:bg-accent/5 transition-colors">
                  {card.icon}
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">{card.title}</h3>
                <p className="text-primary/70 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: The Solitaire Curation */}
      <section id="solitaires" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-left relative aspect-square md:aspect-[4/5] lg:aspect-square overflow-hidden shadow-2xl">
              <Image
                src="/solitaire-macro.jpg"
                alt="Ultra-close-up of a pristine solitaire ring"
                fill
                className="object-cover"
              />
            </div>

            <div className="animate-slide-right space-y-6 md:space-y-8 bg-background/80 backdrop-blur-md p-6 md:p-8 rounded-sm">
              <div>
                <h2 className="text-accent uppercase tracking-widest text-xs md:text-sm font-semibold mb-2">The Solitaire Curation</h2>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-5xl font-semibold mb-4 md:mb-6">Uncompromising Brilliance, Certified Shine</h3>
                <div className="w-16 h-[2px] bg-accent/50 mb-6"></div>
                <p className="text-primary/80 md:text-lg leading-relaxed mb-6">
                  For three decades, our name has been synonymous with trust. We hand-select elite, conflict-free lab grown diamond solitaires (D-F color, VVS clarity) meeting the world&apos;s most highest standards. Every diamond of 0.75 carats and above is accompanied by an IGI certification.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-primary/90 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    Rigorous 4Cs Evaluation (Cut, Color, Clarity, Carat)
                  </li>
                  <li className="flex items-center gap-3 text-primary/90 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    Bespoke 18k Gold Mountings
                  </li>
                </ul>
              </div>

              <a href="https://wa.me/message" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-background hover:bg-primary/90 transition-all rounded-sm uppercase tracking-widest text-sm font-medium group">
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Chat with Us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Exclusive Collection */}
      <section className="relative z-10 py-24 px-6 bg-primary text-background overflow-hidden">
        {/* Subtle patterned background or gradient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-on-scroll">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-semibold mb-4 md:mb-6">Elevate Every Moment with Our Exclusive Collection</h2>
            <p className="text-background/80 text-sm md:text-lg">
              From stunning solitaire rings to brilliant tennis bracelets, our new collection is now available at our showroom. Because true luxury is personal, we curate directly for you.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-6 mb-16">
            <div className="animate-scale-in relative aspect-video md:aspect-[21/9] overflow-hidden rounded-sm group shadow-2xl">
              <Image
                src="/solitaire-collection.jpg"
                alt="Luxury diamond jewellery collection"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-8">
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-2 text-white">The Signature Collection</h3>
                  <p className="text-white/80">Discover unparalleled craftsmanship</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="https://wa.me/message" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary hover:bg-white transition-all rounded-sm uppercase tracking-widest text-sm font-medium group">
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Connect with our experts
            </a>
          </div>
        </div>
      </section>

      {/* Section 5: Purity You Can Measure */}
      <section className="relative z-10 py-16 md:py-32 px-6 overflow-hidden">
        {/* Mobile Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none md:hidden">
          <Image
            src="/real_coins_scattered.jpg"
            alt="Gold and Silver Coins"
            fill
            className="object-cover opacity-100 object-center"
          />
          <div className="absolute inset-0 bg-white/10"></div>
        </div>

        {/* Desktop Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
          <Image
            src="/real_coins_edges.jpg"
            alt="Gold and Silver Coins"
            fill
            className="object-cover opacity-100 object-center"
          />
          <div className="absolute inset-0 bg-white/20"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-20 animate-on-scroll max-w-4xl mx-auto bg-white/85 backdrop-blur-md p-6 md:p-12 rounded-xl shadow-2xl border border-white/50 md:border-primary/10">
            <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-4 md:mb-6 text-primary">
              Purity You Can Measure
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <h3 className="text-xl md:text-2xl font-serif text-accent mb-6 font-medium">
              Certified Gold & Silver Coins
            </h3>
            <p className="text-primary/90 md:text-lg leading-relaxed font-medium mb-8">
              Alongside our modern lab-grown diamond collections, we maintain our unwavering commitment to absolute purity. Whether you are looking to secure a safe-haven asset for your investment portfolio or searching for the auspicious gift of pure precious metals for the festive season, our store offers certified 999-purity gold and silver coins with transparent, real-time pricing.
            </p>
            
            <a href="https://wa.me/message" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-background transition-all rounded-sm uppercase tracking-widest text-sm font-medium group mx-auto">
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Inquire About Daily Rates
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {purityCards.map((card, idx) => (
              <div
                key={idx}
                className={`animate-on-scroll stagger-${idx + 1} p-8 border border-accent/20 bg-white shadow-sm hover:shadow-md transition-all group`}
              >
                <div className="mb-6">{card.icon}</div>
                <h3 className="font-serif text-xl font-medium mb-3 text-primary">{card.title}</h3>
                <p className="text-primary/70">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer & Showroom Location */}
      <footer className="relative z-10 bg-primary text-background border-t border-accent/20 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-6 text-accent">Amardeep Jewellers</h3>
            <div className="space-y-4 text-background/80">
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>
                  Amardeep Jewellers<br />
                  SCO 178, Sector 37C<br />
                  Chandigarh<br />
                  Ph: 9316868680
                </span>
              </p>
              <p className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>
                  11 AM to 7:30 PM <br />
                  (Monday to Saturday, Sunday Closed)
                </span>
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <a href="https://maps.app.goo.gl/2ibnuET2XFuW98HJ7?g_st=ic" target="_blank" rel="noreferrer" className="text-accent hover:text-white underline underline-offset-4 text-sm font-medium transition-colors w-fit">
                Get Directions on Google Maps
              </a>
              <a href="https://www.instagram.com/amardeepjewellers01?stkn=MTQxc2k1NWd0MXppbA==" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-accent hover:text-white text-sm font-medium transition-colors w-fit">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                  <defs>
                    <linearGradient id="ig-grad" x1="0.1" y1="0.9" x2="0.9" y2="0.1">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig-grad)" />
                  <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" stroke="white" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.6" />
                  <circle cx="16.5" cy="7.5" r="1" fill="white" />
                </svg>
                <span>Follow us on Instagram</span>
              </a>
            </div>
          </div>

          <div className="h-48 md:h-full min-h-[250px] rounded-sm overflow-hidden border border-accent/10">
            <iframe
              src="https://maps.google.com/maps?q=Amardeep%20Jewellers,%20SCO%20178,%20Sector%2037C,%20Chandigarh&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Amardeep Jewellers Location"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-8 border-t border-background/10 text-center text-background/40 text-xs md:text-sm">
          <p>© 2026 Amardeep Jewellers. Amardeep Jewellers is the retail trade name of Amardeep Jewelmark & Diamond Pvt Ltd.</p>
          <p className="mt-1">GSTIN: 04ABKFA1058MIZF. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
