import React from 'react';


const teamMembers = [
  { name: 'Glory Livingstone', title: 'Founder & CEO', photo: '/assets/gloryLivingstone.jpg' },
  { name: 'Jane Doe', title: 'Program Manager', photo: '/assets/gloryLivingstone.jpg' },
  { name: 'John Smith', title: 'Outreach Lead', photo: '/assets/gloryLivingstone.jpg' },
];

const Team = () => (
  <section className="py-16 bg-white">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-10 text-center text-[var(--deep-red)]">Our Team</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="flex flex-col items-center bg-gray-50 rounded-lg shadow p-6 w-full max-w-xs">
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