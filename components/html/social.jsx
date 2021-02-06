import style from '../../styles/social.module.scss';

export default function Social(props){
    
    return (
        <ul id="social-links" className={ "text-white flex flex-row " + props.className }>
            <li className="p-2 m-2 text-base md:text-2xl" >
                <a className={ `inline-flex font-thin hover:italic ` + style.underline } target="_blank" href="https://www.linkedin.com/in/miguel-lucena-a6466250/">
                    <span className="mx-4">Linkedin </span> <img src="./link.svg" /> 
                </a>
            </li>
            <li className="p-2 m-2 text-base md:text-2xl" >
                <a className={ `inline-flex font-thin ` + style.underline } target="_blank" href="https://github.com/tKayZells">
                    <span className="mx-4">Github </span> <img src="/link.svg" />
                </a>
            </li>
            <li className="p-2 m-2 text-base md:text-2xl">
                <a className={ `inline-flex font-thin ` + style.underline } target="_blank" href="https://twitter.com/TZells">
                    <span className="mx-4">Twitter </span> <img src="/link.svg" />
                </a>
            </li>
        </ul>
    );
}