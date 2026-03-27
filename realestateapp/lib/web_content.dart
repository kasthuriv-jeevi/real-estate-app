import 'package:flutter/widgets.dart';

import 'web_content_mobile.dart'
    if (dart.library.html) 'web_content_web.dart';

class WebContent extends StatelessWidget {
  const WebContent({
    super.key,
    required this.url,
  });

  final String url;

  @override
  Widget build(BuildContext context) {
    return buildWebContent(url);
  }
}
