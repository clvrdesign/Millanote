import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'
import assets  from '../../assets/assets'

function Navbar() {
  const [isHome, setIsHome] = useState(true)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/create-note') {
      setIsHome(false)
    }
  }, [location.pathname])

  return (
    <div className="fixed top-0 w-full h-12 text-slate-700 bg-slate-100 py-10">
      <div className="container flex justify-between items-center h-full px-4 mx-auto max-w-screen-2xl">
        <h2 className="text-3xl font-bold">
          <Link to="/">
            <img className='h-[35px] border-5 border-red-500' src={assets.logo} alt="logo" />
          </Link>
        </h2>
        <nav>
          <ul className="flex items-center gap-10">
            {!isHome &&
              <li className='block'>
                <Link className='hover:bg-slate-200 hover:text-slate-600 bg-sky-500 text-white p-2 ease-in duration-150 rounded-lg' to='/'>
                <i className="bi bi-file-text-fill mr-1"></i>
                  Notes
                </Link>
              </li>
            }
            {isHome &&
              <li className='flex items-center justify-center lg:justify-start lg:bg-transparent bg-sky-500 rounded-lg text-white lg:text-slate-700 lg:w-auto w-10 h-10'>
                <Link className='hover:text-sky-500 ease-in duration-150 flex items-center' to='/create-note'>
                  <i className="bi bi-plus"></i>
                  <label className='cursor-pointer lg:inline-block hidden'>Create a note</label>
                </Link>
              </li>
            }
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
