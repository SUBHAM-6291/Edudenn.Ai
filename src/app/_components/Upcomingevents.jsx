'use client';

import React from 'react';

const Upcomingevents = () => {
  const events = [
    {
      title: 'Artificial Intelligence Bootcamp',
      image: '/Events/Events_girl.jpg',
      date: 'June 15',
      time: '1hr, 24m',
      year: 'Jun 12, 2024',
      description:
        'Join our intensive AI Bootcamp to learn machine learning, neural networks, and AI model deployment from industry experts.',
    },
    {
      title: 'Cybersecurity Mastery Bootcamp',
      image: '/Events/2ndEventsGirls.jpg',
      date: 'June 20',
      time: '1hr, 24m',
      year: 'Jun 12, 2024',
      description:
        'Master cybersecurity techniques, including ethical hacking, network security, and threat analysis in this hands-on bootcamp.',
    },
    {
      title: 'Android App Development Bootcamp',
      image: '/Events/3rd_evnets_girl.jpg',
      date: 'June 25',
      time: '1hr, 24m',
      year: 'Jun 12, 2024',
      description:
        'Build your own Android apps with our comprehensive bootcamp covering Kotlin, Android Studio, and app deployment.',
    },
    {
      title: 'Database Management',
      image: '/Events/4th_Events_girls.jpg',
      date: 'July 1',
      time: '1hr, 24m',
      year: 'Jun 12, 2024',
      description:
        'Learn advanced database management techniques, including SQL, NoSQL, and database optimization strategies.',
    },
    {
      title: 'Database Management',
      image: '/Events/5th_gril.jpg',
      date: 'July 5',
      time: '1hr, 24m',
      year: 'Jun 12, 2024',
      description:
        'A deep dive into database design, querying, and performance tuning for scalable applications.',
    },
    {
      title: 'Database Management',
      image: '/Events/6th_Events_boys.jpg',
      date: 'July 10',
      time: '1hr, 24m',
      year: 'Jun 12, 2024',
      description:
        'Explore modern database systems and learn how to manage large-scale data efficiently.',
    },
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black min-h-[50vh] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16">
      <div className="mb-8 text-center">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold inline-block font-gucina">
          <span className="mr-2">Upcoming </span>
          <span className="relative group inline-block">
            Events
            <span className="block bg-yellow-400 h-1 w-0 group-hover:w-full transition-all duration-500 mt-1 mx-auto"></span>
          </span>
        </h1>

        <div className="mt-6 sm:mt-8 max-w-3xl mx-auto text-center">
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed lexend-body">
            Well, because we’re not your grandma’s boring old school! At Edu-Den, we’re the rebels of education, the mavericks of learning, and the champions of fun-filled knowledge. We’ll teach you how to slay dragons and code websites, all while cracking jokes and sipping on virtual coffee.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full place-items-center">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative rounded-2xl w-full max-w-sm min-h-[24rem] max-h-[30rem] sm:min-h-[26rem] sm:max-h-[32rem] md:min-h-[28rem] md:max-h-[34rem] overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 focus:scale-105 hover:shadow-lg focus:shadow-lg"
            tabIndex={0}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${event.image})`,
              }}
            />

            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 flex flex-col items-start justify-start pt-32 sm:pt-36 md:pt-40 h-full p-4 sm:p-6 text-white text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 lexend-body">{event.title}</h3>
              <p className="text-xs sm:text-sm md:text-base max-w-[90%] leading-relaxed lexend-body line-clamp-4">{event.description}</p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white text-sm sm:text-base lexend-body">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent pointer-events-none"></div>
              <div className="relative flex items-center justify-between w-full gap-3 sm:gap-4">
                <div className="flex items-center gap-2">
                  <img src="/clock.png" alt="Clock" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <p className="font-medium lexend-body">{event.time}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <img src="/calendar.png" alt="Calendar" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <p className="lexend-body">{event.year}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcomingevents;