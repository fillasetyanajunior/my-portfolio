import { FaLaravel, FaReact } from "react-icons/fa"
import { BiLogoFlutter } from "react-icons/bi";
import Profile from '../assets/logo/profile.jpg'
import Myportfolio from '../assets/portfolio/myportfolio.png'
import Websitesekolah from '../assets/portfolio/websitesekolah.jpeg'
import Absensiswamobile from '../assets/portfolio/absensiswamobile.jpg'

export default function Main(){
    return (
        <>
            <section className="mt-10 text-center lg:text-left container m-auto" id="home" >
                <div className="px-6 py-12 md:px-12">
                    <div className="grid items-center lg:grid-cols-2 lg:gap-x-12">
                        <div className="mb-12 lg:mb-0">
                            <div className="inline-block rounded px-5 py-1.5 text-sm font-normal uppercase leading-normal text-white bg-emerald-500" data-te-ripple-init data-te-ripple-color="light">Full Stack Developer</div>
                            <h2 className="my-12 text-5xl font-bold leading-tight tracking-tight">
                                Halo Semua 👋, saya <br />
                                <span className="text-success dark:text-success-400">Filla Jr</span>
                            </h2>
                            <a className="mb-2 inline-block rounded-full bg-amber-300 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#F7E987] transition duration-150 ease-in-out hover:bg-amber-500 hover:shadow-[0_8px_9px_-4px_rgba(252,211,77,0.3),0_4px_18px_0_rgba(252,211,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(252,211,77,0.3),0_4px_18px_0_rgba(252,211,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(252,211,77,0.3),0_4px_18px_0_rgba(252,211,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(252,211,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(252,211,77,0.2),0_4px_18px_0_rgba(252,211,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(252,211,77,0.2),0_4px_18px_0_rgba(252,211,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(252,211,77,0.2),0_4px_18px_0_rgba(252,211,77,0.1)] md:mr-2 md:mb-0" data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Hubungi Saya</a>
                        </div>
                        <div className="mb-12 lg:mb-0 m-auto">
                            <div className="w-full rounded-lg shadow-lg dark:shadow-black/20">
                                <img src={Profile} width={500} className="object-cover" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-center lg:text-left bg-zinc-900 w-full" id="about">
                <div className="px-6 py-56 md:px-12 container m-auto">
                    <div className="grid items-center justify-center lg:grid-cols-2 lg:gap-x-12">
                        <div className="mb-12 lg:mb-0">
                            <div className="grid gap-4">
                                <div className="block md:w-full rounded-lg bg-zinc-700 text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                    <div className="p-6">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h1 className="text-xl font-bold mb-1 text-orange-700">Full Stack Developer Laravel</h1>
                                                <p className="text-sm text-neutral-300 mb-12">
                                                    Membuat sistem dengan framework laravel
                                                </p>
                                            </div>
                                            <div className="text-7xl text-orange-700">
                                                <FaLaravel/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block md:w-full rounded-lg bg-zinc-700 text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                    <div className="p-6">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h1 className="text-xl font-bold mb-1 text-cyan-500">Front End React Js</h1>
                                                <p className="text-sm text-neutral-300 mb-12">
                                                    Membuat tampilan dengan framework React Js
                                                </p>
                                            </div>
                                            <div className="text-7xl text-cyan-500">
                                                <FaReact/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block md:w-full rounded-lg bg-zinc-700 text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                    <div className="p-6">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h1 className="text-xl font-bold mb-1 text-cyan-500">Full Stack Developer Flutter</h1>
                                                <p className="text-sm text-neutral-300 mb-12">
                                                    Membuat aplikasi mobile dengan framework flutter
                                                </p>
                                            </div>
                                            <div className="text-7xl text-cyan-500">
                                                <BiLogoFlutter/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-12 lg:mb-0">
                            <h5 className="mb-12 font-semibold leading-normal">
                                Tentang Saya
                            </h5>
                            <h1 className="mb-12 font-semibold text-6xl ">
                                Halo, Saya Filla Setyana Junior
                            </h1>
                            <p className="text-justify text-lg text-neutral-600">
                                saya sorang full stack developer laravel yang memulai perjalanan menjadi freelance sudah 4 tahun serta saya juga pernah menjadi font end react selama 3 bulan dan full stack flutter selama 1 tahun. saya bekerja dengan remote di beberapa perorangan, agensi dan startup.
                                saya mengutamakan kualitas serta memperbaiki jika ada error atau bug pada produk yang saya buat.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-20 py-28 text-center lg:text-left" id="portfolio">
                <div className="container m-auto">
                    <h2 className="mb-12 text-center text-3xl font-bold"><span className="text-emerald-500">Port</span>folio</h2>
                    <div className="grid gap-x-6 lg:grid-cols-3 mx-auto">
                        <div className="mb-12 lg:mb-0">
                            <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]" data-te-ripple-init data-te-ripple-color="light">
                                <img src={Myportfolio} className="w-full" />
                                <a href="#">
                                    <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                                </a>
                            </div>
                            <h5 className="mb-4 text-lg font-bold">My Portfolio</h5>
                            <div className="mb-4 flex items-center justify-center text-sm font-medium text-cyan-500 lg:justify-start">
                                <FaReact className="w-5 h-5 mr-2"/>
                                React Js
                            </div>
                            <p className="text-neutral-500 dark:text-neutral-300 text-justify">
                                Portfolio ini di bangun dengan menggunakan framework front end yang
                                lagi trend sekarang dari javascript yaitu, react js dan menggunakan css
                                dari tailwind yang lagi banyak digunakan saat ini.
                            </p>
                        </div>
                        <div className="mb-12 lg:mb-0">
                            <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]" data-te-ripple-init data-te-ripple-color="light">
                                <img src={Websitesekolah} className="w-full" />
                                <a href="#">
                                    <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                                </a>
                            </div>
                            <h5 className="mb-4 text-lg font-bold">Website Sekolah</h5>
                            <div className="mb-4 flex items-center justify-center text-sm font-medium text-orange-700 lg:justify-start">
                                <FaLaravel className="w-5 h-5 mr-2"/>
                                Laravel
                            </div>
                            <p className="text-neutral-500 dark:text-neutral-300 text-justify">
                                Website Sekolah ini di bangun dengan menggunakan framework full stack dari php
                                yaitu, laravel. Dimana website sekolah ini sudah terintegrasi dengan seluruh instansi di sekolah.
                            </p>
                        </div>
                        <div className="mb-0">
                            <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color= "light" >
                                <img src={Absensiswamobile} className="h-[270px] m-auto scale-150 bg-top" />
                                <a href="#">
                                    <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                                </a>
                            </div>
                            <h5 className="mb-4 text-lg font-bold">Absen Siswa Mobile</h5>
                                <div className="mb-4 flex items-center justify-center text-sm font-medium text-cyan-500 lg:justify-start">
                                <BiLogoFlutter className="w-5 h-5 mr-2"/>
                                Flutter
                            </div>
                            <p className="text-neutral-500 dark:text-neutral-300">
                                Curabitur tristique, mi a mollis sagittis, metus felis mattis
                                arcu, non vehicula nisl dui quis diam. Mauris ut risus eget massa
                                volutpat feugiat. Donec.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-6 py-28 bg-zinc-900" id="contact">
                <div className="container m-auto">
                    <div className="flex justify-center">
                        <div className="text-center md:max-w-xl lg:max-w-3xl">
                            <h2 className="mb-12 px-6 text-3xl font-bold text-amber-300">Contact <span className="text-emerald-500">us</span></h2>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                            <form>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input type="text" className="peer block min-h-[auto] w-full rounded border-0 bg-white py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleInput90" placeholder="Name" />
                                    <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary" for="exampleInput90">Name</label>
                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input type="email" className="peer block min-h-[auto] w-full rounded border-0 bg-white py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleInput91" placeholder="Email address" />
                                    <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary" for="exampleInput91">Email address</label>
                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <textarea className="peer block min-h-[auto] w-full rounded border-0 bg-white py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
                                    <label for="exampleFormControlTextarea1" className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Message</label>
                                </div>
                                <button type="button" data-te-ripple-init data-te-ripple-color="light" className="mb-6 inline-block w-full rounded bg-warning px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(252,211,77,0.3)] transition duration-150 ease-in-out hover:bg-emerald-500 hover:shadow-[0_8px_9px_-4px_rgba(16,185,129,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-amber-400 focus:shadow-[0_8px_9px_-4px_rgba(16,185,129,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-amber-500 active:shadow-[0_8px_9px_-4px_rgba(252,211,77,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                    Send
                                </button>
                            </form>
                        </div>
                        <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                            <div className="flex flex-wrap">
                                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-6 w-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-6 grow">
                                            <p className="mb-2 font-bold dark:text-white">Technical support</p>
                                            <p className="text-neutral-500 dark:text-neutral-200">support@example.com</p>
                                            <p className="text-neutral-500 dark:text-neutral-200">+1 234-567-89</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-6 w-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-6 grow">
                                            <p className="mb-2 font-bold dark:text-white">Sales questions</p>
                                            <p className="text-neutral-500 dark:text-neutral-200">sales@example.com</p>
                                            <p className="text-neutral-500 dark:text-neutral-200">+1 234-567-89</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                    <div className="align-start flex">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-6 w-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-6 grow">
                                            <p className="mb-2 font-bold dark:text-white">Press</p>
                                            <p className="text-neutral-500 dark:text-neutral-200">press@example.com</p>
                                            <p className="text-neutral-500 dark:text-neutral-200">+1 234-567-89</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                    <div className="align-start flex">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-6 w-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
                                            </svg>
                                            </div>
                                        </div>
                                        <div className="ml-6 grow">
                                            <p className="mb-2 font-bold dark:text-white">Bug report</p>
                                            <p className="text-neutral-500 dark:text-neutral-200">bugs@example.com</p>
                                            <p className="text-neutral-500 dark:text-neutral-200">+1 234-567-89</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}