
import React from 'react';
import Layout from '../components/Layout';

const Outreach = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Outreach & Community Engagement</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging the gap between cutting-edge research and public understanding through education, outreach, and community partnerships.
          </p>
        </div>

        {/* Educational Outreach */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Educational Outreach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">K-12 School Programs</h3>
              <p className="text-gray-600 mb-4">
                We regularly visit local schools to inspire the next generation of scientists through interactive demonstrations and hands-on activities.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Science fair judging and mentorship</li>
                <li>• Laboratory tours for student groups</li>
                <li>• STEM career presentations</li>
                <li>• Summer research internships</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Public Lectures</h3>
              <p className="text-gray-600 mb-4">
                Making complex scientific concepts accessible to the general public through engaging presentations and community events.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Monthly public science talks</li>
                <li>• Science café discussions</li>
                <li>• Community college partnerships</li>
                <li>• Adult education workshops</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Community Partnerships */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Community Partnerships</h2>
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Local Museums</h4>
                <p className="text-gray-600 text-sm">
                  Collaborating with science museums to develop interactive exhibits and educational programs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Community Organizations</h4>
                <p className="text-gray-600 text-sm">
                  Partnering with local organizations to address community needs through scientific research.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Industry Collaboration</h4>
                <p className="text-gray-600 text-sm">
                  Working with local businesses to translate research findings into practical applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Recent Outreach Events</h2>
          <div className="space-y-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2 md:mb-0">
                    Outreach Event {item}
                  </h3>
                  <span className="text-blue-600 font-medium">December 2024</span>
                </div>
                <p className="text-gray-600 mb-3">
                  Description of the outreach event, its objectives, and the impact on the community. This event engaged [number] participants and focused on [specific topic].
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Education</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Community</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Science</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Get Involved */}
        <section className="bg-blue-900 text-white p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
            <p className="text-blue-200 mb-8 max-w-3xl mx-auto">
              Interested in partnering with us or participating in our outreach activities? We welcome collaboration from educators, community organizations, and individuals passionate about science education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                Contact Us
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200">
                Volunteer
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Outreach;
