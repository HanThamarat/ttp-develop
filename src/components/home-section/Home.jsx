import { useState, useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
import AppDev from "../content-section/view-app";
import WebDev from "../content-section/view-web";
import Cardfull from "../content-card/card-full";
import * as ReactDOM from 'react-dom';

const Home = () => {

  const [ WebBtn, setWebbtn ] = useState(true);
  const [ AppBtn, setAppbtn ] = useState(false);

  const handleTapWeb = (e) => {
      e.preventDefault();
      // ReactDOM.render(<WebDev />, document.getElementById('sec-view'));
      setWebbtn(true);
      setAppbtn(false);
  };

  const handleTapApp = (e) => {
      e.preventDefault();
      // ReactDOM.render(<AppDev />, document.getElementById('sec-view'));
      setWebbtn(false);
      setAppbtn(true);
  };

  // useEffect(() => {
  //   ReactDOM.render(<WebDev />, document.getElementById('sec-view'));
  // },[]);

  return (
    <>
    <div className="h-[100vh] font-rbc">
        <div className="h-[20vh] flex justify-center items-center bg-primary w-full before:h-[40vh] before:block before:absolute before:-inset-1 before:-skew-y-1 before:bg-primary">
          <div className="absolute mt-[60px]">
              <div className="text-white font-medium text-[58px]" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration='1000'>
                <span className="font-normal">WELLCOME TO,</span> <span>TTC DEVELOPER</span>
              </div>
              <div className="flex justify-center my-2">
                <button className="animate-bounce animate-infinite animate-ease-in-out font-rbc font-medium text-white px-4 py-2 rounded-full bg-cyber">
                  <span>Get Started</span>
                </button>
              </div>
          </div>
        </div>
        <div className="mt-[15vh]">
          <Cardfull transition='fade-left' duraion='1000'>
            <div className="w-full flex justify-between gap-x-2">
              <button onClick={handleTapWeb} className={`w-full rounded-md ${WebBtn ? 'bg-primary text-white' : 'hover:bg-blue-400 hover:text-white'} duration-100 ease-in-out py-1 px-4`}>Web Development</button>
              <button onClick={handleTapApp} className={`w-full rounded-md  ${AppBtn ? 'bg-primary text-white' : 'hover:bg-blue-400 hover:text-white'} duration-100 ease-in-out py-1 px-4`}>App Development</button>
            </div>
            <div id='sec-view'></div>
          </Cardfull>
        </div>
    </div>
    </>
  )
}

Aos.init();

export default Home;