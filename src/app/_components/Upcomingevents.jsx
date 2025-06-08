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
    <div className="bg-black min-h-screen p-8">
      <div className="mb-8 text-center">
        <h1 className="text-white text-6xl font-bold inline-block font-gucina">
          <span className="mr-2">Upcoming </span>
          <span className="relative group inline-block">
            Events
            <span className="block bg-yellow-400 h-1 w-0 group-hover:w-full transition-all duration-500 mt-1 mx-auto"></span>
          </span>
        </h1>

        <div className="mt-8 max-w-3xl mx-auto text-center">
          <p className="text-gray-300 text-base leading-relaxed lexend-body">
            Well, because we’re not your grandma’s boring old school! At Edu-Den, we’re the rebels of education, the mavericks of learning, and the champions of fun-filled knowledge. We’ll teach you how to slay dragons and code websites, all while cracking jokes and sipping on virtual coffee.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full place-items-center">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative rounded-2xl w-full max-w-sm h-[32rem] overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${event.image})`,
              }}
            />

            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 flex flex-col items-center justify-start pt-60 h-[calc(100%-64px)] p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-4 lexend-body">{event.title}</h3>
              <p className="text-base max-w-[90%] leading-relaxed lexend-body">{event.description}</p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-base lexend-body">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent pointer-events-none"></div>

              <div className="relative flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <img src="/clock.png" alt="Clock" className="w-5 h-5" />
                  <p className="font-medium lexend-body">{event.time}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <img src="/calendar.png" alt="Calendar" className="w-5 h-5" />
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