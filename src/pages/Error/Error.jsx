
import { Link } from 'react-router-dom'

function Error() {
  return (
    <>
        {/* <Navbar/> */}
        <div className="container items-center gap-10 m-auto max-w-fit flex h-90 flex-col py-40 p-4">
          <h1 className="text-4xl font-bold text-sky-500 text-center">Oops, 404 page</h1>
          <p className="max-w-md text-center text-slate-600">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable!
          </p>
          <Link className='bg-sky-500 text-slate-100 rounded-lg py-2 px-4' to='/'>
          Back to Home page
          </Link>
        </div>
        
        {/* <Footer/> */}
    </>
  )
}

export default Error