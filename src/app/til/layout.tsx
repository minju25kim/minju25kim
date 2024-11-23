import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "TIL",
    description: "today I learned",
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