export default function Text( props ){
    return (
        <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-white text-xs mb-2" htmlFor={ props.name }>
                { props.label }
            </label>
            <textarea className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" name={ props.name } id={ props.id } >
            </textarea>
        </div>
    );
}