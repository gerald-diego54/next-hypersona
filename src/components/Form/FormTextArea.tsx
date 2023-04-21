import React from "react";

const FormTextArea: React.FC<{
    placeholder: string;
    label: string;
    rows?: number;
}> = ({ placeholder, label, rows }): JSX.Element => {
    return (
        <div className="flex flex-col space-y-2 mt-5">
            <div className="capitalize text-white font-azeret-mono text-bold text-lg">{label}</div>
            <textarea className="hyp-input p-2" placeholder={placeholder} rows={rows} />
        </div>
    );
};

export default FormTextArea;
