import Image from 'next/image';
// Will use for project thumbnails
export default function Project() {
	return (
		<div>
			<Image
				src={''}
				alt={'thumbnail of an individual project'}
				className=""
			></Image>
			<caption>Project Placeholder</caption>
		</div>
	);
}
