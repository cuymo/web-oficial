import { Breadcrumb } from "@/components"
import { FaqSection } from "./FaqSection"



export const FaqsPage = () => {
    return (
        <>

            <Breadcrumb
                title="Preguntas frecuentes"
                items={[
                    { label: "Inicio", path: "/" },
                    { label: "Preguntas frecuentes" },
                ]}
            />
            <FaqSection />

        </>
    )
}
