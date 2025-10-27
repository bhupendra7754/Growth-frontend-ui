import React from 'react'
import testimonialLogo from '../assets/testi-bg.jpg'

const companies = [
  "Google", "Microsoft", "Amazon", "Facebook", "Apple", "Tesla", "IBM",
  "Oracle", "SAP", "Intel", "Netflix", "Adobe", "Salesforce", "LinkedIn"
]

const Testimonial = () => {
  return (
    <section className="relative w-full">
      {/* Background Image === */}
      <div className="relative w-full h-[600px] md:h-[700px] lg:h-[730px]">
        <img
          src={testimonialLogo}
          alt="testimonial"
          className="w-full h-full object-cover object-center"
        />

                <div className="absolute inset-x-0 top-20 md:top-28 px-6 md:px-16 max-w-2xl">
          <h3 className="text-white text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] font-extrabold leading-tight tracking-tight font-[Poppins] drop-shadow-lg">
            4,500+ leaders from the world's top companies are GrowthX members.
          </h3>
        </div>

        {/* ==Grid == */}
        <div className="absolute bottom-8 w-full px-0">
  <div className="grid grid-cols-3 sm:grid-cols-7 grid-rows-2 gap-0 text-white text-sm sm:text-base font-semibold font-[Inter] text-center w-full">
    {companies.map((company, index) => (
      <div
        key={index}
        className="flex items-center justify-center border border-slate-400/50 h-12 sm:h-14"
      >
        {company}
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  )
}

export default Testimonial






