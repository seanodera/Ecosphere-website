import PredictiveAnalyticsSvg from "@/svg/predictiveAnalytics";
import OnlineOrganizer from "@/svg/OnlineOrganizer";


export default function ProjectManagement() {
    return <section className={'bg-white text-dark py-24 px-7 lg:px-24'}>
        <div className={'grid grid-cols-1 lg:grid-cols-2 gap-24'}>
            <div className={'bg-body rounded-xl lg:m-8 p-8'}>
                <OnlineOrganizer
                    className={'rounded-xl aspect-square object-cover fill-primary w-full'}/>
            </div>
            <div className={'flex flex-col gap-8 justify-center'}>
                <h3 className={'text-6xl md:text-7xl font-semibold'}>Simplify Tasks & Project Management</h3>
                <p className={'mt-4 text-balance text-xl text-gray-500'}>
                    Stay on top of deadlines and tasks effortlessly.
                    Need a unified calendar to manage meetings and projects? Our CRM’s centralized system makes
                    scheduling and tracking a breeze, keeping everything in order.</p>
                <button
                    className={'py-3 px-4 w-max rounded-xl border border-dark text-dark hover:bg-dark hover:text-white'}>Learn
                    More
                </button>
            </div>
        </div>
    </section>
}