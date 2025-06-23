
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Şifre sıfırlama talebi:", email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velyno-light px-4">
        <div className="w-full max-w-md space-y-8 animate-fade-in">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
            
            <div>
              <h1 className="text-3xl font-bold text-velyno-dark">E-posta Gönderildi!</h1>
              <p className="text-velyno-gray mt-4 leading-relaxed">
                <strong>{email}</strong> adresine şifre sıfırlama talimatları gönderdik.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-4">
              <h3 className="font-semibold text-velyno-dark">Sonraki adımlar:</h3>
              <div className="text-left space-y-2 text-sm text-velyno-gray">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-velyno-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>E-posta gelen kutunuzu kontrol edin</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-velyno-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Spam klasörünü de kontrol etmeyi unutmayın</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-velyno-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>E-postadaki bağlantıya tıklayın</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-velyno-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Yeni şifrenizi oluşturun</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Link to="/giris">
                <Button className="w-full btn-primary">
                  Giriş Ekranına Dön
                </Button>
              </Link>
              
              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full text-velyno-primary hover:underline text-sm"
              >
                Farklı e-posta adresi kullan
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-velyno-light px-4">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        <div className="text-center space-y-6">
          <Link to="/giris" className="inline-flex items-center space-x-2 text-velyno-gray hover:text-velyno-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Giriş ekranına dön</span>
          </Link>
          
          <div className="flex justify-center">
            <div className="bg-gradient-primary w-12 h-12 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">V</span>
            </div>
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-velyno-dark">Şifrenizi mi unuttunuz?</h1>
            <p className="text-velyno-gray mt-4 leading-relaxed">
              E-posta adresinizi girin, şifre sıfırlama linki gönderelim.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field pl-10"
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full btn-secondary text-lg py-3">
            Sıfırlama Linki Gönder
          </Button>

          <div className="text-center">
            <Link to="/giris" className="text-sm text-velyno-primary hover:underline">
              Şifrenizi hatırladınız mı? Giriş yapın
            </Link>
          </div>
        </form>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="font-semibold text-velyno-dark mb-3">Yardıma mı ihtiyacınız var?</h3>
          <p className="text-sm text-velyno-gray leading-relaxed">
            Hesabınıza erişimde sorun yaşıyorsanız, 
            <a href="mailto:destek@velyno.com" className="text-velyno-primary hover:underline ml-1">
              destek@velyno.com
            </a> adresinden bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
