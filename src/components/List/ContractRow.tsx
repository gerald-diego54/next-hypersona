import React from "react";
import Image from "next/image";
import classNames from "classnames";
import _ from "lodash";

const ContractRow: React.FC<{ showNFT?: boolean, fromNFTNotOwned?: boolean }> = ({ showNFT = true, fromNFTNotOwned = false }): JSX.Element => {
    return (
        <div className="flex flex-col space-y-3 border-2 border-gray-600 lg:flex-row lg:space-y-0">
            {showNFT && (
                <div className="flex w-full flex-col lg:w-[70px] lg:flex-row lg:items-center">
                    <div className="w-full min-w-[70px]">
                        <Image src="/nft/doodle-8576.png" alt="nft" width={80} height={80} layout="responsive" />
                    </div>
                </div>
            )}
            <div className="flex flex-auto flex-col px-3 py-2">
                <div className="truncate text-white text-lg">My contract title</div>
                <div className="truncate text-cyan-300 text-lg">150 $NULL per 5 years</div>
            </div>
            <div className="flex w-full items-center px-3 lg:w-2/12">
                <div className="border-2 border-purple-600 text-base px-3 py-2 font-azeret-mono font-bold text-white">Proposal</div>
            </div>
            <div className={classNames("flex w-full flex-col px-3 py-2 font-inter text-lg text-gray-400 lg:w-2/12", {
                hidden: !_.isEqual(fromNFTNotOwned, true),
                "": _.isEqual(fromNFTNotOwned, true),

            })}>
                <div className="truncate">nft_name</div>
                <div className="truncate">collection_name</div>
            </div>
            <div className="flex w-full min-w-[100px] flex-col px-3 py-2 font-inter text-lg text-gray-400 lg:w-3/12">
                <div className="truncate">Licensor: licensorusername</div>
                <div className="truncate">Licensee: licenseeusern...</div>
            </div>
            <div className="flex items-center justify-center px-2 lg:w-[90px]">
                <button className="w-full h-[40px] my-3 bg-cyan-300 p-3 font-azeret-mono text-base text-floppy-disk font-bold uppercase">
                    <div>View</div>
                </button>
            </div>
        </div>
    );
};

export default ContractRow;
