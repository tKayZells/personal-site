import Section from "../html/section";
import Social from "../html/social";

export default function About() {
    return (
        <Section id="about">
            <div className="flex flex-col-reverse md:flex-row">
                <div className="flex-1 w-4/5 mx-auto p-4">
                    <img 
                        className="mx-auto md:w-4/5 sm:w-full"
                        src="./profile.jpg"
                        alt="cool profile picture"
                    />
                </div>
                <div className="flex-1 md:text-right text-left">
                    <div className="md:mb-24">
                        <h3 className="md:text-7xl text-3xl text-purple-600 font-bold p-2 mb-6">HELLO WORLD</h3>
                        <p className="md:text-2xl text-lg text-white font-thin p-2 my-4 ">
                            Hi, I'm Miguel Lucena a web app developer, currently located in M&aacute;laga, Spain.
                            Diligently honing my frontend & backend skills. 
                            Actively looking for interesting job offers in the web app development area.
                        </p>
                    </div>
                    <div className="mb-10">
                        <h3 className="md:text-7xl text-3xl text-purple-600 font-bold p-2 my-6">LINKS</h3>
                        <Social className="md:flex-col" />
                    </div>
                </div>
            </div>
        </Section>
    );
}