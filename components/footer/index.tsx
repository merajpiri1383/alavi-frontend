"use client"
import dynamic from "next/dynamic";
import CopryRight from "@/components/footer/copyright";
import About from "@/components/footer/about";
import LineIcon from "@/icons/footer/line";
const Projects = dynamic(() => import("@/components/footer/projects"), { ssr: false });
const WorkWithMe = dynamic(() => import("@/components/footer/workWithMe"), { ssr: false });
const Socials = dynamic(() => import("@/components/footer/socials"), { ssr: false })
const Contact = dynamic(() => import("@/components/footer/contact"), { ssr: false });
import { useDeviceType } from "@/utils/hook/deviceType";


const Index = () => {

    const device = useDeviceType();

    return (
        <section className="bg-[#F3F3F3] pt-12">
            {
                device === "desktop" &&
                <div className="px-12 grid grid-cols-7 gap-2">
                    <div className="col-span-1">
                        <Socials mobile={false} />
                    </div>
                    <div className="col-span-1">
                        <WorkWithMe />
                    </div>
                    <div className="col-span-1">
                        <Projects />
                    </div>
                    <div className="col-span-4 col-span-1">
                        <About is_mobile={false} />
                    </div>
                </div>
            }

            {
                device === "desktop" &&
                <div className="px-12">
                    <div className="h-[2px] w-full mt-6">
                        <LineIcon />
                    </div>
                    <Contact />
                </div>
            }

            {
                device === "mobile" &&
                <div className="bg-[#F3F3F3] py-6 px-6">
                    <About is_mobile={true} />
                    <Projects />
                    <WorkWithMe />
                    <Socials mobile={true} />
                    <div className="h-[2px] w-full my-6">
                        <LineIcon />
                    </div>
                    <Contact />
                </div>
            }
            <CopryRight />
        </section>
    )
}; export default Index;