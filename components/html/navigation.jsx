import style from '../../styles/navigation.module.scss';

export default function Navigation( props ){
    
    return (
        <header className="fixed w-full z-10">
            <div className="container mx-auto text-white">
                <nav className="flex justify-between p-4 font-thin text-base md:text-2xl">
                    <ul className="flex flex-row">
                        <li className="p-2 cursor-pointer" ><a className={ style.underline } onClick={ () => props.scrollTargetEvent("#about") }>about me</a></li>
                        <li className="p-2 mx-4 cursor-pointer" ><a className={ style.underline } onClick={ () => props.scrollTargetEvent("#projects") }>projects</a></li>
                        <li className="p-2 cursor-pointer"><a className={ style.underline } onClick={ () => props.scrollTargetEvent("#contact") }>contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}