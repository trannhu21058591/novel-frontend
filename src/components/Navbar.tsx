import '../App.css'

const Navbar = () => {
    return (
        <nav className="navbar h-16 w-full border-b border-gray-200 shadow flex items-center justify-between px-[24px] py-[12px] z-999 fixed top-0 bg-white">
            <a href="/">Home</a>
            <div className='search'>
                <input type="text" placeholder="Search..." className="border border-gray-300 rounded-md px-2 py-1" />
            </div>
            <ul className="flex space-x-4">
                <li><a href="/">Viết</a></li>
                <li><a href="/">Tài khoản</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
