import Section from "../html/section";
import Social from "../html/social";
import style from "../../styles/about.module.scss";

export default function About() {
    return (
        <Section id="about">
            <div className="flex flex-col-reverse lg:flex-row">
                <div className={"flex-1 w-4/5 mx-auto p-4 "+ style.fadeInRightScroll} data-scroll data-scroll-class={ style.fadeInRightBase }>
                    <img className="mx-auto md:w-4/5 sm:w-full"
                        src="./profile.jpg"
                        alt="cool profile picture"
                    />
                </div>
                <div className="flex-1 md:text-right text-left">
                    <div className="md:mb-24">
                        <h3 className={ "md:text-7xl text-3xl text-purple-600 font-bold p-2 mb-6 " + style.fadeInUpBase } 
                            data-scroll data-scroll-class={ style.fadeInUpOnScroll } data-scroll-repeat="true">
                                HELLO WORLD
                        </h3>
                        <p className="md:text-2xl text-lg text-white font-thin p-2 my-4 ">
                            <span className={ "inline-block " + style.fadeInLeftBase } data-scroll data-scroll-class={ style.fadeInLeftScroll } data-scroll-repeat="true" >Hi, I'm Miguel Lucena a web app developer, based in M&aacute;laga, Spain,</span>
                            <span className={ "inline-block " + style.fadeInLeftBase } data-scroll data-scroll-class={ style.fadeInLeftScroll } data-scroll-repeat="true">diligently honing my frontend & backend skills.</span>
                            <span className={ "inline-block " + style.fadeInLeftBase } data-scroll data-scroll-class={ style.fadeInLeftScroll } data-scroll-repeat="true">Actively looking for job offers in the web app development area.</span>
                        </p>
                    </div>
                    <div className="mb-10">
                        <h3 className={ "md:text-7xl text-3xl text-purple-600 font-bold p-2 my-6 " + style.fadeInUpBase }
                            data-scroll data-scroll-class={ style.fadeInUpOnScroll } data-scroll-repeat="true">
                            LINKS
                        </h3>
                        <Social id="about-social" className="md:flex-col" />
                    </div>
                </div>
            </div>
        </Section>
    );
}