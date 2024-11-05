import Image from 'next/image';
import ander from '../public/Ander.jpg';

export default function HomePage() {
	return (
		<main className="mt-14 sm:mt-20 flex flex-col items-center justify-center min-h-screen bg-gray-800 z-100">
			<section
				id="about"
				className="scroll-mt-14 sm:scroll-mt-20 flex flex-col items-center justify-center w-full text-white bg-yellow-900 "
			>
				<h2 className="text-4xl font-bold mb-4 text-blue-400 self-center">
					Hello, I&apos;m Ander {/*escaped single quote for react*/}
				</h2>
				<Image
					className="xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2"
					src={ander}
					alt="Picture of the author"
				></Image>

				<p className="text-2xl text-center text-zinc-200 py-8 italic">
					I am a software developer, learning TypeScript, React, Next.js, and
					Tailwind.
				</p>
			</section>
			<section
				id="projects"
				className="scroll-mt-14 sm:scroll-mt-20 min-h-screen w-full text-white bg-green-700"
			>
				<h1>Here are some of my projects:</h1>
			</section>
			<section
				id="contact"
				className="scroll-mt-14 sm:scroll-mt-20 min-h-screen w-full text-white bg-cyan-700"
			>
				contact me
			</section>
		</main>
	);
}
