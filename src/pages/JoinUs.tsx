
import React from 'react';
import Layout from '../components/Layout';

const JoinUs = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are always looking for passionate, motivated individuals to join our research team and contribute to groundbreaking scientific discoveries.
          </p>
        </div>

        {/* Current Opportunities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Current Opportunities</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold text-blue-900 mb-2 md:mb-0">
                  Postdoctoral Research Associate
                </h3>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Open
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                We are seeking a highly motivated postdoctoral researcher to join our team working on [specific research area]. The successful candidate will have experience in [required skills/background].
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-blue-800 mb-2">Requirements:</h4>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>Ph.D. in [relevant field]</li>
                  <li>Experience with [specific techniques/methods]</li>
                  <li>Strong publication record</li>
                  <li>Excellent communication skills</li>
                </ul>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Apply Now
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold text-blue-900 mb-2 md:mb-0">
                  Graduate Research Assistant
                </h3>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Open
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                We welcome applications from outstanding graduate students interested in pursuing Ph.D. or M.S. research in [research areas].
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-blue-800 mb-2">We offer:</h4>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>Competitive stipend and benefits</li>
                  <li>State-of-the-art research facilities</li>
                  <li>Mentorship and professional development</li>
                  <li>Conference travel support</li>
                </ul>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Application Process</h2>
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">For Graduate Students</h3>
                <ol className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">1</span>
                    Submit application through university admissions
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">2</span>
                    Contact PI directly with research interests
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">3</span>
                    Interview and research fit assessment
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">4</span>
                    Admission and lab rotation (if applicable)
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">For Postdocs</h3>
                <ol className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">1</span>
                    Send CV and cover letter to PI
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">2</span>
                    Provide 3 professional references
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">3</span>
                    Virtual or in-person interview
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">4</span>
                    Offer and start date negotiation
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Lab Culture */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Lab Culture & Environment</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Collaborative Environment</h3>
              <p className="text-gray-600 text-sm">
                We foster a supportive, collaborative atmosphere where everyone's ideas are valued and respected.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Professional Development</h3>
              <p className="text-gray-600 text-sm">
                We are committed to helping each team member achieve their career goals through mentorship and training.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Work-Life Balance</h3>
              <p className="text-gray-600 text-sm">
                We believe in maintaining a healthy balance between research excellence and personal well-being.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-blue-900 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Have questions about opportunities in our lab? We'd love to hear from you and discuss how you can contribute to our research mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
              Contact PI
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200">
              Schedule Meeting
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default JoinUs;
