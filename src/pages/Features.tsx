
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Zap, 
  TrendingUp, 
  Users, 
  Shield, 
  Layers,
  RefreshCw,
  DollarSign,
  Package,
  Truck,
  PieChart,
  Settings
} from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      icon: Layers,
      title: "Çoklu Pazaryeri Entegrasyonu",
      description: "Trendyol, Hepsiburada, n11, Amazon, GittiGidiyor ve 20+ pazaryerini tek platformdan yönetin.",
      benefits: [
        "Tek tıkla tüm pazaryerlerine ürün listesi",
        "Merkezi stok ve fiyat yönetimi",
        "Otomatik sipariş senkronizasyonu",
        "Unified dashboard görünümü"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      reverse: false
    },
    {
      icon: RefreshCw,
      title: "Merkezi Stok Yönetimi",
      description: "Stok miktarlarınız gerçek zamanlı olarak tüm platformlarda senkronize edilir.",
      benefits: [
        "Gerçek zamanlı stok senkronizasyonu",
        "Stok uyarı sistemleri",
        "Otomatik stok güvenliği",
        "Varyant bazlı stok takibi"
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      reverse: true
    },
    {
      icon: DollarSign,
      title: "Akıllı Fiyat Yönetimi",
      description: "Rekabet analizi ve dinamik fiyatlama ile kârınızı maksimize edin.",
      benefits: [
        "Otomatik rekabet analizi",
        "Dinamik fiyatlama kuralları",
        "Toplu fiyat güncelleme",
        "Kar marjı koruması"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      reverse: false
    },
    {
      icon: Package,
      title: "Sipariş Konsolidasyonu",
      description: "Tüm pazaryerlerden gelen siparişleri tek panelden takip edin ve yönetin.",
      benefits: [
        "Merkezi sipariş yönetimi",
        "Otomatik sipariş işleme",
        "Kargo entegrasyonları",
        "Sipariş durumu takibi"
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      reverse: true
    },
    {
      icon: PieChart,
      title: "Analitik ve Raporlama",
      description: "Satış performansınızı analiz edin, trendleri keşfedin, büyüme fırsatlarını yakalayın.",
      benefits: [
        "Gerçek zamanlı satış raporları",
        "Pazaryeri performans analizi",
        "Ürün bazlı kar/zarar analizi",
        "Trend ve tahmin raporları"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      reverse: false
    },
    {
      icon: Settings,
      title: "Otomasyon Araçları",
      description: "Rutin işlemleri otomatikleştirin, zamandan tasarruf edin, hatları minimize edin.",
      benefits: [
        "Otomatik ürün listesi",
        "Scheduled price updates",
        "Auto-restock management",
        "Smart rule engine"
      ],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      reverse: true
    }
  ];

  const marketplaces = [
    { name: "Trendyol", color: "bg-red-500", logo: "T" },
    { name: "Hepsiburada", color: "bg-orange-500", logo: "H" },
    { name: "n11", color: "bg-blue-500", logo: "n11" },
    { name: "Amazon", color: "bg-yellow-500", logo: "A" },
    { name: "GittiGidiyor", color: "bg-green-500", logo: "G" },
    { name: "Çiçeksepeti", color: "bg-pink-500", logo: "Ç" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-velyno-light via-white to-velyno-light">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-velyno-dark">
              E-Ticaret Operasyonlarınızı{" "}
              <span className="gradient-text">Tek Platformda</span> Yönetin
            </h1>
            <p className="text-xl text-velyno-gray leading-relaxed max-w-3xl mx-auto">
              Velyno'nun güçlü özellikleriyle e-ticaret işletmenizi bir sonraki seviyeye taşıyın. 
              Pazaryeri entegrasyonundan analitik raporlara kadar ihtiyacınız olan her şey burada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kayit">
                <Button className="btn-secondary text-lg px-8 py-4 h-auto">
                  Ücretsiz Deneyin
                </Button>
              </Link>
              <Button variant="outline" className="btn-outline text-lg px-8 py-4 h-auto">
                Canlı Demo İzle
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Marketplaces */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-velyno-dark mb-4">
              Desteklenen Pazaryerleri
            </h2>
            <p className="text-velyno-gray">
              Türkiye'nin en büyük e-ticaret platformları ile entegrasyon
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {marketplaces.map((marketplace, index) => (
              <div 
                key={marketplace.name}
                className="flex flex-col items-center space-y-3 p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${marketplace.color} rounded-xl flex items-center justify-center text-white font-bold text-lg`}>
                  {marketplace.logo}
                </div>
                <span className="text-sm font-medium text-velyno-dark">{marketplace.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      {features.map((feature, index) => (
        <section key={index} className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-velyno-light/50'}`}>
          <div className="container mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${feature.reverse ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`space-y-8 animate-fade-in ${feature.reverse ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-velyno-primary/10 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-velyno-primary" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-velyno-dark">
                      {feature.title}
                    </h2>
                  </div>
                  
                  <p className="text-xl text-velyno-gray leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-4">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-velyno-primary rounded-full mt-3 flex-shrink-0"></div>
                        <span className="text-velyno-gray leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Link to="/kayit">
                    <Button className="btn-secondary">
                      Ücretsiz Deneyin
                    </Button>
                  </Link>
                  <Button variant="outline" className="btn-outline">
                    Detayları İncele
                  </Button>
                </div>
              </div>
              
              <div className={`animate-fade-in-delay ${feature.reverse ? 'lg:col-start-1' : ''}`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-10"></div>
                  <div className="relative">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Benefits Overview */}
      <section className="py-24 bg-gradient-stats relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Neden Velyno?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Binlerce e-ticaret işletmesinin tercihi olan Velyno ile 
              operasyonel verimliliğinizi artırın.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-scale-in">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Hızlı Kurulum</h3>
              <p className="text-white/80">
                5 dakikada kurulum tamamlayın, hemen satışa başlayın.
              </p>
            </div>
            
            <div className="text-center space-y-4 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Güvenli & Güvenilir</h3>
              <p className="text-white/80">
                ISO 27001 sertifikalı altyapı ile verileriniz güvende.
              </p>
            </div>
            
            <div className="text-center space-y-4 animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">7/24 Destek</h3>
              <p className="text-white/80">
                Uzman ekibimiz her zaman yanınızda, sorunlarınızı çözüyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-velyno-dark">
              Hemen <span className="gradient-text">Başlayın</span>
            </h2>
            <p className="text-xl text-velyno-gray max-w-2xl mx-auto">
              14 gün boyunca tüm özellikleri ücretsiz deneyin. 
              Kredi kartı gerekmez, istediğiniz zaman iptal edebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kayit">
                <Button className="btn-secondary text-lg px-8 py-4 h-auto">
                  Ücretsiz Hesap Oluştur
                </Button>
              </Link>
              <Button variant="outline" className="btn-outline text-lg px-8 py-4 h-auto">
                Satış Temsilcisi ile Görüş
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
