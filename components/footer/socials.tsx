import { FC, memo } from "react";
import GithubIcon from "@/icons/footer/github";
import InstagramIcon from "@/icons/footer/instagram";
import TelegramIcon from "@/icons/footer/telegram";
import LinkedInIcon from "@/icons/footer/linkedin";

interface SocialsProps {
    mobile: boolean
}

const Socials: FC<SocialsProps> = ({ mobile }) => {
    return (
        <div className="grid grid-cols-2 gap-3">
            <div className="col-span-1 bg-white rounded-[10px] p-3 flex items-center justify-start gap-2
                hover:bg-[#524CF2] transition duration-400 cursor-pointer group md:col-span-2">
                <div className="size-[26px] group-hover:hidden">
                    <GithubIcon />
                </div>
                <div className="size-[26px] group-hover:block hidden bg-[#524CF2] rounded-full">
                    <GithubIcon color="white" />
                </div>
                <p className="text-[#0D0E11] text-[16px] font-[600] group-hover:text-white
                transition duration-400">Github</p>
            </div>

            <div className="col-span-1 bg-white rounded-[10px] p-3 flex items-center justify-start gap-2
                hover:bg-[#524CF2] transition duration-400 cursor-pointer group">
                <div className="size-[26px] group-hover:hidden md:mx-auto">
                    <InstagramIcon />
                </div>
                <div className="size-[26px] group-hover:block hidden md:mx-auto">
                    <InstagramIcon color="white" />
                </div>
                {
                    mobile && <p className="text-[#0D0E11] text-[16px] font-[600] group-hover:text-white
                transition duration-400">Instagram</p>
                }
            </div>

            <div className="col-span-1 bg-white rounded-[10px] p-3 flex items-center justify-start gap-2
                hover:bg-[#524CF2] transition duration-400 cursor-pointer group">
                <div className="size-[26px] group-hover:hidden md:mx-auto">
                    <TelegramIcon />
                </div>
                <div className="size-[26px] group-hover:block hidden rounded-full md:mx-auto">
                    <TelegramIcon color="white" />
                </div>
                {
                    mobile && <p className="text-[#0D0E11] text-[16px] font-[600] group-hover:text-white
                transition duration-400">Telegram</p>
                }
            </div>

            <div className="col-span-1 bg-white rounded-[10px] p-3 flex items-center justify-start gap-2
                hover:bg-[#524CF2] transition duration-400 cursor-pointer group">
                <div className="size-[26px] group-hover:hidden md:mx-auto">
                    <LinkedInIcon />
                </div>
                <div className="size-[26px] group-hover:block hidden rounded-full md:mx-auto">
                    <LinkedInIcon color="white" />
                </div>
                {
                    mobile && <p className="text-[#0D0E11] text-[16px] font-[600] group-hover:text-white
                transition duration-400">Linkedin</p>
                }
            </div>
        </div>
    )
}; export default memo(Socials);