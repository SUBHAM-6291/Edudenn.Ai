import React from 'react';
import Navbar from './_components/Navbar';
import Aboutus from './_components/Aboutus';
import Aboutus_Text from './_components/Aboutus_Text';
import Footer from './_components/Footer';
import Needhelp from './_components/Needhelp';
import FAQ from './_components/FAQ';
import Video from './_components/Video';
import Upcomingevents from './_components/Upcomingevents';
import Allcourse from './_components/Allcourse';
import OurCollaboration from './_components/OurCollaboartion';
import Clan from './_components/Clan';
import Course_categorys from './_components/Course_categorys';
import Testimonial from './_components/Testimonal';
import Placements from './_components/Placements';

const Page = () => {
  return (
    <div className="bg-black">
      
      <div className="flex flex-col items-center py-4 sm:py-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 watch:px-2">
        <div className="w-full max-w-[1280px] space-y-8 sm:space-y-12 watch:space-y-4">
          <Navbar />
          <Aboutus />
          <Aboutus_Text />
          <Course_categorys />
          <Placements />
          <Allcourse />
          <Video />
          <OurCollaboration />
      
          <Upcomingevents />
         
          <Needhelp />
          <FAQ />
        </div>
      </div>
      

          <Clan />
     <Testimonial />
    
      <Footer />
    </div>
  );
};

export default Page;