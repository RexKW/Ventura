import LogoText from '../assets/LogoText.svg'

function Navbar() {
  return (
    <nav className='hidden md:flex fixed top-0 mx-auto w-screen z-50  flex h-[10vh]'>
        <div className='flex justify-between mx-50 bg-[#FFFFFF] shadow-md w-full items-center px-10'>
            <img src={LogoText} alt="logo" />
            <ul className='flex gap-5 items-center'>
                <li><a href="#home" className='text-xl font-semibold'>Home</a></li>
                <li><a href="#about" className='text-xl font-semibold'>About</a></li>
                <li><a href="#features" className='text-xl font-semibold'>Features</a></li>
                <li><a href="#prices" className='text-xl font-semibold'>Prices</a></li>
            </ul>
            <button className='bg-[#167DE5] px-10 py-5 my-5 rounded-[20px] text-xl font-bold text-white'><p>Sign Up Now</p></button>
        </div>
    </nav>
  )
}

export default Navbar
