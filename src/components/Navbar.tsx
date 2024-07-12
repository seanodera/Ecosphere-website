'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Bars3BottomRightIcon, XMarkIcon} from "@heroicons/react/24/outline";
import {useState} from "react";

const navigation = [
    {
        name: "Features",
        href: "/features",
    },
    {
        name: "modules",
        href: "/modules",
    },
    {
        name: "Pricing",
        href: "/pricing",
    },
    {
        name: "Support",
        href: "/support",
    }
]

export default function Navbar() {
    const path = usePathname()
    const [open, setOpen] = useState(false);
    return <div
        className={'flex w-screen bg-body md:px-24 px-7 py-4 justify-between text-dark fixed top-0 left-0 z-10'}>
        <Link href={'/'} className={'w-max text-2xl font-semibold'}>EchoSphere</Link>
        <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
            {
                open ? <XMarkIcon/> : <Bars3BottomRightIcon/>
            }
        </div>
        <ul className={`md:space-x-8 md:flex md:items-center md:pb-0 pb-12 bg-body absolute md:static md:z-auto z-[-2] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
            {
                navigation.map((item, index) => <li key={index} className={'md:ml-8 md:my-0 my-7'}><Link
                    href={item.href}
                    className={` font-medium group ${(path === item.href) ? 'text-primary' : 'text-gray-500'} hover:text-dark`}>{item.name}
                    <div
                        className={'hidden md:block h-0.5 bg-primary scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out'}/>
                </Link>
                </li>)
            }

        </ul>
    </div>
}


export function Header() {

    const path = usePathname();
    const [open, setOpen] = useState(false);
    return <div className={'w-full bg-light text-dark shadow-md fixed top-0 left-0 z-10'}>
        <div className="md:flex items-center justify-between bg-light py-4 md:px-16 px-7">
            <Link href="/" className={'font-bold text-2xl cursor-pointer flex items-center gap-1'}> TrueLands</Link>
            {/* Menu icon */}
            <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon/>
                }
            </div>
            <ul className={`md:space-x-8 md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-light md:z-auto z-[-2] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {navigation.map((item, index) => <li key={index} className={'md:ml-8 md:my-0 my-7'}><Link href={item.href}
                                                                                                          className={` font-medium group ${(path === item.href) ? 'text-primary' : 'text-light-gray'}`}>{item.name}
                    <div
                        className={'hidden md:block h-0.5 bg-secondary scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out'}/>
                </Link>
                </li>)}

            </ul>
            <button className={'hidden md:flex items-center justify-center bg-primary py-2 px-8 rounded text-white'} onClick={() => {}}>Book a Tour!</button>
        </div>

    </div>
}