export const AboutFunfactSection = () => {
    return (
        <section id="about-funfact-section" className="animate__animated animate__fadeIn">
            <div className="global-container">
                <ul className="grid grid-cols-1 gap-10 gap-y-5 text-center sm:grid-cols-2 lg:grid-cols-4">

                    <li className="jos animate__animated animate__fadeInUp" data-jos_delay="0.1">
                        <h3
                            className="text-5xl text-colorOrangyRed md:text-6xl lg:text-7xl xl:text-[80px] animate__animated animate__fadeIn"
                            data-module="countup"
                        >
                            <span className="start-number" data-countup-number="20">20</span>+
                        </h3>
                        <span className="block text-lg font-normal text-black">
                            Implementaciones exitosas
                        </span>
                    </li>

                    <li className="jos animate__animated animate__fadeInUp" data-jos_delay="0.2">
                        <h3
                            className="text-5xl text-colorOrangyRed md:text-6xl lg:text-7xl xl:text-[80px] animate__animated animate__fadeIn"
                            data-module="countup"
                        >
                            <span className="start-number" data-countup-number="99">99</span>%
                        </h3>
                        <span className="block text-lg font-normal text-black">
                            Tasa de satisfacción de clientes
                        </span>
                    </li>

                    <li className="jos animate__animated animate__fadeInUp" data-jos_delay="0.3">
                        <h3
                            className="text-5xl text-colorOrangyRed md:text-6xl lg:text-7xl xl:text-[80px] animate__animated animate__fadeIn"
                            data-module="countup"
                        >
                            <span className="start-number" data-countup-number="4">4</span>+
                        </h3>
                        <span className="block text-lg font-normal text-black">
                            Sectores atendidos
                        </span>
                    </li>

                    <li className="jos animate__animated animate__fadeInUp" data-jos_delay="0.4">
                        <h3
                            className="text-5xl text-colorOrangyRed md:text-6xl lg:text-7xl xl:text-[80px] animate__animated animate__fadeIn"
                            data-module="countup"
                        >
                            <span className="start-number" data-countup-number="60">60</span>+
                        </h3>
                        <span className="block text-lg font-normal text-black">
                            Horas ahorradas/mes
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    )
}
