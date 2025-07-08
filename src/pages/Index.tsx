import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<number | null>(null);

  const articles = [
    {
      title: "Как я создал стартап в 19 лет",
      description: "История молодого предпринимателя о первых шагах в бизнесе",
      author: "Алексей Петров",
      date: "15 марта 2024",
      image: "/img/58d4989e-7b55-44f4-9a8e-7fd7152a7433.jpg",
      category: "Интервью",
    },
    {
      title: "Будущее ИИ в стартапах",
      description:
        "Как искусственный интеллект меняет подход к созданию бизнеса",
      author: "Мария Сидорова",
      date: "12 марта 2024",
      image: "/img/1f80bd04-2c26-4a39-9736-4a681e6214da.jpg",
      category: "Технологии",
    },
    {
      title: "Командная работа в стартапе",
      description: "Секреты эффективного сотрудничества в молодых компаниях",
      author: "Дмитрий Иванов",
      date: "10 марта 2024",
      image: "/img/6f75753f-723e-4c1b-9acc-ae5fceb327d7.jpg",
      category: "Обучение",
    },
  ];

  const news = [
    {
      title: "Новый рекорд инвестиций в российские стартапы",
      time: "2 часа назад",
      type: "Инвестиции",
    },
    {
      title: "Запуск первого в мире квантового стартапа",
      time: "4 часа назад",
      type: "Технологии",
    },
    {
      title: "Молодой предприниматель получил грант 10 млн рублей",
      time: "6 часов назад",
      type: "Гранты",
    },
  ];

  const quizQuestions = [
    {
      question: "Что такое MVP в стартапе?",
      options: [
        "Минимально жизнеспособный продукт",
        "Максимально выгодный проект",
        "Модель виртуального производства",
      ],
      correct: 0,
    },
    {
      question: "Как называется стадия привлечения первых инвестиций?",
      options: ["Series A", "Seed раунд", "IPO"],
      correct: 1,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="gradient-blue p-2 rounded-lg">
                <Icon name="Rocket" className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold gradient-text">СтартапStory</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                О журнале
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Статьи
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Новости
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="gradient-blue text-white hover:opacity-90">
              Подписаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 gradient-text">
            Истории успеха молодых предпринимателей
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Узнайте о стартапах, которые меняют мир. Интервью с основателями,
            обучающие материалы и свежие новости из мира инноваций.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="gradient-blue text-white hover:opacity-90 glow-effect"
            >
              <Icon name="Play" className="mr-2 h-5 w-5" />
              Читать истории
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500 text-blue-600 hover:bg-blue-50"
            >
              <Icon name="Users" className="mr-2 h-5 w-5" />
              Присоединиться
            </Button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="articles">Статьи</TabsTrigger>
            <TabsTrigger value="about">О журнале</TabsTrigger>
            <TabsTrigger value="news">Новости</TabsTrigger>
            <TabsTrigger value="quiz">Викторина</TabsTrigger>
          </TabsList>

          <TabsContent value="articles" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <Card
                  key={index}
                  className="story-card hover-scale overflow-hidden"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800"
                      >
                        {article.category}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {article.date}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                    <CardDescription>{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon name="User" className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          {article.author}
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-600 hover:bg-blue-50"
                      >
                        Читать{" "}
                        <Icon name="ArrowRight" className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="about" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 gradient-text">
                  Почему мы?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="gradient-blue p-1 rounded-full">
                      <Icon name="Users" className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Интервью с основателями</h4>
                      <p className="text-gray-600">
                        Живые истории успеха от молодых предпринимателей
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="gradient-blue p-1 rounded-full">
                      <Icon name="BookOpen" className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Обучающие материалы</h4>
                      <p className="text-gray-600">
                        Практические советы для начинающих предпринимателей
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="gradient-blue p-1 rounded-full">
                      <Icon name="Zap" className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Свежие новости</h4>
                      <p className="text-gray-600">
                        Актуальная информация из мира технологий и стартапов
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="futuristic-border">
                <div className="futuristic-border-inner text-center">
                  <Icon
                    name="Target"
                    className="h-16 w-16 mx-auto mb-4 text-blue-600"
                  />
                  <h4 className="text-xl font-bold mb-2">Наша миссия</h4>
                  <p className="text-gray-600">
                    Вдохновляем молодых людей на создание инновационных проектов
                    и помогаем им развивать предпринимательские навыки
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="news" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold gradient-text">
                  Последние новости
                </h3>
                {news.map((item, index) => (
                  <Card key={index} className="hover-scale cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge variant="outline" className="text-xs mb-2">
                            {item.type}
                          </Badge>
                          <h4 className="font-semibold text-sm mb-1">
                            {item.title}
                          </h4>
                          <span className="text-xs text-gray-500">
                            {item.time}
                          </span>
                        </div>
                        <Icon
                          name="ExternalLink"
                          className="h-4 w-4 text-gray-400 ml-2"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="futuristic-border">
                <div className="futuristic-border-inner">
                  <Icon
                    name="Bell"
                    className="h-8 w-8 mx-auto mb-4 text-blue-600"
                  />
                  <h4 className="text-lg font-bold mb-2 text-center">
                    Будьте в курсе
                  </h4>
                  <p className="text-gray-600 text-center text-sm mb-4">
                    Подпишитесь на рассылку и получайте самые важные новости
                    первыми
                  </p>
                  <Button className="w-full gradient-blue text-white">
                    Подписаться на новости
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="quiz" className="space-y-6">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold gradient-text text-center mb-6">
                Проверьте свои знания
              </h3>
              <div className="space-y-4">
                {quizQuestions.map((q, index) => (
                  <Card key={index} className="futuristic-border">
                    <div className="futuristic-border-inner">
                      <h4 className="font-semibold mb-4">{q.question}</h4>
                      <div className="space-y-2">
                        {q.options.map((option, optIndex) => (
                          <Button
                            key={optIndex}
                            variant={
                              selectedQuiz === index && optIndex === q.correct
                                ? "default"
                                : "outline"
                            }
                            className={`w-full justify-start text-left ${
                              selectedQuiz === index && optIndex === q.correct
                                ? "gradient-blue text-white"
                                : "hover:bg-blue-50"
                            }`}
                            onClick={() => setSelectedQuiz(index)}
                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                      {selectedQuiz === index && (
                        <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                          <p className="text-green-800 text-sm">
                            ✅ Правильно! {q.options[q.correct]}
                          </p>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="gradient-blue p-2 rounded-lg">
                  <Icon name="Rocket" className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">СтартапStory</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Журнал о молодёжных стартапах, инновациях и предпринимательстве
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Интервью
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Обучение
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Новости
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Игры
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📧 info@startupstory.ru</p>
                <p>📱 +7 (999) 123-45-67</p>
                <p>📍 Москва, Россия</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:bg-gray-800"
                >
                  <Icon name="MessageCircle" className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:bg-gray-800"
                >
                  <Icon name="Instagram" className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:bg-gray-800"
                >
                  <Icon name="Youtube" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
