import Section from "../html/section";

export default function Skills(){
    
    const skills = [ "HTML5", "CSS3", "Javascript", 
                    "Sass", "Tailwindcss", "PHP", 
                    "Laravel", "Symfony", "Vuejs", 
                    "React", "Nodejs", "MySQL", 
                    "PostgreSQL" ]

    const skillsDom = skills.map( (el, index) => <li key={ index } className="p-2 m-2"> { el } </li> );

    return (
        <Section id="skills">
            <h3 className="md:text-7xl text-3xl text-purple-600 font-bold p-2 my-2 md:my-16">SKILLS I EXCEL AT</h3>
            <div className="text-white md:text-4xl sm:text-lg">
                <ul className="grid grid-cols-3 md:justify-items-center sm:justify-items-left m-auto">
                    { skillsDom }
                </ul>
            </div> 
        </Section>
    );
}