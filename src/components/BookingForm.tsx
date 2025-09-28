import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import Icon from "@/components/ui/icon";

interface BookingFormData {
  parentName: string;
  childName: string;
  phone: string;
  email: string;
  childAge: string;
  dressId: string;
  rentalType: string;
  date: Date | undefined;
  time: string;
  comments: string;
}

interface Dress {
  id: number;
  name: string;
  age: string;
  price: string;
  available: boolean;
}

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<BookingFormData>({
    parentName: "",
    childName: "",
    phone: "",
    email: "",
    childAge: "",
    dressId: "",
    rentalType: "",
    date: undefined,
    time: "",
    comments: "",
  });

  const dresses: Dress[] = [
    { id: 1, name: "Принцесса Розочка", age: "1-3 года", price: "2500 ₽/день", available: true },
    { id: 2, name: "Небесная Мечта", age: "2-5 лет", price: "2800 ₽/день", available: true },
    { id: 3, name: "Кремовая Элегантность", age: "3-7 лет", price: "3200 ₽/день", available: false },
  ];

  const timeSlots = [
    "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
  ];

  const rentalTypes = [
    { id: "full-day", name: "Аренда на день", description: "Полный день с доставкой" },
    { id: "photoshoot", name: "Фотосессия (3 часа)", description: "Краткосрочная аренда" }
  ];

  const handleInputChange = (field: keyof BookingFormData, value: string | Date | undefined) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Валидация
    if (!formData.parentName || !formData.phone || !formData.childAge || !formData.dressId || !formData.rentalType || !formData.date || !formData.time) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive",
      });
      return;
    }

    // Имитация отправки
    toast({
      title: "Заявка отправлена! 🎉",
      description: "Мы свяжемся с вами в течение 30 минут для подтверждения бронирования",
    });

    // Очистка формы
    setFormData({
      parentName: "",
      childName: "",
      phone: "",
      email: "",
      childAge: "",
      dressId: "",
      rentalType: "",
      date: undefined,
      time: "",
      comments: "",
    });
  };

  const selectedDress = dresses.find(d => d.id.toString() === formData.dressId);

  return (
    <Card className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm border-0 rounded-3xl shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="font-comfortaa text-3xl text-gray-800 flex items-center justify-center gap-2">
          <Icon name="Calendar" className="text-pink-400" size={28} />
          Форма бронирования
        </CardTitle>
        <p className="font-nunito text-gray-600">Заполните форму, и мы свяжемся с вами для подтверждения</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Контактная информация */}
          <div className="bg-pink-50 rounded-2xl p-6">
            <h3 className="font-comfortaa font-semibold text-lg mb-4 text-pink-700">Контактная информация</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="parentName" className="font-nunito">Имя родителя *</Label>
                <Input
                  id="parentName"
                  value={formData.parentName}
                  onChange={(e) => handleInputChange("parentName", e.target.value)}
                  placeholder="Ваше имя"
                  className="mt-1 rounded-xl border-pink-200 focus:border-pink-400"
                />
              </div>
              <div>
                <Label htmlFor="childName" className="font-nunito">Имя ребёнка</Label>
                <Input
                  id="childName"
                  value={formData.childName}
                  onChange={(e) => handleInputChange("childName", e.target.value)}
                  placeholder="Имя малышки"
                  className="mt-1 rounded-xl border-pink-200 focus:border-pink-400"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="font-nunito">Телефон *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+7 (999) 123-45-67"
                  className="mt-1 rounded-xl border-pink-200 focus:border-pink-400"
                />
              </div>
              <div>
                <Label htmlFor="email" className="font-nunito">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="example@mail.ru"
                  className="mt-1 rounded-xl border-pink-200 focus:border-pink-400"
                />
              </div>
            </div>
          </div>

          {/* Информация о ребёнке */}
          <div className="bg-cream-50 rounded-2xl p-6">
            <h3 className="font-comfortaa font-semibold text-lg mb-4 text-cream-700">Информация о ребёнке</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="childAge" className="font-nunito">Возраст ребёнка *</Label>
                <Select value={formData.childAge} onValueChange={(value) => handleInputChange("childAge", value)}>
                  <SelectTrigger className="mt-1 rounded-xl border-cream-200 focus:border-cream-400">
                    <SelectValue placeholder="Выберите возраст" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 год</SelectItem>
                    <SelectItem value="2">2 года</SelectItem>
                    <SelectItem value="3">3 года</SelectItem>
                    <SelectItem value="4">4 года</SelectItem>
                    <SelectItem value="5">5 лет</SelectItem>
                    <SelectItem value="6">6 лет</SelectItem>
                    <SelectItem value="7">7 лет</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Выбор платья */}
          <div className="bg-baby-50 rounded-2xl p-6">
            <h3 className="font-comfortaa font-semibold text-lg mb-4 text-baby-700">Выбор платья</h3>
            <div className="grid gap-3">
              {dresses.map((dress) => (
                <div
                  key={dress.id}
                  className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                    formData.dressId === dress.id.toString()
                      ? 'border-baby-400 bg-baby-100'
                      : 'border-gray-200 hover:border-baby-300'
                  } ${!dress.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => dress.available && handleInputChange("dressId", dress.id.toString())}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-comfortaa font-semibold">{dress.name}</h4>
                      <p className="font-nunito text-sm text-gray-600">Возраст: {dress.age}</p>
                      <p className="font-nunito text-sm font-semibold text-baby-600">{dress.price}</p>
                    </div>
                    <div className="space-y-2">
                      {formData.dressId === dress.id.toString() && (
                        <Icon name="Check" className="text-baby-500" size={20} />
                      )}
                      <Badge className={dress.available ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}>
                        {dress.available ? "Доступно" : "Недоступно"}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Тип аренды */}
          <div className="bg-pink-50 rounded-2xl p-6">
            <h3 className="font-comfortaa font-semibold text-lg mb-4 text-pink-700">Тип аренды</h3>
            <div className="grid gap-3">
              {rentalTypes.map((type) => (
                <div
                  key={type.id}
                  className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                    formData.rentalType === type.id
                      ? 'border-pink-400 bg-pink-100'
                      : 'border-gray-200 hover:border-pink-300'
                  }`}
                  onClick={() => handleInputChange("rentalType", type.id)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-comfortaa font-semibold">{type.name}</h4>
                      <p className="font-nunito text-sm text-gray-600">{type.description}</p>
                    </div>
                    {formData.rentalType === type.id && (
                      <Icon name="Check" className="text-pink-500" size={20} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Дата и время */}
          <div className="bg-cream-50 rounded-2xl p-6">
            <h3 className="font-comfortaa font-semibold text-lg mb-4 text-cream-700">Дата и время</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label className="font-nunito">Дата аренды *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full mt-1 rounded-xl border-cream-200 justify-start text-left font-normal"
                    >
                      <Icon name="Calendar" className="mr-2 h-4 w-4" />
                      {formData.date ? format(formData.date, "PPP", { locale: ru }) : "Выберите дату"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.date}
                      onSelect={(date) => handleInputChange("date", date)}
                      disabled={(date) => date < new Date() || date.getDay() === 0}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label htmlFor="time" className="font-nunito">Время *</Label>
                <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                  <SelectTrigger className="mt-1 rounded-xl border-cream-200 focus:border-cream-400">
                    <SelectValue placeholder="Выберите время" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Комментарии */}
          <div>
            <Label htmlFor="comments" className="font-nunito">Дополнительные пожелания</Label>
            <Textarea
              id="comments"
              value={formData.comments}
              onChange={(e) => handleInputChange("comments", e.target.value)}
              placeholder="Особые пожелания, адрес доставки, вопросы..."
              className="mt-1 rounded-xl border-gray-200 focus:border-pink-400 min-h-[80px]"
            />
          </div>

          {/* Сводка заказа */}
          {selectedDress && formData.rentalType && formData.date && (
            <div className="bg-gradient-to-br from-pink-100 to-cream-100 rounded-2xl p-6">
              <h3 className="font-comfortaa font-semibold text-lg mb-4">Сводка заказа</h3>
              <div className="space-y-2 font-nunito">
                <p><span className="font-semibold">Платье:</span> {selectedDress.name}</p>
                <p><span className="font-semibold">Тип аренды:</span> {rentalTypes.find(t => t.id === formData.rentalType)?.name}</p>
                <p><span className="font-semibold">Дата:</span> {format(formData.date, "PPP", { locale: ru })}</p>
                <p><span className="font-semibold">Время:</span> {formData.time}</p>
                <p className="text-lg font-semibold text-pink-600">Стоимость: {selectedDress.price}</p>
              </div>
            </div>
          )}

          {/* Кнопка отправки */}
          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-pink-200 to-cream-200 text-pink-800 hover:from-pink-300 hover:to-cream-300 font-nunito text-lg py-6 rounded-2xl"
          >
            <Icon name="Heart" size={20} className="mr-2" />
            Отправить заявку
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;