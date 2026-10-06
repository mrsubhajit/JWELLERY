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
    <main className="min-h-screen selection:bg-accent/30 relative text-primary font-sans bg-background">

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
      <section className="relative z-[2] h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-bg.jpg"
            className="absolute inset-0 w-full h-full object-cover scale-105"
          >
            <source src="/Model_wearing_white_dress_and_20261006173457.mp4" type="video/mp4" />
          </video>
          {/* Dark cinematic gradient overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70"></div>
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

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20 pointer-events-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-primary mb-6 leading-tight drop-shadow-sm animate-hero">
            30+ Years of Jewellery Trust, <br className="hidden md:block"/>
            <span className="italic text-accent">Reimagined for the Future</span>
          </h1>

          <div className="max-w-3xl mx-auto space-y-6 text-primary/80 md:text-lg mb-10 animate-hero-delay-1">
            <p>
              For over three decades, our family has had the privilege of being part of your most cherished milestones. Built on a foundation of uncompromised craftsmanship and trust, we are proud to write our next chapter.
            </p>
            <p>
              Stepping forward into a modern era, we are transforming our store into a dedicated destination for certified, brilliant, and sustainable lab-grown diamond jewellery—bringing you uncompromising luxury, purity, and beauty at a smarter value for today&apos;s conscious buyer.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-hero-delay-2">
            <a href="https://wa.me/message" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-4 bg-primary text-background hover:bg-primary/90 transition-all rounded-sm uppercase tracking-widest text-sm font-medium w-full sm:w-auto justify-center group">
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Connect on WhatsApp
            </a>
            <a href="#solitaires" className="flex items-center gap-2 px-8 py-4 border border-accent text-primary hover:bg-accent hover:text-background transition-all rounded-sm uppercase tracking-widest text-sm font-medium w-full sm:w-auto justify-center">
              Explore Solitaires
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: The Future of Fine Jewellery */}
      <section id="solitaires" className="relative z-10 py-24 px-6 bg-background/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4">The Future of Fine Jewellery</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
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
      <section className="relative z-10 py-20 px-6">
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
            
            <div className="animate-slide-right space-y-8 bg-background/80 backdrop-blur-md p-8 rounded-sm">
              <div>
                <h2 className="text-accent uppercase tracking-widest text-sm font-semibold mb-2">The Solitaire Curation</h2>
                <h3 className="font-serif text-3xl md:text-5xl font-semibold mb-6">Uncompromising Brilliance, Certified Shine</h3>
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
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-6">Elevate Every Moment with Our Exclusive Collection</h2>
            <p className="text-background/80 md:text-lg">
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
      <section className="relative z-10 py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16 animate-on-scroll">
            <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-6 text-primary">Purity You Can Measure: Certified Gold & Silver Coins</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-primary/80 md:text-lg leading-relaxed">
              Alongside our modern lab-grown diamond collections, we maintain our unwavering commitment to absolute purity. Whether you are looking to secure a safe-haven asset for your investment portfolio or searching for the auspicious gift of pure precious metals for the festive season, our store offers certified 999-purity gold and silver coins with transparent, real-time pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
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

          <div className="text-center">
            <a href="https://wa.me/message" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-background transition-all rounded-sm uppercase tracking-widest text-sm font-medium group">
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Inquire About Daily Rates on WhatsApp
            </a>
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
                  123 Luxury Lane, Diamond District<br/>
                  City Center, State 400001
                </span>
              </p>
              <p className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>
                  11 AM to 7:30 PM <br/>
                  (Monday to Saturday, Sunday Closed)
                </span>
              </p>
            </div>
            
            <div className="mt-8">
               <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-accent hover:text-white underline underline-offset-4 text-sm font-medium transition-colors">
                 Get Directions on Google Maps
               </a>
            </div>
          </div>
          
          <div className="h-48 md:h-full min-h-[250px] rounded-sm overflow-hidden border border-accent/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353!3d-37.8162797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0x0!2zQW1hcmRlZXAgSmV3ZWxsZXJz!5e0!3m2!1sen!2sin!4v1696000000000!5m2!1sen!2sin"
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
          <p className="mt-1">GSTIN: 27AABCA1234D1Z5. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
