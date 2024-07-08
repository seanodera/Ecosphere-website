import Link from "next/link";
import {ChevronRightIcon} from "@heroicons/react/24/outline";
import {FaChevronCircleRight} from "react-icons/fa";
import {AiOutlineGithub} from "react-icons/ai";
import BannerSVG from "@/components/home/BannerSVG";

export default function Banner() {

    return <section className={'text-center md:px-24 bg-body text-black py-32'}>
        <div className={'grid sm:grid-cols-1 md:grid-cols-2'}>
            <div className={'flex flex-col text-start gap-8 col-span-1 items-center md:items-start justify-center mb-4'}>
                <span className={'flex items-center text-2xl md:text-5xl 2xl:text-8xl font-bold capitalize text-dark gap-2'}>Monitor  <div
                    className={' w-max h-max rounded-full bg-gray-300 p-2'}>
                <div className={'rounded-full bg-primary p-2'}/>
            </div> Analyze  <div className={' w-max h-max rounded-full bg-gray-300 p-2'}>
                <div className={'rounded-full bg-primary p-2'}/>
            </div> Innovate</span>
                <p className={'text-xl font-medium text-center md:text-start text-balance'}>
                    Unlock the full potential of your business with Echosphere CRM. Monitor performance, analyze
                    real-time data, and innovate processes for unmatched efficiency. Click "Get Started" to transform
                    your customer relationships and drive growth.
                </p>
                <div className={'flex gap-4'}>
                    <span className={'py-3 px-4 bg-primary text-white rounded-lg'}>
                        Get Started
                    </span>
                    <span className={'py-3 px-4 border border-primary text-dark rounded-lg hover:bg-primary hover:text-white'}>
                        Contact Sales
                    </span>
                </div>
            </div>
            <div className={'object-contain'}>
                <BannerSVG className={'fill-primary h-full w-full object-cover'}/>
            </div>
        </div>

    </section>
}

