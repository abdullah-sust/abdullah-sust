const NavBar = () => {
    const listClass = "text-white px-12 py-2 hover:bg-indigo-500 hover:duration-300 hover:cursor-pointer";

    return <nav className="px-56">
        <ul className="flex space-x-24 justify-center">
            <li className={listClass}><a href="/" className="">Introduction</a></li>
            <li className={listClass}><a href="/" className="">Experiences</a></li>
            <li className={listClass}><a href="/" className="">Education</a></li>
            <li className={listClass}><a href="/" className="">Skills</a></li>
            <li className={listClass}><a href="/" className="">Testimony</a></li>
            <li className={listClass}><a href="/" className="">References</a></li>
            <li className={listClass}><a href="/" className="">Feedback</a></li>
        </ul>
    </nav>;
};

export default NavBar;