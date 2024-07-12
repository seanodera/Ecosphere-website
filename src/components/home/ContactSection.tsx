export default function ContactSection() {

    return <section className={'md:px-7 lg:px-24 py-24 bg-white'}>
        <div className={'md:rounded-xl bg-body p-16 max-sm:px-7 lg:pb-0 grid grid-cols-1 lg:grid-cols-2 gap-24'}>
            <div className={'flex flex-col justify-center gap-8'}>
                <div className={'text-7xl font-semibold'}>Get ready to start</div>
                <p className={'text-lg font-medium text-gray-500'}>Unlock your business&apos;s potential with EchoSphere CRM. Monitor performance, analyze data, and
                    innovate
                    for unmatched efficiency</p>
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
            <div>
                <img src={'/started.jpg'} alt={''} className={'object-cover aspect-square max-lg:rounded-xl'}/>
            </div>
        </div>
    </section>
}