'use client'

export default function Experiences() {

    return <section className={'lg:px-24 px-7 py-24 bg-white text-dark'} data-navbar-bg="bg-white text-dark">
        <div className={'grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:gap-24'}>
            <div className={'text-7xl font-semibold text-balance'}>
                Growth is inevitable and we are here for it
            </div>
            <div className={''}>
                <div className={'text-gray-500 text-lg'}>Whether you are a start up or an already established business,
                    We will help you modernize and digitally transform your business
                </div>

                <div className={'grid grid-cols-3 md:grid-cols-1 lg:grid-cols-3 mt-16 gap-8'}>
                    <div >
                        <div className={'text-5xl font-medium'}>10M+</div>
                        <div className={'text-2xl text-gray-500'}>Total Customers</div>
                    </div>
                    <div>
                        <div className={'text-5xl font-medium'}>05+</div>
                        <div className={'text-2xl text-gray-500'}>years of experience</div>
                    </div>
                    <div>
                        <div className={'text-5xl font-medium'}>5.0</div>
                        <div className={'text-2xl text-gray-500'}>Ratings</div>
                    </div>
                </div>
            </div>
        </div>
        <div className={'flex justify-center gap-8 items-center py-16'}>
            [clients]
        </div>
    </section>
}

