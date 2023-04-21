import { NextPage } from "next";
import React from "react";
import BodyContainer from "../src/layouts/BodyContainer";
import MainContainer from "../src/layouts/MainContainer";
import NavigationBar from "../src/layouts/NavigationBar";

const Privacy: NextPage = (): JSX.Element => {
    return (
        <MainContainer>
            <NavigationBar authenticated={false} />
            <BodyContainer>
                <h1 className="text-white">Terms and conditions</h1>
            </BodyContainer>
        </MainContainer>
    );
};

export default Privacy;
