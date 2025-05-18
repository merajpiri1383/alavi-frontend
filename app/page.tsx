import dynamic from "next/dynamic"
const Introduction = dynamic(() => import("@/app/components/introduction"), { ssr: true });
const WorkFields = dynamic(() => import("@/app/components/workFields"),{ssr : true});
const AboutMe = dynamic(() => import("@/app/components/aboutMe"),{ssr : true});
const BrandsWorked = dynamic(() => import("@/app/components/brandsWorked"),{ssr : true});
const DoneProjects = dynamic(() => import("@/app/components/doneProjects"),{ssr : true});
const Skills = dynamic(() => import("@/app/components/skills"),{ssr : true});
const Footer = dynamic(() => import("@/components/footer"),{ssr : true});

export default function Home() {
    return (
        <>
            <Introduction />
            <WorkFields />
            <AboutMe />
            <BrandsWorked />
            <DoneProjects />
            <Skills />
            <Footer />
        </>
    )
}
