import Image from 'next/image';

export default function Contact() {
	return (
    <section
    id="contact"
    className="scroll-mt-14 sm:scroll-mt-16 2xl:scroll-mt-20 min-h-screen w-full text-white bg-cyan-700"
    >
      <div>
        <Image src="" alt="icon of email" fill></Image>
        <h2>Send me an email!</h2>
      </div>
    </section>
	);
}
