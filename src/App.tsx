/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Instagram, Facebook, Clock, Music, Pizza, Wine, ChefHat } from 'lucide-react';

const content = {
  es: {
    nav: { home: "Inicio", menu: "Menú", about: "Nosotros", location: "Ubicación", contact: "Contacto", order: "Ordenar" },
    hero: {
      subtitle: "Restaurante · Bar · Pizzería · Horno de leña",
      desc: "Una experiencia gastronómica con sabores únicos, música, comedia y momentos inolvidables en Quito.",
      orderBtn: "Ordenar ahora",
      reserveBtn: "Reservar por WhatsApp",
    },
    about: {
      title: "Cocina Guapuleña",
      subtitle: "Esencia Artesanal",
      desc1: "Desde el calor de nuestro tradicional horno de leña hasta las risas de nuestros shows, cada detalle en Ananké está diseñado para ser inolvidable.",
      desc2: "Nuestra cocina de autor fusiona ingredientes locales con técnicas artesanales, creando pizzas de masa madre inigualables y platos que cuentan una historia.",
      desc3: "Las noches se llenan de magia con música en vivo, shows de comedia, y una mixología pensada para despertar los sentidos en un ambiente exclusivo y acogedor.",
      badge1: "Guápulo - El origen",
      badge2: "González Suárez - Casa urbana"
    },
    menu: {
      title: "Nuestra Oferta",
      pizza: { tag: "Especialidad", title: "Pizzas al Horno", desc: "Masa madre y leña de eucalipto.", price: "$14.50" },
      mains: { tag: "Clásicos", title: "Platos Principales", desc: "Cortes seleccionados y pesca fresca.", price: "$18.00" },
      veg: { tag: "Vegetariano", title: "Frescura Local", desc: "Opciones creadas con vegetales de temporada.", price: "$12.00" },
      drinks: { tag: "Bar de Autor", title: "Cócteles Guapuleños", desc: "Mixología con identidad propia.", price: "$9.00" },
      secret: { tag: "Premium", title: "Menú Escondido", desc: "Pregunta por los secretos de cocina.", price: "Variable" }
    },
    orderSection: {
      title: "¿Prefieres quedarte en casa?",
      subtitle: "Disfruta toda la experiencia Ananké donde estés.",
      btn: "Ordenar por Uber Eats"
    },
    contact: {
      title: "Encuéntranos",
      hoursTitle: "Horarios de Atención",
      days: [
        "Lunes: 12 PM - 9 PM",
        "Martes: 12 PM - 10 PM",
        "Miércoles: 12 PM - 10 PM",
        "Jueves: 12 PM - 11 PM",
        "Viernes: 12 PM - 11 PM",
        "Sábado: 12 PM - 11 PM",
        "Domingo: 12 PM - 5 PM"
      ],
      locationTitle: "Ubicación",
      address: "EDIF PATIÑO, González Suárez N32-90 y Jacinto Bejarano S1 3, Quito Ecuador",
      zones: ["González Suárez", "Guápulo", "Quito"]
    },
    footer: {
      rights: "© 2024 Ananké Cocina Guapuleña — Quito",
      created: "Página creada por"
    }
  },
  en: {
    nav: { home: "Home", menu: "Menu", about: "About Us", location: "Location", contact: "Contact", order: "Order" },
    hero: {
      subtitle: "Restaurant · Bar · Pizzeria · Wood Oven",
      desc: "A unique gastronomic experience with unforgettable flavors, live music, comedy, and moments in Quito.",
      orderBtn: "Order Now",
      reserveBtn: "Book via WhatsApp",
    },
    about: {
      title: "Guapuleña Cuisine",
      subtitle: "Artisan Essence",
      desc1: "From the warmth of our traditional wood-fired oven to the laughter of our shows, every detail at Ananké is designed to be unforgettable.",
      desc2: "Our signature cuisine fuses local ingredients with artisan techniques, creating matchless sourdough pizzas and dishes that tell a story.",
      desc3: "Nights are filled with magic through live music, comedy shows, and mixology crafted to awaken the senses in an exclusive yet welcoming atmosphere.",
      badge1: "Guápulo - The Origin",
      badge2: "González Suárez - Urban Home"
    },
    menu: {
      title: "Our Offerings",
      pizza: { tag: "Specialty", title: "Wood-fired Pizzas", desc: "Sourdough and eucalyptus wood.", price: "$14.50" },
      mains: { tag: "Classics", title: "Main Courses", desc: "Selected cuts and fresh catch.", price: "$18.00" },
      veg: { tag: "Vegetarian", title: "Local Freshness", desc: "Options created with seasonal vegetables.", price: "$12.00" },
      drinks: { tag: "Signature Bar", title: "Guapuleño Cocktails", desc: "Mixology with its own identity.", price: "$9.00" },
      secret: { tag: "Premium", title: "Secret Menu", desc: "Ask about our kitchen secrets.", price: "Variable" }
    },
    orderSection: {
      title: "Prefer to stay home?",
      subtitle: "Enjoy the full Ananké experience wherever you are.",
      btn: "Order on Uber Eats"
    },
    contact: {
      title: "Find Us",
      hoursTitle: "Opening Hours",
      days: [
        "Monday: 12 PM - 9 PM",
        "Tuesday: 12 PM - 10 PM",
        "Wednesday: 12 PM - 10 PM",
        "Thursday: 12 PM - 11 PM",
        "Friday: 12 PM - 11 PM",
        "Saturday: 12 PM - 11 PM",
        "Sunday: 12 PM - 5 PM"
      ],
      locationTitle: "Location",
      address: "EDIF PATIÑO, González Suárez N32-90 & Jacinto Bejarano S1 3, Quito Ecuador",
      zones: ["González Suárez", "Guápulo", "Quito"]
    },
    footer: {
      rights: "© 2024 Ananké Cocina Guapuleña — Quito",
      created: "Page created by"
    }
  }
};

