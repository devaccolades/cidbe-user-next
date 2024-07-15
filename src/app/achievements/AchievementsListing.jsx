import React from 'react'
function AchievementsListing() {
    const achievements = [
        { image: 'images/achievements/image1.png', date: "28/03/2024", description: "Receiving certificate of gratitude award from Sharjaah Sheikh" },
        { image: 'images/achievements/image2.png', date: "28/03/2024", description: "Receiving Mathrubhumi property award" },
        { image: 'images/achievements/image3.png', date: "28/03/2024", description: "Receiving certificate of gratitude award from Sharjaah Sheikh" },
        { image: 'images/achievements/image1.png', date: "28/03/2024", description: "Receiving certificate of gratitude award from Sharjaah Sheikh" },
        { image: 'images/achievements/image2.png', date: "28/03/2024", description: "Receiving Mathrubhumi property award" },
        { image: 'images/achievements/image3.png', date: "28/03/2024", description: "Receiving certificate of gratitude award from Sharjaah Sheikh" },
         { image: 'images/achievements/image1.png', date: "28/03/2024", description: "Receiving certificate of gratitude award from Sharjaah Sheikh" },
        { image: 'images/achievements/image2.png', date: "28/03/2024", description: "Receiving Mathrubhumi property award" },

    ]
    return (
        <main className="bg-white -mt-[80px] lg:-mt-[95px] md:bg-[url('/images/achievements/achievements-bg.svg')] bg-cover">
            <h4 className='text-[16px] lg:text-[24px] text-center font-[clash-display-medium] pt-[90px] lg:pt-[130px] text-[--secondary-cl]'>ACHIEVEMENTS</h4>
            <section className='containers grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] py-[30px] lg:py-[70px]'>
                {achievements.map((achi, index) => (
                    <div key={index} className='rounded-[16px] card-shadow h-full w-auto'>
                        <div
                            className="h-[350px] bg-center bg-cover rounded-t-[16px]"
                            style={{ backgroundImage: `url(${achi?.image})` }}
                        />
                        <div className='w-full p-[24px] flex flex-col gap-[12px] font-[general-sans-regular] bg-white rounded-b-[16px]'>
                            <p className='rounded-[6px] flex justify-center items-center text-[#616161] w-[73px] h-[24px] text-[10px]  bg-[#EBEBEB]'>28/03/2024</p>
                            <p className='text-[14px] leading-[18px] text-[#483C32]'>Receiving certificate of gratitude award from Sharjaah Sheikh</p>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default AchievementsListing