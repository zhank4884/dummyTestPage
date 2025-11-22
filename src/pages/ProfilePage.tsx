import React from 'react';
import { useAuth } from '../context/AuthContext';
import UpiLogo from '../components/UpILogo';
import {
  User, LogOut, LayoutDashboard, Shield, Clock, CheckCircle,
  Mail, BookOpen, CreditCard, Key, Bell,
  Laptop, GraduationCap
} from 'lucide-react';

const ProfilePage: React.FC = () => {
  const { userProfile, logout } = useAuth();

  const handleLogout = () => {
    if (window.confirm("Apakah Anda yakin ingin logout?")) {
      logout();
    }
  };

  const handleServiceClick = (serviceName: string) => {
    alert(`Membuka ${serviceName}...`);
  };

  const handleActionClick = (action: string) => {
    alert(`Fitur "${action}" akan segera tersedia!`);
  };

  // Safety check in case profile is null but auth is true (loading gap)
  if (!userProfile) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-upi-red border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 font-medium">Memuat Profil...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 font-sans text-slate-800 pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-br from-upi-red to-upi-darkRed text-white shadow-md py-4">
        <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-[50px] h-[50px] bg-white rounded-xl p-2 flex items-center justify-center shadow-lg">
              <UpiLogo variant="red" className="w-full h-full" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold leading-tight">SSO UPI</h1>
              <p className="text-xs opacity-90">Single Sign-On System</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-white/20 border border-white/30 rounded-xl text-sm font-semibold hover:bg-white/30 transition-all">
              <LayoutDashboard size={16} />
              <span>Dashboard</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-5 py-2.5 bg-white/15 border border-white/30 rounded-xl text-sm font-semibold hover:bg-white hover:text-upi-red transition-all"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-5 mt-10">
        {/* Profile Card */}
        <div className="bg-white rounded-[20px] shadow-sm overflow-hidden mb-8">
          <div className="relative bg-gradient-to-br from-upi-red to-upi-darkRed p-8 md:p-10 overflow-hidden">
            {/* Decorator */}
            <div className="absolute w-[300px] h-[300px] bg-white/10 rounded-full -top-[100px] -right-[100px]" />

            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left text-white">
              <div className="relative">
                <div className="w-[120px] h-[120px] bg-white rounded-[20px] flex items-center justify-center shadow-xl border-4 border-white/30">
                  <User size={60} className="text-slate-400" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-9 h-9 bg-emerald-500 border-4 border-white rounded-full flex items-center justify-center">
                  <CheckCircle size={16} className="text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2">
                  {userProfile.firstName} {userProfile.lastName}
                </h2>
                <p className="text-lg opacity-90 mb-6">
                  {userProfile.username} • {(userProfile.attributes as any)?.major?.[0] || 'Mahasiswa'}
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-8">
                  <StatItem value="6" label="Layanan Terhubung" />
                  <StatItem value="42" label="Login Terakhir" />
                  <StatItem value="Aktif" label="Status Akun" />
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <span className="text-xl">📋</span> Informasi Pribadi
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <InfoBox label="Nama Lengkap" value={`${userProfile.firstName} ${userProfile.lastName}`} />
                <InfoBox label="NIM / NIP" value={userProfile.username || '-'} />
                <InfoBox label="Email UPI" value={userProfile.email || '-'} />
                <InfoBox label="Program Studi" value={(userProfile.attributes as any)?.major?.[0] || '-'} />
                <InfoBox label="Fakultas" value={(userProfile.attributes as any)?.faculty?.[0] || '-'} />
                <InfoBox label="Tahun Angkatan" value="2021" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <span className="text-xl">🔗</span> Layanan Terhubung
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <ConnectedService
                  icon={<LayoutDashboard />}
                  title="SPOT"
                  desc="Sistem Portal Terpadu untuk layanan akademik"
                  onClick={() => handleServiceClick('SPOT')}
                />
                <ConnectedService
                  icon={<Mail />}
                  title="Email UPI"
                  desc="Layanan email resmi Universitas Pendidikan Indonesia"
                  onClick={() => handleServiceClick('Email UPI')}
                />
                <ConnectedService
                  icon={<GraduationCap />}
                  title="SIAKAD"
                  desc="Sistem Informasi Akademik untuk pengelolaan data"
                  onClick={() => handleServiceClick('SIAKAD')}
                />
                <ConnectedService
                  icon={<Laptop />}
                  title="E-Learning"
                  desc="Platform pembelajaran online untuk perkuliahan"
                  onClick={() => handleServiceClick('E-Learning')}
                />
                <ConnectedService
                  icon={<BookOpen />}
                  title="Perpustakaan"
                  desc="Sistem perpustakaan digital UPI"
                  onClick={() => handleServiceClick('Perpustakaan')}
                />
                <ConnectedService
                  icon={<CreditCard />}
                  title="Payment Gateway"
                  desc="Sistem pembayaran online untuk administrasi"
                  onClick={() => handleServiceClick('Payment Gateway')}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-[20px] shadow-sm p-8 md:p-10 mb-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800">
            <span className="text-xl">🔒</span> Keamanan Akun
          </h3>
          <div className="grid gap-5">
            <SecurityItem
              icon={<Key size={20} />}
              title="Password"
              desc="Terakhir diubah 30 hari yang lalu"
              actionText="Ubah Password"
              onAction={() => handleActionClick('Ubah Password')}
            />
            <SecurityItem
              icon={<Shield size={20} />}
              title="Two-Factor Authentication"
              desc="Tambahkan lapisan keamanan ekstra untuk akun Anda"
              actionText="Aktifkan"
              primary
              onAction={() => handleActionClick('Aktifkan Two-Factor')}
            />
            <SecurityItem
              icon={<Mail size={20} />}
              title="Email Recovery"
              desc={userProfile.email || 'ahmadfauzi@gmail.com'}
              actionText="Update Email"
              onAction={() => handleActionClick('Update Email')}
            />
            <SecurityItem
              icon={<Bell size={20} />}
              title="Notifikasi Login"
              desc="Dapatkan notifikasi setiap ada aktivitas login"
              actionText="Kelola Notifikasi"
              onAction={() => handleActionClick('Kelola Notifikasi')}
            />
          </div>
        </div>

        {/* Activity Log */}
        <div className="bg-white rounded-[20px] shadow-sm p-8 md:p-10">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800">
            <span className="text-xl">📊</span> Aktivitas Terakhir
          </h3>
          <div className="flex flex-col gap-5">
            <ActivityItem
              icon={<CheckCircle className="text-emerald-500" />}
              title="Login Berhasil"
              desc="Login dari Chrome di Windows • IP: 182.253.xxx.xxx"
              time="2 jam yang lalu"
            />
            <ActivityItem
              icon={<BookOpen className="text-blue-500" />}
              title="Akses SPOT"
              desc="Mengakses layanan SPOT untuk melihat jadwal kuliah"
              time="5 jam yang lalu"
            />
            <ActivityItem
              icon={<Mail className="text-upi-yellow" />}
              title="Akses Email UPI"
              desc="Login ke email UPI dari aplikasi mobile"
              time="1 hari yang lalu"
            />
            <ActivityItem
              icon={<Key className="text-slate-500" />}
              title="Password Diubah"
              desc="Password berhasil diperbarui untuk keamanan akun"
              time="30 hari yang lalu"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub components
const StatItem: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center md:items-start">
    <span className="text-2xl font-bold">{value}</span>
    <span className="text-sm opacity-85 mt-1">{label}</span>
  </div>
);

