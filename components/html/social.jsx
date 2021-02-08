import { React, useEffect, useRef } from "react";
import style from '../../styles/social.module.scss';
import socialJson from "../../assets/social.json"
import anime from 'animejs';

export default function Social(props){

    const ref = useRef()
    const data = socialJson.social;
    const timelineElements = [];

    const socialLinks = data.map( (el, index) => {

        timelineElements.push({
            targets: `li.social_${index}`, 
            translateX: 0,
            opacity : 1
        });

        return (
            <li key={ index } className={"p-2 m-2 text-base md:text-2xl social_" + ( index ) + " " + style.fadeInRightBase } style={{ 'transform' : 'translateX(-80px)', 'opacity' : 0 }}  >
                <a className={ `inline-flex font-thin hover:italic ` + style.underline } target="_blank" href={ el.url }>
                    <span className="mx-4">{ el.text } </span> <img src="./link.svg" /> 
                </a>
            </li>
        )
    })

    useEffect( () => {

        var animTL = anime.timeline({ 
            easing: 'easeInQuad',
            duration: 150,
            autoplay: false
        });
        
        timelineElements.forEach( el => animTL.add(el) );
        
        const observer = new IntersectionObserver(
            ( [entry] ) => {
                if( entry.isIntersecting )
                {
                    animTL.play();
                }
                else 
                {
                    animTL.reset();
                }
            });

        observer.observe(ref.current);
        
        return () => { observer.disconnect() }
    }, []);


    return (
        <ul id={ props.id } ref={ ref } className={ "text-white flex flex-row " + props.className }>
            { 
                socialLinks 
            }
        </ul>
    );
}