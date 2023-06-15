import React from "react";
import _ from "lodash";

const Sorts: React.FC<{ filterType: string }> = ({ filterType }): JSX.Element => {
    return (
        <React.Fragment>
            {_.isEqual(filterType, "collection-sort") && (
                <React.Fragment>
                    <div className="grid-row-2 absolute z-30 mt-[40px] ml-[90px] grid hidden bg-floppy-disk md:inline">
                        <div className="flex flex-col">
                            <div className="grid-row-3 grid border-2 border-slate-400">
                                <div className="ml-6 mt-4 font-azeret-mono text-base font-bold uppercase text-white">
                                    by earnings
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
                                    by date joined
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

            {_.isEqual(filterType, "contracts-sort") && (
                <React.Fragment>
                    <div className="grid-row-2 absolute z-30 mt-[40px] ml-[90px] grid hidden bg-floppy-disk md:inline">
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

            {_.isEqual(filterType, "member-sort") && (
                <React.Fragment>
                    <div className="grid-row-2 absolute z-30 mt-[40px] ml-[90px] grid hidden bg-floppy-disk md:inline">
                        <div className="flex flex-col">
                            <div className="grid-row-3 grid border-2 border-slate-400">
                                <div className="ml-6 mt-4 font-azeret-mono text-base font-bold uppercase text-white">
                                    by activity
                                </div>
                                <button className="mx-4 mt-2 h-[40px] w-[168px] pl-2 text-left font-inter text-lg font-[600] text-slate-400">
                                    Newest to Oldest
                                </button>
                                <button className="mx-4 mb-2 h-[40px] w-[168px] pl-2 text-left font-inter text-lg font-[600] text-slate-400">
                                    Oldest to Newest
                                </button>
                            </div>
                            <div className="grid-row-3 grid border-2 border-slate-400">
                                <div className="ml-6 mt-4 font-azeret-mono text-base font-bold uppercase text-white">
                                    by date joined
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

export default Sorts;
