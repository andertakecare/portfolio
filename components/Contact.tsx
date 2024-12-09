import Image from 'next/image';
import paperAirplane from '../public/paper-airplane.png';

export default function Contact() {
	return (
		<section
			id="contact"
			className="flex flex-col scroll-mt-14 sm:scroll-mt-16 2xl:scroll-mt-20 min-h-[50vh] w-full text-white"
		>
			<figure className="flex flex-col items-center w-1/12 m-auto text-center">
				<a href="mailto:andertakecare@gmail.com">
					<Image src={paperAirplane} alt="icon of email" />
				</a>
				<figcaption className="whitespace-nowrap text-4xl text-white mt-8">
					Send me an email!
				</figcaption>
			</figure>
		</section>
	);
}
