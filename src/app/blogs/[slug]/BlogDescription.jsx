import React from 'react';

function BlogDescription({ body }) {
  return (
    <main className="relative z-10 bg-cover bg-no-repeat md:bg-[url(/images/home/customer-reviewsbg.svg)] bg-white py-[20px] md:py-[40px] lg:py-[80px] rounded-t-[20px] lg:rounded-t-[80px] -mt-[80px]">
      <section className="containers font-[general-sans-regular]">
        <div className='w-full blog-description' dangerouslySetInnerHTML={{ __html: body }} />
      </section>
    </main>
  );
}

export default BlogDescription;
