import React from 'react';

const staffMembers = [
  {
    name: "Jan Rombout",
    image: "/assets/core_staff/jan-rombout.webp",
    role: "Oprichter & Directeur"
  },
  {
    name: "Maarten de Winter",
    image: "/assets/core_staff/maarten_de_winter.webp",
    role: "Hoofd Bedrijfsartsen"
  },
  {
    name: "Reinout Koperdraat",
    image: "/assets/core_staff/reinout_koperdraat.webp",
    role: "Hoofd Huisartsen"
  },
];

export const CoreStaff: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Ons Kernteam
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {staffMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-blue-600 text-md">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
