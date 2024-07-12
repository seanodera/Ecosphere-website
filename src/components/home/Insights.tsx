import PredictiveAnalyticsSvg from "@/svg/predictiveAnalytics";

export default function Insights() {

    return <section className={'bg-dark text-white py-24 px-7 lg:px-24'}>
        <div className={'grid grid-cols-1 lg:grid-cols-2 gap-24'}>
            <div className={'bg-body rounded-xl lg:m-8 p-8'}>
                <PredictiveAnalyticsSvg
                    className={'rounded-xl aspect-square object-cover fill-primary w-full'}/>
            </div>
            <div className={'flex flex-col gap-8 justify-center'}>
                <h3 className={'text-7xl font-semibold'}>Gain Deep Sales Insights</h3>
                <p className={'mt-4 text-balance text-xl text-gray-300'}>Track and understand your sales performance effortlessly.
                    Want to see real-time data on your monthly earnings or identify your top-selling products? Our CRM
                    provides clear insights to help you make informed decisions and boost your revenue.</p>
                <button className={'py-3 px-4 w-max rounded-xl border border-white text-white hover:bg-white hover:text-dark'}>Learn More</button>
            </div>
        </div>
    </section>
}