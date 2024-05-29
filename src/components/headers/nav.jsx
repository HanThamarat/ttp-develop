import Headroom  from 'react-headroom';
import { useEffect } from 'react';
import './nav.css';

const Navbar = () => {

  const updateProgressBar = () => {
      const {scrollTop, scrollHeight} = document.documentElement;
      const scrollPercent = `${((scrollTop / (scrollHeight - window.innerHeight)) * 100)}` + '%';
      console.log(scrollPercent);
      document.querySelector('#progressBarOnTop').style.setProperty('--progress', scrollPercent);
      document.querySelector('#progressBarInnav').style.setProperty('--progress', scrollPercent);
  }

  useEffect(() => {
      document.addEventListener('scroll', updateProgressBar);
  },[]);

  return (
    <>
      <div className='fixed w-full' id='progressBarOnTop'></div>
      <Headroom>
        <nav className='bg-white px-[250px] py-[20px] flex justify-between items-center xl:px-[100px]'>
            <div className='text-[28px] font-rbc font-bold text-primary'>
                <span>TTC Developer</span>
            </div>
            <div>
                <ul className='flex items-center gap-x-5 xl:invisible'>
                  <li className='font-rbc text-primary font-medium hover:text-blue-700 duration-100 ease-in-out'>Home</li>
                  <li className='font-rbc text-primary font-medium hover:text-blue-700 duration-100 ease-in-out'>Product</li>
                  <li className='font-rbc text-primary font-medium hover:text-blue-700 duration-100 ease-in-out'>About</li>
                  <button className='px-5 py-2 rounded-full bg-primary font-rbrgl text-white hover:bg-blue-700 duration-100 ease-in-out'>
                    <span>Contact Us</span>
                  </button>
                </ul>
            </div>
        </nav>
        <div id='progressBarInnav'></div>
    </Headroom>
    </>
  );
};

Navbar.propTypes = {

};

export default Navbar;