import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  const services = [
    {
      icon: 'Search',
      title: 'Автоподбор',
      description: 'Поможем найти идеальный автомобиль под ваши требования и бюджет',
      color: 'bg-primary'
    },
    {
      icon: 'Wrench',
      title: 'Осмотр',
      description: 'Детальная диагностика технического состояния автомобиля',
      color: 'bg-secondary'
    },
    {
      icon: 'Truck',
      title: 'Грузовой транспорт',
      description: 'Специализируемся на подборе и осмотре грузовых автомобилей',
      color: 'bg-accent'
    },
    {
      icon: 'FileText',
      title: 'Документы',
      description: 'Проверка юридической чистоты и оформление документов',
      color: 'bg-muted-foreground'
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полный спектр услуг по автоподбору и диагностике автомобилей в Новом Уренгое
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-6 text-center space-y-4">
                <div className={`w-16 h-16 mx-auto ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={service.icon as any} className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-secondary">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;