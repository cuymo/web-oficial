
export const Footer = () => {
    return (
        <footer id="footer-2" className="relative">
            <div
                className="absolute -top-[77px] left-[100%] z-10 h-[77px] w-full -translate-x-1/2 bg-[url(/images/th-2/arc-bottom-shape-1.svg)] bg-cover bg-center bg-no-repeat">
            </div>
            <div className="relative z-[1] overflow-hidden bg-black text-white">
                <div className="pb-10 pt-1 lg:pt-7 xl:pt-[68px]">
                    <div>
                        <div className="global-container">
                            <div
                                className="mx-auto mb-10 text-center md:mb-16 md:max-w-lg lg:mb-20 lg:max-w-xl xl:max-w-3xl">
                                <h2
                                    className="font-clashDisplay text-4xl font-medium leading-[1.06] text-white sm:text-[44px] lg:text-[56px] xl:text-[75px]">
                                    🤖 Activa tu chatbot con IA y no pierdas más clientes
                                </h2>
                            </div>

                        </div>
                    </div>

                    <div className="mt-16 xl:mt-20 xxl:mt-[100px]">
                        <div className="global-container">
                            <div
                                className="grid gap-x-10 gap-y-[60px] sm:grid-cols-2 md:grid-cols-4 lg:flex lg:justify-between lg:gap-x-20">
                                <div className="flex flex-col gap-y-6">
                                    <h4 className="text-[21px] font-semibold capitalize text-white">Soluciones</h4>
                                    <ul className="flex flex-col gap-y-[10px] capitalize">
                                        <li>
                                            <a href="#heading-hero-content"
                                                className="transition-all duration-300 ease-linear hover:text-colorOrangyRed">Vendedor
                                                IA</a>
                                        </li>
                                        <li>
                                            <a href="#heading-hero-content"
                                                className="transition-all duration-300 ease-linear hover:text-colorOrangyRed">Automatizaciones</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-y-6">
                                    <h4 className="text-[21px] font-semibold capitalize text-white">Empresa</h4>
                                    <ul className="flex flex-col gap-y-[10px] capitalize">
                                        <li>
                                            <a href="/about"
                                                className="transition-all duration-300 ease-linear hover:text-colorOrangyRed">Acerca
                                                de nosotros</a>
                                        </li>
                                        <li>
                                            <a href="/faq"
                                                className="transition-all duration-300 ease-linear hover:text-colorOrangyRed">FAQ</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-y-6">
                                    <h4 className="text-[21px] font-semibold capitalize text-white">Conéctate</h4>
                                    <ul className="flex flex-col gap-y-[15px] capitalize">
                                        <li>
                                            <a target="_blank" href="http://www.facebook.com/cuymoec/"
                                                className="group flex items-center gap-x-3">
                                                <div
                                                    className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-10 transition-all duration-300 group-hover:bg-colorViolet">
                                                    <img src="/images/th-1/facebook-icon-white.svg"
                                                        alt="facebook-icon-white" width="14" height="14" />
                                                </div>
                                                <span className="inline-block flex-1">Facebook</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="http://www.instagram.com/cuymo_ec/"
                                                className="group flex items-center gap-x-3">
                                                <div
                                                    className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-10 transition-all duration-300 group-hover:bg-colorViolet">
                                                    <img src="/images/th-1/instagram-icon-white.svg"
                                                        alt="instagram-icon-white" width="14" height="14" />
                                                </div>
                                                <span className="inline-block flex-1">Instagram</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="http://www.tiktok.com/@cuymo/"
                                                className="group flex items-center gap-x-3">
                                                <div
                                                    className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-10 transition-all duration-300 group-hover:bg-colorViolet">
                                                    <img src="/images/th-1/tiktok-icon-white.svg"
                                                        alt="tiktok-icon-white" width="14" height="14" />
                                                </div>
                                                <span className="inline-block flex-1">Tiktok</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="global-container">
                        <div className="mb-10 mt-[60px] h-[1px] w-full bg-white"></div>
                    </div>

                    <div>
                        <div className="global-container">
                            <div
                                className="flex flex-wrap items-center justify-center gap-5 text-center md:justify-between md:text-left">
                                <a href="/">
                                    <img src="/images/logo-light.png" alt="logo-light" width="111" height="23" />
                                </a>

                                <p>&copy; Cüymo 2025 Todos los derechos reservados</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute left-[80%] top-[80%] -z-[1] h-[1280px] w-[1280px] -translate-x-1/2 rounded-full bg-gradient-to-t blur-[250px]">
                </div>
            </div>
        </footer>
    )
}
