import Image from 'next/image';
import ander from '../public/Ander.jpg';

export default function About() {
	return (
		<section
			id="about"
			className="scroll-mt-14 sm:scroll-mt-16 2xl:scroll-mt-20 flex flex-col items-center justify-center w-full text-white bg-yellow-900 "
		>
			<h2 className="text-4xl 2xl:text-6xl font-bold py-6 2xl:py-8 text-blue-400">
				Hello, I&apos;m Ander {/*escaped single quote for react*/}
			</h2>
			<Image
				className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12"
				src={ander}
				alt="Picture of the author"
			></Image>

			<p className="text-2xl text-center text-zinc-200 py-8 italic">
				I am a software developer, learning TypeScript, React, Next.js, and
				Tailwind.
			</p>
		</section>
	);
}
