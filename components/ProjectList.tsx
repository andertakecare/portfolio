import Image from 'next/image';

const projects = [
	{
		id: 1,
		thumbnail: '/placeholder_img.jpg',
		caption: 'Project one',
		link: 'https://github.com/andertakecare/message-generator-JS',
	},
	{
		id: 2,
		thumbnail: '/placeholder_img.jpg',
		caption: 'Project two',
		link: 'https://github.com/andertakecare/message-generator-JS',
	},
	{
		id: 3,
		thumbnail: '/placeholder_img.jpg',
		caption: 'Project three',
		link: 'https://github.com/andertakecare/message-generator-JS',
	},
];

// Will use for project thumbnails container
export default function ProjectList() {
	return (
		<section className="my-8 px-4">
			<h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project) => (
					<div
						key={project.id}
						className="border border-gray-600 p-4 rounded-lg hover:shadow-lg transition"
					>
						<div className="relative w-full h-48">
							<Image
								src={project.thumbnail}
								alt={project.caption}
								fill // Makes the image dynamically fill the container
								className="object-cover rounded"
							/>
						</div>
						<h3 className="text-xl font-semibold mt-4">{project.caption}</h3>
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500 mt-2 inline-block"
						>
							View Project
						</a>
					</div>
				))}
			</div>
		</section>
		// <div>
		// 	{/* <Link href="#">
		// 		<Image
		// 			src={''}
		// 			alt={'thumbnail of an individual project'}
		// 			className=""
		// 		></Image>
		// 	</Link>
		// 	<caption>Project's Image Caption Placeholder</caption> */}
		// </div>
	);
}