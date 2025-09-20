import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('main');

  const scrollToSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Navigation */}
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
              {[
                { id: 'main', label: 'Главная' },
                { id: 'services', label: 'Услуги' },
                { id: 'selection', label: 'Автоподбор' },
                { id: 'inspection', label: 'Осмотр' },
                { id: 'gallery', label: 'Галерея' },
                { id: 'video', label: 'Видео' },
                { id: 'reviews', label: 'Отзывы' },
                { id: 'contacts', label: 'Контакты' }
              ].map((item) => (
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

      {/* Hero Section */}
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
                  onClick={() => scrollToSection('services')}
                >
                  <Icon name="Search" size={20} className="mr-2" />
                  Подобрать авто
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg"
                  onClick={() => scrollToSection('inspection')}
                >
                  <Icon name="CheckCircle" size={20} className="mr-2" />
                  Заказать осмотр
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { icon: 'Clock', text: 'Быстро', desc: 'В течение дня' },
                  { icon: 'Award', text: 'Качественно', desc: '100% гарантия' },
                  { icon: 'Users', text: 'Опытно', desc: '10+ лет' }
                ].map((item, index) => (
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

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по автоподбору и диагностике автомобилей в Новом Уренгое
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
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
            ].map((service, index) => (
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

      {/* Auto Selection Section */}
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
                {[
                  'Анализ рынка и поиск лучших предложений',
                  'Проверка технического состояния',
                  'Юридическая проверка документов',
                  'Сопровождение сделки'
                ].map((item, index) => (
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

      {/* Inspection Section */}
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
            {[
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
            ].map((category, index) => (
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
            {[
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
            ].map((review, index) => (
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
                {[
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
                ].map((contact, index) => (
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

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Car" className="text-primary" size={28} />
                <h3 className="text-xl font-bold">AutoExpert НУ</h3>
              </div>
              <p className="text-white/80">
                Профессиональный автоподбор и осмотр в Новом Уренгое. 
                Быстро, качественно, надежно.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/80">
                <li>Автоподбор</li>
                <li>Осмотр автомобилей</li>
                <li>Проверка документов</li>
                <li>Сопровождение сделок</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p>г. Новый Уренгой</p>
                <p>+7 (xxx) xxx-xx-xx</p>
                <p>info@autoexpert-nu.ru</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Ключевые слова</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                автоподбор, осмотр, новый уренгой, диагностика автомобилей, 
                проверка авто, подбор машины, техосмотр
              </p>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 AutoExpert НУ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;