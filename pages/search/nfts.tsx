import _ from "lodash";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CardCollection from "../../src/components/Card/CardCollection";
import NFTCard from "../../src/components/Card/NFTCard";
import PageTitle from "../../src/components/UI/PageTitle";
import Tab from "../../src/components/UI/Tab";
import BodyContainer from "../../src/layouts/BodyContainer";
import MainContainer from "../../src/layouts/MainContainer";
import NavigationBar from "../../src/layouts/NavigationBar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FilterDrawer from "../../src/components/FilterDrawer/FilterDrawer";
import { Drawer } from "@mantine/core";
import SortDrawer from "../../src/components/FilterDrawer/SortDrawer";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    return {
        props: {
            ...(_.isEmpty(query.keyword) && { notFound: true }),
        },
    };
};

const NFT: NextPage<{ notFound: boolean }> = ({ notFound }): JSX.Element => {
    const { push, query } = useRouter();
    const { keyword } = query;
    const [filterType, setFilterType] = useState<string>("");
    const [openedNFT, setOpenedNFT] = useState(false);
    const [openedSortNFT, setOpenedSortNFT] = useState(false);

    useEffect(() => {
        if (notFound) {
            push("/");
        }
    }, [notFound, push]);

    const SortNFT = ():JSX.Element => {
        return(
            <React.Fragment>
                { _.isEqual(filterType, "nft-sort") &&
                    <React.Fragment>
                        <div className="grid grid-row-2 mt-[40px] absolute ml-[-160px] z-30 bg-floppy-disk">
                            <div className="flex flex-col">
                                <div className="border-2 border-slate-400 grid grid-row-3">
                                    <div className="uppercase text-white font-azeret-mono font-bold ml-6 text-base mt-4">by price</div>
                                    <button className="font-inter text-slate-400 font-[600] text-left text-lg w-[168px] h-[40px] mt-2 mx-4 pl-2">Low to High
                                    </button>
                                    <button className="font-inter text-slate-400 font-[600] text-left text-lg w-[168px] h-[40px] mb-2 mx-4 pl-2">High to Low
                                    </button>
                                </div>
                                <div className="border-2 border-slate-400 grid grid-row-3">
                                    <div className="uppercase text-white font-azeret-mono font-bold text-base ml-6 mt-4">by date</div>
                                    <button className="font-inter text-slate-400 font-[600] text-left text-lg w-[168px] h-[40px] mt-2 mx-4 pl-2">Newest to Oldest
                                    </button>
                                    <button className="font-inter text-slate-400 font-[600] text-left text-lg w-[168px] h-[40px] mb-2 mx-4 pl-2">Oldest to Newest
                                    </button>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                }
            </React.Fragment>
        );
    };

    const FilterNFT = ():JSX.Element => {
        return(
            <React.Fragment>
                { _.isEqual(filterType, "nft") &&
                <React.Fragment>
                    <div className="grid grid-row-2 mt-[40px] absolute z-30 ml-[-570px] bg-floppy-disk">
                        <div className="flex flex-row">
                            <div className="border-2 border-slate-400 grid grid-row-3">
                                <div className="uppercase text-white font-azeret-mono font-bold ml-4 mt-4">by price</div>
                                <button className="uppercase font-azeret-mono text-white font-[600] bg-[#3f356b] text-left text-lg w-[168px] h-[40px] border-2 my-3 mx-4 border-slate-400 pl-2">min
                                    <span className="font-inter font-normal text-lg"> 60</span>
                                    <span className="font-axeret-mono text-white float-right mr-3">$null</span>
                                </button>
                                <button className="uppercase font-azeret-mono text-white font-[600] bg-[#3f356b] text-left text-lg w-[168px] h-[40px] border-2 my-3 mx-4 border-slate-400 pl-2">max
                                    <span className="font-inter font-normal text-lg"> 60</span>
                                    <span className="font-axeret-mono text-white float-right mr-3">$null</span>
                                </button>
                            </div>
                            <div className="border-2 border-slate-400 grid grid-row-3">
                                <div className="uppercase text-white font-azeret-mono font-bold ml-4 mt-4">by contracts</div>
                                <button className="uppercase font-azeret-mono text-white font-[600] bg-[#3f356b] text-left text-lg w-[168px] h-[40px] border-2 my-3 mx-4 border-slate-400 pl-2">min
                                    <span className="font-inter font-normal text-lg"> 60</span>
                                </button>
                                <button className="uppercase font-azeret-mono text-white font-[600] bg-[#3f356b] text-left text-lg w-[168px] h-[40px] border-2 my-3 mx-4 border-slate-400 pl-2">max
                                    <span className="font-inter font-normal text-lg"> 60</span>
                                </button>
                            </div>
                        </div>
                        <div className="border-x-2 border-y-2 border-t-0">
                            <button className="uppercase text-base font-bold text-floppy-disk bg-white m-3 h-[40px] w-[87px]">reset</button>
                            <button className="uppercase text-base font-bold text-floppy-disk bg-aqua m-3 h-[40px] w-[87px] float-right">apply</button>
                        </div>
                    </div>
                </React.Fragment>
                }
            </React.Fragment>
        );
    };

    return (
        <MainContainer>
            <NavigationBar authenticated={true} />
            <BodyContainer>
                <PageTitle title={`Search "${query?.keyword}"`}>
                    <Tab.TabGroup>
                        <Tab.TabItem onClick={() => push(`/search?keyword=${keyword}`)}>All</Tab.TabItem>
                        <Tab.TabItem onClick={() => push(`/search/members?keyword=${keyword}`)}>Members</Tab.TabItem>
                        <Tab.TabItem active>NFTs</Tab.TabItem>
                    </Tab.TabGroup>
                </PageTitle>
                <div className="w-full min-w-[360px] border-2 border-t-0 border-gray-600 p-5">
                    <CardCollection
                        title="NFTs"
                        filterComponent={
                            <React.Fragment>
                                <div className="flex flex-row gap-3">
                                    <button
                                        className="h-[40px] border-2 w-full md:w-[126px] text-left pl-2 border-slate-400 font-azeret-mono font-bold text-white text-base uppercase"
                                        onClick={_.isEqual(filterType, "nft") ? () => {setFilterType(""); setOpenedNFT(true);} : () => {setFilterType("nft"); setOpenedNFT(true);}}
                                    >
                                        Filter
                                        <ArrowDropDownIcon style={{color: "#ffffff", float: "right"}} />
                                    </button>
                                    <button
                                        className="h-[40px] border-2 w-full md:w-[126px] text-left pl-2 border-slate-400 font-azeret-mono font-bold text-white text-base uppercase"
                                        onClick={_.isEqual(filterType, "nft-sort") ? () => {setFilterType(""); setOpenedSortNFT(true);} : () => {setFilterType("nft-sort"); setOpenedSortNFT(true);}}
                                    >
                                        Sort
                                        <ArrowDropDownIcon style={{color: "#ffffff", float: "right"}} />
                                    </button>
                                    { SortNFT() }
                                    { FilterNFT() }
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
                            <button className="mt-3 h-[40px] w-full bg-white font-azeret-mono text-lg font-bold uppercase text-floppy-disk">
                                Load more
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

export default NFT;
