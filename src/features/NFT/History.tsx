import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const History: React.FC = (): JSX.Element => {
    return (
        <div className="mb-5 flex flex-col">
            <div className="mb-10 font-azeret-mono text-[32px] font-bold capitalize text-white">History</div>
            <div className="overflow-x-auto">
                <table className="w-[700px] md:w-full">
                    <thead className="whitespace-nowrap">
                        <tr className="border-b-2 border-gray-600 ">
                            <th className="text-left text-white">Event</th>
                            <th className="text-left text-white">Price</th>
                            <th className="text-left text-white">From</th>
                            <th className="text-left text-white">To</th>
                            <th className="text-left text-white">Date</th>
                        </tr>
                    </thead>
                    <tbody className="whitespace-nowrap">
                        <tr className="border-b-2 border-gray-600">
                            <td className="py-3 text-white">Sale</td>
                            <td className="py-3 text-white">105.32</td>
                            <td className="py-3 text-aqua">username</td>
                            <td className="py-3 text-aqua">username</td>
                            <td className="py-3 text-white">
                                <div className="flex flex-row space-x-2">
                                    <div>Apr-21-22</div>
                                    <OpenInNewIcon className="text-aqua" />
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b-2 border-gray-600">
                            <td className="py-3 text-white">Sale</td>
                            <td className="py-3 text-white">105.32</td>
                            <td className="py-3 text-aqua">username</td>
                            <td className="py-3 text-aqua">username</td>
                            <td className="py-3 text-white">
                                <div className="flex flex-row space-x-2">
                                    <div>Apr-21-22</div>
                                    <OpenInNewIcon className="text-aqua" />
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b-2 border-gray-600">
                            <td className="py-3 text-white">Sale</td>
                            <td className="py-3 text-white">105.32</td>
                            <td className="py-3 text-aqua">username</td>
                            <td className="py-3 text-aqua">username</td>
                            <td className="py-3 text-white">
                                <div className="flex flex-row space-x-2">
                                    <div>Apr-21-22</div>
                                    <OpenInNewIcon className="text-aqua" />
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b-2 border-gray-600">
                            <td className="py-3 text-white">Sale</td>
                            <td className="py-3 text-white">105.32</td>
                            <td className="py-3 text-aqua">username</td>
                            <td className="py-3 text-aqua">username</td>
                            <td className="py-3 text-white">
                                <div className="flex flex-row space-x-2">
                                    <div>Apr-21-22</div>
                                    <OpenInNewIcon className="text-aqua" />
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b-2 border-gray-600">
                            <td className="py-3 text-white">Sale</td>
                            <td className="py-3 text-white">105.32</td>
                            <td className="py-3 text-aqua">username</td>
                            <td className="py-3 text-aqua">username</td>
                            <td className="py-3 text-white">
                                <div className="flex flex-row space-x-2">
                                    <div>Apr-21-22</div>
                                    <OpenInNewIcon className="text-aqua" />
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b-2 border-gray-600">
                            <td className="py-3 text-white">Sale</td>
                            <td className="py-3 text-white">105.32</td>
                            <td className="py-3 text-aqua">username</td>
                            <td className="py-3 text-aqua">username</td>
                            <td className="py-3 text-white">
                                <div className="flex flex-row space-x-2">
                                    <div>Apr-21-22</div>
                                    <OpenInNewIcon className="text-aqua" />
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b-2 border-gray-600">
                            <td className="py-3 text-white">Sale</td>
                            <td className="py-3 text-white">105.32</td>
                            <td className="py-3 text-aqua">username</td>
                            <td className="py-3 text-aqua">username</td>
                            <td className="py-3 text-white">
                                <div className="flex flex-row space-x-2">
                                    <div>Apr-21-22</div>
                                    <OpenInNewIcon className="text-aqua" />
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b-2 border-gray-600">
                            <td className="py-3 text-white">Sale</td>
                            <td className="py-3 text-white">105.32</td>
                            <td className="py-3 text-aqua">username</td>
                            <td className="py-3 text-aqua">username</td>
                            <td className="py-3 text-white">
                                <div className="flex flex-row space-x-2">
                                    <div>Apr-21-22</div>
                                    <OpenInNewIcon className="text-aqua" />
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b-2 border-gray-600">
                            <td className="py-3 text-white">Sale</td>
                            <td className="py-3 text-white">105.32</td>
                            <td className="py-3 text-aqua">username</td>
                            <td className="py-3 text-aqua">username</td>
                            <td className="py-3 text-white">
                                <div className="flex flex-row space-x-2">
                                    <div>Apr-21-22</div>
                                    <OpenInNewIcon className="text-aqua" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default History;
