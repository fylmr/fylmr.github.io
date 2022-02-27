abstract class CVData {
  late final String name;
  late final String job;
  late final String age;
  late final String mainCity;

  String get pageTitle => "$name — $job";
  late final List<Contact> contacts;

  late final List<WhatIDo> whatIDos;

  late final List<Position> positions;
}

class RuData extends CVData {
  RuData() {
    name = "Филипп Максимов";
    job = "Android-разработчик";
    age = "24 года";
    mainCity = "Калининград";

    contacts = [
      Contact(service: "E-mail", value: "phmaksimov@gmail.com"),
      Contact(service: "Telegram", value: "@phhmaa"),
    ];

    whatIDos = [
      WhatIDo(text: "Разрабатывать приложения под Android на Kotlin и Java"),
      WhatIDo(
          text: "Использую Retrofit/OkHttp или Ktor для работы с сетью",
          indentation: 1),
      WhatIDo(
          text: "Асинхронные задачи делаю на Kotlin Coroutines или RxJava",
          indentation: 1),
      WhatIDo(
          text: "Для Dependency Injection пользуюсь Dagger или Koin",
          indentation: 1),
      WhatIDo(text: "Применяю MVP (Moxy) и MVVM", indentation: 1),
      WhatIDo(
          text: "Пишу юнит-тесты с Mockito, Robolectric и Espresso",
          indentation: 1),
      WhatIDo(
          text: "Есть опыт выкладывания приложений в Google Play",
          indentation: 1),
      WhatIDo(text: "Пользоваться Git, Jira, Wrike, Confluence, Redmine"),
    ];

    positions = [
      Position(
          title: "Wrike",
          location: "Калининград (удалённо, международная команда)",
          duration: "С января 2022 по настоящее время",
          positionLinks: [
            PositionLink(
                name: "Wrike App",
                url: "https://play.google.com/store/apps/details?id=com.wrike")
          ],
          description: [
            "Приложение для управления проектами",
            "Технологии на проекте: многомодульная архитектура, Kotlin (+ KMM), Compose, Coroutines, Retrofit, Dagger, MVVM, Git"
          ]),
      Position(
          title: "Budu / Ренессанс Здоровье",
          location: "Калининград (удалённо на Москву)",
          duration: "Декабрь 2020 — Январь 2022",
          positionLinks: [
            PositionLink(
                name: "Budu",
                url:
                "https://play.google.com/store/apps/details?id=com.core.team.renins"),
            PositionLink(
                name: "Ренессанс Здоровье",
                url:
                "https://play.google.com/store/apps/details?id=com.core.team.renins")
          ],
          description: [
            "Приложения для телемедицины, записи к врачу, управления ДМС.      Работал в продуктовых командах, занимался монетизацией, вовлечением пользователей. Также работал над решением проблем видео- и аудио-звонков, плотно работал с WebRTC.",
            "Технологии на проекте: многомодульная архитектура, Kotlin, RxJava2, Coroutines, Retrofit, Dagger, Moxy MVP, Room, Picasso, Git, Jira, Confluence"
          ]),
      Position(
          title: "e-Legion Калининград",
          location: "Калининград (удалённо)",
          duration: "Октябрь 2018 — Декабрь 2020",
          positionLinks: [
            PositionLink(
                name: "Мой Tele2",
                url:
                "https://play.google.com/store/apps/details?id=ru.tele2.mytele2")
          ],
          description: [
            "Основное приложение для мобильного оператора Tele2 с более чем 10 миллионами пользователей. Работаю на проекте с мая 2019, когда начался масштабный редизайн приложения. За это время самостоятельно и с командой реализовали множество фич разной важности, победили в рейтинге Роскачества среди мобильных операторов. Внутри Андроид-команды разделили обязанности тимлида, чтобы все несли равную ответственность: проводим кросс-код-ревью, по очереди ходим на митинги, вместе ревьюим и оцениваем задачи.",
            "Работал также над двумя другими проектами в компании: приложением для связи с умными часами и социальной сетью.",
            "Технологии на проектах: Kotlin/Java, RxJava 2, Dagger 2, Retrofit, Moxy MVP, Room, Yandex Maps SDK, Glide/Picasso"
          ]),
      Position(
          title: "ITSpecial",
          location: "Калининград",
          duration: "Июнь 2018 — Октябрь 2018",
          positionLinks: [
            PositionLink(name: "IDesk", url: "https://i-desk.pro/")
          ],
          description: [
            "Без предшествующего опыта работы, будучи единственным мобильным разработчиком в компании, создал с нуля приложение под Андроид и интегрировал его в существующую электронную систему для гостиниц и торговых центров. Прошёл путь от ТЗ и дизайна на тетрадном листе до релиза и первых продаж.\nВ свободное время помогал также на других проектах, писал на Go для бэкенда и C# для VR-приложения на Unity.",
            "Технологии на Андроид-проектах: Kotlin/Java, RxJava 2, Dagger/Koin, Retrofit, MVVM/Moxy, Room, Picasso"
          ])
    ];
  }
}

class Contact {
  final String service;
  final String value;
  final String? url;

  Contact({required this.service, required this.value, this.url});
}

class WhatIDo {
  final String text;
  final int indentation;

  WhatIDo({required this.text, this.indentation = 0});
}

class Position {
  final String title;
  final String location;
  final String duration;
  final List<PositionLink> positionLinks;
  final List<String> description;

  Position({required this.title,
    required this.location,
    required this.duration,
    required this.positionLinks,
    required this.description});
}

class PositionLink {
  final String name;
  final String url;

  PositionLink({required this.name, required this.url});
}
