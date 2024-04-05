
export default function Navbar() {
    return (
        <nav className="relative">

            <div className="py-6 px-20 flex justify-between items-center border-y-2 
            border-y-white w-full absolute top-0 left-0 z-10 text-white font-bold capitalize text-lg">
            <div className="absolute left-0 top-0 w-full h-full nav-overlay"></div>
                <span>Logo</span>
                <ul className="flex gap-8">
                    <li>home</li>
                    <li>services</li>
                    <li>blogs</li>
                    <li>contact us</li>
                </ul>
                <div>
                    <span className=" border-r border-r-white pr-2 mr-4">
                        phone icon
                    </span>
                    <span>+252 63 8999888</span>
                </div>
            </div>
        </nav>
    )
}
