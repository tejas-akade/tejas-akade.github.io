
import React from 'react';
import Layout from '../components/Layout';

const AboutPI = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="w-40 h-40 bg-blue-200 rounded-full mx-auto mb-6"></div>
            <h1 className="text-4xl font-bold text-blue-900 mb-2">Dr. [Principal Investigator Name]</h1>
            <p className="text-xl text-blue-600 mb-4">Professor & Laboratory Director</p>
            <p className="text-gray-600">Department of [Department] | [University Name]</p>
          </div>

          {/* Biography */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Biography</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Dr. [Name] is a distinguished researcher and educator in the field of [Research Area]. With over [X] years of experience in academia and research, Dr. [Name] has made significant contributions to our understanding of [specific research areas].
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Dr. [Name] received their Ph.D. in [Field] from [University] in [Year], followed by postdoctoral training at [Institution]. They joined [Current University] in [Year] and have since established a world-renowned research program focused on [research focus].
              </p>
              <p className="text-gray-700 leading-relaxed">
                Their work has been published in prestigious journals including [Journal Names] and has been recognized with numerous awards and honors. Dr. [Name] is passionate about mentoring the next generation of scientists and has supervised over [X] graduate students and postdoctoral researchers.
              </p>
            </div>
          </section>

          {/* Education */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Education</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Ph.D. in [Field]</h3>
                <p className="text-gray-700">[University Name] | [Year]</p>
                <p className="text-gray-600 text-sm">Dissertation: "[Dissertation Title]"</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">M.S. in [Field]</h3>
                <p className="text-gray-700">[University Name] | [Year]</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">B.S. in [Field]</h3>
                <p className="text-gray-700">[University Name] | [Year]</p>
              </div>
            </div>
          </section>

          {/* Research Interests */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Research Interests</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Research Area 1
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Research Area 2
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Research Area 3
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Research Area 4
                </li>
              </ul>
            </div>
          </section>

          {/* Awards & Recognition */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Awards & Recognition</h2>
            <div className="space-y-4">
              {[2024, 2023, 2022, 2021].map((year) => (
                <div key={year} className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">Award Name ({year})</h3>
                      <p className="text-gray-600">Awarding Organization</p>
                      <p className="text-gray-700 text-sm mt-2">Description of the award and recognition received.</p>
                    </div>
                    <span className="text-blue-600 font-medium">{year}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Office</h3>
                <p className="text-gray-700">Room [Number], [Building Name]</p>
                <p className="text-gray-700">[Department]</p>
                <p className="text-gray-700">[University Name]</p>
                <p className="text-gray-700">[Address]</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Contact</h3>
                <p className="text-gray-700">Email: [email]@university.edu</p>
                <p className="text-gray-700">Phone: +1 (XXX) XXX-XXXX</p>
                <p className="text-gray-700">Office Hours: [Days and Times]</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPI;
