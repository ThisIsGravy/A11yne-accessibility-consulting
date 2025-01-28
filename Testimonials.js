import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jane Doe',
      position: 'CEO, E-Shop Inc.',
      feedback: 'The team helped us achieve full WCAG compliance in record time.',
    },
    {
      name: 'John Smith',
      position: 'Founder, EduTech',
      feedback: 'Our platform is now accessible to all, thanks to Accessibility Hub.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold text-[#374151]">{testimonial.name}</h3>
              <p className="text-blue-500">{testimonial.position}</p>
              <p className="mt-4 text-gray-600">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
