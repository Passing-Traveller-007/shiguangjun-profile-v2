import { } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">张三</span>
              <br />
              <span className="text-foreground">全栈开发工程师</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              专注于现代Web开发技术，拥有5年全栈开发经验，擅长React、Node.js、Python等技术栈。
              致力于创造优雅高效的数字产品。
            </p>


            {/* Contact Info */}
            <div className="mt-8 text-sm text-muted-foreground space-y-2">
              <p>📧 xxxxx@163.com</p>
              <p>📱 010-xxxxxxxx</p>
              <p>📍 北京, 中国</p>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 gradient-bg rounded-full blur-3xl opacity-30"></div>
              <img
                src={heroImage}
                alt="Professional Portrait"
                className="relative z-10 w-full h-auto rounded-2xl card-glow"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-card p-3 rounded-lg card-glow">
                <div className="text-sm font-medium gradient-text">5+ 年经验</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card p-3 rounded-lg card-glow">
                <div className="text-sm font-medium gradient-text">50+ 项目</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;