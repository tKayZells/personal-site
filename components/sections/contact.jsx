import Section from "../html/section";
import Social from "../html/social";
import Input from "../html/form/input";
import Text from "../html/form/text";

export default function Contact(){
    return (
        <Section id="contact">
            <h3 className="md:text-7xl text-3xl text-purple-600 font-bold p-2 my-8 text-center">SEND ME A MESSAGE</h3>
            <form className="w-full max-w-lg mx-auto p-8" action="https://formspree.io/f/moqpbldj" method="POST">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <Input name="name" type="text" label="Name" id="name" />      
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <Input name="email" type="email" label="E-mail" id="email" />       
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <Text name="message" label="Message" id="message" />
                </div>
                <div className="md:flex md:items-center">
                    <button className="shadow bg-purple-700 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Send Message
                    </button>
                </div>
            </form>
            <div className="sm:py-6 sm:my-6 flex justify-between flex-col md:flex-row">
                
                <span className="text-white font-thin p-2 m-2 text-base md:text-2xl md:text-left text-right"> 
                    <a className="inline-flex" target="_blank" href="./cv/Miguel_CV.pdf">CV Download <img className="ml-4" src="./link.svg" /> </a>
                </span>
                
                <Social className="justify-end md:justify-center" />
                
            </div>
        </Section>
    )
}