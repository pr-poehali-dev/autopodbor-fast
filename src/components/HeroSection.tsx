import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onNavigateToSection: (sectionId: string) => void;
}

const HeroSection = ({ onNavigateToSection }: HeroSectionProps) => {
  const features = [
    { icon: 'Clock', text: 'Быстро', desc: 'В течение дня' },
    { icon: 'Award', text: 'Качественно', desc: '100% гарантия' },
    { icon: 'Users', text: 'Опытно', desc: '10+ лет' }
  ];

  return (
    <section id="main" className="pt-20 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-secondary leading-tight">
                Автоподбор и осмотр
                <span className="text-primary block">в Новом Уренгое</span>
              </h1>
              <p className="text-xl text-muted-foreground mt-6 leading-relaxed">
                Быстро и качественно подберем легковой или грузовой автомобиль. 
                Профессиональный осмотр с гарантией результата.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg"
                onClick={() => onNavigateToSection('services')}
              >
                <Icon name="Search" size={20} className="mr-2" />
                Подобрать авто
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg"
                onClick={() => onNavigateToSection('inspection')}
              >
                <Icon name="CheckCircle" size={20} className="mr-2" />
                Заказать осмотр
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {features.map((item, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={item.icon as any} className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-secondary">{item.text}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl transform rotate-3"></div>
            <img 
              src="/img/e64cd6d3-e2cc-4857-a020-9db93c18a332.jpg" 
              alt="Профессиональный осмотр автомобиля" 
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;