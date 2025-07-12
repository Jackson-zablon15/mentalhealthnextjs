import React from 'react';


const teamMembers = [
  { name: 'Glory Livingstone', title: 'Founder & CEO', photo: '/assets/gloryLivingstone.jpg' },
  { name: 'Easter Philimon', title: 'General Secretary', photo: '/assets/easterPhilimon.jpg' },
  { name: 'Samwely Mgina', title: 'Project Coordinator', photo: '/assets/samwelyMgina.jpg' },
  { name: 'Daudi Elia', title: 'Project Coordinator', photo: '/assets/daudiElia.jpg' },
  { name: 'Ikunda Thomasi', title: 'Treasurer', photo: '/assets/ikundaThomas.jpg' },
  { name: 'Anold David', title: 'Publicity Coordinator', photo: '/assets/anoldDavid.jpg' },
  { name: 'Amani Masaule', title: 'Strategic partnerships and Programs officer', photo: '/assets/amaniMasaule.jpg' },
 
];

const Team = () => (
  <section className="py-16 bg-white">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-10 text-center text-[var(--deep-red)]">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="w-full flex flex-col items-center bg-gray-50 rounded-lg shadow p-6 max-w-xs mx-auto">
            <img src={member.photo} alt={member.name} className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-[var(--grayish-blue)]" />
            <div className="font-semibold text-lg mb-1 text-[var(--deep-red)]">{member.name}</div>
            <div className="italic text-gray-600 text-sm">{member.title}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team; 