const InfoBox: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col gap-2">
    <span className="text-xs text-slate-500 font-bold uppercase tracking-wide">{label}</span>
    <div className="text-base font-medium text-slate-700 px-4 py-3 bg-slate-50 rounded-xl border-2 border-slate-100">
      {value}
    </div>
  </div>
);

const ConnectedService: React.FC<{ icon: React.ReactNode; title: string; desc: string; onClick: () => void }> = ({ icon, title, desc, onClick }) => (
  <div
    onClick={onClick}
    className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-200 hover:border-upi-red hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(228,34,34,0.1)] transition-all duration-300 cursor-pointer group"
  >
    <div className="flex items-center gap-4 mb-3">
      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-slate-700 group-hover:text-upi-red transition-colors border border-slate-100">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-800">{title}</h4>
        <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
          ● Terhubung
        </span>
      </div>
    </div>
    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

interface SecurityItemProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  actionText: string;
  primary?: boolean;
  onAction: () => void;
}

const SecurityItem: React.FC<SecurityItemProps> = ({ icon, title, desc, actionText, primary, onAction }) => (
  <div className="flex flex-col sm:flex-row justify-between items-center p-5 bg-slate-50 rounded-xl border-2 border-slate-200 gap-4">
    <div className="flex items-center gap-4 w-full sm:w-auto">
      <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-sm text-slate-700 border border-slate-100 shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-800 text-sm md:text-base">{title}</h4>
        <p className="text-xs md:text-sm text-slate-500">{desc}</p>
      </div>
    </div>
    <button
      onClick={onAction}
      className={`w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all ${primary ? 'bg-upi-red border-upi-red text-white hover:bg-upi-darkRed hover:border-upi-darkRed' : 'bg-white border-slate-200 text-slate-700 hover:border-upi-red hover:text-upi-red hover:bg-red-50'}`}
    >
      {actionText}
    </button>
  </div>
);

const ActivityItem: React.FC<{ icon: React.ReactNode; title: string; desc: string; time: string }> = ({ icon, title, desc, time }) => (
  <div className="flex flex-col sm:flex-row gap-5 p-5 bg-slate-50 rounded-xl border-l-4 border-upi-red">
    <div className="flex items-start gap-4 w-full">
      <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-slate-800 text-sm md:text-base mb-1">{title}</h4>
        <p className="text-xs md:text-sm text-slate-500 mb-2">{desc}</p>
        <div className="text-xs text-slate-400 flex items-center gap-1">
          <Clock size={12} /> {time}
        </div>
      </div>
    </div>
  </div>
);

export default ProfilePage;