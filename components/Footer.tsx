import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2 pr-10">
            <h3 className="text-xl font-bold mb-4">SSO UPI</h3>
            <p className="text-[#aaa] text-sm leading-relaxed">
              Sistem Single Sign-On Universitas Pendidikan Indonesia yang memudahkan akses ke berbagai layanan akademik dan administrasi dengan satu akun terpadu.
            </p>
          </div>
          <div>
            <h4 className="text-base font-bold mb-4">Layanan</h4>
            <ul className="space-y-2">
              {['SPOT', 'Email UPI', 'SIAKAD', 'E-Learning'].map(item => (
                <li key={item}>
                  <a href="#" className="text-[#aaa] text-sm hover:text-upi-red transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-base font-bold mb-4">Bantuan</h4>
            <ul className="space-y-2">
              {['FAQ', 'Panduan', 'Kontak Support', 'Status Sistem'].map(item => (
                <li key={item}>
                  <a href="#" className="text-[#aaa] text-sm hover:text-upi-red transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-[#333] pt-8 text-center">
          <p className="text-[#888] text-sm">© 2025 Universitas Pendidikan Indonesia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;