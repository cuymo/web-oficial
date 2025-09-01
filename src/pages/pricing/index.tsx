import { Breadcrumb } from "@/components"
import { FaqSection } from "./FaqSection"
import { PricingSection } from "./PricingSection"


export const PricingPage = () => {
    return (
        <>

            <Breadcrumb
                title="Precios"
                items={[
                    { label: "Inicio", path: "/" },
                    { label: "Precios" },
                ]}
            />
            <PricingSection />
            <FaqSection />

        </>

    )
}
