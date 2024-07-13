export default function TeamProductivity() {
    return <section className={'px-7 lg:px-24 py-24'} data-navbar-bg="bg-body text-dark">
        <div className={'grid grid-cols-1 md:grid-cols-2 mb-16 gap-8 md:gap-0 md:gap-y-16 lg:gap-16'}>
            <div className={'text-7xl font-semibold'}>
                Boost your teams productivity
            </div>
            <div className={'text-balance text-xl text-gray-700'}>
                Streamline your team&apos;s workflow with ease.
                Looking to enhance communication and manage tasks efficiently? Our integrated tools and clutter-free
                workspace ensure your team stays organized and productive.
            </div>
            <div className={'md:col-span-2'}>
                <img src={'/team.jpg'} className={'rounded-xl aspect-20/5 object-cover fill-primary w-full'} alt={''}/>
            </div>
        </div>

    </section>
}