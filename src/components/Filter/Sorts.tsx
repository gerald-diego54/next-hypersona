import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import _ from "lodash";

const Sorts: React.FC<{ filterType: string }> = ({ filterType}): JSX.Element => {
    return (
        <React.Fragment>
            { _.isEqual(filterType, "collection-sort") &&
                <React.Fragment>
                    <div className="grid grid-row-2 mt-[40px] absolute ml-[90px] z-30 bg-floppy-disk hidden md:inline">
                        <div className="flex flex-col">
                            <div className="border-2 border-slate-400 grid grid-row-3">
                                <div className="uppercase text-white font-azeret-mono font-bold ml-6 text-base mt-4">by earnings</div>
                                <button className="font-inter text-slate-400 font-[600] text-left text-lg w-[168px] h-[40px] mt-2 mx-4 pl-2">Low to High
                                </button>
                                <button className="font-inter text-slate-400 font-[600] text-left text-lg w-[168px] h-[40px] mb-2 mx-4 pl-2">High to Low
                                </button>
                            </div>
                            <div className="border-2 border-slate-400 grid grid-row-3">
                                <div className="uppercase text-white font-azeret-mono font-bold text-base ml-6 mt-4">by date joined</div>
                                <button className="font-inter text-slate-400 font-[600] text-left text-lg w-[168px] h-[40px] mt-2 mx-4 pl-2">Newest to Oldest
                                </button>
                                <button className="font-inter text-slate-400 font-[600] text-left text-lg w-[168px] h-[40px] mb-2 mx-4 pl-2">Oldest to Newest
                                </button>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            }

            { _.isEqual(filterType, "contracts-sort") &&
                <React.Fragment>
                    <div className="grid grid-row-2 mt-[40px] absolute ml-[90px] z-30 bg-floppy-disk hidden md:inline">
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

            { _.isEqual(filterType, "member-sort") &&
                <React.Fragment>
                    <div className="grid grid-row-2 mt-[40px] absolute ml-[90px] z-30 bg-floppy-disk hidden md:inline">
                        <div className="flex flex-col">
                            <div className="border-2 border-slate-400 grid grid-row-3">
                                <div className="uppercase text-white font-azeret-mono font-bold ml-6 text-base mt-4">by activity</div>
                                <button className="font-inter text-slate-400 font-[600] text-left text-lg w-[168px] h-[40px] mt-2 mx-4 pl-2">Newest to Oldest
                                </button>
                                <button className="font-inter text-slate-400 font-[600] text-left text-lg w-[168px] h-[40px] mb-2 mx-4 pl-2">Oldest to Newest
                                </button>
                            </div>
                            <div className="border-2 border-slate-400 grid grid-row-3">
                                <div className="uppercase text-white font-azeret-mono font-bold text-base ml-6 mt-4">by date joined</div>
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

export default Sorts;
