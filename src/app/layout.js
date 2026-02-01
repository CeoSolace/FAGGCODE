import './globals.css';
import Nav from '../components/Nav';
export const metadata = {
  title: 'FreeAgents - Multi-Game Esports Agency',
  description: 'Connect players, managers, and teams across multiple esports games.',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Nav />
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
