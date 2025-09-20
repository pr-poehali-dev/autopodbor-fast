import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const AutoSelectionSection = () => {
  const features = [
    'Анализ рынка и поиск лучших предложений',
    'Проверка технического состояния',
    'Юридическая проверка документов',
    'Сопровождение сделки'
  ];

  return (
    <section id="selection" className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-secondary mb-6">
              Автоподбор в Новом Уренгое
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Наши эксперты помогут найти автомобиль, который идеально подойдет под ваши потребности. 
              Работаем с легковыми и грузовыми автомобилями всех марок.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Check" className="text-white" size={16} />
                  </div>
                  <span className="text-secondary">{item}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Заказать подбор
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src="/img/65581bc8-f05f-4198-9ecb-2884e2cd9ceb.jpg" 
              alt="Автоподбор в Новом Уренгое" 
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Star" className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-secondary">500+ авто подобрано</p>
                  <p className="text-sm text-muted-foreground">За последний год</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoSelectionSection;