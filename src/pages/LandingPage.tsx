import React, { useState, useEffect } from 'react';
import UpiLogo from '../components/UpILogo';
import { useAuth } from '../context/AuthContext';
import { Menu, X, Lock, Zap, Target, RefreshCw, Smartphone, Shield, Book, Mail, Monitor, CreditCard } from 'lucide-react';

const LandingPage: React.FC = () => {
  const { login } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="font-sans overflow-x-hidden bg-white">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 shadow-lg bg-white/95 backdrop-blur-md' : 'py-5 bg-white/90 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-[50px] h-[50px] bg-white rounded-xl p-2 shadow-[0_4px_15px_rgba(228,34,34,0.2)] flex items-center justify-center">
              <UpiLogo variant="white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-slate-800 leading-none">SSO UPI</h1>
              <p className="text-[11px] text-slate-500 mt-0.5">Single Sign-On System</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {['Home', 'Features', 'Services'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-slate-700 hover:text-upi-red font-semibold text-[15px] transition-colors"
              >
                {item}
              </button>
            ))}
            <button
              onClick={login}
              className="px-7 py-3 bg-gradient-to-br from-upi-red to-upi-darkRed text-white rounded-xl font-bold text-[15px] shadow-[0_4px_15px_rgba(228,34,34,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(228,34,34,0.4)] transition-all duration-300"
            >
              Login
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-slate-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden fixed left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'top-[80px] opacity-100 max-h-[400px] py-8' : 'top-[80px] opacity-0 max-h-0 py-0'}`}>
          <div className="flex flex-col gap-6 px-8">
            {['Home', 'Features', 'Services'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-slate-700 font-semibold text-lg"
              >
                {item}
              </button>
            ))}
            <button
              onClick={login}
              className="w-full py-3 bg-upi-red text-white rounded-xl font-bold text-lg shadow-md"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-upi-red via-upi-darkRed to-upi-deepRed">
        {/* Background Blobs */}
        <div className="absolute w-[600px] h-[600px] bg-white/5 rounded-full -top-[200px] -left-[200px] animate-float pointer-events-none" />
        <div className="absolute w-[500px] h-[500px] bg-upi-yellow/10 rounded-full -bottom-[150px] -right-[150px] animate-float-reverse pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-white flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="text-4xl md:text-[56px] font-extrabold leading-[1.2] mb-6 tracking-tight">
              Akses Semua Layanan UPI dengan <span className="text-upi-yellow">Satu Akun</span>
            </h2>
            <p className="text-lg md:text-[18px] text-white/90 leading-relaxed mb-10 max-w-lg">
              Sistem Single Sign-On (SSO) UPI memudahkan Anda mengakses berbagai layanan akademik dan administrasi dengan satu kali login. Aman, cepat, dan efisien.
            </p>
            <div className="flex justify-center lg:justify-start w-full">
              <button
                onClick={login}
                className="px-12 py-5 bg-white text-upi-red rounded-2xl font-bold text-lg shadow-[0_8px_25px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.3)] transition-all duration-300 flex items-center gap-2"
              >
                🚀 Login ke SSO UPI
              </button>
            </div>
          </div>

          <div className="relative flex justify-center items-center lg:order-last order-first mt-10 lg:mt-0">
            <div className="bg-white p-8 md:p-12 rounded-[30px] shadow-[0_30px_60px_rgba(0,0,0,0.3)] animate-[cardFloat_6s_ease-in-out_infinite] max-w-md w-full">
              <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] mx-auto mb-8 bg-gradient-to-br from-upi-red to-upi-darkRed rounded-[25px] p-6 shadow-[0_10px_30px_rgba(228,34,34,0.3)] flex items-center justify-center">
                <UpiLogo variant="white" className="w-full h-full" />
              </div>
              <h3 className="text-center text-2xl font-bold text-slate-800 mb-4">Single Sign-On</h3>
              <p className="text-center text-slate-500 text-sm">Satu akun untuk semua layanan Universitas Pendidikan Indonesia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">Kenapa Menggunakan SSO UPI?</h2>
            <p className="text-lg text-slate-500">Kemudahan dan keamanan dalam satu sistem terintegrasi</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <FeatureCard
              icon={<Lock className="text-white w-8 h-8" />}
              title="Keamanan Terjamin"
              desc="Sistem keamanan berlapis dengan enkripsi tingkat tinggi melindungi data dan privasi Anda."
            />
            <FeatureCard
              icon={<Zap className="text-white w-8 h-8" />}
              title="Akses Cepat"
              desc="Login sekali untuk mengakses semua layanan tanpa perlu masuk berulang kali."
            />
            <FeatureCard
              icon={<Target className="text-white w-8 h-8" />}
              title="Mudah Digunakan"
              desc="Interface intuitif yang dirancang untuk kemudahan pengguna dari berbagai kalangan."
            />
            <FeatureCard
              icon={<RefreshCw className="text-white w-8 h-8" />}
              title="Terintegrasi"
              desc="Terhubung dengan semua sistem akademik dan administrasi UPI secara seamless."
            />
            <FeatureCard
              icon={<Smartphone className="text-white w-8 h-8" />}
              title="Multi-Platform"
              desc="Akses dari komputer, tablet, atau smartphone dengan pengalaman yang konsisten."
            />
            <FeatureCard
              icon={<Shield className="text-white w-8 h-8" />}
              title="Two-Factor Auth"
              desc="Lapisan keamanan tambahan dengan autentikasi dua faktor untuk perlindungan maksimal."
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-slate-50 to-slate-200">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">Layanan yang Terhubung</h2>
            <p className="text-lg text-slate-500">Akses berbagai layanan UPI dengan mudah</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <ServiceCard icon={<Book />} title="SPOT" subtitle="Portal Terpadu" />
            <ServiceCard icon={<Mail />} title="Email UPI" subtitle="Email Resmi" />
            <ServiceCard icon={<Monitor />} title="SIAKAD" subtitle="Sistem Akademik" />
            <ServiceCard icon={<Smartphone />} title="E-Learning" subtitle="Pembelajaran" />
            <ServiceCard icon={<Book />} title="Perpustakaan" subtitle="Digital Library" />
            <ServiceCard icon={<CreditCard />} title="Payment" subtitle="Keuangan" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-upi-red to-upi-darkRed relative overflow-hidden">
        <div className="absolute w-[400px] h-[400px] bg-white/5 rounded-full -top-[150px] -right-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 text-center relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Siap untuk Memulai?</h2>
          <p className="text-xl opacity-90 mb-10">Login sekarang dan nikmati kemudahan akses ke semua layanan UPI</p>
          <button
            onClick={login}
            className="px-12 py-5 bg-white text-upi-red rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2"
          >
            🚀 Login ke SSO UPI
          </button>
        </div>
      </section>
    </div>
  );
};

// Sub-components for cleaner code
const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="p-10 bg-gradient-to-br from-slate-50 to-white rounded-[20px] border-2 border-slate-100 hover:border-upi-red hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(228,34,34,0.1)] transition-all duration-300 group">
    <div className="w-[70px] h-[70px] bg-gradient-to-br from-upi-red to-upi-darkRed rounded-2xl flex items-center justify-center mb-6 shadow-[0_10px_25px_rgba(228,34,34,0.2)] group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-slate-800 mb-4">{title}</h3>
    <p className="text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; subtitle: string }> = ({ icon, title, subtitle }) => (
  <div className="bg-white p-8 rounded-[20px] text-center border-2 border-transparent hover:border-upi-red hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default">
    <div className="text-4xl text-upi-red mb-4 flex justify-center">{icon}</div>
    <h4 className="text-lg font-bold text-slate-800 mb-1">{title}</h4>
    <p className="text-sm text-slate-500">{subtitle}</p>
  </div>
);

export default LandingPage;