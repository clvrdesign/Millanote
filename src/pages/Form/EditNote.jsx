import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

function UpdateNote() {
  return (
    <>
        <Navbar/>
        <div className="flex h-screen items-center m-4">
            <form className="w-96 mx-auto mt-20">
                <h1 className="mb-10 text-4xl text-center text-slate-700 font-bold">Create a note</h1>
                <input className="bg-slate-100 border text-slate-700 text-sm border-slate-200 w-full p-2 focus:outline-none focus:border-sky-500 rounded-md mb-4"  type="text" name="" id="" placeholder="Title"/>
                <textarea className="bg-slate-100 border text-slate-700 text-sm border-slate-200 min-h-40 w-full p-2 focus:outline-none focus:border-sky-500 rounded-md mb-4" name="" id="" placeholder="Note"></textarea>
                <select className="bg-slate-100 border text-slate-700 text-sm border-slate-200 w-full p-2 focus:outline-none focus:border-sky-500 rounded-md mb-4" name="" id="">
                    <option value="Entertainment">Entertainment</option>
                    <option value="Entertainment">Self improvement</option>
                    <option value="Entertainment">Fitness</option>
                    <option value="Entertainment">Finance</option>
                    <option value="Entertainment">Society</option>
                </select>
                <button className="bg-sky-500 text-slate-100 w-full p-2 focus:outline-none focus:border-sky-500 rounded-md mb-4 text-sm">Update</button>
            </form>
        </div>
        <Footer/>
    </>
  )
}

export default UpdateNote