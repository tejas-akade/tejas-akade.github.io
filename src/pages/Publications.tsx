
import React from 'react';
import Layout from '../components/Layout';

const Publications = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Publications & Patents</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our research contributions to the scientific community through peer-reviewed publications and intellectual property.
          </p>
        </div>

        {/* Recent Publications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Recent Publications</h2>
          <div className="space-y-6">
            {[2024, 2023, 2022].map((year) => (
              <div key={year} className="bg-white border border-blue-100 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">{year}</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="border-l-4 border-blue-200 pl-4">
                      <h4 className="text-lg font-medium text-blue-900 mb-2">
                        Publication Title {item} ({year})
                      </h4>
                      <p className="text-gray-700 mb-2">
                        Author 1, Author 2, <strong>Lab Member</strong>, Author 4, Author 5
                      </p>
                      <p className="text-blue-600 text-sm mb-2">
                        <em>Journal Name</em>, Volume(Issue), Pages, {year}
                      </p>
                      <p className="text-gray-600 text-sm">
                        Brief abstract or description of the research findings and their significance to the field.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Patents */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Patents</h2>
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="space-y-6">
              {[1, 2].map((item) => (
                <div key={item} className="bg-white p-6 rounded-lg border border-blue-100">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    Patent Title {item}
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Inventor 1, <strong>PI Name</strong>, Inventor 3
                  </p>
                  <p className="text-blue-600 text-sm mb-3">
                    Patent No: US1234567{item} | Filed: 202{item} | Status: Granted/Pending
                  </p>
                  <p className="text-gray-600 text-sm">
                    Description of the patented technology and its potential applications in the industry.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publication Metrics */}
        <section className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Publication Metrics</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">45+</div>
              <div className="text-gray-600">Publications</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">1200+</div>
              <div className="text-gray-600">Citations</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">25</div>
              <div className="text-gray-600">h-index</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-gray-600">Patents</div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Publications;
