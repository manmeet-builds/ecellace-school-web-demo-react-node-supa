import React from 'react';

const AboutSection = ({ children, className = "", bgColor = "bg-white", title, subtitle }) => {
  return (
    <section className={`py-24 ${bgColor} ${className}`}>
      <div className="container mx-auto px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          {(title || subtitle) && (
            <div className="text-center mb-16">
              {subtitle && (
                <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
                  {subtitle}
                </h3>
              )}
              {title && (
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#001e4a] relative pb-6 inline-block after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1.5 after:bg-yellow-500">
                  {title}
                </h2>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
