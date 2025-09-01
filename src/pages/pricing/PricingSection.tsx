export const PricingSection = () => {
    return (
        <section className="pricing-section animate__animated animate__fadeIn">
            <div className="pb-20 xl:pb-[150px]">
                <div className="global-container">

                    {/* Título */}
                    <div className="jos mb-10 text-center lg:mb-12 animate__animated animate__fadeInDown">
                        <div className="mx-auto max-w-md lg:max-w-2xl xl:max-w-[950px]">
                            <h2>Elige el plan perfecto para tu negocio</h2>
                        </div>
                    </div>

                    <div className="container mx-auto">
                        <div className="mt-12 lg:mt-16 xl:mt-20">
                            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

                                {/* Plan Básico */}
                                <li className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black animate__animated animate__fadeInUp" data-jos_animation="flip" data-jos_delay="0">
                                    <h3 className="flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                                        BÁSICO
                                    </h3>
                                    <span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">Incluye:</span>

                                    <div className="my-5 h-[1px] w-full bg-[#DBD6CF]"></div>
                                    <h4 className="mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
                                        $15<span className="text-lg font-semibold">/mes</span>
                                    </h4>
                                    <p className="mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                                        Plan ideal para empezar con automatización básica.
                                    </p>
                                    <ul className="mb-10 flex flex-col gap-y-3">
                                        <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                                            <div className="relative h-[24px] w-[24px]">
                                                <img src="/images/th-1/icon-black-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" className="h-full w-full object-cover" />
                                                <img src="/images/th-1/icon-orange-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                                            </div>
                                            Menú condicional
                                        </li>
                                        <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                                            <div className="relative h-[24px] w-[24px]">
                                                <img src="/images/th-1/icon-black-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" className="h-full w-full object-cover" />
                                                <img src="/images/th-1/icon-orange-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                                            </div>
                                            Acciones por selección
                                        </li>
                                        <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                                            <div className="relative h-[24px] w-[24px]">
                                                <img src="/images/th-1/icon-black-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" className="h-full w-full object-cover" />
                                                <img src="/images/th-1/icon-orange-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                                            </div>
                                            Flujo guiado
                                        </li>
                                        <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                                            <div className="relative h-[24px] w-[24px]">
                                                <img src="/images/th-1/icon-black-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" className="h-full w-full object-cover" />
                                                <img src="/images/th-1/icon-orange-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                                            </div>
                                            Disponible 24/7
                                        </li>
                                        <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                                            <div className="relative h-[24px] w-[24px]">
                                                <img src="/images/th-1/icon-black-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" className="h-full w-full object-cover" />
                                                <img src="/images/th-1/icon-orange-badge-check.svg" alt="icon-black-badge-check" width="24" height="24" className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                                            </div>
                                            Mensajes ilimitados
                                        </li>
                                        <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                                            <div className="relative h-[24px] w-[24px]">
                                                <img src="/images/th-1/icon-black-badge-error.svg" alt="icon-black-badge-check" width="24" height="24" className="h-full w-full object-cover" />
                                                <img src="/images/th-1/icon-orange-badge-error.svg" alt="icon-black-badge-check" width="24" height="24" className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                                            </div>
                                            <span className="line-through group-hover:text-white">IA incluida</span>
                                        </li>
                                    </ul>
                                    <a href="https://api.whatsapp.com/send?phone=593939028131&text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20su%20plan%20B%C3%A1sico%20de%20%2415"
                                        className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white">Elegir</a>
                                </li>

                                {/* Plan Estándar */}
                                <li className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black animate__animated animate__fadeInUp animate__delay-1s" data-jos_animation="flip" data-jos_delay="0">
                                    <h3 className="flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                                        ESTÁNDAR
                                    </h3>
                                    <span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">Incluye:</span>

                                    <div className="my-5 h-[1px] w-full bg-[#DBD6CF]"></div>
                                    <h4 className="mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
                                        $35<span className="text-lg font-semibold">/mes</span>
                                    </h4>
                                    <p className="mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                                        Perfecto para empresas que buscan automatización completa con IA.
                                    </p>
                                    <ul className="mb-10 flex flex-col gap-y-3">
                                        <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                                            <div className="relative h-[24px] w-[24px]">
                                                <img src="/images/th-1/icon-black-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="h-full w-full object-cover" />
                                                <img src="/images/th-1/icon-orange-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                                            </div>
                                            Mensajes ilimitados
                                        </li>
                                        <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                                            <div className="relative h-[24px] w-[24px]">
                                                <img src="/images/th-1/icon-black-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="h-full w-full object-cover" />
                                                <img src="/images/th-1/icon-orange-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                                            </div>
                                            IA incluida
                                        </li>
                                        <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                                            <div className="relative h-[24px] w-[24px]">
                                                <img src="/images/th-1/icon-black-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="h-full w-full object-cover" />
                                                <img src="/images/th-1/icon-orange-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                                            </div>
                                            Disponible 24/7
                                        </li>
                                        <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                                            <div className="relative h-[24px] w-[24px]">
                                                <img src="/images/th-1/icon-black-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="h-full w-full object-cover" />
                                                <img src="/images/th-1/icon-orange-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                                            </div>
                                            Aprende de tus clientes
                                        </li>
                                        <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                                            <div className="relative h-[24px] w-[24px]">
                                                <img src="/images/th-1/icon-black-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="h-full w-full object-cover" />
                                                <img src="/images/th-1/icon-orange-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                                            </div>
                                            Ejecuta acciones
                                        </li>
                                        <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                                            <div className="relative h-[24px] w-[24px]">
                                                <img src="/images/th-1/icon-black-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="h-full w-full object-cover" />
                                                <img src="/images/th-1/icon-orange-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                                            </div>
                                            Conoce todo tu negocio
                                        </li>
                                        <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                                            <div className="relative h-[24px] w-[24px]">
                                                <img src="/images/th-1/icon-black-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="h-full w-full object-cover" />
                                                <img src="/images/th-1/icon-orange-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                                            </div>
                                            Texto
                                        </li>
                                        <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                                            <div className="relative h-[24px] w-[24px]">
                                                <img src="/images/th-1/icon-black-badge-error.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="h-full w-full object-cover" />
                                                <img src="/images/th-1/icon-orange-badge-error.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                                            </div>
                                            <span className="line-through group-hover:text-white">Audios</span>
                                        </li>
                                        <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                                            <div className="relative h-[24px] w-[24px]">
                                                <img src="/images/th-1/icon-black-badge-error.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="h-full w-full object-cover" />
                                                <img src="/images/th-1/icon-orange-badge-error.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                                            </div>
                                            <span className="line-through group-hover:text-white">Imágenes</span>
                                        </li>
                                    </ul>
                                    <a href="https://api.whatsapp.com/send?phone=593939028131&text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20su%20plan%20Est%C3%A1ndar%20de%20%2435"
                                        className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white">Elegir</a>
                                </li>

                                {/* Plan Premium */}
                                <li className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black animate__animated animate__fadeInUp animate__delay-2s" data-jos_animation="flip" data-jos_delay="0">
                                    <h3 className="flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                                        PREMIUM
                                    </h3>
                                    <span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">Incluye:</span>

                                    <div className="my-5 h-[1px] w-full bg-[#DBD6CF]"></div>
                                    <h4 className="mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
                                        $50<span className="text-lg font-semibold">/mes</span>
                                    </h4>
                                    <p className="mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                                        La solución completa con todas las funcionalidades avanzadas.
                                    </p>
                                    <ul className="mb-10 flex flex-col gap-y-3">
                                        <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                                            <div className="relative h-[24px] w-[24px]">
                                                <img src="/images/th-1/icon-black-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="h-full w-full object-cover" />
                                                <img src="/images/th-1/icon-orange-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                                            </div>
                                            Mensajes ilimitados
                                        </li>
                                        <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                                            <div className="relative h-[24px] w-[24px]">
                                                <img src="/images/th-1/icon-black-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="h-full w-full object-cover" />
                                                <img src="/images/th-1/icon-orange-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                                            </div>
                                            IA incluida
                                        </li>
                                        <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                                            <div className="relative h-[24px] w-[24px]">
                                                <img src="/images/th-1/icon-black-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="h-full w-full object-cover" />
                                                <img src="/images/th-1/icon-orange-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                                            </div>
                                            Disponible 24/7
                                        </li>
                                        <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                                            <div className="relative h-[24px] w-[24px]">
                                                <img src="/images/th-1/icon-black-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="h-full w-full object-cover" />
                                                <img src="/images/th-1/icon-orange-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                                            </div>
                                            Aprende de tus clientes
                                        </li>
                                        <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                                            <div className="relative h-[24px] w-[24px]">
                                                <img src="/images/th-1/icon-black-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="h-full w-full object-cover" />
                                                <img src="/images/th-1/icon-orange-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                                            </div>
                                            Ejecuta acciones
                                        </li>
                                        <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                                            <div className="relative h-[24px] w-[24px]">
                                                <img src="/images/th-1/icon-black-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="h-full w-full object-cover" />
                                                <img src="/images/th-1/icon-orange-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                                            </div>
                                            Conoce todo tu negocio
                                        </li>
                                        <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                                            <div className="relative h-[24px] w-[24px]">
                                                <img src="/images/th-1/icon-black-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="h-full w-full object-cover" />
                                                <img src="/images/th-1/icon-orange-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                                            </div>
                                            Texto
                                        </li>
                                        <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                                            <div className="relative h-[24px] w-[24px]">
                                                <img src="/images/th-1/icon-black-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="h-full w-full object-cover" />
                                                <img src="/images/th-1/icon-orange-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                                            </div>
                                            Audios
                                        </li>
                                        <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                                            <div className="relative h-[24px] w-[24px]">
                                                <img src="/images/th-1/icon-black-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="h-full w-full object-cover" />
                                                <img src="/images/th-1/icon-orange-badge-check.svg"
                                                    alt="icon-black-badge-check" width="24" height="24"
                                                    className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
                                            </div>
                                            Imágenes
                                        </li>
                                    </ul>
                                    <a href="https://api.whatsapp.com/send?phone=593939028131&text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20su%20plan%20Premium%20de%20%2450"
                                        className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white">Elegir</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}