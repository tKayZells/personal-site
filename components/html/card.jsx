import style from '../../styles/card.module.scss';

export default function Card(props){

    let demoLink;
    if ( props.demo_url )
    {
        demoLink = ( <span className="font-thin text-base ml-6"> 
                        <a className={ "inline-flex " + style.underline } href={ props.demo_url } target="_blank" >Demo <img className="ml-1 w-4" src="./link_2.svg" /> </a>
                     </span> );
    }

    return (
        <div className={ "p-4 bg-gray-800 rounded-lg " + style.fadeInRightBase } data-scroll data-scroll-class={ style.fadeInRightScroll }>
            
            <div className="relative max-h-80 overflow-hidden rounded-l">
                <img src={ props.image } alt={ props.title }  className="w-full object-cover object-center rounded-lg shadow-md" />    
            </div>
           
           
            <div className="relative px-4 -mt-16">
                <div className="bg-gray-200 p-6 rounded-lg shadow-xl">
                    <div className="flex items-baseline">
                        <span className="text-gray-600 uppercase text-xs font-semibold tracking-wider" dangerouslySetInnerHTML={{ __html:props.tags.join(" &bull; ") }}>      
                        </span>  
                    </div>
                    
                    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate"> { props.title } </h4>

                    <div className="my-2">
                        <span className="text-sm md:text-base">
                            { props.description }
                        </span>
                    </div>

                    <div className="mt-4">
                        
                        <span className="font-thin text-base"> 
                            <a className={ "inline-flex " + style.underline } href={ props.source_url } target="_blank" >Source <img className="ml-1 w-4" src="./link_2.svg" /> </a>
                        </span>

                        { demoLink }
                        
                    </div>  
                </div>
            </div>
        </div>
    );

}