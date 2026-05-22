import type { Metadata } from "next";
import "@flaticon/flaticon-uicons/css/all/all.css";
import "./globals.css";
import { SplashScreenProvider } from "@/lib/SplashScreenContext";

export const metadata: Metadata = {
  title: "DARPAN | Learn Indian Classical Dance & Mudras with AI",
  description: "DARPAN is an AI-powered Indian classical dance e-learning platform. Learn traditional mudras, hand gestures, and dance steps with real-time AI feedback and interactive tutorials.",
  keywords: [
    "Darpan",
    "Indian Classical Dance",
    "Mudra Learning",
    "AI Pose Correction",
    "Dance E-learning",
    "Bharatanatyam",
    "Traditional Dance Gestures",
    "AI Guru",
    "Smart Dance Practice",
    "SIH 2025"
  ],
  authors: [{ name: "Pawan Kumar", url: "https://codeitzpa1.vercel.app" }],
  creator: "Pawan Kumar",
  alternates: {
    canonical: "https://darpan-dance.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "DARPAN | Learn Indian Classical Dance & Mudras with AI",
    description: "DARPAN is an AI-powered Indian classical dance e-learning platform. Learn traditional mudras, hand gestures, and dance steps with real-time AI feedback and interactive tutorials.",
    url: "https://darpan-dance.vercel.app",
    siteName: "DARPAN",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://darpan-dance.vercel.app/assets/danceHero.png",
        width: 1200,
        height: 630,
        alt: "DARPAN - AI Powered Classical Dance Mudra Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DARPAN | Learn Indian Classical Dance & Mudras with AI",
    description: "DARPAN is an AI-powered Indian classical dance e-learning platform. Learn traditional mudras, hand gestures, and dance steps with real-time AI feedback and interactive tutorials.",
    images: ["https://darpan-dance.vercel.app/assets/danceHero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Chivo:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Bengali:wght@100..900&family=Noto+Sans+Devanagari:wght@100..900&family=Noto+Sans+Tamil:wght@100..900&family=Noto+Sans+Telugu:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <SplashScreenProvider>
          {children}
        </SplashScreenProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebApplication",
                "@id": "https://darpan-dance.vercel.app/#webapp",
                "name": "DARPAN",
                "alternateName": "Darpan AI Dance",
                "url": "https://darpan-dance.vercel.app",
                "description": "DARPAN is an AI-powered Indian classical dance e-learning platform that helps students learn traditional mudras and hand gestures with real-time pose tracking.",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Android, Web",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "INR"
                },
                "author": {
                  "@type": "Person",
                  "name": "Pawan Kumar",
                  "url": "https://codeitzpa1.vercel.app"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "@id": "https://darpan-dance.vercel.app/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is DARPAN?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "DARPAN is an AI-powered Indian classical dance e-learning platform. It helps students learn traditional mudras and hand gestures with real-time pose tracking."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does the AI pose correction work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "It combines computer vision and deep learning models (MediaPipe, PyTorch, and YOLO) to analyze hand coordinates and check the accuracy of your gestures in real time."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Which classical mudras are supported?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Currently, DARPAN supports primary single-hand and double-hand gestures (Asamyuta and Samyuta Hastas) including Alapadma, Anjali, Chakra, Katrimukha, and Pataka."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I use DARPAN offline?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! By installing DARPAN as a Progressive Web App (PWA) on your Android or iOS device, you can practice offline with faster loading times."
                    }
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "HowTo",
                "@id": "https://darpan-dance.vercel.app/#howto",
                "name": "How to Practice Classical Mudras on DARPAN",
                "description": "Learn how to use DARPAN's real-time AI demo to practice Indian classical dance hand gestures (mudras) and receive instant accuracy feedback.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "name": "Open the Live Demo",
                    "text": "Navigate to the live demo page on the DARPAN platform at https://darpan-dance.vercel.app/demo",
                    "url": "https://darpan-dance.vercel.app/demo"
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Activate Your Camera",
                    "text": "Grant camera permission to enable real-time detection, or select the file upload option if a camera is not available.",
                    "url": "https://darpan-dance.vercel.app/demo"
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Perform the Mudra Gesture",
                    "text": "Place your hand in the target box overlay on screen and perform the mudra gesture (such as Pataka, Alapadma, Anjali, Katrimukha, or Chakra).",
                    "url": "https://darpan-dance.vercel.app/demo"
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Receive Instant AI Feedback",
                    "text": "Click Capture to send the image to the AI model. The platform will analyze your pose and display a result card indicating the detected mudra name and a confidence score.",
                    "url": "https://darpan-dance.vercel.app/demo"
                  }
                ]
              }
            ])
          }}
        />
      </body>
    </html>
  );
}
