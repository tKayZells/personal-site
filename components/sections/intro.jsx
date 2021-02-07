import ScrollIndicator from "../html/scrollindicator";
import Section from "../html/section";

export default function Intro(){

    return (
        <Section id="intro">
            <div className="flex flex-col justify-center h-screen">
                <div className="text-center margin-auto text-white">
                    <div><h1 className="md:text-9xl text-5xl text-purple-600 font-bold mb-4"> Miguel Lucena </h1></div>
                    <div><h2 className="md:text-7xl text-3xl font-thin">Web App Developer</h2></div>
                </div>
            </div>
            <ScrollIndicator />
        </Section>
    )
}