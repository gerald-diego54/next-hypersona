/* eslint-disable indent */
import BodyContainer from "../../src/layouts/BodyContainer";
import MainContainer from "../../src/layouts/MainContainer";
import NavigationBar from "../../src/layouts/NavigationBar";
import PageTitle from "../../src/components/UI/PageTitle";
import React, { useState } from "react";
import type { NextPage } from "next";
import CardCollection from "../../src/components/Card/CardCollection";
import ProfileCard from "../../src/components/Card/ProfileCard";
import _ from "lodash";
import router from "next/router";
import Tab from "../../src/components/UI/Tab";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Filters from "../../src/components/Filter/Filters";
import Sorts from "../../src/components/Filter/Sorts";
import { Drawer } from "@mantine/core";
import FilterDrawer from "../../src/components/FilterDrawer/FilterDrawer";
import SortDrawer from "../../src/components/FilterDrawer/SortDrawer";

const MemberExplorer: NextPage = (): JSX.Element => {
    const [filterType, setFilterType] = useState<string>("");
    const [opened, setOpened] = useState(false);
    const [openedSort, setOpenedSort] = useState(false);

    return (
        <MainContainer>
            <NavigationBar authenticated={true} />
            <BodyContainer>
                <PageTitle title="Explore">
                    <Tab.TabGroup>
                        <Tab.TabItem onClick={() => router.push("/explore")}>All</Tab.TabItem>
                        <Tab.TabItem active>Members</Tab.TabItem>
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
                            <button className="mt-3 h-[40px] w-full bg-white font-azeret-mono text-lg font-bold uppercase text-floppy-disk">
                                Load More
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
            </BodyContainer>
        </MainContainer>
    );
};

export default MemberExplorer;
