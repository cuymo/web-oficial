import { NavLink } from "react-router-dom";

interface BreadcrumbItem {
    label: string;
    path?: string; // Si path está definido, será un link
}

interface BreadcrumbProps {
    title: string;
    items: BreadcrumbItem[];
}

export const Breadcrumb = ({ title, items }: BreadcrumbProps) => {
    return (
        <section id="section-breadcrumb">
            <div className="breadcrumb-wrapper relative">
                <div className="global-container relative z-10">
                    <div className="breadcrumb-block">
                        <h2 className="breadcrumb-title">{title}</h2>
                        <ul className="breadcrumb-nav flex gap-2">
                            {items.map((item, index) => (
                                <li key={index} className="flex items-center">
                                    {item.path ? (
                                        <NavLink to={item.path} className="hover:underline">
                                            {item.label}
                                        </NavLink>
                                    ) : (
                                        <span>{item.label}</span>
                                    )}
                                    {index < items.length - 1 && <span className="mx-2">/</span>}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
