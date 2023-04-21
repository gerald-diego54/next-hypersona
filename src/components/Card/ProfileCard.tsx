import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileCard: React.FC = (): JSX.Element => {
    return (
        <div className="flex flex-col border-2 border-gray-600 px-3 py-5">
            <div className="w-full">
                <Link href="/profile/1">
                    <Image src="/explore/profile.svg" width={60} height={70} className="cursor-pointer" alt="" />
                </Link>
            </div>
            <div className="font-azeret-mono font-extrabold text-white text-lg">nike_official</div>
            <div className="flex flex-col text-cyan-300 font-bold text-lg mt-5">
                <div>84 Collection</div>
                <div>84 Contracts</div>
            </div>
            <div className="flex flex-col text-gray-300 text-lg font-normal font-inter mt-5">
                <p>Active: 4 Hours Ago</p>
                <p>Joined: 509 Days Ago</p>
                <p>Response Time: Within Hours</p>
                <p>Response Rate: 84% Responded</p>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-[55px]">
                <Image layout="responsive" src="/explore/image-1.svg" width={90} height={90} alt="image-1"></Image>
                <Image layout="responsive" src="/explore/image-2.svg" width={90} height={90} alt="image-1"></Image>
                <Image layout="responsive" src="/explore/image-3.svg" width={90} height={90} alt="image-3"></Image>
            </div>
        </div>
    );
};

export default ProfileCard;
