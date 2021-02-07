import style from '../../styles/navigation.module.scss';

export default function Navigation(){

    return (
        <header className={"fixed w-full " + style.bg }>
            <div className="container mx-auto text-white">
                <nav className="flex justify-between p-4 text-sm md:text-xl">
                    <ul className="flex flex-row">
                        <li className="py-2 my-2 mr-2 pr-2" ><a className={ style.underline } href="#about">about me</a></li>
                        <li className="p-2 m-2" ><a className={ style.underline } href="#projects">projects</a></li>
                        <li className="p-2 m-2"><a className={ style.underline } href="#contact">contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}