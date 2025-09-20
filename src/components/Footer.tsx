import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;