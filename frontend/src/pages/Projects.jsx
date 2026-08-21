import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SectionTitle from '../components/SectionTitle';
import CTA from '../components/CTA';
import projects from '../data/projectsData';

const ProjectsPage = () => {
  return (
    <MainLayout>
      <section className="bg-navy-900 py-16 sm:py-20">
        <div className="container-page text-center flex flex-col items-center gap-4">
          <span className="eyebrow bg-white/10 text-accent-300">Our Projects</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight max-w-3xl">
            Project categories
          </h1>
      
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionTitle eyebrow="Projects" title="Featured Projects" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project) => (
              <div key={project.id} className="card overflow-hidden flex flex-col">
                <img
                  src={project.image}
                  alt={`${project.title} — demo project illustration`}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent-700 mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-bold text-navy-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-navy-600 leading-relaxed flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((t) => (
                      <span key={t} className="text-xs font-medium bg-navy-50 text-navy-600 px-2.5 py-1 rounded-full border border-navy-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      <CTA />
    </MainLayout>
  );
};

export default ProjectsPage;
