import React from 'react';
import PageHeader from '../../components/shared/PageHeader';

const ContactUs = () => {
  return (
    <div>
      <PageHeader title="Contact Us" />
      <div className="container mx-auto px-4 md:px-12 py-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 text-left">
           <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-900">Get in Touch</h2>
            <p className="text-slate-600">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 font-bold">A</div>
                <p className="text-slate-700">123 Excellence Blvd, Educational District, Metro City 56001</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 font-bold">P</div>
                <p className="text-slate-700">+1 (234) 567-890</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 font-bold">E</div>
                <p className="text-slate-700">contact@excellence.school</p>
              </div>
            </div>
          </div>
          <form className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500" />
            <textarea placeholder="Your Message" rows="4" className="w-full p-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500"></textarea>
            <button className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
