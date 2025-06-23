
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Mail, Lock, User, Building, Phone, ArrowLeft, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    agreeMarketing: false
  });

  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Kayıt oluşturuluyor:", formData);
  };

  const handlePasswordChange = (password: string) => {
    setFormData(prev => ({ ...prev, password }));
    
    // Password strength calculation
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (password.match(/[a-z]/)) strength += 1;
    if (password.match(/[A-Z]/)) strength += 1;
    if (password.match(/[0-9]/)) strength += 1;
    if (password.match(/[^a-zA-Z0-9]/)) strength += 1;
    
    setPasswordStrength(strength);
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 2) return "Zayıf";
    if (passwordStrength <= 3) return "Orta";
    if (passwordStrength <= 4) return "İyi";
    return "Güçlü";
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return "bg-red-500";
    if (passwordStrength <= 3) return "bg-yellow-500";
    if (passwordStrength <= 4) return "bg-blue-500";
    return "bg-green-500";
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-8 bg-white">
        <div className="w-full max-w-md space-y-8 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-4">
            <Link to="/" className="inline-flex items-center space-x-2 text-velyno-gray hover:text-velyno-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              <span>Ana sayfaya dön</span>
            </Link>
            
            <div className="flex justify-center">
              <div className="bg-gradient-primary w-12 h-12 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">V</span>
              </div>
            </div>
            
            <div>
              <h1 className="text-3xl font-bold text-velyno-dark">Hesap Oluşturun</h1>
              <p className="text-velyno-gray mt-2">14 gün boyunca ücretsiz deneyin</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-medium text-velyno-dark">
                  Ad Soyad
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-velyno-gray w-5 h-5" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Adınız ve soyadınız"
                    value={formData.fullName}
                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                    className="input-field pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="companyName" className="text-sm font-medium text-velyno-dark">
                  Şirket Adı
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-velyno-gray w-5 h-5" />
                  <Input
                    id="companyName"
                    type="text"
                    placeholder="Şirketinizin adı"
                    value={formData.companyName}
                    onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                    className="input-field pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-velyno-dark">
                  E-posta Adresi
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-velyno-gray w-5 h-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="ornek@sirket.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="input-field pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-velyno-dark">
                  Telefon <span className="text-velyno-gray text-xs">(isteğe bağlı)</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-velyno-gray w-5 h-5" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+90 (555) 123 45 67"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="input-field pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-velyno-dark">
                  Şifre
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-velyno-gray w-5 h-5" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => handlePasswordChange(e.target.value)}
                    className="input-field pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-velyno-gray hover:text-velyno-primary transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {formData.password && (
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-1">
                        <div 
                          className={`h-1 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                          style={{ width: `${(passwordStrength / 5) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-velyno-gray">{getPasswordStrengthText()}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium text-velyno-dark">
                  Şifre Tekrar
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-velyno-gray w-5 h-5" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                    className="input-field pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-velyno-gray hover:text-velyno-primary transition-colors"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeTerms: checked as boolean }))}
                  required
                />
                <label htmlFor="terms" className="text-sm text-velyno-gray leading-relaxed">
                  <Link to="/kullanim-sartlari" className="text-velyno-primary hover:underline">Hizmet Şartları</Link>'nı ve 
                  <Link to="/gizlilik-politikasi" className="text-velyno-primary hover:underline ml-1">Gizlilik Politikası</Link>'nı 
                  okudum ve kabul ediyorum.
                </label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="marketing"
                  checked={formData.agreeMarketing}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeMarketing: checked as boolean }))}
                />
                <label htmlFor="marketing" className="text-sm text-velyno-gray leading-relaxed">
                  E-ticaret trendleri ve ürün güncellemeleri hakkında e-posta almak istiyorum.
                  <span className="text-xs block mt-1 opacity-75">(isteğe bağlı)</span>
                </label>
              </div>
            </div>

            <Button type="submit" className="w-full btn-secondary text-lg py-3">
              Ücretsiz Hesap Oluştur
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-velyno-gray">veya</span>
              </div>
            </div>

            <div className="space-y-3">
              <Button type="button" variant="outline" className="w-full py-3">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%23EA4335' d='M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z'/%3E%3Cpath fill='%2334A853' d='M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z'/%3E%3Cpath fill='%23FBBC05' d='M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z'/%3E%3Cpath fill='%23EA4335' d='M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z'/%3E%3C/svg%3E" alt="Google" className="w-5 h-5 mr-2" />
                Google ile kayıt ol
              </Button>
              
              <Button type="button" variant="outline" className="w-full py-3">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%23ff5722' d='M6 6h36v36H6z'/%3E%3Cpath fill='%23424242' d='M20.5 25.5v-5.3H12v5.3h3.1v12.8h5.3V25.5z'/%3E%3Cpath fill='%23424242' d='M29.5 25.5c0-3.2-1.3-5.3-4.8-5.3s-4.8 2.1-4.8 5.3v7.5c0 3.2 1.3 5.3 4.8 5.3s4.8-2.1 4.8-5.3v-7.5zm-5.3 7.5v-7.5c0-1.1.4-1.8 1.3-1.8s1.3.7 1.3 1.8v7.5c0 1.1-.4 1.8-1.3 1.8s-1.3-.7-1.3-1.8z'/%3E%3Cpath fill='%23424242' d='M36 25.5v-5.3h-8.5v5.3H31v12.8h5V25.5z'/%3E%3C/svg%3E" alt="Microsoft" className="w-5 h-5 mr-2" />
                Microsoft ile kayıt ol
              </Button>
            </div>

            <p className="text-center text-sm text-velyno-gray">
              Zaten hesabınız var mı?{" "}
              <Link to="/giris" className="text-velyno-primary hover:underline font-medium">
                Giriş yapın
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Right Side - Benefits */}
      <div className="hidden lg:flex flex-1 bg-gradient-primary items-center justify-center p-12">
        <div className="max-w-lg text-white space-y-8 animate-fade-in-delay">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <CheckCircle className="w-6 h-6 text-white/80 flex-shrink-0" />
              <span className="text-lg">14 gün ücretsiz deneme</span>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCircle className="w-6 h-6 text-white/80 flex-shrink-0" />
              <span className="text-lg">Kredi kartı gerektirmez</span>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCircle className="w-6 h-6 text-white/80 flex-shrink-0" />
              <span className="text-lg">İstediğiniz zaman iptal edin</span>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-semibold">Hemen başlayın:</h3>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                <span>Sınırsız ürün ve varyant</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                <span>Tüm pazaryeri entegrasyonları</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                <span>7/24 uzman destek</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                <span>Gelişmiş analitik raporlar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
