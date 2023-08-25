export default function Header() {

    const routes = ['Blog', 'Trabajos', 'Cantactame'];

    return (
        <header
            className="container mx-auto flex justify-between h-24 items-center"
        >
            <nav>
                <ul className="flex gap-6 font-medium">
                    <li>
                        <a href='#' className="hover:text-red-400">Blog</a>
                    </li>
                    <li>
                        <a href='#' className="hover:text-red-400">Trabajos</a>
                    </li>
                    <li>
                        <a href='#' className="hover:text-red-400">Cantactame</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
