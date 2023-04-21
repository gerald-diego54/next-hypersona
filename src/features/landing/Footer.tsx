import React from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logo from "../../components/UI/Logo";
import DiscordIcon from "../../components/UI/Icons/DiscordIcon";
import Link from "next/link";

const Footer: React.FC = (): JSX.Element => {
    return (
        <div className="mx-auto max-w-[2300px] px-[64px] pt-[83px]">
            <div className="w-full py-10">
                <Logo className="w-[150px]" />
            </div>
            <div className="flex flex-col pb-14 md:flex-row md:space-x-5">
                <div className="flex w-full flex-col space-y-5 md:w-4/12">
                    <div className="text-2xl font-bold font-azaret-mono uppercase text-white">TEAM</div>
                    <Link href="https://twitter.com/ten_jd">
                        <div className="cursor-pointer text-lg text-cyan-300">@ten_jd</div>
                    </Link>
                    <Link href="https://twitter.com/GuyettAaron">
                        <div className="cursor-pointer text-lg text-cyan-300">@guyettarron</div>
                    </Link>
                    <div className="text-2xl font-bold uppercase text-white">CONTACT</div>
                    <Link href="mailto:hello@hypersona.io">
                        <div className="cursor-pointer text-lg text-cyan-300">hello@hypersona.io</div>
                    </Link>
                </div>
                <div className="mt-10 flex w-full flex-col space-y-5 md:mt-0 md:w-4/12">
                    <div className="text-2xl font-bold uppercase text-white font-azaret-mono">LINKS</div>
                    <Link href="mailto:aaron@unnamed.gg">
                        <div className="cursor-pointer text-lg text-cyan-300">Hiring</div>
                    </Link>
                    <Link href="/privacy">
                        <div className="pointer-cursor text-lg text-cyan-300">Privacy</div>
                    </Link>
                    <Link href="/terms">
                        <div className="cursor-pointer text-lg text-cyan-300">Terms</div>
                    </Link>
                </div>
                <div className="mt-10 flex w-full flex-col space-y-5 md:mt-0 md:w-4/12">
                    <div className="flex flex-row justify-between border-b-2 border-purple-600 py-3">
                        <div className="flex flex-row space-x-2">
                            <TwitterIcon className="text-cyan-300" />
                            <div className="font-bold uppercase text-white">TWITTER</div>
                        </div>
                        <CallMadeIcon className="text-cyan-300" />
                    </div>
                    <div className="flex flex-row justify-between border-b-2 border-purple-600 py-3">
                        <div className="flex flex-row space-x-2">
                            <InstagramIcon className="text-cyan-300" />
                            <div className="font-bold uppercase text-white">INSTAGRAM</div>
                        </div>
                        <CallMadeIcon className="text-cyan-300" />
                    </div>
                    <div className="flex flex-row justify-between border-b-2 border-purple-600 py-3">
                        <div className="flex flex-row space-x-2">
                            <DiscordIcon className="fill-cyan-300" />
                            <div className="font-bold uppercase text-white">DISCORD</div>
                        </div>
                        <CallMadeIcon className="text-cyan-300" />
                    </div>
                    <div className="flex flex-row justify-between border-b-2 border-purple-600 py-3">
                        <div className="flex flex-row space-x-2">
                            <LinkedInIcon className="text-cyan-300" />
                            <div className="font-bold uppercase text-white">LINKEDIN</div>
                        </div>
                        <CallMadeIcon className="text-cyan-300" />
                    </div>
                </div>
            </div>
            <div className="py-10 text-xl font-bold uppercase text-white">2022 © hypersona. Powered by unnamed.</div>
        </div>
    );
};

export default Footer;
