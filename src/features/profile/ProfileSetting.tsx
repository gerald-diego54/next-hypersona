import React from "react";
import Image from "next/image";
import FormInput from "../../components/Form/FormInput";
import FormTextArea from "../../components/Form/FormTextArea";
import GlobeIcon from "../../components/UI/Icons/GlobeIcon";
import InstagramIcon from "../../components/UI/Icons/InstagramIcon";
import DiscordIcon from "../../components/UI/Icons/DiscordIcon";
import OpenseaIcon from "../../components/UI/Icons/OpenseaIcon";
import LooksRareIcon from "../../components/UI/Icons/LooksRareIcon";
import TwitterIcon from "../../components/UI/Icons/TwitterIcon";
import Copy from "../../components/UI/Icons/Copy";

const ProfileSetting: React.FC = (): JSX.Element => {
    return (
        <React.Fragment>
            <form>
                <div className="mt-5 flex flex-col space-y-2">
                    <div className="text-bold font-azeret-mono text-lg capitalize text-white">Picture</div>
                    <div className="flex flex-row items-center space-x-3">
                        <div className="flex items-center justify-center">
                            <Image src="/avatar.png" width={50} height={50} layout="fixed" alt="avatar-current" />
                        </div>
                        <button className="h-[40px] w-[98px] items-center bg-aqua py-2 px-4 font-azeret-mono font-azeret-mono text-base font-bold uppercase text-floppy-disk">
                            <div>Upload</div>
                        </button>
                        <button
                            className="h-[40px] w-[98px] items-center border-2
                        border-white bg-transparent font-azeret-mono font-azeret-mono text-base font-bold uppercase text-white"
                        >
                            <div>Remove</div>
                        </button>
                    </div>
                </div>
                <FormInput
                    value={"0x13b0d97275b75e1caa0fc6923866f3f1f36393e7"}
                    label="Wallet"
                    disabled
                    Icon={Copy}
                    iconPlacement="right"
                />
                <FormInput placeholder="Enter your username" label="Username" required />
                <FormInput placeholder="Enter your email address" label="Email" type="Email" required />
                <FormTextArea rows={5} placeholder="Tell us about yourself" label="About" />

                <div className="mt-5 flex flex-col space-y-3">
                    <div className="text-bold font-azeret-mono text-lg capitalize text-white">Links</div>
                    <FormInput Icon={GlobeIcon} placeholder="Website" />
                    <FormInput Icon={TwitterIcon} placeholder="Twitter" />
                    <FormInput Icon={InstagramIcon} placeholder="Instagram" />
                    <FormInput Icon={DiscordIcon} placeholder="Discord" />
                    <FormInput Icon={OpenseaIcon} placeholder="Opensea" />
                    <FormInput Icon={LooksRareIcon} placeholder="Looks rare" />
                </div>
                <button className="mt-5 h-[40px] w-full w-[76px] bg-aqua font-azeret-mono text-lg font-bold uppercase text-floppy-disk md:max-w-[100px]">
                    save
                </button>
            </form>
        </React.Fragment>
    );
};

export default ProfileSetting;
