import React from 'react';

const ProjectsSection = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl text-gray-800 font-bold">Projects</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {/* Render individual project cards here */}
          <div className="bg-white p-4">
            <h3 className="text-lg text-gray-800 font-bold">Project 1</h3>
            <p className="text-gray-700 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla placerat ligula ut faucibus.
            </p>
          </div>
          {/* Add more project cards */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
