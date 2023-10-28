import { useEffect } from "react";
import { FaAlignJustify } from "react-icons/fa"

export default function Header() {
    useEffect(() => {
        const init = async () => {
            const { Collapse, Ripple, Offcanvas, initTE } = await import("tw-elements");
            initTE({ Collapse, Ripple, Offcanvas });
        };
        init();
    }, []);
    return (
        <>
            <header className="fixed top-0 z-10 flex w-full items-center justify-between bg-[rgba(39,40,41,0.9)] py-2 text-white md:flex-wrap md:justify-start">
                <nav className="container m-auto" data-te-navbar-ref>
                    <div className="flex w-full flex-wrap items-center justify-between px-3">
                        <div className="text-xl py-2 title">
                            <h5 className="mb-0 font-semibold leading-normal">Filla Jr</h5>
                        </div>
                        <div className="flex items-center">
                            <button className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden" type="button" data-te-offcanvas-toggle href="#offcanvasExample" aria-controls="offcanvasExample" data-te-ripple-init data-te-ripple-color="light">
                                <FaAlignJustify/>
                            </button>
                        </div>
                        <div className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto" id="navbarSupportedContentY" data-te-collapse-item>
                            <ul className="mx-auto flex flex-col lg:flex-row" data-te-navbar-nav-ref>
                                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                    <a className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90" href="#home" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">Beranda</a>
                                </li>
                                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                    <a className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90" href="#about" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">Tentang Saya</a>
                                </li>
                                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                    <a className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90" href="#portfolio" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">Portfolio</a>
                                </li>
                                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                    <a className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90" href="#contact" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <div className="invisible fixed bottom-0 left-0 top-0 z-[1045] flex w-96 max-w-full -translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" data-te-offcanvas-init>
                            <div className="flex items-center justify-between p-4">
                                <h5 className="mb-0 font-semibold leading-normal" id="offcanvasExampleLabel">
                                    Filla Jr
                                </h5>
                                <button type="button" className="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none" data-te-offcanvas-dismiss>
                                    <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                            <div className="flex-grow overflow-y-auto p-4">
                                <ul className="mx-auto flex flex-col lg:flex-row" data-te-navbar-nav-ref>
                                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                        <a className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90" href="#home" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">Beranda</a>
                                    </li>
                                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                        <a className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90" href="#about" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">Tentang Saya</a>
                                    </li>
                                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                        <a className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90" href="#portfolio" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">Portfolio</a>
                                    </li>
                                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                        <a className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90" href="#contact" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}