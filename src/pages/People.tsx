
import React from 'react';
import Layout from '../components/Layout';

const People = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated researchers and scholars driving innovation in our laboratory.
          </p>
        </div>

        {/* Principal Investigator */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Principal Investigator</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 bg-blue-200 rounded-full flex-shrink-0"></div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-blue-900 mb-2">Dr. [Principal Investigator Name]</h3>
                <p className="text-blue-600 font-medium mb-4">Professor & Lab Director</p>
                <p className="text-gray-600 mb-4">
                  Brief biography highlighting research interests, educational background, and key achievements in the field.
                </p>
                <div className="text-sm text-gray-500">
                  <p>Ph.D. in [Field], [University], [Year]</p>
                  <p>Email: pi@university.edu</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Members */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Current Members</h2>
          
          {/* Graduate Students */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">Graduate Students</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
                  <div className="w-20 h-20 bg-blue-200 rounded-full mx-auto mb-4"></div>
                  <h4 className="text-lg font-semibold text-blue-900 text-center mb-2">
                    Graduate Student {item}
                  </h4>
                  <p className="text-blue-600 text-center text-sm mb-3">Ph.D./M.S. Student</p>
                  <p className="text-gray-600 text-sm text-center">
                    Research focus and current projects
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Postdocs */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">Postdoctoral Researchers</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2].map((item) => (
                <div key={item} className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-200 rounded-full flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-1">
                        Dr. Postdoc {item}
                      </h4>
                      <p className="text-blue-600 text-sm mb-2">Postdoctoral Researcher</p>
                      <p className="text-gray-600 text-sm">
                        Research specialization and background
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Alumni */}
        <section className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Alumni</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900">Alumni Name {item}</h4>
                <p className="text-sm text-gray-600">Ph.D. 20XX - Current Position at [Institution/Company]</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default People;
