import React from 'react'
import Navbar from './_components/Navbar'
import Aboutus from './_components/Aboutus'
import Aboutus_Text from './_components/Aboutus_Text'
import Footer from './_components/Footer'
import Needhelp from './_components/Needhelp'
import FAQ from './_components/FAQ'
import Video from './_components/Video'
import Upcomingevents from './_components/Upcomingevents'
import AllCourse from './_components/Allcourse'
import OurCollaboartion from './_components/OurCollaboartion'
import Clan from './_components/Clan'


const page = () => {
  return (
    <div>
      <Navbar/>
      <Aboutus/>
      <Aboutus_Text/>
      <AllCourse/>
      <Video/>
      <OurCollaboartion/>
           <Clan/>
      <Upcomingevents/>
 
      <Needhelp/>
       <FAQ/>
      <Footer/>
      
    </div>
  )
}

export default page
