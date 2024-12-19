import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terminology",
    description: "Terminology of development",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            {children}
        </div>
    );
}