import React from "react";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import MarqueComponent from "react-fast-marquee";

const Marquee: React.FC = (): JSX.Element => {
    return (
        <div className="my-10 md:my-20 w-full">
            <MarqueComponent
                speed={100}
                style={{
                    background: "linear-gradient(270deg, #0af8ff 0%, #b800f0 100%)",
                }}
                className="overflow-hidden p-2"
            >
                <div className="cursor-pointer uppercase font-azeret-mono text-floppy-disk px-3 font-extrabold flex flex-row space-x-3 items-center">
                    <div className="text-xl">Subscribe</div>
                    <SouthEastIcon className="" />
                </div>
                <div className="cursor-pointer uppercase font-azeret-mono text-floppy-disk px-3 font-extrabold flex flex-row space-x-3 items-center">
                    <div className="text-xl">Subscribe</div>
                    <SouthEastIcon className="" />
                </div>
                <div className="cursor-pointer uppercase font-azeret-mono text-floppy-disk px-3 font-extrabold flex flex-row space-x-3 items-center">
                    <div className="text-xl">Subscribe</div>
                    <SouthEastIcon className="" />
                </div>
                <div className="cursor-pointer uppercase font-azeret-mono text-floppy-disk px-3 font-extrabold flex flex-row space-x-3 items-center">
                    <div className="text-xl">Subscribe</div>
                    <SouthEastIcon className="" />
                </div>
                <div className="cursor-pointer uppercase font-azeret-mono text-floppy-disk px-3 font-extrabold flex flex-row space-x-3 items-center">
                    <div className="text-xl">Subscribe</div>
                    <SouthEastIcon className="" />
                </div>
                <div className="cursor-pointer uppercase font-azeret-mono text-floppy-disk px-3 font-extrabold flex flex-row space-x-3 items-center">
                    <div className="text-xl">Subscribe</div>
                    <SouthEastIcon className="" />
                </div>
                <div className="cursor-pointer uppercase font-azeret-mono text-floppy-disk px-3 font-extrabold flex flex-row space-x-3 items-center">
                    <div className="text-xl">Subscribe</div>
                    <SouthEastIcon className="" />
                </div>
                <div className="cursor-pointer uppercase font-azeret-mono text-floppy-disk px-3 font-extrabold flex flex-row space-x-3 items-center">
                    <div className="text-xl">Subscribe</div>
                    <SouthEastIcon className="" />
                </div>
                <div className="cursor-pointer uppercase font-azeret-mono text-floppy-disk px-3 font-extrabold flex flex-row space-x-3 items-center">
                    <div className="text-xl">Subscribe</div>
                    <SouthEastIcon className="" />
                </div>
                <div className="cursor-pointer uppercase font-azeret-mono text-floppy-disk px-3 font-extrabold flex flex-row space-x-3 items-center">
                    <div className="text-xl">Subscribe</div>
                    <SouthEastIcon className="" />
                </div>
                <div className="cursor-pointer uppercase font-azeret-mono text-floppy-disk px-3 font-extrabold flex flex-row space-x-3 items-center">
                    <div className="text-xl">Subscribe</div>
                    <SouthEastIcon className="" />
                </div>
            </MarqueComponent>
        </div>
    );
};

export default Marquee;
