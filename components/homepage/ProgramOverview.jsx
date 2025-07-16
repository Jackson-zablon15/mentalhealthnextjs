import React from 'react';

const programs = [
  {
    icon: (
      <svg className="w-10 h-10 mb-3" fill="none" stroke="var(--deep-red)" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: 'Safe Space Talks',
    desc: 'We create safe, non-judgmental spaces for youth and students to open up, learn, and connect around mental health challenges.'
  },
  {
    icon: (
      <svg className="w-10 h-10 mb-3" fill="none" stroke="var(--deep-red)" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: 'Corporate Trainings',
    desc: 'We partner with organizations to provide mental health and wellness training for staff and management.'
  },
  {
    icon: (
      <svg className="w-10 h-10 mb-3" fill="none" stroke="var(--deep-red)" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: 'Online Sessions',
    desc: 'Through live streams and webinars, we reach wide audiences with educational content on mental health topics.'
  },
  {
    icon: (
      <svg className="w-10 h-10 mb-3" fill="none" stroke="var(--deep-red)" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: 'Counseling Sessions',
    desc: 'We provide one-on-one and group counseling sessions with professional therapists and psychologists.'
  },
];

const ProgramOverview = () => {
  return (
    <section id="programs" style={{background: 'var(--soft-white)'}}>
      <div className="max-w-6xl mx-auto px-6 sm:px-4 py-10">
        <h2 className="text-3xl font-bold mb-10 text-center" style={{color: 'var(--deep-red)'}}>What We Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-4">
          {programs.map((prog, idx) => (
            <div key={idx} className="rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition" style={{background: 'var(--slate-blue)'}}>
              {prog.icon}
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--soft-white)'}}>{prog.title}</h3>
              <p className="text-sm" style={{color: 'var(--soft-white)'}}>{prog.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
