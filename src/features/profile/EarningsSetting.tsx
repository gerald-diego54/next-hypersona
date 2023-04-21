import React, { useEffect, useState } from "react";
import { Select, MantineProvider } from "@mantine/core";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const EarningsSetting: React.FC = (): JSX.Element => {
    const [selectedValues, setSelectedCValues] = useState<any>("Immediately");
    const [selectedValues2, setSelectedCValues2] = useState<any>(null);
    const [disablesFromImmediately, setDisableFromImmediately] = useState<boolean>(false);
    const defaultDisable: any = [{ value: "-", label: "-" }];
    const values = [
        { value: "Immediately", label: "Immediately" },
        { value: "Daily", label: "Daily" },
        { value: "Weekly", label: "Weekly" },
        { value: "Monthly", label: "Monthly" },
    ];
    const datetime: any = [
        { value: "12:00 AM (Local Time)", label: "12:00 AM (Local Time)" },
        { value: "01:00 AM (Local Time)", label: "01:00 AM (Local Time)" },
        { value: "02:00 AM (Local Time)", label: "02:00 AM (Local Time)" },
        { value: "03:00 AM (Local Time)", label: "03:00 AM (Local Time)" },
        { value: "04:00 AM (Local Time)", label: "04:00 AM (Local Time)" },
        { value: "05:00 AM (Local Time)", label: "05:00 AM (Local Time)" },
        { value: "06:00 AM (Local Time)", label: "06:00 AM (Local Time)" },
        { value: "07:00 AM (Local Time)", label: "07:00 AM (Local Time)" },
        { value: "08:00 AM (Local Time)", label: "08:00 AM (Local Time)" },
        { value: "09:00 AM (Local Time)", label: "09:00 AM (Local Time)" },
        { value: "10:00 AM (Local Time)", label: "10:00 AM (Local Time)" },
        { value: "11:00 AM (Local Time)", label: "11:00 AM (Local Time)" },
        { value: "12:00 PM (Local Time)", label: "12:00 PM (Local Time)" },
        { value: "01:00 PM (Local Time)", label: "01:00 PM (Local Time)" },
        { value: "02:00 PM (Local Time)", label: "02:00 PM (Local Time)" },
        { value: "03:00 PM (Local Time)", label: "03:00 PM (Local Time)" },
        { value: "04:00 PM (Local Time)", label: "04:00 PM (Local Time)" },
        { value: "05:00 PM (Local Time)", label: "05:00 PM (Local Time)" },
        { value: "06:00 PM (Local Time)", label: "06:00 PM (Local Time)" },
        { value: "07:00 PM (Local Time)", label: "07:00 PM (Local Time)" },
        { value: "08:00 PM (Local Time)", label: "08:00 PM (Local Time)" },
        { value: "09:00 PM (Local Time)", label: "09:00 PM (Local Time)" },
        { value: "10:00 PM (Local Time)", label: "10:00 PM (Local Time)" },
        { value: "11:00 PM (Local Time)", label: "11:00 PM (Local Time)" },
    ];
    const weekends: any = [
        { value: "Every Sunday", label: "Every Sunday" },
        { value: "Every Monday", label: "Every Monday" },
        { value: "Every Tuesday", label: "Every Tuesday" },
        { value: "Every Wednesday", label: "Every Wednesday" },
        { value: "Every Thursday", label: "Every Thursday" },
        { value: "Every Friday", label: "Every Friday" },
        { value: "Every Saturday", label: "Every Saturday" },
    ];
    const monthly: any = [
        { value: "Every first Day", label: "Every first Day" },
        { value: "Every last Day", label: "Every last Day" }
    ];

    const onCityChange = (e: any) => {
        setSelectedCValues(e);
    };

    const onCityChange2 = (e: any) => {
        setSelectedCValues2(e);
    };

    useEffect(() => {
        if (selectedValues === values[0].value) {
            setDisableFromImmediately(true);
            setSelectedCValues2("-");
        } else if (selectedValues === values[3].value) {
            setDisableFromImmediately(false);
            setSelectedCValues2(monthly[0].value);
        } else if (selectedValues === values[2].value) {
            setDisableFromImmediately(false);
            setSelectedCValues2(weekends[5].value);
        } else if (selectedValues === values[1].value) {
            setDisableFromImmediately(false);
            setSelectedCValues2(datetime[0].value);
        } else {
            setDisableFromImmediately(false);
        }

    }, [selectedValues]);

    return (
        <React.Fragment>
            <div className="mt-5 flex flex-col space-y-2 font-inter">
                <div className="text-bold text-lg capitalize text-white">
                    Payout schedule <span className="text-xl font-extrabold text-spec-purple">*</span>
                </div>
                <div className="text-gray-300">Select when you want to receive the payment to your wallet.</div>
                <div className="flex w-full flex-col font-azeret-mono  md:flex-row">
                    <MantineProvider
                        theme={{
                            colors: {
                                "electricpurple": ["#b800f0"],
                            },
                        }}
                    >
                        <Select
                            className="md:w-6/12 font-azeret-mono font-bold my-4 md:my-0 md:mr-2"
                            styles={(theme) => ({item: {color: "white",  "&[data-selected]": {
                                "&, &:hover": {
                                    backgroundColor: theme.colorScheme === "dark" ? theme.colors.electricpurple : theme.colors.electricpurple,
                                    color: theme.white,
                                },
                            }},
                            dropdown: {backgroundColor: "#0F0246"},
                            input: {
                                borderRadius: 0,
                                backgroundColor: "#0F0246",
                                color: "white",
                                padding: "25px 0 25px 10px",
                                fontFamily: "'Azeret Mono', 'monospace'"},
                            selected: { backgroundColor: "#0F0246"}})
                            }
                            data={values}
                            rightSection={
                                <ArrowDropDownIcon className="text-white" />
                            }
                            onChange={onCityChange}
                            value={selectedValues}
                        />

                        <Select
                            className="md:w-6/12 font-azeret-mono font-bold md:ml-2"
                            styles={(theme) => ({item: {color: "white",  "&[data-selected]": {
                                "&, &:hover": {
                                    backgroundColor: theme.colorScheme === "dark" ? theme.colors.electricpurple : theme.colors.electricpurple,
                                    color: theme.white,
                                },
                            }},
                            dropdown: {backgroundColor: "#0F0246"},
                            input: {
                                borderRadius: 0,
                                backgroundColor: "#0F0246",
                                color: "white",
                                padding: "25px 0 25px 10px",
                                fontFamily: "'Azeret Mono', 'monospace'"},
                            selected: { backgroundColor: "#0F0246"}})
                            }
                            data={
                                selectedValues === "Immediately" ? defaultDisable :
                                    selectedValues === "Daily" ? datetime :
                                        selectedValues === "Weekly" ? weekends : monthly
                            }
                            rightSection={
                                <ArrowDropDownIcon className="text-white" />
                            }
                            onChange={onCityChange2}
                            value={selectedValues2}
                            readOnly={disablesFromImmediately}
                        />
                    </MantineProvider>
                </div>
            </div>
            <button className="mt-5 w-full bg-cyan-300 py-2 px-4 font-azeret-mono text-base font-bold uppercase text-floppy-disk md:max-w-[100px]">
                save
            </button>
        </React.Fragment>
    );
};

export default EarningsSetting;
