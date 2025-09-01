import { AboutFunfactSection } from "./AboutFunfactSection"
import { ContentSection } from "./ContentSection"
import { CoreValue } from "./CoreValue"
import { Breadcrumb } from "@/components"

export const AboutPage = () => {
    return (

        <>

            <Breadcrumb
                title="Nosotros"
                items={[
                    { label: "Inicio", path: "/" },
                    { label: "Nosotros" },
                ]}
            />
            <ContentSection />
            <AboutFunfactSection />
            <CoreValue />



        </>


    )
}
