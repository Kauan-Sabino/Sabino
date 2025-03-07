import 'package:flutter/material.dart';

void main() { //roda minha aplicação
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar:AppBar(title: Text("App Hello World")) , //AppBar
        body: Center(
          child: ElevatedButton( 
          onPressed() => FlutterToast.showToast(
            msg:"Hello world",
            toastLength: Toast.LENGTH_SHORT,
            gravity: ToastGravity.Center
          ) ,
          child: Text("ver mensagem"),
        ),
      ),
    );
  }
}
