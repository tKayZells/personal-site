import { React, useEffect, useRef } from "react";
import Section from "../html/section";
import style from "../../styles/skills.module.scss";
import anime from 'animejs';

export default function Skills(){

    const elemPerGroup = 3;
    const skillsRef = useRef();

    const skills = [ "HTML5", "CSS3", "Javascript", 
                    "Sass", "Tailwindcss", "PHP", 
                    "Laravel", "Symfony", "Vuejs", 
                    "React", "Nodejs", "MySQL", 
                    "PostgreSQL" ]
    let group = 1;
    const skillsDom = skills.map( (el, index) => { 

        const dom = <li key={ index } className={ "p-2 m-2 skill_group_" + group + " " + style.fadeInRightBase } style={{ 'transform' : 'translateX(-120px)' }}> { el } </li>;

        if ( (index + 1) % elemPerGroup == 0) {
            group++;
        }

        return dom;
    });


    useEffect( () => {

        var animTL = anime.timeline({ 
            easing: 'easeInQuad',
            duration: 250,
            autoplay: false
        });
        
        for(let i = 1; i <= group; i++){
            animTL.add({
                targets: `li.skill_group_${ i }`, 
                translateX: 0,
                opacity : 1
            });
        }
        
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

        observer.observe(skillsRef.current);
        
        return () => { observer.disconnect() }
    }, []);

    return (
        <Section id="skills">
            <h3 className={"md:text-7xl text-3xl text-purple-600 font-bold p-2 my-2 md:my-16 " + style.fadeInUpBase }
                data-scroll data-scroll-class={ style.fadeInUpOnScroll } data-scroll-repeat="true">
                    SKILLS I EXCEL AT
            </h3>

            <div className="text-white md:text-4xl sm:text-lg">
                <ul ref={ skillsRef } className="grid grid-cols-3 md:justify-items-center sm:justify-items-left m-auto">
                    { skillsDom }
                </ul>
            </div> 
        </Section>
    );
}