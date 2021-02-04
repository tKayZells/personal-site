import Section from "../html/section";
import Card from "../html/card"
import data from "../../assets/data";

export default function Projects(){

    return (
        <Section id="projects">

            <h3 className="md:text-7xl text-3xl text-purple-600 font-bold p-2 my-2 md:my-16 text-left md:text-right">PROJECTS I'VE MADE</h3>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 p-2">

                { 
                    data.projects.map( 
                        ( project, index ) => 
                            <Card 
                                key={ index }
                                tags={ project.tags }
                                title={ project.title }
                                description={ project.description }
                                image={ project.image }
                                source_url={ project.source_url }
                                demo_url={ project.demo_url }
                            />
                        )
                }
                
            </div>

        </Section>
    )
}