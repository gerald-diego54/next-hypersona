/* eslint-disable indent */
import BodyContainer from "../../src/layouts/BodyContainer";
import CardCollection from "../../src/components/Card/CardCollection";
import MainContainer from "../../src/layouts/MainContainer";
import NavigationBar from "../../src/layouts/NavigationBar";
import NFTCard from "../../src/components/Card/NFTCard";
import PageTitle from "../../src/components/UI/PageTitle";
import ProfileCard from "../../src/components/Card/ProfileCard";
import React, { useState } from "react";
import type { NextPage } from "next";
import _ from "lodash";
import Tab from "../../src/components/UI/Tab";
import { useRouter } from "next/router";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Filters from "../../src/components/Filter/Filters";
import Sorts from "../../src/components/Filter/Sorts";
import { Drawer } from "@mantine/core";
import FilterDrawer from "../../src/components/FilterDrawer/FilterDrawer";
import SortDrawer from "../../src/components/FilterDrawer/SortDrawer";

const Explore: NextPage = (): JSX.Element => {
    const router = useRouter();
    const [filterType, setFilterType] = useState<string>("");
    const [opened, setOpened] = useState(false);
    const [openedSort, setOpenedSort] = useState(false);
    const [openedNFT, setOpenedNFT] = useState(false);
    const [openedSortNFT, setOpenedSortNFT] = useState(false);

    const SortNFT = (): JSX.Element => {
        return (
            <React.Fragment>
                {_.isEqual(filterType, "nft-sort") && (
                    <React.Fragment>
                        <div className="grid-row-2 absolute z-30 mt-[40px] ml-[100px] grid hidden bg-floppy-disk md:inline-block">
                            <div className="flex flex-col">
                                <div className="grid-row-3 grid border-2 border-slate-400">
                                    <div className="ml-6 mt-4 font-azeret-mono text-base font-bold uppercase text-white">
                                        by price
                                    </div>
                                    <button className="mx-4 mt-2 h-[40px] w-[168px] pl-2 text-left font-inter text-lg font-[600] text-slate-400">
                                        Low to High
                                    </button>
                                    <button className="mx-4 mb-2 h-[40px] w-[168px] pl-2 text-left font-inter text-lg font-[600] text-slate-400">
                                        High to Low
                                    </button>
                                </div>
                                <div className="grid-row-3 grid border-2 border-slate-400">
                                    <div className="ml-6 mt-4 font-azeret-mono text-base font-bold uppercase text-white">
                                        by date
                                    </div>
                                    <button className="mx-4 mt-2 h-[40px] w-[168px] pl-2 text-left font-inter text-lg font-[600] text-slate-400">
                                        Newest to Oldest
                                    </button>
                                    <button className="mx-4 mb-2 h-[40px] w-[168px] pl-2 text-left font-inter text-lg font-[600] text-slate-400">
                                        Oldest to Newest
                                    </button>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </React.Fragment>
        );
    };

    const FilterNFT = (): JSX.Element => {
        return (
            <React.Fragment>
                {_.isEqual(filterType, "nft") && (
                    <React.Fragment>
                        <div className="grid-row-2 absolute z-30 mt-[40px] ml-[-280px] grid hidden bg-floppy-disk md:inline-block">
                            <div className="flex flex-row">
                                <div className="grid-row-3 grid border-2 border-slate-400">
                                    <div className="ml-4 mt-4 font-azeret-mono font-bold uppercase text-white">
                                        by price
                                    </div>
                                    <button
                                        className="my-3 mx-4 h-[40px] w-[168px]
                                border-2 border-slate-400 bg-[#3f356b] pl-2 text-left font-azeret-mono text-lg font-[600] uppercase text-white"
                                    >
                                        min
                                        <span className="font-inter text-lg font-normal"> 60</span>
                                        <span className="font-axeret-mono float-right mr-3 text-white">$null</span>
                                    </button>
                                    <button
                                        className="my-3 mx-4 h-[40px] w-[168px] border-2 border-slate-400
                                     bg-[#3f356b] pl-2 text-left font-azeret-mono text-lg font-[600] uppercase text-white"
                                    >
                                        max
                                        <span className="font-inter text-lg font-normal"> 60</span>
                                        <span className="font-axeret-mono float-right mr-3 text-white">$null</span>
                                    </button>
                                </div>
                                <div className="grid-row-3 grid border-2 border-slate-400">
                                    <div className="ml-4 mt-4 font-azeret-mono font-bold uppercase text-white">
                                        by contracts
                                    </div>
                                    <button
                                        className="my-3 mx-4 h-[40px] w-[168px] border-2
                                    border-slate-400 bg-[#3f356b] pl-2 text-left font-azeret-mono text-lg font-[600] uppercase text-white"
                                    >
                                        min
                                        <span className="font-inter text-lg font-normal"> 60</span>
                                    </button>
                                    <button
                                        className="my-3 mx-4 h-[40px] w-[168px] border-2 border-slate-400
                                    bg-[#3f356b] pl-2 text-left font-azeret-mono text-lg font-[600] uppercase text-white"
                                    >
                                        max
                                        <span className="font-inter text-lg font-normal"> 60</span>
                                    </button>
                                </div>
                            </div>
                            <div className="border-x-2 border-y-2 border-t-0">
                                <button className="m-3 h-[40px] w-[87px] bg-white text-base font-bold uppercase text-floppy-disk">
                                    reset
                                </button>
                                <button className="float-right m-3 h-[40px] w-[87px] bg-aqua text-base font-bold uppercase text-floppy-disk">
                                    apply
                                </button>
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </React.Fragment>
        );
    };

    return (
        <MainContainer>
            <NavigationBar authenticated={true} />
            <BodyContainer>
                <PageTitle title="Explore">
                    <Tab.TabGroup>
                        <Tab.TabItem active>All</Tab.TabItem>
                        <Tab.TabItem onClick={() => router.push("/explore/members")}>Members</Tab.TabItem>
                        <Tab.TabItem onClick={() => router.push("/explore/nfts")}>NFTs</Tab.TabItem>
                    </Tab.TabGroup>
                </PageTitle>
                <div className="w-full min-w-[360px] border-2 border-t-0 border-gray-600 p-5">
                    <CardCollection
                        title="Members"
                        filterComponent={
                            <React.Fragment>
                                <div className="flex flex-row gap-3">
                                    <button
                                        className="h-[40px] w-full border-2 border-slate-400 pl-2 text-left font-azeret-mono text-base font-bold uppercase text-white md:w-[126px]"
                                        onClick={
                                            _.isEqual(filterType, "member")
                                                ? () => {
                                                      setFilterType("");
                                                      setOpened(true);
                                                  }
                                                : () => {
                                                      setFilterType("member");
                                                      setOpened(true);
                                                  }
                                        }
                                    >
                                        Filter
                                        <ArrowDropDownIcon style={{ color: "#ffffff", float: "right" }} />
                                    </button>
                                    <button
                                        className="h-[40px] w-full border-2 border-slate-400 pl-2 text-left font-azeret-mono text-base font-bold uppercase text-white md:w-[126px]"
                                        onClick={
                                            _.isEqual(filterType, "member-sort")
                                                ? () => {
                                                      setFilterType("");
                                                      setOpenedSort(true);
                                                  }
                                                : () => {
                                                      setFilterType("member-sort");
                                                      setOpenedSort(true);
                                                  }
                                        }
                                    >
                                        Sort
                                        <ArrowDropDownIcon style={{ color: "#ffffff", float: "right" }} />
                                    </button>
                                    <Filters filterType={filterType} />
                                    <Sorts filterType={filterType} />
                                    <Drawer
                                        opened={opened}
                                        onClose={() => setOpened(false)}
                                        size="375px"
                                        position="bottom"
                                        className="bg-floppy-disk md:hidden"
                                        withCloseButton={false}
                                    >
                                        <FilterDrawer filterType={"member"} />
                                    </Drawer>
                                    <Drawer
                                        opened={openedSort}
                                        onClose={() => setOpenedSort(false)}
                                        size="299px"
                                        position="bottom"
                                        className="bg-floppy-disk md:hidden"
                                        withCloseButton={false}
                                    >
                                        <SortDrawer filterType={"member-sort"} />
                                    </Drawer>
                                </div>
                            </React.Fragment>
                        }
                        footerButton={
                            <button className="mt-10 mb-3 h-[40px] w-full bg-white font-azeret-mono text-lg font-bold uppercase text-floppy-disk">
                                View all members
                            </button>
                        }
                    >
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                    </CardCollection>
                </div>
                <div className="w-full min-w-[360px] border-2 border-t-0 border-gray-600 p-5">
                    <CardCollection
                        title="NFTs"
                        filterComponent={
                            <React.Fragment>
                                <div className="flex flex-row gap-3">
                                    <button
                                        className="h-[40px] w-full border-2 border-slate-400 pl-2 text-left font-azeret-mono text-base font-bold uppercase text-white md:w-[126px]"
                                        onClick={
                                            _.isEqual(filterType, "nft")
                                                ? () => {
                                                      setFilterType("");
                                                      setOpenedNFT(true);
                                                  }
                                                : () => {
                                                      setFilterType("nft");
                                                      setOpenedNFT(true);
                                                  }
                                        }
                                    >
                                        Filter
                                        <ArrowDropDownIcon style={{ color: "#ffffff", float: "right" }} />
                                    </button>
                                    <button
                                        className="h-[40px] w-full border-2 border-slate-400 pl-2 text-left font-azeret-mono text-base font-bold uppercase text-white md:w-[126px]"
                                        onClick={
                                            _.isEqual(filterType, "nft-sort")
                                                ? () => {
                                                      setFilterType("");
                                                      setOpenedSortNFT(true);
                                                  }
                                                : () => {
                                                      setFilterType("nft-sort");
                                                      setOpenedSortNFT(true);
                                                  }
                                        }
                                    >
                                        Sort
                                        <ArrowDropDownIcon style={{ color: "#ffffff", float: "right" }} />
                                    </button>
                                    {SortNFT()}
                                    {FilterNFT()}
                                    <Drawer
                                        opened={openedNFT}
                                        onClose={() => setOpenedNFT(false)}
                                        size="375px"
                                        position="bottom"
                                        className="bg-floppy-disk md:hidden"
                                        withCloseButton={false}
                                    >
                                        <FilterDrawer filterType={"nft"} />
                                    </Drawer>
                                    <Drawer
                                        opened={openedSortNFT}
                                        onClose={() => setOpenedSortNFT(false)}
                                        size="299px"
                                        position="bottom"
                                        className="bg-floppy-disk md:hidden"
                                        withCloseButton={false}
                                    >
                                        <SortDrawer filterType={"nft-sort"} />
                                    </Drawer>
                                </div>
                            </React.Fragment>
                        }
                        footerButton={
                            <button className="mt-10 mb-3 h-[40px] w-full bg-white font-azeret-mono text-lg font-bold uppercase text-floppy-disk">
                                View all nfts
                            </button>
                        }
                    >
                        <NFTCard owned={false} />
                        <NFTCard owned={false} />
                        <NFTCard owned={false} />
                        <NFTCard owned={false} />
                        <NFTCard owned={false} />
                        <NFTCard owned={false} />
                        <NFTCard owned={false} />
                        <NFTCard owned={false} />
                        <NFTCard owned={false} />
                        <NFTCard owned={false} />
                        <NFTCard owned={false} />
                        <NFTCard owned={false} />
                        <NFTCard owned={false} />
                        <NFTCard owned={false} />
                        <NFTCard owned={false} />
                        <NFTCard owned={false} />
                        <NFTCard owned={false} />
                        <NFTCard owned={false} />
                        <NFTCard owned={false} />
                        <NFTCard owned={false} />
                    </CardCollection>
                </div>
            </BodyContainer>
        </MainContainer>
    );
};

export default Explore;
