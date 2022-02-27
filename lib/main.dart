import 'package:flutter/material.dart';

import 'data/ru_data.dart';

void main() {
  runApp(const App());
}

class App extends StatelessWidget {
  const App({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Filipp Maksimov — Android Developer',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: RuPage(cvData: RuData()),
    );
  }
}

class RuPage extends StatelessWidget {
  final CVData cvData;

  const RuPage({required this.cvData, Key? key}) : super(key: key);

  List<Widget> _contacts() {
    return cvData.contacts
        .map((contact) => Text("${contact.service}: ${contact.value}"))
        .toList();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          children: [
            Text(cvData.name),
            Text(cvData.job),
            Text("${cvData.age}, ${cvData.mainCity}"),
            Column(
              children: _contacts(),
            )
          ],
        ),
      ),
    );
  }
}
