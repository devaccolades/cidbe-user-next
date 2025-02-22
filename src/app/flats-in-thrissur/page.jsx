import React from 'react'

import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import { getFeaturedProject } from '../../services/services';
import ProjectCard from '../../components/ProjectCard';

async function fetchata() {
    try {
        const res = await getFeaturedProject(1, 10);
        const { StatusCode, data } = res.data;
        if (StatusCode === 6000) {
            return data;
        }
        return null;
    } catch (error) {
        console.error(`Error fetching data: `, error);
        return null;
    }
}
export default async function Page() {
    const data = await fetchata();

    return (
        <>
            <Header bgPrimary={true} />
            <section className=' -mt-[60px] lg:-mt-[95px] '>
                <div className='containers text-[--secondary-cl] font-[general-sans-regular] flex flex-col gap-[10px] text-[16px] leading-[156%]'>
                    <h1 className='text-[20px] lg:text-[32px] leading-[24px] lg:leading-[36px] text-center font-[clash-display-medium] pt-[80px] lg:pt-[130px]'>Flats in Thrissur</h1>
                    <p className=' '>
                        For over 33 years, CIDBI has been a name synonymous with trust, quality, and excellence in the
                        construction industry. Based in Thrissur, we have successfully completed 110 lakh square feet
                        of projects across a variety of sectors, including residential, commercial, healthcare, and
                        educational institutions. Each of our projects reflects our commitment to delivering high-quality
                        spaces tailored to meet client needs, making us one of the most trusted builders in Thrissur town.
                    </p>
                    <p>
                        Our team is dedicated to creating spaces that exceed expectations, ensuring that every detail
                        aligns with global standards. Whether it is luxury apartments in Thrissur town, budget-friendly
                        flats, or large-scale infrastructure, we bring a Iblend of innovation, craftsmanship, and timely
                        delivery to every project. With a proven track record of excellence, CIDBI is the builder you
                        can rely on when you buy apartments in Thrissur.
                    </p>
                    <h2 className='text-[18px] md:text-[20px] font-[general-sans-medium]'>
                        Diverse Industry Experience
                    </h2>
                    <p>
                        CIDBI's versatility as a builder is evident in our wide range of completed projects. We have made
                        a significant impact across various sectors, adapting to diverse client needs while maintaining
                        the highest standards of quality and professionalism.
                    </p>
                    <p>
                        Residential: Our expertise in residential construction includes luxury apartments in Thrissur,
                        budget-friendly flats, and spacious villas. Each project is designed to provide comfort, style,
                        and modern amenities, catering to the varied preferences of homebuyers. Our new flats projects
                        in Thrissur are crafted to offer both functionality and elegance.
                    </p>
                    <p>
                        Commercial Spaces: CIDBI has developed numerous commercial properties, including office buildings
                        and shopping complexes. These spaces are designed with practicality and aesthetics in mind,
                        ensuring they meet the demands of businesses and investors alike.
                    </p>
                    <p>
                        Healthcare: In the healthcare sector, CIDBI has constructed hospitals and medical facilities
                        equipped with advanced technology and infrastructure, ensuring a positive impact on the community.
                    </p>
                    <p>
                        Education: Our contributions to the educational sector include the construction of schools and
                        colleges, offering modern learning environments that inspire students and educators.
                    </p>
                    <p>
                        Infrastructure: Beyond buildings, CIDBI has developed large-scale infrastructure projects that
                        enhance urban connectivity and contribute to the growth of Thrissur as a thriving hub.
                    </p>
                    <p>
                        By delivering projects that cater to varied industries, CIDBI has established itself as a reliable and versatile builder. Whether you're looking to buy flats in Thrissur or invest in a commercial project, CIDBI's expertise ensures a seamless experience.
                    </p>
                    <h2 className='text-[18px] md:text-[20px] font-[general-sans-medium]'>
                        Our Commitment to Quality
                    </h2>
                    <p>
                        At CIDBI, quality is not just a promise; it's a core value. Every project we undertake is backed by stringent quality checks to ensure durability, functionality, and customer satisfaction. From flats in Thrissur town for sale to hospitals and shopping complexes, our commitment to excellence is evident in every structure we build.
                    </p>
                    <p>
                        Our team uses cutting-edge construction technologies, industry best practices, and premium materials to deliver top-notch results. Personal supervision at every stage of construction ensures that every detail, from the foundation to the finishing touches, meets our exacting standards. This dedication to precision and quality has earned us a reputation as trusted builders in Thrissur.
                    </p>
                    <p>
                        We also prioritize feedback from our clients, continuously refining our processes to meet evolving needs. Whether it's luxury apartments for sale in Thrissur or budget flats in Thrissur, CIDBI guarantees a home-buying experience that exceeds expectations.
                    </p>

                </div>
                <div className='bg-[--primary-cl] mt-[40px]'>
                    <div className='containers w-full py-[25px] md:py-[50px] flex flex-col gap-[20px]'>
                        <h4 className='text-[20px] lg:text-[30px] text-[--secondary-cl] font-[general-sans-regular] uppercase'>OUR Featured Projects</h4>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px]'>
                            {data.map((item, index) => {
                                return (<ProjectCard key={index} project={item} />)
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <Footer backGround='' />
        </>
    )
}
