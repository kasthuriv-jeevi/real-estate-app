import 'package:flutter/material.dart';

import 'web_content.dart';

const String kWebsiteUrl = 'https://real-estate-smoky-phi-26.vercel.app';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF2563EB)),
        useMaterial3: true,
      ),
      home: const WebsiteShell(),
    );
  }
}

class WebsiteShell extends StatelessWidget {
  const WebsiteShell({super.key});

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final isDesktopPreview = screenWidth >= 900;
    final previewWidth = isDesktopPreview ? 430.0 : screenWidth;
    final horizontalPadding = isDesktopPreview ? 32.0 : 0.0;
    final theme = Theme.of(context);

    return Scaffold(
      backgroundColor: const Color(0xFFF3F7FC),
      body: SafeArea(
        child: Center(
          child: Padding(
            padding: EdgeInsets.symmetric(
              horizontal: horizontalPadding,
              vertical: isDesktopPreview ? 24 : 0,
            ),
            child: ConstrainedBox(
              constraints: BoxConstraints(maxWidth: previewWidth),
              child: DecoratedBox(
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(isDesktopPreview ? 28 : 0),
                  boxShadow: isDesktopPreview
                      ? [
                          BoxShadow(
                            color: Colors.black.withValues(alpha: 0.10),
                            blurRadius: 40,
                            offset: const Offset(0, 16),
                          ),
                        ]
                      : const [],
                ),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(isDesktopPreview ? 28 : 0),
                  child: Column(
                    children: [
                      Container(
                        width: double.infinity,
                        padding: EdgeInsets.symmetric(
                          horizontal: isDesktopPreview ? 20 : 16,
                          vertical: isDesktopPreview ? 14 : 12,
                        ),
                        decoration: const BoxDecoration(
                          gradient: LinearGradient(
                            colors: [Color(0xFF0F172A), Color(0xFF2563EB)],
                            begin: Alignment.topLeft,
                            end: Alignment.bottomRight,
                          ),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              'Real Estate Chennai',
                              style: theme.textTheme.titleLarge?.copyWith(
                                color: Colors.white,
                                fontWeight: FontWeight.w700,
                              ),
                            ),
                            const SizedBox(height: 4),
                            Text(
                              isDesktopPreview
                                  ? 'Desktop browser shows a mobile-style website preview'
                                  : 'Mobile-friendly property browsing experience',
                              style: theme.textTheme.bodyMedium?.copyWith(
                                color: Colors.white70,
                              ),
                            ),
                          ],
                        ),
                      ),
                      const Expanded(
                        child: WebContent(url: kWebsiteUrl),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
