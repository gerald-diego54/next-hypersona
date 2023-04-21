import React from "react";
import Image from "next/image";
import LaunchIcon from "@mui/icons-material/Launch";
import SettingsIcon from "@mui/icons-material/Settings";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Link from "next/link";
import Globe from "../../components/UI/Icons/GlobeIcon";
import TwitterIcon from "../../components/UI/Icons/TwitterIcon";
import InstagramIcon from "../../components/UI/Icons/InstagramIcon";
import DiscordIcon from "../../components/UI/Icons/DiscordIcon";
import OpenseaIcon from "../../components/UI/Icons/OpenseaIcon";
import LooksRareIcon from "../../components/UI/Icons/LooksRareIcon";

const ProfileInformation: React.FC = (): JSX.Element => {
    const AddressBar: React.FC = (): JSX.Element => {
        return (
            <React.Fragment>
                <div className="flex w-full flex-row justify-end border-2 border-gray-600">
                    <div className="border-r-2 border-gray-600 p-2 ">
                        <ContentCopyIcon className="cursor-pointer" style={{color: "#ffffff"}} />
                    </div>
                    <div className="w-full border-r-2 border-gray-600 p-2 font-bold uppercase text-cyan-300 text-center">
                        OX1A...A23A
                    </div>
                    <div className="p-2">
                        <a
                            href="https://etherscan.io/address/0xcffad3200574698b78f32232aa9d63eabd290703"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LaunchIcon className="cursor-pointer" style={{color: "#ffffff"}} />
                        </a>
                    </div>
                </div>
                <div className="cursor-pointer border-2 border-gray-600 p-2">
                    <Link href="/profile/1/settings">
                        <SettingsIcon className="cursor-pointer" style={{color: "#ffffff"}} />
                    </Link>
                </div>
            </React.Fragment>
        );
    };

    return (
        <div className="flex w-full min-w-[360px] flex-col border-2 border-gray-600 p-5">
            <div className="flex min-w-[300px] flex-row items-center justify-between">
                <div className="flex flex-row items-center space-x-3">
                    <Image src="/avatar.png" width={40} height={40} alt="avatar" layout="fixed" />
                    <div className="truncate font-azeret-mono text-3xl text-white">starstamps</div>
                </div>
                <div className="hidden flex-row space-x-4 md:flex">
                    <AddressBar />
                </div>
            </div>
            <div className="mt-5 flex w-full min-w-fit flex-col space-y-10">
                <div className="font-inter text-lg text-gray-400">
                    Collecting NFTs like stars. This section is up to 240 characters only. Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes.
                </div>
                <div className="flex flex-col space-y-0.5 font-azeret-mono md:flex-row">
                    <div className="flex w-full flex-col text-lg font-extrabold text-cyan-300 md:w-6/12">
                        <div>Active: 4 Hours Ago</div>
                        <div>Joined: 371 Days Ago</div>
                    </div>
                    <div className="flex w-full flex-col text-lg font-extrabold text-cyan-300 md:w-6/12">
                        <div>Response Time: Within Hours</div>
                        <div>Response Rate: 84% Responded</div>
                    </div>
                </div>
            </div>
            <div className="mt-5 flex flex-row space-x-4 md:hidden mt-[40px]">
                <AddressBar />
            </div>
            <div className="mt-5 flex w-full flex-row items-center space-x-5 py-[36px]">
                <div className="hover:bg-[#3F356B] p-2">
                    <Globe className="cursor-pointer fill-white" />
                </div>
                <div className="hover:bg-[#3F356B] p-2">
                    <TwitterIcon className="cursor-pointer fill-white" />
                </div>
                <div className="hover:bg-[#3F356B] p-2">
                    <InstagramIcon className="cursor-pointer fill-white" />
                </div>
                <div className="hover:bg-[#3F356B] p-2">
                    <DiscordIcon className="cursor-pointer fill-white" />
                </div>
                <div className="hover:bg-[#3F356B] p-2">
                    <OpenseaIcon className="cursor-pointer fill-white" />
                </div>
                <div className="hover:bg-[#3F356B] p-2">
                    <LooksRareIcon className="cursor-pointer fill-white" />
                </div>
            </div>
        </div>
    );
};

export default ProfileInformation;
