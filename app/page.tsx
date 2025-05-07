import dynamic from "next/dynamic"
const Introduction = dynamic(() => import("@/app/components/introduction"), { ssr: true });

export default function Home() {
    return (
        <>
            <Introduction />
        </>
    )
}
