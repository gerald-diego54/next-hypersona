import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import MainContainer from "../src/layouts/MainContainer";
import NavigationBar from "../src/layouts/NavigationBar";
import BodyContainer from "../src/layouts/BodyContainer";

const Notifications: NextPage = (): JSX.Element => {
    return (
        <MainContainer>
            <NavigationBar authenticated={true} />
            <BodyContainer>
                <div className="w-full border-2 border-gray-600 flex flex-col p-5">
                    <div className="font-azeret-mono text-5xl text-white mb-12">Notifications</div>
                </div>
                <div className="w-full border-2 space-y-[48px] border-t-0 border-gray-600 flex flex-col p-5 text-xl">
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row space-x-3">
                            <Image src="/nft/doodle-8576.png" alt="image" height={60} width={60} />
                            <div className="flex flex-col">
                                <div className="font-inter text-gray-400">
                                    <span className="text-cyan-300 font-bold text-lg font-azeret-mono">CloneX #5411</span>{" "}
                                    has a new owner. It has been removed from your collection.
                                </div>
                                <div className="font-bold text-white text-lg">1 hour ago, Feb 21</div>
                            </div>
                        </div>
                        <div className="w-[16px] h-[16px] bg-[#B800F0] rounded-full" />
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row space-x-3">
                            <Image src="/nft/doodle-8576.png" alt="image" height={60} width={60} />
                            <div className="flex flex-col">
                                <div className="font-inter text-gray-400">
                                    <span className="text-cyan-300 font-bold text-lg font-azeret-mono">CloneX #5411</span>{" "}
                                    has a new owner. It has been removed from your collection.
                                </div>
                                <div className="font-bold text-white text-lg">1 hour ago, Feb 21</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row space-x-3">
                            <Image src="/nft/doodle-8576.png" alt="image" height={60} width={60} />
                            <div className="flex flex-col">
                                <div className="font-inter text-gray-400">
                                    <span className="text-cyan-300 font-bold text-lg font-azeret-mono">CloneX #5411</span>{" "}
                                    has a new owner. It has been removed from your collection.
                                </div>
                                <div className="font-bold text-white text-lg">1 hour ago, Feb 21</div>
                            </div>
                        </div>
                        <div className="w-[16px] h-[16px] bg-[#B800F0] rounded-full" />
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row space-x-3">
                            <Image src="/nft/doodle-8576.png" alt="image" height={60} width={60} />
                            <div className="flex flex-col">
                                <div className="font-inter text-gray-400">
                                    <span className="text-cyan-300 font-bold text-lg font-azeret-mono">CloneX #5411</span>{" "}
                                    has a new owner. It has been removed from your collection.
                                </div>
                                <div className="font-bold text-white text-lg">1 hour ago, Feb 21</div>
                            </div>
                        </div>
                        <div className="w-[16px] h-[16px] bg-[#B800F0] rounded-full" />
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row space-x-3">
                            <Image src="/nft/doodle-8576.png" alt="image" height={60} width={60} />
                            <div className="flex flex-col">
                                <div className="font-inter text-gray-400">
                                    <span className="text-cyan-300 font-bold text-lg font-azeret-mono">CloneX #5411</span>{" "}
                                    has a new owner. It has been removed from your collection.
                                </div>
                                <div className="font-bold text-white text-lg">1 hour ago, Feb 21</div>
                            </div>
                        </div>
                        <div className="w-[16px] h-[16px] bg-[#B800F0] rounded-full" />
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row space-x-3">
                            <Image src="/nft/doodle-8576.png" alt="image" height={60} width={60} />
                            <div className="flex flex-col">
                                <div className="font-inter text-gray-400">
                                    <span className="text-cyan-300 font-bold text-lg font-azeret-mono">CloneX #5411</span>{" "}
                                    has a new owner. It has been removed from your collection.
                                </div>
                                <div className="font-bold text-white text-lg">1 hour ago, Feb 21</div>
                            </div>
                        </div>
                        <div className="w-[16px] h-[16px] bg-[#B800F0] rounded-full" />
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row space-x-3">
                            <Image src="/nft/doodle-8576.png" alt="image" height={60} width={60} />
                            <div className="flex flex-col">
                                <div className="font-inter text-gray-400">
                                    <span className="text-cyan-300 font-bold text-lg font-azeret-mono">CloneX #5411</span>{" "}
                                    has a new owner. It has been removed from your collection.
                                </div>
                                <div className="font-bold text-white text-lg">1 hour ago, Feb 21</div>
                            </div>
                        </div>
                        <div className="w-[16px] h-[16px] bg-[#B800F0] rounded-full" />
                    </div>
                    <button className="w-full mt-10 text-base h-[40px] text-floppy-disk  bg-white font-azeret-mono font-bold uppercase">
                        Load more
                    </button>
                </div>
            </BodyContainer>
        </MainContainer>
    );
};

export default Notifications;
