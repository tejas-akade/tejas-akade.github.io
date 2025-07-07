
import React from 'react';
import Layout from '../components/Layout';

const Research = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Our Research</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exploring the frontiers of science through innovative methodologies and collaborative research initiatives.
          </p>
        </div>

        {/* Research Areas */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                Research Focus Area {item}
              </h3>
              <p className="text-gray-600 mb-4">
                Detailed description of the research area, methodologies employed, and the impact of our findings on the broader scientific community.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Keyword 1</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Keyword 2</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Keyword 3</span>
              </div>
            </div>
          ))}
        </div>

        {/* Current Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Current Projects</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  Project Title {item}
                </h3>
                <p className="text-gray-700 mb-3">
                  Comprehensive overview of the project objectives, methodology, and expected outcomes. This research contributes to advancing our understanding of complex scientific phenomena.
                </p>
                <div className="text-sm text-blue-600">
                  Status: Ongoing | Duration: 2023-2025 | Funding: [Funding Source]
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Research;
