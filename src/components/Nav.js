'use client';
import Link from 'next/link';
export default function Nav() {
  return (
    <nav className="bg-primary text-white p-4 shadow-md">
      <ul className="flex space-x-6 justify-center">
        <li><Link href="/home" className="hover:underline">Home</Link></li>
        <li><Link href="/players/fa" className="hover:underline">Players F/A</Link></li>
        <li><Link href="/players/signed" className="hover:underline">Players Signed</Link></li>
        <li><Link href="/managers/fa" className="hover:underline">Managers F/A</Link></li>
        <li><Link href="/managers/signed" className="hover:underline">Managers Signed</Link></li>
        <li><Link href="/about" className="hover:underline">About</Link></li>
        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        <li><Link href="/socials" className="hover:underline">Socials</Link></li>
        <li><Link href="/contract-templates" className="hover:underline">Contracts</Link></li>
        <li><Link href="/tos" className="hover:underline">TOS</Link></li>
        <li><Link href="/privacy" className="hover:underline">Privacy</Link></li>
        <li><Link href="/chats" className="hover:underline">Chats</Link></li>
      </ul>
    </nav>
  );
}
