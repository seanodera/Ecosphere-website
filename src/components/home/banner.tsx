import BannerSVG from "@/svg/BannerSVG";

export default function Banner() {

    return <section className={'text-center md:px-24 bg-body text-black py-32'} data-navbar-bg="bg-body text-dark">
        <div className={'grid sm:grid-cols-1 md:grid-cols-2 gap-3'}>
            <div
                className={'flex flex-col text-start md:pe-16 gap-8 col-span-1 items-center md:items-start justify-center mb-4 object-contain'}>
                <div className={'bg-primary bg-opacity-25 text-primary font-medium rounded-lg px-4 py-2'}>CRM Platform
                </div>
                <span
                    className={'text-2xl md:text-5xl  2xl:text-8xl font-semibold capitalize text-dark text-wrap'}>Monitor, Analyze And Innovate</span>
                <p className={'text-xl text-center md:text-start text-balance text-gray-500'}>
                    Elevate your business with real-time insights and transformative solutions
                </p>
                <div className={'flex mt-4 gap-8'}>
                    <button
                        className={'py-3 px-4 border border-dark text-dark rounded-xl hover:bg-dark hover:text-white w-max'}>
                        Get Started
                    </button>
                    <button
                        className={'py-3 px-4 border border-dark text-dark rounded-xl hover:bg-dark hover:text-white w-max'}>
                        Contact Sales
                    </button>
                </div>
            </div>
            <div className={'object-contain'}>
                <BannerSVG className={'fill-primary h-full w-full object-cover'}/>
            </div>
        </div>

    </section>
}

