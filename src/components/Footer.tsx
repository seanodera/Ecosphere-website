import Link from "next/link";


export default function Footer() {
    return <footer className="w-full py-16 bg-dark text-white text-center md:px-24 px-7 ">
        <div className={'grid grid-cols-5 md:gap-8'}>
            <div className={'text-start md:col-span-2 flex flex-col justify-between'}>
                <Link href={'/'} className={'w-max text-3xl font-semibold'}>EchoSphere</Link>
                <div className={'mt-8'}>
                    <h6 className={'text-gray-500 font-medium mt-4'}>Keep updated, Join our newsletter</h6>
                    <form className={'flex justify-between gap-2 border border-gray-500 rounded-lg py-2 px-3'}>
                        <input className={'bg-transparent appearance-none border-0 w-full'} type={'email'}
                               placeholder={'Email@xyz.com'}/>
                        <button type={'submit'} className={'bg-primary text-white py-2 px-4 rounded-lg'}>Submit</button>
                    </form>
                </div>
            </div>
            <div>

            </div>
        </div>

    </footer>
}