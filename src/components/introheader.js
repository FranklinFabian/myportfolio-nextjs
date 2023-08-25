/* eslint-disable @next/next/no-img-element */
export default function IntroHeader() {
    return (
        <header className="px-6">
            <div className="max-w-4xl mx-auto flex gap-14">
                <div>
                    <h1 className="text-3xl font-bold mb-6">
                        Hola! mi nombre es Franklin
                        <br />
                        Un creativo Nextjs developer
                    </h1>
                    <p className="text-lg mb-6">
                        Un desarrollador apasionado con experiencia en tecnologías como Next.js y frameworks afines. Mi enfoque se centra en crear aplicaciones web de alto rendimiento y experiencias de usuario excepcionales.
                    </p>
                    <a href="#" className="bg-red-400 text-white px-6 py-3 text-lg rounded transition-transform hover:scale-110">
                        Revisa mi trabajo
                    </a>
                </div>
                <span
                    className="m-5 inline-block relative z-0 before:rounded-full"
                >
                    <img
                        src='/code.jpeg'
                        width="500"
                        height="500"
                        alt="Image of Chris"
                        className="z-10 relative rounded-full shadow-md"
                    />
                </span>
            </div>
        </header>
    );
}
