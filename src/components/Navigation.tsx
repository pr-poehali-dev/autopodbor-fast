import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  currentSection: string;
  onSectionChange: (sectionId: string) => void;
}

const Navigation = ({ currentSection, onSectionChange }: NavigationProps) => {
  const scrollToSection = (sectionId: string) => {
    onSectionChange(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationItems = [
    { id: 'main', label: 'Главная' },
    { id: 'services', label: 'Услуги' },
    { id: 'selection', label: 'Автоподбор' },
    { id: 'inspection', label: 'Осмотр' },
    { id: 'gallery', label: 'Галерея' },
    { id: 'video', label: 'Видео' },
    { id: 'reviews', label: 'Отзывы' },
    { id: 'contacts', label: 'Контакты' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50 border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Car" className="text-primary" size={32} />
            <h1 className="text-2xl font-bold text-secondary">
              AutoExpert <span className="text-primary">НУ</span>
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-md transition-all duration-300 hover:bg-primary/10 ${
                  currentSection === item.id ? 'text-primary font-medium' : 'text-secondary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Звонок
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;