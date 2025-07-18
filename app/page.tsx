import dynamic from "next/dynamic"
import "@/app/components/style.css";
const Introduction = dynamic(() => import("@/app/components/introduction"), { ssr: true });
const WorkFields = dynamic(() => import("@/app/components/workFields"), { ssr: true });
const AboutMe = dynamic(() => import("@/app/components/aboutMe"), { ssr: true });
const BrandsWorked = dynamic(() => import("@/app/components/brandsWorked"), { ssr: true });
const DoneProjects = dynamic(() => import("@/app/components/doneProjects"), { ssr: true });
const Skills = dynamic(() => import("@/app/components/skills"), { ssr: true });
const WorkWithMe = dynamic(() => import("@/app/components/workWithMe"), { ssr: true });
const MyNotes = dynamic(() => import("@/app/components/myNotes"), { ssr: true });
const Kairo = dynamic(() => import("@/app/components/kairo"), { ssr: true });
const Form = dynamic(() => import("@/app/components/form"), { ssr: true });
const Socials = dynamic(() => import("@/app/components/socials"), { ssr: true });
const MyExperience = dynamic(() => import("@/app/components/myExperience"), { ssr: true });
import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";
import API from "@/utils/API";


const getData = async () => {
    const result = await API.get("/home/").then((response) => response.data);
    return result;
}

export default async function Home() {


    const query = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
            }
        }
    })

    const result = await query.fetchQuery({ queryKey: ["home"], queryFn: getData });

    return (
        <HydrationBoundary state={dehydrate(query)}>
            <div className="overflow-x-hidden">
                <Introduction
                    title={result?.introduction_section?.title}
                    sub_title={result?.introduction_section?.sub_title}
                    text={result?.introduction_section?.text}
                    left_bottom_image={result?.introduction_section?.left_bottom_image}
                    left_top_image={result?.introduction_section?.left_top_image}
                    right_top_image={result?.introduction_section?.right_top_image}
                    resume={result?.introduction_section?.resume}
                />
                <WorkFields
                    items={result?.work_field_section?.items}
                    title={result?.work_field_section?.title}
                    sub_title={result?.work_field_section?.sub_title}
                />
                <AboutMe
                    items={result?.my_story_section?.items}
                    left_image={result?.my_story_section?.left_image}
                    left_text={result?.my_story_section?.left_text}
                    text={result?.my_story_section?.text}
                />
                <BrandsWorked
                    items={result?.brand_section?.items}
                    sub_title={result?.brand_section?.sub_title}
                    title={result?.brand_section?.title}
                />
                <DoneProjects
                    items={result?.project_section?.items}
                    sub_title={result?.project_section?.sub_title}
                    title={result?.project_section?.title}
                />
                <MyExperience
                    items={result?.work_experience_section?.items}
                    sub_title={result?.work_experience_section?.sub_title}
                    title={result?.work_experience_section?.title}
                />
                <Skills
                    items={result?.specialized_field_section?.items}
                    sub_title={result?.specialized_field_section?.sub_title}
                    title={result?.specialized_field_section?.title}
                />
                <MyNotes />
                <WorkWithMe />
                <Socials />
                <Form />
                <Kairo />
            </div>
        </HydrationBoundary>
    )
}
