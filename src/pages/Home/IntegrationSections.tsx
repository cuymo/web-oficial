import { NavLink } from "react-router-dom"


export const IntegrationSections = () => {
    return (
        <section id="content-intregrates-section">
            <div className="relative z-[1] overflow-hidden bg-colorCodGray text-white">
                <div className="py-20 xl:py-[130px]">
                    <div className="global-container">
                        <div
                            className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_1fr)_.8fr] xl:gap-28 xxl:gap-[134px]">
                            <div className="jos">
                                <div className="mb-6">
                                    <h2
                                        className="font-clashDisplay text-4xl font-medium leading-[1.06] text-white sm:text-[44px] lg:text-[56px] xl:text-[75px]">
                                        Conecta con cualquier sistema
                                    </h2>
                                </div>
                                <p className="mb-7 last:mb-0">
                                    Integra tu chatbot de IA con las herramientas que ya usas y mantén todo
                                    sincronizado en tiempo real.
                                </p>
                                <ul
                                    className="my-12 flex flex-col gap-y-6 font-clashDisplay text-[22px] font-medium leading-[1.28] tracking-[1px] lg:text-[28px]">
                                    <li
                                        className="relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%]">
                                        Compatible con tus aplicaciones del día a día
                                    </li>
                                    <li
                                        className="relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%]">
                                        Atiende a tus usuarios usando tus herramientas favoritas
                                    </li>
                                </ul>
                                <NavLink to="/precios"
                                    className="button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none py-[18px] text-white hover:text-white">Explorar
                                    precios
                                    <img src="/images/th-2/icon-white-long-arrow-right.svg"
                                        alt="icon-white-long-arrow-right" /></NavLink>
                            </div>
                            <div
                                className="flex flex-col gap-6 overflow-hidden rounded-[30px] bg-gradient-to-t from-neutral-200/10 to-neutral-900/50 py-[124px]">
                                <div className="horizontal-slide-from-right-to-left flex w-[1161px] gap-x-6">
                                    <div
                                        className="flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white">
                                        <img src="/images/th-2/icon-flat-color-google-calendar.svg"
                                            alt="icon-flat-color-google-calendar" />
                                    </div>
                                    <div
                                        className="flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white">
                                        <img src="/images/th-2/icon-flat-color-google-drive.svg"
                                            alt="icon-flat-color-google-drive" />
                                    </div>
                                    <div
                                        className="flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white">
                                        <img src="/images/th-2/icon-flat-color-google-sheets.svg"
                                            alt="icon-flat-color-google-sheets" />
                                    </div>
                                    <div
                                        className="flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white">
                                        <img src="/images/th-2/icon-flat-color-telegram.svg"
                                            alt="icon-flat-color-telegram" />
                                    </div>
                                    <div
                                        className="flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white">
                                        <img src="/images/th-2/icon-flat-color-shopify.svg"
                                            alt="icon-flat-color-shopify" />
                                    </div>
                                    <div
                                        className="flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white">
                                        <img src="/images/th-2/icon-flat-color-slack.svg"
                                            alt="icon-flat-color-slack" />
                                    </div>
                                    <div
                                        className="flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white">
                                        <img src="/images/th-2/icon-flat-color-zoom.svg"
                                            alt="icon-flat-color-zoom" />
                                    </div>
                                    <div
                                        className="flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white">
                                        <img src="/images/th-2/icon-flat-color-whatsapp.svg"
                                            alt="icon-flat-color-whatsapp" />
                                    </div>
                                    <div
                                        className="flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white">
                                        <img src="/images/th-2/icon-flat-color-oodo.svg"
                                            alt="icon-flat-color-oodo" />
                                    </div>
                                </div>

                                <div className="horizontal-slide-from-left-to-right flex w-[1161px] gap-x-6">
                                    <div
                                        className="flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white">
                                        <img src="/images/th-2/icon-flat-color-discord.svg"
                                            alt="icon-flat-color-discord" />
                                    </div>
                                    <div
                                        className="flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white">
                                        <img src="/images/th-2/icon-flat-color-github.svg"
                                            alt="icon-flat-color-github" />
                                    </div>
                                    <div
                                        className="flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white">
                                        <img src="/images/th-2/icon-flat-color-facebook.svg"
                                            alt="icon-flat-color-facebook" />
                                    </div>
                                    <div
                                        className="flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white">
                                        <img src="/images/th-2/icon-flat-color-messenger.svg"
                                            alt="icon-flat-color-messenger" />
                                    </div>
                                    <div
                                        className="flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white">
                                        <img src="/images/th-2/icon-flat-color-instagram.svg"
                                            alt="icon-flat-color-instagram" />
                                    </div>
                                    <div
                                        className="flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white">
                                        <img src="/images/th-2/icon-flat-color-google-meet.svg"
                                            alt="icon-flat-color-google-meet" />
                                    </div>
                                    <div
                                        className="flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white">
                                        <img src="/images/th-2/icon-flat-color-linkedin.svg"
                                            alt="icon-flat-color-linkedin" />
                                    </div>
                                    <div
                                        className="flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white">
                                        <img src="/images/th-2/icon-flat-color-whatsapp.svg"
                                            alt="icon-flat-color-whatsapp" />
                                    </div>
                                    <div
                                        className="flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white">
                                        <img src="/images/th-2/icon-flat-color-gmail.svg"
                                            alt="icon-flat-color-gmail" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="absolute left-[80%] top-[80%] -z-[1] h-[1280px] w-[1280px] -translate-x-1/2 rounded-full bg-gradient-to-t blur-[250px]">
                </div>
            </div>
        </section>
    )
}
