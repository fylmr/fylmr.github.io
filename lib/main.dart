import 'package:better_selection/better_selection.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:url_launcher/url_launcher.dart';

import 'data/ru_data.dart';

void main() {
  runApp(const App());
}

class App extends StatelessWidget {
  const App({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var data = RuData();

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: data.pageTitle,
      theme: ThemeData(
          primarySwatch: Colors.blue, textTheme: GoogleFonts.latoTextTheme()),
      home: RuPage(cvData: data),
    );
  }
}

class RuPage extends StatelessWidget {
  final CVData cvData;

  const RuPage({required this.cvData, Key? key}) : super(key: key);

  List<Widget> _contacts() {
    return cvData.contacts
        .map((contact) => _ContactWidget(contact: contact))
        .toList();
  }

  List<Widget> _whatIDo() {
    return cvData.whatIDos.map((w) => _WhatIDoWidget(whatIDo: w)).toList();
  }

  List<Widget> _positions() {
    return cvData.positions.map((p) => _PositionWidget(position: p)).toList();
  }

  @override
  Widget build(BuildContext context) {
    return SelectableScope(
      child: Scaffold(
        body: Center(
          child: ListView(
            children: <Widget>[
                  Text(
                    cvData.name,
                    style: Theme.of(context).textTheme.titleLarge,
                  ),
                  Text(cvData.job),
                  Text("${cvData.age}, ${cvData.mainCity}"),
                ] +
                _contacts() +
                _whatIDo() +
                _positions(),
          ),
        ),
      ),
    );
  }
}

class _ContactWidget extends StatelessWidget {
  final Contact contact;

  const _ContactWidget({Key? key, required this.contact}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Text("${contact.service}: ${contact.value}");
  }
}

class _WhatIDoWidget extends StatelessWidget {
  final WhatIDo whatIDo;

  const _WhatIDoWidget({Key? key, required this.whatIDo}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Text("\u2022 ${whatIDo.text}");
  }
}

class _PositionWidget extends StatelessWidget {
  final Position position;

  const _PositionWidget({Key? key, required this.position}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(position.title),
        Text(position.duration),
        Text(position.location),
        Row(
          children: position.positionLinks
              .map((e) => _PositionLinkWidget(positionLink: e))
              .toList(),
        ),
        Text(position.description.join("\n"))
      ],
    );
  }
}

class _PositionLinkWidget extends StatelessWidget {
  final PositionLink positionLink;

  const _PositionLinkWidget({Key? key, required this.positionLink})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      child: Text(positionLink.name,
          style: const TextStyle(
              decoration: TextDecoration.underline, color: Colors.blue)),
      onTap: () async {
        if (!await launch(positionLink.url)) {
          throw 'Could not launch ${positionLink.url}';
        }
      },
    );
  }
}
