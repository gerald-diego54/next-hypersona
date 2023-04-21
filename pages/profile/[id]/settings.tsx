import _ from "lodash";
import classNames from "classnames";
import NavigationBar from "../../../src/layouts/NavigationBar";
import React, { useState } from "react";
import MainContainer from "../../../src/layouts/MainContainer";
import BodyContainer from "../../../src/layouts/BodyContainer";
import PageTitle from "../../../src/components/UI/PageTitle";
import ProfileSetting from "../../../src/features/profile/ProfileSetting";
import EarningsSetting from "../../../src/features/profile/EarningsSetting";

const Settings: React.FC = (): JSX.Element => {
    const [activeTab, setActiveTab] = useState<string>("profile");

    return (
        <MainContainer>
            <NavigationBar authenticated={true} />
            <BodyContainer>
                <PageTitle title="Settings">
                    <div className="flex flex-row space-x-5">
                        <button
                            onClick={() => setActiveTab("profile")}
                            className={classNames("px-3 py-1 text-base h-[40px] w-[109px] font-bold font-azeret-mono uppercase hover:bg-white hover:text-floppy-disk", {
                                "bg-white text-floppy-disk": _.isEqual(activeTab, "profile"),
                                "bg-minsk text-white": !_.isEqual(activeTab, "profile"),
                            })}
                        >
                            Profile
                        </button>
                        <button
                            onClick={() => setActiveTab("earnings")}
                            className={classNames("px-3 py-1 text-base h-[40px] w-[120px] font-bold font-azeret-mono uppercase hover:bg-white hover:text-floppy-disk", {
                                "bg-white text-floppy-disk": _.isEqual(activeTab, "earnings"),
                                "bg-minsk text-white": !_.isEqual(activeTab, "earnings"),
                            })}
                        >
                            Earnings
                        </button>
                    </div>
                </PageTitle>

                <div className="w-full min-w-[360px] border-2 border-t-0 border-gray-600 p-5">
                    <div className="mt-5 font-azeret-mono text-4xl capitalize text-white">{activeTab}</div>
                    {_.isEqual(activeTab, "profile") && <ProfileSetting />}
                    {_.isEqual(activeTab, "earnings") && <EarningsSetting />}
                </div>
            </BodyContainer>
        </MainContainer>
    );
};

export default Settings;
