import {faker} from "@faker-js/faker";
import {AiFillCiCircle} from "react-icons/ai";
import PredictiveAnalyticsSvg from "@/svg/predictiveAnalytics";
import OnlineOrganizer from "@/svg/OnlineOrganizer";
import TaskListSvg from "@/svg/TaskList";
import DataReports from "@/svg/DataReports";


export default function Solution() {

    return <section className="section bg-white text-center px-7 md:px-24 py-16">
        <h1 className="md:text-8xl text-5xl font-bold">Why EchoSphere?</h1>

        <div
            className={'grid grid-cols-1 px-3 text-balance md:px-0 md:grid-cols-3 items-center bg-white bg-gradient-to-b from-transparent to-dark bg-[size:4px_auto] bg-repeat-y  bg-right md:bg-center mt-8'}>
            <div className={'col-span-1 py-16 flex items-center'}>
                <PredictiveAnalyticsSvg
                     className={'rounded-xl aspect-video object-cover fill-primary '}/>
            </div>
            <div className={'mx-auto w-max h-max rounded-full bg-gray-200 p-2'}>
                <div className={'rounded-full bg-primary p-3 '}/>
            </div>
            <div className={' col-span-1 py-16 text-start flex flex-col justify-center gap-2'}>
                <h3 className={'text-5xl font-semibold'}>Comprehensive Sales Insights</h3>
                <p className={'mt-4 text-balance'}>Harness the power of detailed sales analytics with real-time data on monthly
                    earnings, yearly performance, and target achievements. Discover top-selling products and optimize
                    strategies with clutter-free, actionable insights.</p>
            </div>

            <div className={' row-span-1 col-span-1 py-16 text-start flex flex-col justify-center gap-2'}>
                <h3 className={'text-5xl font-semibold'}>Seamless Productivity Tools</h3>
                <p className={'mt-4 text-balance'}>Boost team efficiency with integrated mail management, direct communication
                    channels, and streamlined task assignments. Enjoy a clutter-free workspace designed to enhance
                    collaboration and keep your business running smoothly.</p>
            </div>
            <div className={'mx-auto w-max h-max rounded-full bg-gray-200 p-2'}>
                <div className={'rounded-full bg-primary p-3'}/>
            </div>
            <div className={'row-span-1 col-span-1 py-16 flex items-center'}>
                <OnlineOrganizer
                     className={'rounded-xl aspect-video object-cover fill-primary'}/>
            </div>

            <div className={'row-span-1 col-span-1 py-16 flex items-center'}>
                <TaskListSvg
                     className={'rounded-xl aspect-video object-cover fill-primary'}/>
            </div>
            <div className={'mx-auto w-max h-max rounded-full bg-gray-200 p-2'}>
                <div className={'rounded-full bg-primary p-3'}/>
            </div>
            <div className={' row-span-1 col-span-1 py-16 text-start flex flex-col justify-center gap-2'}>
                <h3 className={'text-5xl font-semibold'}>Centralized Task & Project Management</h3>
                <p className={'mt-4 text-balance'}>Stay organized with a unified calendar that syncs meetings, deadlines, and tasks
                    in one place. Manage inventory and track stock levels effortlessly, ensuring a clutter-free approach
                    to project management.</p>
            </div>
            <div className={' row-span-1 col-span-1 py-16 text-start flex flex-col justify-center gap-2'}>
                <h3 className={'text-5xl font-semibold'}>Data-Driven Decision Making</h3>
                <p className={'mt-4 text-balance'}>
                    Utilize advanced forecasting and reporting tools to make informed decisions and drive growth. Our
                    intuitive, clutter-free interface provides clear, actionable data to help you stay ahead of the
                    competition.</p>
            </div>
            <div className={'mx-auto w-max h-max rounded-full bg-gray-200 p-2'}>
                <div className={'rounded-full bg-primary p-3'}/>
            </div>
            <div className={'row-span-1 col-span-1 py-16 flex items-center'}>
                <DataReports
                     className={'rounded-xl aspect-video object-cover fill-primary '}/>
            </div>
        </div>
    </section>
}