import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Review {
  id: number;
  parentName: string;
  childName: string;
  childAge: string;
  text: string;
  rating: number;
  image: string;
  dress: string;
  date: string;
}

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews: Review[] = [
    {
      id: 1,
      parentName: "Анна Петрова",
      childName: "София",
      childAge: "3 года",
      text: "Восхитительное платье! София выглядела как настоящая принцесса на своём дне рождения. Качество потрясающее, а сервис - на высшем уровне. Обязательно вернёмся за новыми нарядами!",
      rating: 5,
      image: "/img/1fca3288-1545-4f94-a5e9-dfd44b657cf9.jpg",
      dress: "Принцесса Розочка",
      date: "15 сентября 2024"
    },
    {
      id: 2,
      parentName: "Елена Смирнова",
      childName: "Варвара",
      childAge: "2 года",
      text: "Потрясающая фотосессия получилась! Платье идеально село по фигуре, а голубой цвет так красиво смотрелся на фото. Фотограф был в восторге от наряда. Спасибо за сказку!",
      rating: 5,
      image: "/img/38b04f0c-30d5-4ce0-94d1-bb7901fef28a.jpg",
      dress: "Небесная Мечта",
      date: "3 сентября 2024"
    },
    {
      id: 3,
      parentName: "Мария Козлова",
      childName: "Алиса",
      childAge: "4 года",
      text: "Элегантное платье для выпускного в детском саду. Алиса чувствовала себя королевой! Жемчужные детали добавили особой изысканности. Всем рекомендую этот прокат!",
      rating: 5,
      image: "/img/4b20246a-c161-4dfe-9443-49cc291bfa58.jpg",
      dress: "Кремовая Элегантность",
      date: "28 августа 2024"
    },
    {
      id: 4,
      parentName: "Ольга Волкова",
      childName: "Даша",
      childAge: "5 лет",
      text: "Невероятно красивое платье! Даша танцевала весь вечер и чувствовала себя принцессой из сказки. Качество ткани превосходное, а команда очень внимательная к деталям.",
      rating: 5,
      image: "/img/99f8f633-e25d-4015-b9b0-5a924915b72d.jpg",
      dress: "Принцесса Розочка",
      date: "20 августа 2024"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index: number) => {
    setCurrentReview(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-pink-50 via-white to-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-comfortaa font-bold text-gray-800 mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl font-nunito text-gray-600 max-w-2xl mx-auto">
            Более 100 довольных семей уже создали незабываемые моменты с нашими платьями
          </p>
        </div>

        {/* Основная карточка отзыва */}
        <div className="max-w-5xl mx-auto mb-8">
          <Card className="overflow-hidden border-0 rounded-3xl shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Фото */}
                <div className="relative overflow-hidden">
                  <img
                    src={reviews[currentReview].image}
                    alt={`${reviews[currentReview].childName} в платье ${reviews[currentReview].dress}`}
                    className="w-full h-80 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-comfortaa font-semibold text-lg">
                      {reviews[currentReview].childName}
                    </p>
                    <p className="font-nunito text-sm opacity-90">
                      {reviews[currentReview].childAge} • {reviews[currentReview].dress}
                    </p>
                  </div>
                </div>

                {/* Текст отзыва */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      {renderStars(reviews[currentReview].rating)}
                    </div>
                    <p className="font-nunito text-gray-700 text-lg leading-relaxed mb-4">
                      "{reviews[currentReview].text}"
                    </p>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-comfortaa font-semibold text-gray-800">
                          {reviews[currentReview].parentName}
                        </p>
                        <p className="font-nunito text-sm text-gray-500">
                          {reviews[currentReview].date}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-pink-500">
                        <Icon name="Heart" size={20} className="fill-current" />
                        <span className="font-nunito text-sm">Проверенный отзыв</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Навигация */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prevReview}
            className="rounded-full border-pink-200 hover:bg-pink-50 w-12 h-12"
          >
            <Icon name="ChevronLeft" size={20} className="text-pink-600" />
          </Button>
          
          <div className="flex gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentReview 
                    ? 'bg-pink-400 w-8' 
                    : 'bg-gray-300 hover:bg-pink-200'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextReview}
            className="rounded-full border-pink-200 hover:bg-pink-50 w-12 h-12"
          >
            <Icon name="ChevronRight" size={20} className="text-pink-600" />
          </Button>
        </div>

        {/* Мини-галерея */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              onClick={() => goToReview(index)}
              className={`relative cursor-pointer rounded-2xl overflow-hidden transition-all ${
                index === currentReview 
                  ? 'ring-4 ring-pink-400 scale-105' 
                  : 'hover:scale-102 opacity-70 hover:opacity-90'
              }`}
            >
              <img
                src={review.image}
                alt={review.childName}
                className="w-full h-24 md:h-32 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-2 left-2 text-white">
                <p className="font-comfortaa text-xs font-semibold">
                  {review.childName}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Статистика */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" className="text-pink-500" size={24} />
            </div>
            <h3 className="font-comfortaa text-2xl font-bold text-gray-800">100+</h3>
            <p className="font-nunito text-gray-600">Довольных семей</p>
          </div>
          <div className="text-center">
            <div className="bg-cream-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Star" className="text-cream-600 fill-current" size={24} />
            </div>
            <h3 className="font-comfortaa text-2xl font-bold text-gray-800">4.9</h3>
            <p className="font-nunito text-gray-600">Средняя оценка</p>
          </div>
          <div className="text-center">
            <div className="bg-baby-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Camera" className="text-baby-500" size={24} />
            </div>
            <h3 className="font-comfortaa text-2xl font-bold text-gray-800">500+</h3>
            <p className="font-nunito text-gray-600">Волшебных фото</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;