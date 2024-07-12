'use client'
import {ArrowLeftCircleIcon, ArrowRightCircleIcon, ArrowRightIcon, StarIcon} from "@heroicons/react/24/outline";
import {useEffect, useState} from "react";
import {testimonialsData} from "@/data/testimonialsData";


export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const [nextTestimony, setNextTestimony] = useState(testimonialsData[ index + 1 ]);
    const [testimony, setTestimony] = useState(testimonialsData[ index ])

    function nextIndex() {
        let nextIndex = 0;
        if (index < testimonialsData.length - 1) {
            nextIndex = index + 1
        }
        return nextIndex
    }

    useEffect(() => {
        setTestimony(testimonialsData[ index ])
        setNextTestimony(testimonialsData[ nextIndex() ])
    }, [index])

    function handleNext() {
        if (index < testimonialsData.length - 1) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }
    }

    function handlePrev() {
        if (index > testimonialsData.length - 1) {
            setIndex(index - 1)
        } else {
            setIndex(testimonialsData.length - 1)
        }
    }


    return <section className={'bg-dark text-white px-7 md:ps-24 md:pe-0 py-24'}>
        <div className={'grid grid-cols-2'}>
            <div>
                <div className={'text-7xl font-semibold'}>
                    Consistent Business Growth
                </div>
                <div className={'flex gap-4 mt-8'}>
                    <ArrowLeftCircleIcon className={'h-16'} onClick={handlePrev}/>
                    <ArrowRightCircleIcon className={'h-16'} onClick={handleNext}/>
                </div>
            </div>
            <div className={'grid grid-cols-2 gap-8'}>
                <Testimony avatar={testimony.avatar} name={testimony.name} message={testimony.message}/>
                <Testimony avatar={nextTestimony.avatar} name={nextTestimony.name} message={nextTestimony.message}/>
            </div>
        </div>
    </section>
}

function Testimony({avatar, name, message, className = ''}: {
    avatar: string,
    name: string,
    message: string,
    className?: string
}) {
    return <div className={'rounded-xl p-8 bg-white text-dark flex flex-col gap-8'}>
        <div className={'flex gap-4 items-center'}>
            <img className={'h-16 aspect-square rounded-full object-cover'} src={avatar} alt={''}/>
            <span className={'text-2xl font-semibold'}>{name}</span>
        </div>
        <p className={'text-xl'}>{message}</p>
        <div className={'flex gap-4 mt-16 align-bottom'}>
            <StarIcon className={'h-6 fill-primary text-primary'}/>
            <StarIcon className={'h-6 fill-primary text-primary'}/>
            <StarIcon className={'h-6 fill-primary text-primary'}/>
            <StarIcon className={'h-6 fill-primary text-primary'}/>
            <StarIcon className={'h-6 fill-primary text-primary'}/>
        </div>
    </div>
}