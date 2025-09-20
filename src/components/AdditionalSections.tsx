import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const AdditionalSections = () => {
  const reviews = [
    {
      name: 'Алексей Петров',
      rating: 5,
      text: 'Отличная работа! Помогли подобрать идеальный автомобиль в рамках бюджета. Очень доволен сервисом.',
      car: 'Toyota Camry 2019'
    },
    {
      name: 'Мария Сидорова',
      rating: 5,
      text: 'Профессиональный осмотр выявил скрытые дефекты, которые продавец скрывал. Спасибо за честность!',
      car: 'Volkswagen Polo 2020'
    },
    {
      name: 'Дмитрий Козлов',
      rating: 5,
      text: 'Быстро и качественно подобрали грузовик для бизнеса. Все документы оформили без проблем.',
      car: 'Mercedes Sprinter 2021'
    }
  ];

  const contacts = [
    {
      icon: 'Phone',
      title: 'Телефон',
      info: '+7 (xxx) xxx-xx-xx',
      color: 'bg-primary'
    },
    {
      icon: 'Mail',
      title: 'Email',
      info: 'info@autoexpert-nu.ru',
      color: 'bg-secondary'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      info: 'г. Новый Уренгой',
      color: 'bg-accent'
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      info: 'Пн-Вс: 9:00-21:00',
      color: 'bg-muted-foreground'
    }
  ];

  return (
    <>
      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Фото наших работ</h2>
            <p className="text-xl text-muted-foreground">
              Примеры успешно проведенных осмотров и подобранных автомобилей
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }, (_, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon name="Image" className="text-primary" size={48} />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <Button 
                    variant="outline" 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white"
                  >
                    <Icon name="Eye" size={16} className="mr-2" />
                    Смотреть
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Видео о нашей работе</h2>
            <p className="text-xl text-muted-foreground">
              Посмотрите, как проходит процесс осмотра и подбора автомобилей
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Array.from({ length: 4 }, (_, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <Icon name="Play" className="text-white ml-1" size={32} />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-lg">
                  Видео {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">
              Что говорят наши клиенты о качестве наших услуг
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">"{review.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-secondary">{review.name}</p>
                    <p className="text-sm text-primary">{review.car}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Готовы помочь с автоподбором и осмотром в Новом Уренгое
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {contacts.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-muted/30">
                    <div className={`w-12 h-12 ${contact.color} rounded-xl flex items-center justify-center`}>
                      <Icon name={contact.icon as any} className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">{contact.title}</p>
                      <p className="text-muted-foreground">{contact.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-secondary mb-6">Обратная связь</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">Имя</label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">Телефон</label>
                      <Input placeholder="+7 (xxx) xxx-xx-xx" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">Услуга</label>
                    <Input placeholder="Автоподбор или осмотр" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">Сообщение</label>
                    <Textarea placeholder="Расскажите о ваших требованиях..." rows={4} />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 py-3">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdditionalSections;