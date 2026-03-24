import React from 'react';
import PageHeader from '../../../components/shared/PageHeader';

const ApplyNow = () => {
  return (
    <div>
      <PageHeader title="Apply Now 2025-26" />
      <div className="container mx-auto px-4 md:px-12 py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
          <div className="bg-blue-900 p-10 text-white text-center">
            <h2 className="text-2xl font-bold mb-2 text-white text-center">Inquiry Form</h2>
            <p className="text-blue-100 opacity-80">Start your child's journey with Excellence International.</p>
          </div>
          <div className="p-10 space-y-6 text-left">
             <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Student First Name" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Student Last Name" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500" />
             </div>
             <div className="grid md:grid-cols-2 gap-6">
                <select className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500 text-slate-500">
                  <option>Grade Applied For</option>
                  <option>Pre-Primary</option>
                  <option>Primary (I-V)</option>
                  <option>Middle (VI-VIII)</option>
                  <option>Secondary (IX-XII)</option>
                </select>
                <input type="tel" placeholder="Parent Contact Number" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500" />
             </div>
             <textarea placeholder="Tell us more about your student..." rows="4" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500"></textarea>
             <button className="w-full bg-yellow-400 text-blue-900 py-5 rounded-2xl font-bold text-lg hover:bg-yellow-300 transition shadow-xl shadow-yellow-400/20">Submit Application</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;
