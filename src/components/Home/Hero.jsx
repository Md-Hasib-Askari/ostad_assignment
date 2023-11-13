const Hero = () => {
    return (
        <section className="bg-transparent px-5">
            <div className="flex max-w-screen-xl py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
                <div className="mr-auto place-self-center lg:col-span-6">
                    <h1 className="max-w-lg mb-4 font-extrabold space-y-3 tracking-tight md:text-5xl xl:text-5xl md:leading-tight xl:leading-tight dark:text-white">
                        Increase Your Customers Loyalty and Satisfaction
                    </h1>
                    <p className="max-w-lg mb-6 font-medium text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        We help businesses like yours earn more customers, standout from competitors, make more money
                    </p>
                    <a href="#"
                       className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Get started
                    </a>
                </div>
                <div className="hidden lg:mt-0 max-w-2xl lg:flex sm:flex-col gap-5">
                    <div className='flex justify-between'>
                        <img className='max-w-md' src="./assets/Home/hero1.png" alt="mockup" />
                        <img className='w-1/4' src="./assets/Home/hero2.png" alt="mockup" />
                    </div>
                    <div className='flex justify-between'>
                        <img className='w-1/4' src="./assets/Home/hero3.png" alt="mockup" />
                        <img className='max-w-md' src="./assets/Home/hero4.png" alt="mockup" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;