export default function App() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = content[lang];

  const WA_LINK = "https://wa.me/593995613074";
  const UBER_LINK = "https://www.ubereats.com/ec/store/ananke-gonzalez-suarez-quito/ca_bYYJqWUeXlnOV5Tp2wg";
  const MAPS_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7901174677732!2d-78.4800366241315!3d-0.19894729980076292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a7213426e13%3A0xe542bfbe8a74e1d!2sAnank%C3%A9%20Gonz%C3%A1lez%20Su%C3%A1rez!5e0!3m2!1sen!2sec!4v1709249544464!5m2!1sen!2sec";

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#0c0c0c]">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">
          <a href="#" className="serif text-3xl font-bold tracking-tighter text-[#f5f5f0]">
            ANANKÉ
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 text-xs uppercase tracking-widest opacity-70">
            <a href="#home" className="hover:text-amber-500 transition-colors">{t.nav.home}</a>
            <a href="#about" className="hover:text-amber-500 transition-colors">{t.nav.about}</a>
            <a href="#menu" className="hover:text-amber-500 transition-colors">{t.nav.menu}</a>
            <a href="#location" className="hover:text-amber-500 transition-colors">{t.nav.location}</a>
            <a href="#contact" className="hover:text-amber-500 transition-colors">{t.nav.contact}</a>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex space-x-2 text-[10px] border border-warm rounded-full px-3 py-1 bg-transparent">
              <span 
                className={`cursor-pointer ${lang === 'es' ? 'font-bold opacity-100 text-[#f59e0b]' : 'opacity-50 hover:opacity-100'}`}
                onClick={() => setLang('es')}
              >ES 🇪🇸</span>
              <span className="opacity-30">|</span>
              <span 
                className={`cursor-pointer ${lang === 'en' ? 'font-bold opacity-100 text-[#f59e0b]' : 'opacity-50 hover:opacity-100'}`}
                onClick={() => setLang('en')}
              >EN 🇺🇸</span>
            </div>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-xs font-bold transition-all">
              <Phone className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
            <a href={UBER_LINK} target="_blank" rel="noreferrer" className="accent-bg hover:bg-opacity-90 text-white px-4 py-2 rounded-full text-xs font-bold transition-all">
              {t.nav.order}
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-[#f5f5f0] opacity-80" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-[88px] left-0 w-full bg-[#0c0c0c] border-b border-warm p-6 flex flex-col space-y-6">
            <div className="flex flex-col space-y-4 text-sm uppercase tracking-widest opacity-80">
              <a href="#home" onClick={closeMenu} className="hover:text-amber-500">{t.nav.home}</a>
              <a href="#about" onClick={closeMenu} className="hover:text-amber-500">{t.nav.about}</a>
              <a href="#menu" onClick={closeMenu} className="hover:text-amber-500">{t.nav.menu}</a>
              <a href="#location" onClick={closeMenu} className="hover:text-amber-500">{t.nav.location}</a>
              <a href="#contact" onClick={closeMenu} className="hover:text-amber-500">{t.nav.contact}</a>
            </div>
            <div className="flex space-x-4 border-t border-warm pt-6">
               <button onClick={() => { setLang('es'); closeMenu(); }} className={`text-sm ${lang === 'es' ? 'text-[#f59e0b] font-bold' : 'opacity-60'}`}>ES 🇪🇸</button>
               <button onClick={() => { setLang('en'); closeMenu(); }} className={`text-sm ${lang === 'en' ? 'text-[#f59e0b] font-bold' : 'opacity-60'}`}>EN 🇺🇸</button>
            </div>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="bg-green-600 text-white text-center py-3 rounded-full text-sm font-bold">
              WhatsApp
            </a>
            <a href={UBER_LINK} target="_blank" rel="noreferrer" className="accent-bg text-white text-center py-3 rounded-full text-sm font-bold">
              {t.nav.order}
            </a>
          </div>
        )}
      </nav>

      <main className="flex-1 mt-[88px]">
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-[85vh] flex items-center justify-center p-12 border-b border-warm overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center z-0 opacity-30 brightness-50 mix-blend-luminosity" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80")'}}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-[#0c0c0c] z-0"></div>
          
          <div className="max-w-4xl w-full relative z-10 text-center flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4 accent-text">Ananké</span>
            <h1 className="serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6 italic text-amber-500 drop-shadow-xl">
              Cocina Guapuleña
            </h1>
            <p className="text-lg md:text-xl uppercase tracking-widest opacity-80 mb-6 font-semibold">
              {t.hero.subtitle}
            </p>
            <p className="text-base md:text-lg max-w-2xl opacity-70 mb-10 leading-relaxed mx-auto">
              {t.hero.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <a href={UBER_LINK} target="_blank" rel="noreferrer" className="accent-bg hover:opacity-90 text-white px-8 py-4 rounded-full text-sm font-bold transition-all border border-transparent shadow-[0_0_20px_rgba(180,83,9,0.3)]">
                {t.hero.orderBtn}
              </a>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="glass hover:bg-white/10 text-white px-8 py-4 rounded-full text-sm font-bold transition-all border border-warm flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                {t.hero.reserveBtn}
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="p-12 lg:p-24 max-w-none border-b border-warm bg-[#0c0c0c] relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center flex-1 max-w-7xl mx-auto">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-px bg-amber-500"></div>
                <span className="text-xs uppercase tracking-widest opacity-60 italic">{t.about.subtitle}</span>
              </div>
              <h2 className="serif text-4xl md:text-5xl lg:text-6xl text-amber-500 mb-8 italic">{t.about.title}</h2>
              <div className="space-y-6 text-lg opacity-80 leading-relaxed font-light">
                <p>{t.about.desc1}</p>
                <p>{t.about.desc2}</p>
                <p>{t.about.desc3}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div className="p-4 glass rounded-xl border border-warm">
                  <MapPin className="w-5 h-5 accent-text mb-3" />
                  <p className="text-[10px] uppercase opacity-70 tracking-tighter leading-tight font-bold">{t.about.badge1}</p>
                </div>
                <div className="p-4 glass rounded-xl border border-warm">
                  <ChefHat className="w-5 h-5 accent-text mb-3" />
                  <p className="text-[10px] uppercase opacity-70 tracking-tighter leading-tight font-bold">{t.about.badge2}</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4 pt-12">
                 <img src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80" alt="Pizza artesanal" loading="lazy" className="w-full h-64 object-cover rounded-xl border border-warm grayscale-0 hover:grayscale-[50%] transition-all" />
                 <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80" alt="Música en vivo" loading="lazy" className="w-full h-48 object-cover rounded-xl border border-warm grayscale-0 hover:grayscale-[50%] transition-all" />
               </div>
               <div className="space-y-4">
                 <img src="https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&q=80" alt="Horno de leña" loading="lazy" className="w-full h-48 object-cover rounded-xl border border-warm grayscale-0 hover:grayscale-[50%] transition-all" />
                 <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80" alt="Cócteles" loading="lazy" className="w-full h-64 object-cover rounded-xl border border-warm grayscale-0 hover:grayscale-[50%] transition-all" />
               </div>
            </div>
          </div>
        </section>

        {/* MENU SECTION */}
        <section id="menu" className="p-12 lg:p-24 max-w-none border-b border-warm bg-zinc-950">
          <div className="max-w-7xl mx-auto flex flex-col">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="serif text-4xl md:text-5xl accent-text mb-4 italic">{t.menu.title}</h2>
              <div className="w-24 h-px border-t border-warm"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Pizza */}
              <div className="relative group overflow-hidden rounded-2xl bg-zinc-900 border border-warm flex flex-col justify-end p-8 min-h-[340px]">
                <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80" alt="Pizza" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700 mix-blend-overlay" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 mb-2">
                    <Pizza className="w-3 h-3 accent-text" />
                    <span className="text-[10px] uppercase accent-text font-bold tracking-widest">{t.menu.pizza.tag}</span>
                  </div>
                  <h3 className="serif text-3xl mb-1">{t.menu.pizza.title}</h3>
                  <p className="text-xs opacity-70 mb-3">{t.menu.pizza.desc}</p>
                  <p className="serif text-amber-200 text-xl">{t.menu.pizza.price}</p>
                </div>
              </div>

              {/* Mains */}
              <div className="relative group overflow-hidden rounded-2xl bg-zinc-900 border border-warm flex flex-col justify-end p-8 min-h-[340px]">
                <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80" alt="Platos" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700 mix-blend-overlay" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 mb-2">
                    <UtensilsIcon className="w-3 h-3 accent-text" />
                    <span className="text-[10px] uppercase accent-text font-bold tracking-widest">{t.menu.mains.tag}</span>
                  </div>
                  <h3 className="serif text-3xl mb-1">{t.menu.mains.title}</h3>
                  <p className="text-xs opacity-70 mb-3">{t.menu.mains.desc}</p>
                  <p className="serif text-amber-200 text-xl">{t.menu.mains.price}</p>
                </div>
              </div>

              {/* Drinks */}
              <div className="relative group overflow-hidden rounded-2xl bg-zinc-900 border border-warm flex flex-col justify-end p-8 min-h-[340px]">
                <img src="https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80" alt="Drinks" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700 mix-blend-overlay" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                <div className="relative z-10">
                   <div className="flex items-center space-x-2 mb-2">
                    <Wine className="w-3 h-3 accent-text" />
                    <span className="text-[10px] uppercase accent-text font-bold tracking-widest">{t.menu.drinks.tag}</span>
                  </div>
                  <h3 className="serif text-3xl mb-1">{t.menu.drinks.title}</h3>
                  <p className="text-xs opacity-70 mb-3">{t.menu.drinks.desc}</p>
                  <p className="serif text-amber-200 text-xl">{t.menu.drinks.price}</p>
                </div>
              </div>

              {/* Vegetarian */}
              <div className="relative group overflow-hidden rounded-2xl bg-zinc-900 border border-warm flex flex-col justify-end p-8 min-h-[340px] lg:col-span-2">
                 <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80" alt="Veg" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700 mix-blend-overlay" loading="lazy" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                 <div className="relative z-10 w-full lg:w-1/2">
                  <span className="text-[10px] uppercase tracking-widest accent-text font-bold block mb-2">{t.menu.veg.tag}</span>
                  <h3 className="serif text-3xl mb-1">{t.menu.veg.title}</h3>
                  <p className="text-xs opacity-70 mb-3">{t.menu.veg.desc}</p>
                  <p className="serif text-amber-200 text-xl">{t.menu.veg.price}</p>
                 </div>
              </div>

              {/* Secret */}
              <div className="relative group overflow-hidden rounded-2xl bg-zinc-900 border border-warm flex flex-col justify-end p-8 min-h-[340px]">
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#2a1302] to-[#0c0c0c] opacity-80 group-hover:scale-105 transition-all duration-700"></div>
                 <div className="relative z-10 w-full flex flex-col items-center text-center">
                  <Music className="w-8 h-8 accent-text mb-4 opacity-50" />
                  <span className="text-[10px] uppercase accent-text font-bold tracking-widest block mb-2">{t.menu.secret.tag}</span>
                  <h3 className="serif text-3xl mb-1">{t.menu.secret.title}</h3>
                  <p className="text-xs opacity-70 mb-3">{t.menu.secret.desc}</p>
                  <p className="serif text-amber-200 text-xl">{t.menu.secret.price}</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* ORDER BANNER */}
        <section className="py-24 px-6 border-b border-warm text-center bg-zinc-900 relative">
          <div className="max-w-3xl mx-auto flex flex-col items-center relative z-10">
            <h2 className="serif text-4xl md:text-5xl text-amber-500 mb-6 italic">{t.orderSection.title}</h2>
            <p className="text-base opacity-80 mb-10 tracking-wide font-light">{t.orderSection.subtitle}</p>
            <a href={UBER_LINK} target="_blank" rel="noreferrer" className="accent-bg hover:opacity-90 text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold transition-all flex items-center gap-3">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
              {t.orderSection.btn}
            </a>
          </div>
        </section>

        {/* CONTACT / HOURS / MAP */}
        <section id="location" className="w-full flex flex-col border-b border-warm">
          <div className="grid lg:grid-cols-2">
            
            {/* Info Side */}
            <div className="space-y-12 p-8 lg:p-16 flex flex-col justify-center lg:border-r border-warm object-cover">
              <div>
                 <h2 className="serif text-4xl text-amber-500 mb-8 italic">{t.contact.title}</h2>
                 <p className="flex items-start text-sm opacity-80 mb-6 font-light">
                   <MapPin className="w-5 h-5 accent-text mr-4 shrink-0 mt-0.5" />
                   {t.contact.address}
                 </p>
                 <div className="flex gap-3 text-[10px] uppercase opacity-70 font-bold ml-9">
                   {t.contact.zones.map(z => <span key={z} className="glass border border-warm py-1 px-3 rounded-md">{z}</span>)}
                 </div>
              </div>

              <div className="border-t border-warm pt-8">
                 <h3 className="flex items-center text-[10px] font-bold uppercase tracking-widest opacity-60 mb-6">
                   <Clock className="w-4 h-4 mr-3 accent-text" /> 
                   {t.contact.hoursTitle}
                 </h3>
                 <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-xs font-semibold opacity-90 tracking-wide uppercase">
                    {t.contact.days.map(d => (
                      <p key={d} className="pb-1">{d}</p>
                    ))}
                 </div>
              </div>

              <div className="flex items-center space-x-4 pt-6">
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="flex items-center space-x-2 glass hover:bg-white/5 border border-warm px-6 py-3 rounded-full transition-all">
                  <Phone className="w-4 h-4 accent-text" />
                  <span className="text-xs uppercase tracking-widest font-bold">WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Map Side */}
            <div className="min-h-[400px] w-full bg-zinc-900 border-t lg:border-t-0 border-warm relative -mb-1">
              <iframe 
                src={MAPS_URL} 
                width="100%" 
                height="100%" 
                style={{border: 0, position: 'absolute', inset: 0, filter: 'grayscale(100%) invert(100%) hue-rotate(180deg) opacity(0.8)'}} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="hover:filter-none transition-all duration-700"
                >
              </iframe>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer id="contact" className="py-8 px-6 lg:px-10 border-t border-warm bg-[#0c0c0c]">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-widest opacity-60 flex-col lg:flex-row gap-6 lg:gap-0">
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
            <a href="https://instagram.com/anankemicroclimas" target="_blank" rel="noreferrer" className="flex items-center hover:text-amber-500 transition-colors">
              <Instagram className="w-4 h-4 mr-2" />
              @anankemicroclimas
            </a>
            <a href="https://facebook.com/AnankeCocinaGuapulena" target="_blank" rel="noreferrer" className="flex items-center hover:text-amber-500 transition-colors">
              <Facebook className="w-4 h-4 mr-2" />
              Ananké Cocina Guapuleña
            </a>
          </div>

          <div className="flex items-center space-x-1 text-center">
            <span>{t.footer.created}</span>
            <a href="https://mantaiweb.com/" target="_blank" rel="noreferrer" className="text-amber-500 font-bold hover:underline ml-1">
              MANTAI WEB DESIGNER COMPANY
            </a>
          </div>
          <div className="text-center">{t.footer.rights}</div>

        </div>
      </footer>
    </div>
  );
}

// Icon fallbacks (since lucide-react might not have UtensilsIcon depending on version, fallback to generic paths if needed)
function UtensilsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  );
}
