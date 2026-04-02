import aboutImage from "../assets/about.jpeg"

const About = () => {
    return (
        <section className="max-w-7xl mx-auto border-b-2 mt-20 mb-12" id="about">
            <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4">About</h2>
            <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
                <div className="mb-8 lg:mb-0">
                    <img src={aboutImage} alt="About Sergio (77)" className="w-full h-auto" />
                </div>
                <p className="text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8">
                    DJ Babs is a dynamic and versatile DJ known for delivering high-energy sets that keeps the crowd moving from start to finish. Specializing in Afrobeats and Amapiano, he blends smooth transitions, and crowd-favorite hits to create unforgettable musical experiences.
With a strong presence across clubs, lounges, weddings, house parties, concerts, and corporate events, DJ Babs understands how to read the room and set the perfect tone for any occasion. His ability to connect with diverse audiences and adapt his sound makes every performance unique and engaging.
For DJ Babs, DJing is more than just playing music its about creating moments, building energy, and leaving lasting impressions. Whether its an intimate gathering or a packed venue, he brings the right vibe every single time.
                </p>
            </div>
        </section>
    )
}

export default About