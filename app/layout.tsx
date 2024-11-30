import './globals.css';
import Header from '../components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Header />
        {children}
        <footer className="p-4 bg-gray-900 text-white text-center">
          <p>© 2024 Anderson Godoy</p>
        </footer>
      </body>
    </html>
  );
}
