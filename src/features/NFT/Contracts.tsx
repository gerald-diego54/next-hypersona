import React, { useState } from "react";
import ContractList from "../../components/List/ContractList";
import ContractRow from "../../components/List/ContractRow";
import _ from "lodash";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Filters from "../../components/Filter/Filters";
import Sorts from "../../components/Filter/Sorts";
import { Drawer } from "@mantine/core";
import FilterDrawer from "../../components/FilterDrawer/FilterDrawer";
import SortDrawer from "../../components/FilterDrawer/SortDrawer";

const Contracts: React.FC = (): JSX.Element => {
    const [filterType, setFilterType] = useState<string>("");
    const [openedContract, setOpenedContract] = useState(false);
    const [openedSortContract, setOpenedSortContract] = useState(false);

    return (
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
                <button className="mt-[40px] h-[40px] w-full bg-white font-azeret-mono text-base text-floppy-disk font-bold uppercase">
                    Load more
                </button>
            }
        >
            <ContractRow showNFT={false} />
            <ContractRow showNFT={false} />
            <ContractRow showNFT={false} />
            <ContractRow showNFT={false} />
            <ContractRow showNFT={false} />
            <ContractRow showNFT={false} />
        </ContractList>
    );
};

export default Contracts;
