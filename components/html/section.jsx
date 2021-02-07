export default function Section( props ){
    return (
        // md:mt-32 sm:mt-24 
        <section className="" id={ props.id } data-scroll-section>
            <div className="container mx-auto p-4">
                { props.children }
            </div>
        </section>
    );
}