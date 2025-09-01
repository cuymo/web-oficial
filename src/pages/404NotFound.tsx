


export const NotFound404 = () => {
    return (
        <section id="404-section">
            <div className="py-40 pt-36 xl:pb-[200px] xl:pt-[180px]">
                <div className="global-container">
                    <div className="mx-auto max-w-[954px] text-center">
                        <h1
                            className="bg-[url(/images/th-1/404-text-image.jpg)] bg-contain bg-clip-text bg-center bg-no-repeat text-[150px] text-transparent sm:text-[220px] lg:text-[300px] xl:text-[350px]">
                            404
                        </h1>
                        <h2 className="mb-[50px] text-5xl">La página que buscas no existe, fue movida o el enlace es incorrecto.
                        </h2>
                        <a href="/"
                            className="button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white">Volver
                            al inicio</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
