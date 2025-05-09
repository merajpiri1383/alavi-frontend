import dynamic from "next/dynamic"
const Introduction = dynamic(() => import("@/app/components/introduction"), { ssr: true });
const WorkFields = dynamic(() => import("@/app/components/workFields"),{ssr : true});
const AboutMe = dynamic(() => import("@/app/components/aboutMe"),{ssr : true});
const BrandsWorked = dynamic(() => import("@/app/components/brandsWorked"),{ssr : true});

export default function Home() {
    return (
        <>
            <Introduction />
            <WorkFields />
            <AboutMe />
            <BrandsWorked />
        </>
    )
}
