export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-800 pt-20">
      <h2 className="text-4xl font-bold mb-4 text-blue-400">
        It&apos;s me, Ander {/*escaped single quote for react*/}
      </h2>
      <p className="text-lg text-center text-zinc-200">
        I am a software developer, learning TypeScript, React, Next.js, and
        Tailwind.
      </p>
      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
        omg
      </button>
      <section id="about" className="min-h-screen text-white">
        about
      </section>
      <section id="projects" className="min-h-screen text-white">
        projects
      </section>
      <section id="contact" className="min-h-screen text-white">
        contact me
      </section>
    </main>
  );
}
