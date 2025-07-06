import React from 'react';

const programs = [
  {
    icon: (
      <svg className="w-10 h-10 mb-3" fill="none" stroke="var(--deep-red)" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: 'Digital Detox',
    desc: 'Workshops and resources to help youth manage screen time and digital stress.'
  },
  {
    icon: (
      <svg className="w-10 h-10 mb-3" fill="none" stroke="var(--deep-red)" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: 'Awareness Campaigns',
    desc: 'Community outreach to break stigma and spread mental health awareness.'
  },
  {
    icon: (
      <svg className="w-10 h-10 mb-3" fill="none" stroke="var(--deep-red)" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 3v4M8 3v4" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: 'School Mental Talks',
    desc: 'Interactive sessions in schools to educate and support students and teachers.'
  },
  {
    icon: (
      <svg className="w-10 h-10 mb-3" fill="none" stroke="var(--deep-red)" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 0 0-4-4h-1"/><circle cx="9" cy="7" r="4"/><path d="M9 11a4 4 0 0 0-4 4v2h8v-2a4 4 0 0 0-4-4z"/></svg>
    ),
    title: 'Youth Clubs',
    desc: 'Peer-led clubs fostering safe spaces for youth to share and grow together.'
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
