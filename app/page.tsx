import Image from 'next/image';
import ander from '../public/Ander.jpg';

export default function HomePage() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
			<section
				id="about"
				className="flex flex-col items-center justify-center w-full text-white bg-yellow-700 pt-[5vw]"
			>
				<h2 className="text-4xl font-bold mb-4 text-blue-400">
					Hello, I&apos;m Ander {/*escaped single quote for react*/}
				</h2>
				<Image
					className="xl:h-1/2 xl:w-1/3 lg:w-2/3 md:w-1/2 sm:w-1/4 "
					src={ander}
					alt="Picture of the author"
				></Image>

				<p className="text-2xl text-center text-zinc-200">
					I am a software developer, learning TypeScript, React, Next.js, and
					Tailwind.
				</p>
			</section>
			<section id="projects" className="min-h-screen text-white bg-green-700 pt-[5vw]">
				projects
			</section>
			<section id="contact" className="min-h-screen text-white bg-cyan-700 pt-[5vw]">
				contact me
			</section>
		</main>
	);
}
