
import React from 'react'

function Myweb() {
  return (
    <div className=' w-full  sm:h-[3500px] md:h-[3000px] lg:h-[3000px] xs:h-[4770px] s:h-[4500px] bg-[rgb(249,249,249)] overflow-hidden   '>
      <header className=' w-full h-20' >
      <div className=' flex justify-start ' >
       <div className=' pt-4 pl-5 font-serif font-semibold'>
        <h1>JS Academy</h1>
       </div>
      </div>
      <div className='flex justify-end relative '>
      <div className='  absolute'>
       <div className='pr-5 relative top-[-23px]'>
        <a className=' xs:invisible ml-4'>About</a>
        <a className=' xs:invisible ml-4'>Academic</a>
        <a className=' xs:invisible ml-4'>Events</a>
        <a className=' xs:invisible ml-4'>Apply</a>
        <a className=' xs:invisible ml-4'>Contact</a>
       </div>
    
      <div className='invisible xs:visible  absolute top-[-25px] left-[305px] w-7'>
          <img alt='pic1' src='./pics/menu.png' width={64}>
          </img>
      </div>
      </div>
      </div>
      </header>
      <main>
        <div className=' flex-row xs:flex-col'>
          <div className=' flex relative w-full'>
          <div className=' absolute right-[125px] xs:right-[90px] bg-pink-300 w-60 h-60 rounded-full  blur-[60px]' ></div>
          <div className=' absolute top-[195px] right-[345px] xs:right-[245px] bg-yellow-400 w-24 h-24 rounded-full  blur-[80px] ' ></div>
          <div className=' absolute top-28 right-[125px]  xs:right-[90px] bg-sky-200 w-52 h-52 rounded-full  blur-[60px]' ></div>
          <div className=' absolute right-[125px] sm:right-0 xs:right-[5px]'> <img alt='pic2' src='./pics/pic1.png' width={280} ></img></div>
          </div>

          <div className='  flex-col ml-3 relative s:top-[450px] xs:top-[450px] top-24  '>
            <div>
            <h1 className=' text-5xl xs:text-2xl s:text-2xl sm:text-2xl  w-[500px] xs:w-[300px] s:w-[420px]  sm:w-[300px]'>
            Web Developer Certification Training ...
            </h1>
            </div>
            <div className='  xs:pr-3 text-justify pt-2  s:w-[470px] sm:w-[400px] md:w-[500px] lg:w-[600px]'>
            <p>
            JS Academy&apos;s web development certification training is curated by top industry experts and designed to meet industry benchmarks. This course helps you learn how to create impressive websites using HTML5, CSS3, Twitter Bootstrap 3, jQuery, and Google APIs and deploy it to Amazon Simple Storage Service (S3). Earn a Web Developer certificate post completion of this Online Web Developer training Course and is suitable for beginners, intermediate, and experienced professionals.
            </p>
            </div>
          </div>
        </div>
        <div>
          <div className=' relative top-80 xs:top-[620px] s:top-[620px]'>
            <h1 className=' text-lg text-center pl-2 pr-2'>
            About your Web Developer Certification
            </h1>
            <h1 className=' text-2xl text-center'>
            Skills Covered
            </h1>
          </div>
        <div className='flex  justify-center w-full '>
          
          <div className=' flex '>
            
        <div className='  m-4 relative xs:top-[680px] s:top-[680px] top-96 sm:left-[40px] s:left-[90px] xs:left-[150px] w-[350px] sm:w-[300px] s:w-[300px] xs:w-[270px] h-52   rounded-xl bg-gray-[2] shadow-pink-200 drop-shadow-2xl shadow-2xl    '>
         <img alt='pic3' className=' relative left-28 xs:left-24 md:left-32 top-12' src='./pics/next.png' width={100}></img>
         <p className=' text-center mt-14 '> Creating website using Nextjs</p>
        </div>
        
        <div className=' m-4  relative top-96 xs:top-[980px] s:top-[980px] sm:top-[680px] sm:left-[-40px] s:left-[-90px] xs:left-[-150px]  w-[350px] sm:w-[300px] s:w-[300px] xs:w-[270px] h-52   rounded-xl bg-gray-[2] shadow-sky-200 drop-shadow-2xl shadow-2xl    '>
        <img alt='pic4' className=' relative left-28 xs:left-12 s:left-16 sm:left-16  md:left-24 top-0' src='./pics/amazon.png' width={180}></img>
        <p className=' text-center mt-[-59px]'>  Deploying website to Amazon S2</p>
        </div>
        
        </div>

        
        </div>
        <div className='flex  justify-center w-full relative top-96 md:top-4 lg:top-4 '>
          
          <div className=' flex '>
            
        <div className=' m-4 relative xs:top-[680px] s:top-[680px] top-96 sm:left-[40px] s:left-[90px] xs:left-[150px] w-[350px] sm:w-[300px] s:w-[300px] xs:w-[270px] h-52   rounded-xl bg-gray-[2] shadow-yellow-200 drop-shadow-2xl shadow-2xl    '>
        <img alt='pic5' className=' relative left-28 xs:left-4 s:left-10 sm:left-10 md:left-16 top-5' src='./pics/tailwind.png' width={220}></img>
        <p className=' text-center mt-[-15px]'>Styling web pages using Tailwind CSS</p>
        </div>
        
        <div className=' m-4  relative top-96 xs:top-[980px] s:top-[980px] sm:top-[680px] sm:left-[-40px] s:left-[-90px] xs:left-[-150px]  w-[350px] sm:w-[300px] s:w-[300px] xs:w-[270px] h-52   rounded-xl bg-gray-[2] shadow-purple-200 drop-shadow-2xl shadow-2xl    '>
        <img alt='pic6' className=' relative left-28 xs:left-16 s:left-[80px] sm:left-20 md:left-[105px] top-[65px]' src='./pics/typescript.png' width={140}></img>
        <p className=' text-center mt-[75px]'> TypeScript programming</p>
        </div>
        
        </div>

        
        </div>
        </div>



        <div className='flex relative  top-[640px] sm:top-[1240px] s:top-[1540px] xs:top-[1600px] '>
          <div className=' relative'>
          <div className=' absolute xs:top-20 xs:left-[195px] s:left-[285px]  sm:left-[225px] md:left-[195px] lg:left-[195px] bg-pink-300 w-60 h-60 rounded-full  blur-[60px]' ></div>
          <div className=' absolute s:top-[120px] sm:top-[120px] md:top-[70px] lg:top-[70px] s:left-[175px] bg-purple-400 w-52 h-52 rounded-full  blur-[80px] ' ></div>
          <div className=' absolute xs:top-[-110px] sm:top-[-120px] md:top-[-70px]  lg:top-[-70px]  s:left-[185px] xs:left-[185px] bg-sky-200 w-52 h-52 rounded-full  blur-[60px]' ></div>
            <div className='relative left-28 sm:left-12 xs:left-20 s:left-48 w-96'>
              <img alt='pic7' src='./pics/pic2.png' width={250}>
              </img>
            </div>
          </div>
          
          <div className=' flex justify-center  w-full'>
          <div className=' xs:w-[300px] sm:w-[350px] w-[400px] xs:ml-[-455px] sm:ml-[-165px] s:ml-[-355px] md:ml-12 sm:mt-32 s:mt-[500px] xs:mt-[500px] mt-32'>
            <h1 className=' xs:text-left text-center text-xl'>
            The Outcome for Participants of the Program
            </h1>
            <p className=' xs:text-left text-center pt-2'>
            As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistan&apos;s software exports.
            </p>
          </div>
          </div>
        </div>



        <div className=' flex xs:justify-center s:justify-center justify-end relative top-[1660px] sm:top-[1400px] md:top-[900px] lg:top-[900px]'>

        <div className=' flex justify-end relative sm:right-4 md:right-20 '>
        <div className=' absolute xs:right-10 xs:top-[200px] s:right-10 s:top-[200px] sm:top-[-100px] sm:right-[200px] md:top-52 lg:top-52 lg:right-96  md:right-28 bg-pink-300 w-60 h-60 rounded-full  blur-[60px]' ></div>
          <div className=' absolute xs:right-[-100px] s:right-[-100px] md:top-16 lg:top-16 lg:right-[500px] md:right-[380px] bg-purple-400 w-52 h-52 rounded-full  blur-[80px] ' ></div>
          <div className=' absolute xs:top-[-100px] s:top-[-100px] sm:top-[200px]  sm:right-[100px] md:top-[-100px] lg:top-[-100px] lg:right-52 md:right-80 bg-sky-200 w-52 h-52 rounded-full  blur-[60px]' ></div>
          <div className=' absolute xs:right-40 s:right-40 sm:top-20 sm:right-96 md:top-16 lg:top-16  md:right-[50px]  lg:right-[120px] bg-yellow-200 w-52 h-52 rounded-full  blur-[60px] sm:blur-[80px]' ></div>
          <div>
            <img alt='pic8' src='./pics/pic3.png' width={250}></img>
          </div>
        </div>
         

        </div>
        
        <div className=' relative xs:top-[1750px] s:top-[1750px] sm:top-[970px] md:top-[480px] lg:top-[480px] xs:left-4 s:left-6 sm:left-12 md:left-32 lg:left-32'>
          <div>
            <h1 className=' text-5xl xs:text-4xl'>Student SignUp</h1>
           
              <h1 className='text-3xl xs:text-2xl mt-12'>CNIC</h1>
              <input className=' rounded-lg mt-2 w-96 xs:w-72  h-12' type='number'/>
              <h1 className='text-3xl xs:text-2xl mt-8'>Email</h1>
              <input className=' rounded-lg mt-2 w-96 xs:w-72 h-12' type='email' />
              
            
          </div>
          <div>
            <button className='w-52 h-10 mt-10  rounded-xl bg-gradient-to-bl from-pink-300 to-sky-300  hover:from-sky-300 hover:to-pink-300'>SignUp</button>
          </div>
         </div>
      </main>
      <footer className='  relative xs:top-[2000px] s:top-[1930px] sm:top-[1200px] top-[700px]'>
        <div className=' w-full xs:h-64 s:h-40 h-32 text-slate-100 pt-7 text-xl bg-slate-800'><p className=' text-center'>This website is made by <a href='https://github.com/MuhammadAhmedKhan123'>MuhammadAhmedKhan123</a></p></div>
             
      </footer>
      
    </div>
  )
}

export default Myweb
