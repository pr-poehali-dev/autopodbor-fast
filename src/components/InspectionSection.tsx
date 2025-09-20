import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const InspectionSection = () => {
  const inspectionCategories = [
    {
      title: 'Внешний осмотр',
      items: ['Кузов и лакокрасочное покрытие', 'Элементы безопасности', 'Состояние шин и дисков', 'Оптика и стекла']
    },
    {
      title: 'Техническая диагностика',
      items: ['Двигатель и трансмиссия', 'Тормозная система', 'Подвеска и рулевое', 'Электрооборудование']
    },
    {
      title: 'Документооборот',
      items: ['Проверка VIN-номера', 'История обслуживания', 'Юридическая чистота', 'Оценка стоимости']
    }
  ];

  return (
    <section id="inspection" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Профессиональный осмотр автомобилей
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Детальная диагностика технического состояния легкового и грузового транспорта 
            с использованием современного оборудования
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {inspectionCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <Icon name="CheckCircle2" className="text-primary" size={16} />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspectionSection;