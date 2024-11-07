import Link from 'next/link';

export default function Header() {
	return (
		<header
			className="flex items-center bg-gray-900 text-white w-full 
    h-14 sm:h-16 2xl:h-20
    py-4 px-8 fixed top-0 z-50"
		>
			<nav className="flex justify-between w-full">
				<div className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold">
					<Link href="#about">My Portfolio</Link>
				</div>
				<ul
					className="flex items-center space-x-8 
        text-xl sm:text-2xl md:text-3xl 2xl:text-4xl"
				>
					<li>
						<Link href="#about">About</Link>
					</li>
					<li>
						<Link href="#projects">Projects</Link>
					</li>
					<li>
						<Link href="#contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
