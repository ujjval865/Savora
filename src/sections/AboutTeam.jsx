import React from "react";
import { teamMembers } from "../data/restaurantData";
function AboutTeam() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {teamMembers.map((member) => (
        <div
          key={member.id}
          className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5"
        >
          <div className="overflow-hidden rounded-lg mb-4 relative">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300   "
            />
          </div>

          <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
          <p className="text-lg text-orange-500 font-semibold">{member.role}</p>
          <p className="text-gray-600 mt-2">{member.description}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutTeam;
