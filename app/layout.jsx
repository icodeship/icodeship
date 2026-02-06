import '@fontsource/poppins';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/Utility.css';
import 'swiper/css';
import '../index.css';
import { HelmetProvider } from 'react-helmet-async';
import RootProvider from './providers';

export const metadata = {
  title: 'Codeship - Digital Solutions & Technology Services',
  description: 'Codeship delivers innovative digital solutions, web development, mobile apps, and technology services to transform your business.',
  icons: {
    icon: '/logo1.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <RootProvider>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
