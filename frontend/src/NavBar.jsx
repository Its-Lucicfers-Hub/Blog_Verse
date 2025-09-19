import logo from "./assets/logo.jpg"
function NavBar() {
    return (
            <header className="h-[65px] sticky top-0 bg-white border-b-gray-400/40">
                <ul className="flex justify-around items-center h-full gap-27">
                    <li>
                        <div className="flex gap-3">
                        <img className="cursor-pointer w-7 h-7" src={logo} alt="Logo" />
                        <h1 className="text-[20px] font-bold cursor-pointer">BlogVerse</h1>
                        </div>
                </li>
                <li>
                    <div className="flex">
                        <lable className="font-semibold cursor-pointer hover:bg-gray-100  p-3 py-2 px-4 rounded-[8px] transition-all duration-500">Home</lable>
                    </div>
                </li>
                <li>
                    <div className="flex gap-10">
                        <button type="button" className="font-semibold text-sm cursor-pointer">Sign In</button>
                        <button type="button" className="font-semibold text-sm bg-blue-900 text-white p-1 w-19 h-9 cursor-pointer rounded-[8px]">Sign Up</button>
                    </div>
                </li>
                </ul>
            </header>
    )
}

export default NavBar