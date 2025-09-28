import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const dresses = [
    {
      id: 1,
      name: "Принцесса Розочка",
      age: "1-3 года",
      price: "2500 ₽/день",
      image: "/img/9551b067-684f-4530-8eb9-f4a31cac4994.jpg",
      description: "Нежное розовое платье с блёстками",
      available: true
    },
    {
      id: 2,
      name: "Небесная Мечта",
      age: "2-5 лет",
      price: "2800 ₽/день",
      image: "/img/8051d4f8-fd1d-48b2-9319-b3fc5e5727c9.jpg",
      description: "Голубое платье с кружевом",
      available: true
    },
    {
      id: 3,
      name: "Кремовая Элегантность",
      age: "3-7 лет",
      price: "3200 ₽/день",
      image: "/img/d90bc299-fa8d-4368-9bc6-2b4f3e3b2a43.jpg",
      description: "Кремовое платье с жемчужинами",
      available: false
    }
  ];

  const sizes = [
    { age: "1-2 года", height: "80-92 см", size: "92" },
    { age: "2-3 года", height: "92-98 см", size: "98" },
    { age: "3-4 года", height: "98-104 см", size: "104" },
    { age: "4-5 лет", height: "104-110 см", size: "110" },
    { age: "5-6 лет", height: "110-116 см", size: "116" },
    { age: "6-7 лет", height: "116-122 см", size: "122" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-cream-50 to-baby-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Icon name="Sparkles" className="text-pink-400" size={28} />
              <h1 className="text-2xl font-comfortaa font-bold text-gray-800">Маленькие Принцессы</h1>
            </div>
            <div className="hidden md:flex space-x-6 font-nunito">
              <a href="#catalog" className="text-gray-700 hover:text-pink-400 transition-colors">Каталог</a>
              <a href="#sizes" className="text-gray-700 hover:text-pink-400 transition-colors">Размеры</a>
              <a href="#prices" className="text-gray-700 hover:text-pink-400 transition-colors">Цены</a>
              <a href="#booking" className="text-gray-700 hover:text-pink-400 transition-colors">Бронирование</a>
              <a href="#contacts" className="text-gray-700 hover:text-pink-400 transition-colors">Контакты</a>
            </div>
            <Button className="bg-pink-200 text-pink-800 hover:bg-pink-300 font-nunito rounded-2xl">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-comfortaa font-bold text-gray-800 mb-6">
              Волшебные платья для 
              <span className="text-pink-400 animate-float inline-block ml-2">маленьких принцесс</span>
            </h2>
            <p className="text-xl font-nunito text-gray-600 max-w-2xl mx-auto mb-8">
              Прокат детских платьев для фотосессий, праздников и выпускных. 
              Возраст от 1 до 7 лет. Создаём сказочные моменты!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-200 text-pink-800 hover:bg-pink-300 font-nunito text-lg px-8 py-4 rounded-2xl animate-scale-in">
                <Icon name="Heart" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button variant="outline" size="lg" className="border-pink-200 text-pink-600 hover:bg-pink-50 font-nunito text-lg px-8 py-4 rounded-2xl">
                <Icon name="Calendar" size={20} className="mr-2" />
                Забронировать
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Sparkles" className="text-pink-500" size={24} />
              </div>
              <h3 className="text-xl font-comfortaa font-semibold mb-2">Премиум качество</h3>
              <p className="font-nunito text-gray-600">Только лучшие ткани и качественный пошив</p>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="bg-cream-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="text-cream-600" size={24} />
              </div>
              <h3 className="text-xl font-comfortaa font-semibold mb-2">Чистота и безопасность</h3>
              <p className="font-nunito text-gray-600">Профессиональная чистка после каждой аренды</p>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="bg-baby-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="text-baby-600" size={24} />
              </div>
              <h3 className="text-xl font-comfortaa font-semibold mb-2">Быстрое бронирование</h3>
              <p className="font-nunito text-gray-600">Забронировать можно всего за 5 минут</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-comfortaa font-bold text-center mb-12 text-gray-800">Наш каталог</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dresses.map((dress, index) => (
              <Card key={dress.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in border-0 bg-white/70 backdrop-blur-sm rounded-3xl" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-3xl">
                    <img 
                      src={dress.image} 
                      alt={dress.name}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {!dress.available && (
                      <Badge className="absolute top-4 right-4 bg-red-100 text-red-600">
                        Недоступно
                      </Badge>
                    )}
                    {dress.available && (
                      <Badge className="absolute top-4 right-4 bg-green-100 text-green-600">
                        Доступно
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="font-comfortaa text-xl">{dress.name}</CardTitle>
                    <Badge variant="secondary" className="bg-pink-100 text-pink-600 rounded-full">
                      {dress.age}
                    </Badge>
                  </div>
                  <p className="font-nunito text-gray-600 mb-4">{dress.description}</p>
                  <p className="font-comfortaa text-2xl font-bold text-pink-600">{dress.price}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button 
                    className="w-full bg-pink-200 text-pink-800 hover:bg-pink-300 font-nunito rounded-2xl"
                    disabled={!dress.available}
                  >
                    <Icon name="Heart" size={16} className="mr-2" />
                    {dress.available ? 'Забронировать' : 'Недоступно'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section id="sizes" className="py-20 bg-gradient-to-r from-pink-50 to-cream-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-comfortaa font-bold text-center mb-12 text-gray-800">Таблица размеров</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sizes.map((size, index) => (
                <Card key={index} className="text-center bg-white/80 rounded-2xl border-0 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6">
                    <h3 className="font-comfortaa font-semibold text-lg mb-2">{size.age}</h3>
                    <p className="font-nunito text-gray-600 mb-1">Рост: {size.height}</p>
                    <p className="font-nunito text-pink-600 font-semibold">Размер: {size.size}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prices */}
      <section id="prices" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-comfortaa font-bold text-center mb-12 text-gray-800">Цены и условия</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-pink-100 to-pink-200 border-0 rounded-3xl">
              <CardHeader>
                <CardTitle className="font-comfortaa text-2xl text-center">Аренда на день</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-4xl font-comfortaa font-bold text-pink-600 mb-4">2500-3200 ₽</p>
                <ul className="font-nunito text-gray-700 space-y-2">
                  <li>✨ Профессиональная чистка включена</li>
                  <li>✨ Примерка перед арендой</li>
                  <li>✨ Подбор аксессуаров</li>
                  <li>✨ Консультация стилиста</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-cream-100 to-cream-200 border-0 rounded-3xl">
              <CardHeader>
                <CardTitle className="font-comfortaa text-2xl text-center">Фотосессия (3 часа)</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-4xl font-comfortaa font-bold text-cream-600 mb-4">1800-2500 ₽</p>
                <ul className="font-nunito text-gray-700 space-y-2">
                  <li>📸 Идеально для фотосессий</li>
                  <li>📸 Быстрая примерка</li>
                  <li>📸 Помощь на локации</li>
                  <li>📸 Скидка при повторной аренде</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-20 bg-gradient-to-br from-baby-50 to-pink-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-comfortaa font-bold mb-8 text-gray-800">Готовы создать сказку?</h2>
          <p className="text-xl font-nunito text-gray-600 max-w-2xl mx-auto mb-8">
            Забронируйте платье для вашей маленькой принцессы прямо сейчас!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pink-200 text-pink-800 hover:bg-pink-300 font-nunito text-lg px-8 py-4 rounded-2xl">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              WhatsApp
            </Button>
            <Button size="lg" className="bg-baby-200 text-baby-800 hover:bg-baby-300 font-nunito text-lg px-8 py-4 rounded-2xl">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-comfortaa font-bold text-center mb-12 text-gray-800">Контакты</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Icon name="Phone" className="text-pink-500" size={20} />
                </div>
                <div>
                  <h3 className="font-comfortaa font-semibold">Телефон</h3>
                  <p className="font-nunito text-gray-600">+7 (999) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Icon name="MessageCircle" className="text-green-500" size={20} />
                </div>
                <div>
                  <h3 className="font-comfortaa font-semibold">WhatsApp</h3>
                  <p className="font-nunito text-gray-600">+7 (999) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-baby-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" className="text-baby-500" size={20} />
                </div>
                <div>
                  <h3 className="font-comfortaa font-semibold">Адрес</h3>
                  <p className="font-nunito text-gray-600">г. Москва, ул. Примерная, д. 123</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Icon name="Clock" className="text-purple-500" size={20} />
                </div>
                <div>
                  <h3 className="font-comfortaa font-semibold">Режим работы</h3>
                  <p className="font-nunito text-gray-600">Ежедневно с 10:00 до 20:00</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-cream-50 rounded-3xl p-8">
              <h3 className="font-comfortaa font-semibold text-xl mb-4">Почему выбирают нас?</h3>
              <ul className="font-nunito text-gray-600 space-y-3">
                <li className="flex items-center">
                  <Icon name="Check" className="text-green-500 mr-2" size={16} />
                  Более 100 довольных клиентов
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="text-green-500 mr-2" size={16} />
                  Гарантия качества и чистоты
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="text-green-500 mr-2" size={16} />
                  Индивидуальный подход
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="text-green-500 mr-2" size={16} />
                  Доставка по Москве
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Sparkles" className="text-pink-400" size={24} />
            <h3 className="font-comfortaa font-bold text-xl">Маленькие Принцессы</h3>
          </div>
          <p className="font-nunito text-gray-400 mb-4">
            Создаём незабываемые моменты для ваших малышек
          </p>
          <p className="font-nunito text-gray-500 text-sm">
            © 2024 Маленькие Принцессы. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;