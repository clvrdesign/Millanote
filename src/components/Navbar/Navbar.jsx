import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="fixed top-0 w-full h-12 text-slate-700 bg-slate-100 py-10">
      <div className="container flex justify-between items-center h-full px-4 mx-auto max-w-screen-2xl">
        <h2 className="text-3xl font-bold">
          <Link to="/">iNote</Link>
        </h2>
        <nav>
          <ul className="flex items-center gap-10">
            <li className='hidden lg:block'>
              <Link className='hover:text-sky-500 ease-in duration-150' to='/'>
                <i className="bi bi-house"></i> All Notes
              </Link>
            </li>
            <li className='flex items-center justify-center lg:justify-start lg:bg-transparent bg-sky-500 rounded-lg text-white lg:text-slate-700 lg:w-auto w-10 h-10'>
              <Link className='hover:text-sky-500 ease-in duration-150 flex items-center' to='/create-note'>
                <i className="bi bi-plus"></i>
                <label className='cursor-pointer lg:inline-block hidden'>Create a note</label>
              </Link>
            </li>
            
          </ul>
          
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
