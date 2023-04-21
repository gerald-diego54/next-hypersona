import React, { useState } from "react";
import Image from "next/image";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Link from "next/link";

const NFTCard: React.FC<{ owned?: boolean }> = ({ owned = true }): JSX.Element => {
    const [isPublic, setIsPublic] = useState<boolean>(true);
    const toggleShow = () => setIsPublic(!isPublic);

    return (
        <div className="relative border-2 border-b-0 border-gray-600">
            {owned && (
                <div className="flex w-full flex-row items-start justify-end">
                    <button
                        onClick={toggleShow}
                        className="absolute z-20 m-3 flex flex-row space-x-1 bg-white px-2 py-1 font-azeret-mono font-bold uppercase tracking-wide text-black"
                    >
                        {isPublic ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        <div>{isPublic ? "Hide" : "Show"}</div>
                    </button>
                </div>
            )}
            {!isPublic && (
                <div className="absolute z-10 flex h-[64%] md:h-[40%] lg:h-[327px] min-h-[290px] w-full items-center bg-gray-800/60">
                    <div className="flex w-full justify-center font-azeret-mono text-lg font-bold uppercase text-white opacity-100">
                        Hidden from public
                    </div>
                </div>
            )}
            <Image src="/nft/doodle-8576.png" alt="nft" width={304} height={304} layout="responsive" />
            <div className="flex w-full flex-col space-y-5 p-4 text-lg">
                <div className="flex flex-col space-y-1 font-azeret-mono font-bold text-white">
                    <div>
                        <Link href="/nft/1">nft_name</Link>
                    </div>
                    <div>collection_name</div>
                </div>
                <div className="flex flex-col space-y-1 font-inter text-lg text-gray-400">
                    <div>Total Contracts: 10</div>
                    <div>Total Earning: 256</div>
                </div>
            </div>
            <button className="h-[40px] w-full items-center bg-cyan-300 font-azeret-mono text-lg font-bold uppercase text-floppy-disk">
                <div>{owned ? "View contracts" : "Submit proposal"}</div>
            </button>
        </div>
    );
};

export default NFTCard;
