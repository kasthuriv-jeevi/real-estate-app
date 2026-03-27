import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

Widget buildWebContent(String url) {
  return _MobileWebView(url: url);
}

class _MobileWebView extends StatefulWidget {
  const _MobileWebView({required this.url});

  final String url;

  @override
  State<_MobileWebView> createState() => _MobileWebViewState();
}

class _MobileWebViewState extends State<_MobileWebView> {
  late final WebViewController controller;
  int loadingProgress = 0;

  @override
  void initState() {
    super.initState();

    controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setNavigationDelegate(
        NavigationDelegate(
          onProgress: (progress) {
            if (!mounted) {
              return;
            }
            setState(() {
              loadingProgress = progress;
            });
          },
        ),
      )
      ..loadRequest(Uri.parse(widget.url));
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        WebViewWidget(controller: controller),
        if (loadingProgress < 100)
          const Align(
            alignment: Alignment.topCenter,
            child: LinearProgressIndicator(minHeight: 3),
          ),
      ],
    );
  }
}
