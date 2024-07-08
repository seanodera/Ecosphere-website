'use client'
import {HeartIcon} from "@heroicons/react/24/outline";
export default function Experiences() {

    return <section className={'md:px-24 px-7 py-8 bg-white text-dark'}>
        [Exp]
        <div className={'text-end mt-4'}>[]</div>
    </section>
}


function ExperienceCard({experience}: {
    experience: {
        id: number,
        location: string,
        image: string,
        favorite: boolean,
        activity: string,
    }
}) {
    return <div className={'rounded-lg p-8 bg-cover flex flex-col justify-between text-white bg-blend-darken'} style={{
        backgroundImage: `url(${experience.image})`,
        aspectRatio: '0.87'
    }}>
        <div className={'flex justify-between '}>
            <div className={'rounded-full bg-white text-dark py-2 px-3'}>Adventure</div>
            <div className={'rounded-full w-11 h-11 shrink-0 grow-0 aspect-square bg-white bg-opacity-50 py-2'}>
                <HeartIcon className={`mx-auto h-7 ${experience.favorite ? 'fill-primary' : ''}`}/></div>
        </div>
        <div className={'backdrop-blur-sm bg-opacity-20 bg-dark px-3 py-2 rounded-xl'}>
            <h2 className={'text-3xl pb-4'}>{experience.activity}</h2>
            <p>{experience.location}</p>
        </div>
    </div>
}

function Pill(this: any, {text, active = false, onClick}: { text: string, active?: boolean, onClick?: () => void }) {

    return <div
        className={`${active ? 'bg-dark text-white' : 'bg-white text-dark'} rounded-full py-2 px-3 w-max text-nowrap border border-gray-500 active:bg-dark active:text-white hover:bg-dark hover:text-white`}
        onClick={onClick?.bind(this)}>{text}</div>
}