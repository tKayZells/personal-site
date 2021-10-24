export default function ScrollIndicator( props ){

    const goToAbout = () => props.scrollTargetEvent("#about")

    return (
        <div className="container mx-auto relative">
            <div className="text-center absolute w-full bottom-6 animate-bounce">
                <span onClick={ goToAbout } className="text-white mb relative hidden cursor-pointer md:inline">Scrolldown for more info</span>
                <svg onClick={ goToAbout } width="42.761" height="48.047" viewBox="0 0 42.761 48.047" className="mx-auto mt-4 cursor-pointer">
                    <g id="Icon_feather-chevrons-down" data-name="Icon feather-chevrons-down" transform="translate(-18.619 -15.286)">
                        <path id="Path_5" data-name="Path 5" d="M23.333,43.333,40,60,56.667,43.333" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.667"/>
                        <path id="Path_6" data-name="Path 6" d="M23.333,20,40,36.667,56.667,20" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.667"/>
                    </g>
                </svg>

            </div>
        </div>
    )
}