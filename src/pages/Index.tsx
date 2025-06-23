
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowDown, CheckCircle, Users, TrendingUp, Shield, Zap, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-velyno-light via-white to-velyno-light pt-20 pb-32">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235B3FF6' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-velyno-dark leading-tight">
                  Tüm Pazaryerleri,{" "}
                  <span className="gradient-text">Tek Kontrol</span>
                </h1>
                <p className="text-xl text-velyno-gray leading-relaxed max-w-2xl">
                  E-ticaret operasyonlarınızı tek platformdan yönetin. Stok, fiyat ve sipariş yönetimini 
                  otomatikleştirin. Satışlarınızı artırın, maliyetlerinizi düşürün.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/kayit">
                  <Button className="btn-secondary text-lg px-8 py-4 h-auto">
                    Ücretsiz Demo
                  </Button>
                </Link>
                <Button variant="outline" className="btn-outline text-lg px-8 py-4 h-auto">
                  Canlı Demo İzle
                </Button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-velyno-gray">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>14 gün ücretsiz</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Kredi kartı yok</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Anında kurulum</span>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-delay">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-velyno-light rounded-xl">
                      <span className="font-semibold text-velyno-dark">Toplam Satış</span>
                      <span className="text-2xl font-bold text-velyno-primary">₺124.850</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 bg-red-50 rounded-xl text-center">
                        <div className="text-sm text-red-600 font-medium">Trendyol</div>
                        <div className="text-lg font-bold text-red-700">₺45.2K</div>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-xl text-center">
                        <div className="text-sm text-orange-600 font-medium">Hepsiburada</div>
                        <div className="text-lg font-bold text-orange-700">₺38.1K</div>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-xl text-center">
                        <div className="text-sm text-blue-600 font-medium">n11</div>
                        <div className="text-lg font-bold text-blue-700">₺41.5K</div>
                      </div>
                    </div>
                    <div className="h-20 bg-gradient-to-r from-velyno-primary/10 to-velyno-secondary/10 rounded-xl flex items-end justify-around p-4">
                      <div className="w-6 bg-velyno-primary rounded-t h-12"></div>
                      <div className="w-6 bg-velyno-primary rounded-t h-16"></div>
                      <div className="w-6 bg-velyno-secondary rounded-t h-10"></div>
                      <div className="w-6 bg-velyno-secondary rounded-t h-20"></div>
                      <div className="w-6 bg-velyno-primary rounded-t h-14"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-velyno-gray" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-velyno-dark">
              Güçlü Özellikler, <span className="gradient-text">Kolay Kullanım</span>
            </h2>
            <p className="text-xl text-velyno-gray max-w-3xl mx-auto">
              E-ticaret operasyonlarınızı optimize eden akıllı araçlarla tanışın.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card group">
              <div className="w-12 h-12 bg-velyno-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-velyno-primary" />
              </div>
              <h3 className="text-xl font-semibold text-velyno-dark mb-3">Çoklu Pazaryeri Entegrasyonu</h3>
              <p className="text-velyno-gray leading-relaxed">
                Trendyol, Hepsiburada, n11, Amazon ve daha fazlasını tek platformdan yönetin.
              </p>
            </div>
            
            <div className="feature-card group">
              <div className="w-12 h-12 bg-velyno-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-velyno-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-velyno-dark mb-3">Otomatik Stok Senkronizasyonu</h3>
              <p className="text-velyno-gray leading-relaxed">
                Stok miktarlarınız gerçek zamanlı olarak tüm pazaryerlerinde güncellenir.
              </p>
            </div>
            
            <div className="feature-card group">
              <div className="w-12 h-12 bg-velyno-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-velyno-primary" />
              </div>
              <h3 className="text-xl font-semibold text-velyno-dark mb-3">Akıllı Fiyat Yönetimi</h3>
              <p className="text-velyno-gray leading-relaxed">
                Rekabet analizi ve dinamik fiyatlama ile kârınızı maksimize edin.
              </p>
            </div>
            
            <div className="feature-card group">
              <div className="w-12 h-12 bg-velyno-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-velyno-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-velyno-dark mb-3">Sipariş Konsolidasyonu</h3>
              <p className="text-velyno-gray leading-relaxed">
                Tüm pazaryerlerden gelen siparişleri tek panelden takip edin ve yönetin.
              </p>
            </div>
            
            <div className="feature-card group">
              <div className="w-12 h-12 bg-velyno-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-velyno-primary" />
              </div>
              <h3 className="text-xl font-semibold text-velyno-dark mb-3">Detaylı Analytics</h3>
              <p className="text-velyno-gray leading-relaxed">
                Satış performansınızı analiz edin, trendleri keşfedin, büyüme fırsatlarını yakalayın.
              </p>
            </div>
            
            <div className="feature-card group">
              <div className="w-12 h-12 bg-velyno-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-velyno-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-velyno-dark mb-3">Güvenli & Güvenilir</h3>
              <p className="text-velyno-gray leading-relaxed">
                Verileriniz 256-bit SSL şifreleme ile korunur. %99.9 uptime garantisi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-stats relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div className="space-y-2 animate-scale-in">
              <div className="text-4xl lg:text-5xl font-bold">10.000+</div>
              <div className="text-xl opacity-90">Aktif Mağaza</div>
              <div className="text-sm opacity-75">Türkiye'nin önde gelen e-ticaret markalarının tercihi</div>
            </div>
            <div className="space-y-2 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl lg:text-5xl font-bold">50M+</div>
              <div className="text-xl opacity-90">İşlenen Sipariş</div>
              <div className="text-sm opacity-75">Güvenilir altyapımızla milyonlarca siparişi yönettik</div>
            </div>
            <div className="space-y-2 animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl lg:text-5xl font-bold">%99.9</div>
              <div className="text-xl opacity-90">Uptime Garantisi</div>
              <div className="text-sm opacity-75">Kesintisiz hizmet, 7/24 güvenilir altyapı</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-velyno-dark">
              E-Ticaret Geleceğinizi <span className="gradient-text">Bugün</span> Başlatın
            </h2>
            <p className="text-xl text-velyno-gray max-w-2xl mx-auto">
              14 gün boyunca ücretsiz deneyin. Kredi kartı gerekmez. 
              İstediğiniz zaman iptal edebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kayit">
                <Button className="btn-secondary text-lg px-8 py-4 h-auto">
                  Hemen Başla - Ücretsiz
                </Button>
              </Link>
              <Button variant="outline" className="btn-outline text-lg px-8 py-4 h-auto">
                Satış Temsilcisi ile Görüş
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-6 text-sm text-velyno-gray">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Kolay kurulum</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Uzman destek</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Sınırsız ürün</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
