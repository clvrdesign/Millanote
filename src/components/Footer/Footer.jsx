

function Footer() {

  const copyright = new Date().getFullYear()

  return (
    <footer className="max-w-[1200px] mx-auto max-w-screen py-5">
      <div className="border-t border-t-slate-50 pt-5">
        <ul className="flex justify-between flex-col items-center md:flex-row text-slate-500"> 
          <li><small>&copy; {copyright} Millanotes | All Rights Reserved</small></li>
          <li><small>Terms & Conditions</small></li>
        </ul>
      </div>
      
    </footer>
  )
}

export default Footer