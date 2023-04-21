import _ from "lodash";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import classNames from "classnames";
import Questions from "../../../data/faq.json";
import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";

const FAQ: React.FC = (): JSX.Element => {
    const Question: React.FC<{ index: number; question: string }> = ({ index, question }): JSX.Element => {
        const [isCollapsed, setIsCollapsed] = useState(false);
        return (
            <div key={index} className="border-b-2 border-b-purple-600 p-3">
                <div
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="flex w-full cursor-pointer flex-row justify-between mt-[40px]"
                >
                    <div className="flex flex-row space-x-3">
                        <div className="text-lg font-semibold text-cyan-300">
                            {_.padStart((index + 1).toString(), 2, "0")}
                        </div>
                        <div className="text-2xl font-semibold font-azeret-mono text-white">{question}</div>
                    </div>
                    {!isCollapsed ? (
                        <AddOutlinedIcon className="text-cyan-300" />
                    ) : (
                        <RemoveIcon className="text-cyan-300" />
                    )}
                </div>
                <div
                    className={classNames("w-full py-3 font-inter font-light text-white md:text-lg pl-[35px] text-lg font-inter", {
                        hidden: !isCollapsed,
                    })}
                >
                    {_.get(Questions, question)}
                </div>
            </div>
        );
    };

    return (
        <React.Fragment>
            <div className="gradient-text-primary text-6xl md:text-8xl">FAQ</div>
            <div className="flex flex-col">
                {Object.keys(Questions).map((question: string, index: number) => (
                    <Question key={index} question={question} index={index} />
                ))}
            </div>
        </React.Fragment>
    );
};

export default FAQ;
