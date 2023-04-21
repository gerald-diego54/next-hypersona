import _ from "lodash";
import { NextPage } from "next";
import BodyContainer from "../../src/layouts/BodyContainer";
import Contracts from "../../src/features/NFT/Contracts";
import Details from "../../src/features/NFT/Details";
import { Modal, Image as MImage } from "@mantine/core";
import Analytics from "../../src/features/NFT/Analytics";
import CloseIcon from "@mui/icons-material/Close";
import ExpandIcon from "../../src/components/UI/Icons/ExpandIcon";
import History from "../../src/features/NFT/History";
import Image from "next/image";
import LooksRareIcon from "../../src/components/UI/Icons/LooksRareIcon";
import MainContainer from "../../src/layouts/MainContainer";
import NavigationBar from "../../src/layouts/NavigationBar";
import OpenseaIcon from "../../src/components/UI/Icons/OpenseaIcon";
import PageTitle from "../../src/components/UI/PageTitle";
import React, { useState } from "react";
import Tab from "../../src/components/UI/Tab";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

type NftTabs = "contracts" | "details" | "history" | "analytics";

const NFT: NextPage = (): JSX.Element => {
    const [activeTab, setActiveTab] = useState<NftTabs>("contracts");
    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <MainContainer>
            <NavigationBar authenticated={true} />
            <BodyContainer>
                <PageTitle
                    title={
                        <div className="flex flex-row items-center justify-between">
                            <div className="w-[35%] md:w-10/12 md:truncate whitespace-nowrap text-2xl md:text-3xl">Doodle #1232</div>
                            <div className="flex flex-row space-x-3 hidden md:contents">
                                <div className="border-2 border-white/60 my-3 p-3 hover:bg-[#3F346C] cursor-pointer">
                                    <OpenseaIcon className="fill-white" />
                                </div>
                                <div className="border-2 border-white/60 my-3 p-3 hover:bg-[#3F346C] cursor-pointer">
                                    <LooksRareIcon className="fill-white" />
                                </div>
                                <div className="border-2 border-white/60 my-3 px-3 hover:bg-[#3F346C] cursor-pointer">
                                    <RefreshOutlinedIcon className="fill-white" />
                                </div>
                            </div>
                            <div className="md:hidden">
                                <button className="border px-3">
                                    <MoreHorizOutlinedIcon style={{color: "#ffffff"}} />
                                </button>
                            </div>
                        </div>
                    }
                />
                <div className="flex flex-col md:flex-row">
                    <div className="md:min-h-screen w-screen md:w-[400px] md:min-w-[400px] border-l-2 border-gray-600">
                        <div className="flex w-full flex-row items-start justify-end">
                            <button
                                onClick={() => setExpanded(true)}
                                className="absolute z-20 m-3 bg-white p-2 text-black"
                            >
                                <ExpandIcon />
                            </button>
                        </div>
                        <Image src="/nft/doodle-8576.png" alt="nft" width={320} height={320} layout="responsive" />
                        <div className="mt-5 flex flex-col space-y-2 px-5 border-b-2 border-gray-600 md:border-b-0 pb-4">
                            <div className="text-white">
                                Owned by <span className="text-cyan-400">Owner_Username</span>
                            </div>
                            <div className="text-white">Collection Name</div>
                            <div className="text-white">Created by Creator_Name</div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="border-b-2 md:border-r-2 border-gray-600 px-6 md:py-3 m-0">
                            <Tab.TabGroup className="my-5">
                                <Tab.TabItem
                                    onClick={() => setActiveTab("contracts")}
                                    active={_.isEqual(activeTab, "contracts")}
                                >
                                    Contracts
                                </Tab.TabItem>
                                <Tab.TabItem
                                    onClick={() => setActiveTab("details")}
                                    active={_.isEqual(activeTab, "details")}
                                >
                                    Details
                                </Tab.TabItem>
                                <Tab.TabItem
                                    onClick={() => setActiveTab("history")}
                                    active={_.isEqual(activeTab, "history")}
                                >
                                    History
                                </Tab.TabItem>
                                <Tab.TabItem
                                    onClick={() => setActiveTab("analytics")}
                                    active={_.isEqual(activeTab, "analytics")}
                                >
                                    Analytics
                                </Tab.TabItem>
                            </Tab.TabGroup>
                        </div>
                        <div className="min-h-screen border-l-2 border-r-2 border-gray-600 px-6 py-3 m-0">
                            {_.isEqual(activeTab, "contracts") && <Contracts />}
                            {_.isEqual(activeTab, "details") && <Details />}
                            {_.isEqual(activeTab, "history") && <History />}
                            {_.isEqual(activeTab, "analytics") && <Analytics />}
                        </div>
                    </div>
                </div>
                <Modal
                    centered
                    opened={expanded}
                    onClose={() => setExpanded(false)}
                    transition="fade"
                    transitionDuration={200}
                    withCloseButton={false}
                    transitionTimingFunction="ease"
                    classNames={{ modal: "p-0" }}
                >
                    <button
                        onClick={() => setExpanded(false)}
                        className="absolute right-0 z-20 m-3 space-x-1 bg-white p-2 text-black"
                    >
                        <CloseIcon className="text-gray-600" />
                    </button>
                    <MImage src="/nft/doodle-8576.png" alt="" />
                </Modal>
            </BodyContainer>
        </MainContainer>
    );
};

export default NFT;
