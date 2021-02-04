export default function Navigation(){

    return (
        <header className="fixed w-full">
            <div className="container mx-auto text-white">
                <nav className="flex justify-between p-4 text-sm md:text-xl">
                    <ul className="flex flex-row">
                        <li className="py-2 my-2 mr-2 pr-2" ><a href="#about">about me</a></li>
                        <li className="p-2 m-2" ><a href="#projects">projects</a></li>
                        <li className="p-2 m-2"><a href="#contact">contact</a></li>
                    </ul>
                    <span className="self-center">M&aacute;laga - Spain</span>
                </nav>
            </div>
        </header>
    );
}