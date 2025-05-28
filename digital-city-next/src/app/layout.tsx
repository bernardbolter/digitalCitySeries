import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss"; // Styles from globals.scss
import "@/app/styles/app-loader.scss"; // Styles for the app loader

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Note: <base href="https://www.digitalcityseries.com"> is not directly replicated.
// Next.js handles base paths differently, often configured in next.config.js if needed.

export const metadata: Metadata = {
  // From src/index.html
  title: "DIGITAL CITY SERIES",
  description: "The Digital City Series is a photographic project of digitally constructed city portraits from around the world. These portraits are created by splicing together diverse scenes from each city to form a singular square composition. The images are composed in a seamless fashion that invite the viewer to enter the picture and experience different parts of the city as one.",
  keywords: "artwork, world cities", // Combined from subject and topic
  authors: [{ url: "https://www.bernardbolter.com", name: "Bernard Bolter" }], // From author link
  robots: "index,follow,noodp",
  // googleBot: "index,follow", // Next.js uses 'robots' for Googlebot as well
  // Standard meta tags
  charset: "utf-8", // Though Next.js handles this by default
  viewport: "width=device-width, initial-scale=1",
  // Open Graph (og:*) and Twitter specific tags are better handled through 'openGraph' and 'twitter' objects in Metadata API
  openGraph: {
    title: "DIGITAL CITY SERIES",
    description: "The Digital City Series is a photographic project of digitally constructed city portraits from around the world. These portraits are created by splicing together diverse scenes from each city to form a singular square composition. The images are composed in a seamless fashion that invite the viewer to enter the picture and experience different parts of the city as one.",
    url: "https://www.digitalcityseries.com",
    siteName: "digital city series",
    // og:image should be set here if a default image is desired
    images: [
      {
        url: "/og-image-placeholder.png", // Placeholder, replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Digital City Series",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // Defaulting to summary_large_image, can be changed
    site: "@DigtialCitySeries", // Placeholder, replace with actual Twitter handle if available
    creator: "@BernardBolter", // Placeholder, replace with actual Twitter handle
    title: "DIGITAL CITY SERIES", // twitter:title was empty, using main title
    description: "The Digital City Series is a photographic project of digitally constructed city portraits from around the world...", // twitter:description was empty
    // images: ['/twitter-image-placeholder.png'], // Placeholder for Twitter image
  },
  // Other meta tags from index.html
  // <meta name="subject" content="artwork"> -> incorporated into keywords
  // <meta name="topic" content="artwork, world cities"> -> incorporated into keywords
  // <meta name="summary" content=""> -> empty, omitted
  // <meta name="category" content="artwork"> -> can be added if desired, e.g. applicationName or additional keywords
  // <meta name="coverage" content="Worldwide">
  // <meta name="distribution" content="Global">
  // <meta name="rating" content="General">
  // <meta name="ICBM" content="37.7396940,-122.4843840">
  // <meta name="geo.position" content="37.7396940;-122.4843840">
  // <meta name="geo.region" content="US-CA">
  // <meta name="geo.placename" content="San Francisco">
  // <meta name="application-name" content="Composite City Portraits from around the globe."/>
  // <meta name="msapplication-TileColor" content="#FFFFFF" />
  // <meta name="msapplication-TileImage" content="https://www.digitalcityseries.com/mstile-144x144.png" />
  // ... other msapplication tags ...
  // <meta itemprop="name" content="DIGITAL CITY SERIES"> -> Covered by title and openGraph
  // <meta itemprop="description" content="..."> -> Covered by description and openGraph
  // <meta itemprop="image" content=""> -> Covered by openGraph image
  other: {
    "msapplication-TileColor": "#FFFFFF",
    "msapplication-TileImage": "https://www.digitalcityseries.com/mstile-144x144.png", // These should be updated to local paths if assets are hosted locally
    "msapplication-square70x70logo": "https://www.digitalcityseries.com/mstile-70x70.png",
    "msapplication-square150x150logo": "https://www.digitalcityseries.com/mstile-150x150.png",
    "msapplication-wide310x150logo": "https://www.digitalcityseries.com/mstile-310x150.png",
    "msapplication-square310x310logo": "https://www.digitalcityseries.com/mstile-310x310.png",
    "coverage": "Worldwide",
    "distribution": "Global",
    "rating": "General",
    "ICBM": "37.7396940,-122.4843840",
    "geo.position": "37.7396940;-122.4843840",
    "geo.region": "US-CA",
    "geo.placename": "San Francisco",
    "application-name": "Composite City Portraits from around the globe.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and Apple Touch Icons from src/index.html - these URLs should be updated to local paths if assets are hosted locally */}
        <link rel="apple-touch-icon-precomposed" sizes="57x57" href="https://www.digitalcityseries.com/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://www.digitalcityseries.com/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://www.digitalcityseries.com/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://www.digitalcityseries.com/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon-precomposed" sizes="60x60" href="https://www.digitalcityseries.com/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://www.digitalcityseries.com/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon-precomposed" sizes="76x76" href="https://www.digitalcityseries.com/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://www.digitalcityseries.com/apple-touch-icon-152x152.png" />
        <link rel="icon" type="image/png" href="https://www.digitalcityseries.com/favicon-196x196.png" sizes="196x196" />
        <link rel="icon" type="image/png" href="https://www.digitalcityseries.com/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="https://www.digitalcityseries.com/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="https://www.digitalcityseries.com/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="https://www.digitalcityseries.com/favicon-128.png" sizes="128x128" />
        {/* Stylesheet for the loader is now imported as SCSS */}

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
