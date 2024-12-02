import Image from 'next/image';
import paperAirplaine from '../public/paper-airplane.png';

export default function Contact() {
	return (
		<section
			id="contact"
			className="flex scroll-mt-14 sm:scroll-mt-16 2xl:scroll-mt-20 min-h-screen w-full text-white bg-cyan-700"
		>
				<div className='w-1/12 flex flex-col justify-center items-center mx-auto'>
          <Image
            src={paperAirplaine}
            alt="icon of email"
          ></Image>
          <h2>Send me an email!</h2>
        </div>
		</section>
	);
}
