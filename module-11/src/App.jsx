import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import Service from "./components/Service.jsx";
import Project from "./components/Project.jsx";

function App() {
    let darkHero = true; {/* Conditional Rendering */}
    let isLoggedIn = true; {/* Shorthand IF-ELSE */}

    let services = [
        {
            heading: "State-of-the-Art Laboratory Facilities",
            body: "MyLab provides access to modern, well-equipped laboratory spaces that are meticulously maintained. Our facilities are designed to meet the needs of researchers in various scientific disciplines, ensuring a conducive environment for experimentation and analysis.",
        },
        {
            heading: "Laboratory Equipment and Instrumentation",
            body: "We offer a wide selection of cutting-edge laboratory equipment and instrumentation, from microscopes and spectrometers to high-performance chromatography systems. MyLab ensures you have access to the tools necessary for precision research.",
        },
        {
            heading: "Research Support Services",
            body: "Our team of experienced professionals is ready to provide research support services, including technical assistance, data analysis, and project management. We are here to help you streamline your research processes and achieve your goals efficiently.",
        },
        {
            heading: "Collaborative Research Opportunities",
            body: "MyLab fosters collaboration among researchers and institutions. We facilitate networking and collaborative research projects, connecting you with like-minded scientists and institutions to advance scientific knowledge collectively.",
        },
    ]

    let projects = [
        {
            heading: "Advancing Biomedical Research",
            body: "MyLab collaborated with leading researchers to provide state-of-the-art laboratory facilities for a groundbreaking biomedical research project. Our cutting-edge equipment and expert support contributed to significant advancements in understanding complex diseases and developing potential treatments.",
        },
        {
            heading: "Environmental Sustainability Research",
            body: "MyLab played a key role in a collaborative research initiative focused on environmental sustainability. Our team provided specialized laboratory setups, equipment, and analytical services to facilitate comprehensive studies on renewable energy sources and environmental conservation.",
        },
        {
            heading: "Pharmaceutical Development Study",
            body: "In partnership with a pharmaceutical company, MyLab contributed to the development of a novel drug compound. Our extensive range of laboratory equipment, combined with research support services, ensured the successful evaluation of the compound's safety and efficacy, moving it closer to clinical trials.",
        },
        {
            heading: "Advanced Materials Research",
            body: "MyLab supported a materials science project that explored innovative materials for aerospace applications. Our customized laboratory solutions and consultation services enabled researchers to investigate the properties of novel materials, pushing the boundaries of material science.",
        },
    ]
  return (
    <>
        <header>
            <Header isLoggedIn={isLoggedIn} />
        </header>
        {darkHero ? <Hero mode='dark' /> : <Hero mode='light' />}
        <About />
        <section className="p-5 bg-gray-900">
            <h5 className="mb-10 text-4xl font-extrabold tracking-tight leading-none text-white text-center md:text-5xl lg:text-6xl">Services</h5>
            <div className='flex justify-center gap-5'>
                {services.map((item, key) => (
                    <Service heading={item.heading} body={item.body} key={key} />
                ))}
            </div>
        </section>
        <section className="p-5">
            <h5 className="mb-10 text-4xl font-extrabold tracking-tight leading-none text-gray-700 text-center md:text-5xl lg:text-6xl">Our Projects</h5>
            <div className='flex justify-center gap-5'>
                {projects.map((item, key) => (
                    <Project heading={item.heading} body={item.body} key={key} />
                ))}
            </div>
        </section>
        <footer>
            <Footer />
        </footer>
    </>
  )
}

export default App
