/* eslint-disable no-console */
import _ from "lodash";
import MainContainer from "../../../src/layouts/MainContainer";
import NavigationBar from "../../../src/layouts/NavigationBar";
import NFTCard from "../../../src/components/Card/NFTCard";
import React, { useState } from "react";
import type { NextPage } from "next";
import BodyContainer from "../../../src/layouts/BodyContainer";
import ProfileInformation from "../../../src/features/profile/ProfileInformation";
import CardCollection from "../../../src/components/Card/CardCollection";
import ContractRow from "../../../src/components/List/ContractRow";
import ContractList from "../../../src/components/List/ContractList";
import Tab from "../../../src/components/UI/Tab";
import Filters from "../../../src/components/Filter/Filters";
import Sorts from "../../../src/components/Filter/Sorts";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FilterDrawer from "../../../src/components/FilterDrawer/FilterDrawer";
import { Drawer } from "@mantine/core";
import SortDrawer from "../../../src/components/FilterDrawer/SortDrawer";

const Profile: NextPage = (): JSX.Element => {
    const [activeTab, setActiveTab] = useState<string>("collection");
    const [filterType, setFilterType] = useState<string>("");
    const [opened, setOpened] = useState(false);
    const [openedSort, setOpenedSort] = useState(false);
    const [openedContract, setOpenedContract] = useState(false);
    const [openedSortContract, setOpenedSortContract] = useState(false);

    return (
        <MainContainer>
            <NavigationBar authenticated={true} waitListMode={false} />
            <BodyContainer>
                <ProfileInformation />
                <div className="w-full min-w-[360px] border-2 border-t-0 border-gray-600 p-5">
                    <Tab.TabGroup className="my-5">
                        <Tab.TabItem
                            active={_.isEqual(activeTab, "collection")}
                            onClick={() => { setActiveTab("collection"); setFilterType(""); }}
                        >
                            Collection (10)
                        </Tab.TabItem>
                        <Tab.TabItem
                            active={_.isEqual(activeTab, "contracts")}
                            onClick={() => { setActiveTab("contracts"); setFilterType("");}}
                        >
                            Contracts (4)
                        </Tab.TabItem>
                    </Tab.TabGroup>

                    {_.isEqual(activeTab, "collection") && (
                        <CardCollection
                            title="Collection"
                            filterComponent={
                                <React.Fragment>
                                    <div className="flex flex-row gap-3">
                                        <button
                                            className="h-[40px] border-2 w-full md:w-[126px] text-left pl-2 border-slate-400 font-azeret-mono font-bold text-white text-base uppercase"
                                            onClick={_.isEqual(filterType, "collection") ? () => {setFilterType(""); setOpened(true);} :
                                                () => {setFilterType("collection"); setOpened(true);}}
                                        >
                                            Filter
                                            <ArrowDropDownIcon style={{color: "#ffffff", float: "right"}} />
                                        </button>
                                        <button
                                            className="h-[40px] border-2 w-full md:w-[126px] text-left pl-2 border-slate-400 font-azeret-mono font-bold text-white text-base uppercase"
                                            onClick={_.isEqual(filterType, "collection-sort") ? () => {setFilterType(""); setOpenedSort(true);} : () => {setFilterType("collection-sort"); setOpenedSort(true);}}
                                        >
                                            Sort
                                            <ArrowDropDownIcon style={{color: "#ffffff", float: "right"}} />
                                        </button>
                                        <Filters filterType={filterType} />
                                        <Sorts filterType={filterType}/>
                                        <Drawer
                                            opened={opened}
                                            onClose={() => setOpened(false)}
                                            size="403px"
                                            position="bottom"
                                            className="bg-floppy-disk md:hidden"
                                            withCloseButton={false}
                                        >
                                            <FilterDrawer filterType={"collection"} />
                                        </Drawer>
                                        <Drawer
                                            opened={openedSort}
                                            onClose={() => setOpenedSort(false)}
                                            size="299px"
                                            position="bottom"
                                            className="bg-floppy-disk md:hidden"
                                            withCloseButton={false}
                                        >
                                            <SortDrawer filterType={"collection-sort"} />
                                        </Drawer>
                                    </div>
                                </React.Fragment>
                            }
                            footerButton={
                                <button className="md:mt-3 mt-[40px] h-[40px] w-full bg-white font-azeret-mono text-floppy-disk text-lg font-bold uppercase">
                                    Load more
                                </button>
                            }
                        >
                            <NFTCard />
                            <NFTCard />
                            <NFTCard />
                            <NFTCard />
                            <NFTCard />
                            <NFTCard />
                            <NFTCard />
                            <NFTCard />
                            <NFTCard />
                            <NFTCard />
                            <NFTCard />
                            <NFTCard />
                            <NFTCard />
                            <NFTCard />
                            <NFTCard />
                            <NFTCard />
                            <NFTCard />
                            <NFTCard />
                            <NFTCard />
                            <NFTCard />
                        </CardCollection>
                    )}
                    {_.isEqual(activeTab, "contracts") && (
                        <ContractList
                            title={"Contracts"}
                            filterComponent={
                                <React.Fragment>
                                    <div className="flex flex-row gap-3">
                                        <button
                                            className="h-[40px] border-2 w-full md:w-[126px] text-left pl-2 border-slate-400 font-azeret-mono font-bold text-white text-base uppercase"
                                            onClick={_.isEqual(filterType, "contracts") ? () => {setFilterType(""); setOpenedContract(true);} : () => {setFilterType("contracts"); setOpenedContract(true);}}
                                        >
                                            Filter
                                            <ArrowDropDownIcon style={{color: "#ffffff", float: "right"}} />
                                        </button>
                                        <button
                                            className="h-[40px] border-2 w-full md:w-[126px] text-left pl-2 border-slate-400 font-azeret-mono font-bold text-white text-base uppercase"
                                            onClick={_.isEqual(filterType, "contracts-sort") ? () => {setFilterType(""); setOpenedSortContract(true);} : () => {setFilterType("contracts-sort"); setOpenedSortContract(true);}}
                                        >
                                            Sort
                                            <ArrowDropDownIcon style={{color: "#ffffff", float: "right"}} />
                                        </button>
                                        <Filters filterType={filterType} />
                                        <Sorts filterType={filterType}/>
                                        <Drawer
                                            opened={openedContract}
                                            onClose={() => setOpenedContract(false)}
                                            size="375px"
                                            position="bottom"
                                            className="bg-floppy-disk md:hidden"
                                            withCloseButton={false}
                                        >
                                            <FilterDrawer filterType={"contracts"} />
                                        </Drawer>
                                        <Drawer
                                            opened={openedSortContract}
                                            onClose={() => setOpenedSortContract(false)}
                                            size="50%"
                                            position="bottom"
                                            className="bg-floppy-disk md:hidden"
                                            withCloseButton={false}
                                        >
                                            <SortDrawer filterType={"contracts-sort"} />
                                        </Drawer>
                                    </div>
                                </React.Fragment>
                            }
                            footerButton={
                                <button className="mt-3 h-[40px] w-full bg-white font-azeret-mono text-floppy-disk text-lg font-bold uppercase">
                                    Load more
                                </button>
                            }
                            tabs={
                                <Tab.TabGroup className="my-5">
                                    <Tab.TabItem active>All (10)</Tab.TabItem>
                                    <Tab.TabItem>As Licensor (4)</Tab.TabItem>
                                    <Tab.TabItem>As Licensee (6)</Tab.TabItem>
                                </Tab.TabGroup>
                            }
                        >
                            <ContractRow />
                            <ContractRow />
                            <ContractRow />
                            <ContractRow />
                            <ContractRow />
                            <ContractRow />
                            <ContractRow />
                            <ContractRow />
                            <ContractRow />
                            <ContractRow />
                        </ContractList>
                    )}
                </div>
            </BodyContainer>
        </MainContainer>
    );
};

export default Profile;

