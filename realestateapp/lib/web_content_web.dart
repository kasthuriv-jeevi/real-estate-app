import 'dart:html' as html;
import 'dart:ui_web' as ui_web;

import 'package:flutter/widgets.dart';

Widget buildWebContent(String url) {
  return _WebIframe(url: url);
}

class _WebIframe extends StatefulWidget {
  const _WebIframe({required this.url});

  final String url;

  @override
  State<_WebIframe> createState() => _WebIframeState();
}

class _WebIframeState extends State<_WebIframe> {
  late final String viewType;

  @override
  void initState() {
    super.initState();
    viewType = 'real-estate-site-${widget.url.hashCode}';

    ui_web.platformViewRegistry.registerViewFactory(viewType, (int viewId) {
      final iframe = html.IFrameElement()
        ..src = widget.url
        ..style.border = 'none'
        ..style.width = '100%'
        ..style.height = '100%'
        ..allow = 'fullscreen'
        ..referrerPolicy = 'strict-origin-when-cross-origin';

      return iframe;
    });
  }

  @override
  Widget build(BuildContext context) {
    return HtmlElementView(viewType: viewType);
  }
}
