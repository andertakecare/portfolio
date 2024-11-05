import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center bg-gray-900 text-white w-full min-h-fit h-20 py-4 px-8 fixed top-0 z-50">
      <nav className="flex justify-between w-full">
        <div className="text-4xl font-bold">
          <Link href="#home">My Portfolio</Link>
        </div> 
        <ul className="flex space-x-8 text-2xl">
          <li>
            <Link href="#about">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
