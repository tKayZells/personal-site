export default function Section( props ){
    return (
        <section className="md:mt-32 sm:mt-24" id={ props.id }>
            <div className="container mx-auto p-4">
                { props.children }
            </div>
        </section>
    );
}