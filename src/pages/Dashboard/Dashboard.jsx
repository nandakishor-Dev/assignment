import React, { useState } from "react";
import logo from "../../assets/images/Subtract.png";
import { SidebarOption } from "../../components/SidebarOption";
import dashboard from "../../assets/images/dashboard.png";
import ticket from "../../assets/images/ticket.svg";
import Document from "../../assets/images/Document.png";
import setting from "../../assets/images/setting.png";
import notification from "../../assets/images/notification.png";
import calendar from "../../assets/images/Calendar.png";
import upload from "../../assets/images/upload.svg";
import noti from "../../assets/images/noti.png";
import profile from "../../assets/images/profile.png";
import { Button } from "../../components/Button";
import { Table } from "../../components/Table";
import excel from "../../assets/images/excel.png";
import papaparse from "papaparse";
import { Box, CircularProgress } from "@mui/material";

export const Dashboard = () => {
    const [csvData, setCsvData] = useState();
    const [showData, setShowData] = useState(false);
    const [showProgress, setShowProgress] = useState(false);
    const [fileName, setFileName] = useState("");

    const handleFileSelect = (e) => {
        const fileList = e.target.files;
        const newFiles = Array.from(fileList);
        const file = newFiles[0].name;
        setFileName(file);
        setShowData(false);

        const reader = new FileReader();
        reader.onload = (event) => {
            const csvContent = event.target.result;
            papaparse.parse(csvContent, {
                header: true,
                complete: function (results) {
                    const data = results.data;
                    const cleanedData = data.map((ele) => {
                        let selectTags = ele["select tags"].split(",");
                        delete ele["select tags"];
                        delete ele["selected tags"]
                        return {
                            ...ele,
                            selectTags,
                            selectedTags: []
                        };
                    });
                    setCsvData(cleanedData);
                },
            });
        };

        reader.readAsText(e.target.files[0]);
    };

    //   console.log("file",file)

    const uploadData = () => {
        if (fileName && csvData.length > 0) {
            setShowProgress(true)
            setTimeout(() => {
                setShowProgress(false)
                setShowData(true);
            }, 1000);
        }
    };

    const handleRemove = () => {
        setFileName("");
        setCsvData();
        setShowData(false);
    };
    //updating tags
    const handleSelectTag = (index, value) => {
        const clonedCsvData = [...csvData]
        const { selectedTags } = clonedCsvData[index]
        const updatedSelectedTags = [...selectedTags, value]
        clonedCsvData[index].selectedTags = updatedSelectedTags
        setCsvData(clonedCsvData)
    }
    //remove tags
    const handleRemoveTag = (index, tagIndex) => {
        const clonedCsvData = [...csvData]
        let { selectedTags } = clonedCsvData[index]
        selectedTags.splice(tagIndex, 1)
        const updatedSelectedTags = [...selectedTags]
        clonedCsvData[index].selectedTags = updatedSelectedTags
        setCsvData(clonedCsvData)
    }


    // console.log({ csvData });
    return (
        <div className="flex">
            <div className="bg-white w-1/6">
                <div className="h-28 flex items-center  justify-center gap-4 ">
                    <img src={logo} alt="" />
                    <span className="font-montserrat font-normal text-2xl text-black">
                        Base
                    </span>
                </div>
                <div className="pt-4 flex flex-col gap-8 ">
                    <SidebarOption text="Dashboard" image={dashboard} />
                    <SidebarOption text="Upload" image={upload} />
                    <SidebarOption text="Invoice" image={ticket} />
                    <SidebarOption text="Schedule" image={Document} />
                    <SidebarOption text="Calender" image={calendar} />
                    <SidebarOption text="Notification" image={notification} />
                    <SidebarOption text="Settings" image={setting} />
                </div>
            </div>
            <div className="bg-custom  w-full pl-4 pr-4 pt-8">
                <div className="h-18 flex justify-between ">
                    <div>
                        <span className="font-figtree font-semibold text-2xl">
                            Upload CSV
                        </span>
                    </div>
                    <div className="flex gap-6 justify-center align-middle">
                        <div className="flex  justify-center align-middle">
                            <img className="w-6 h-8" src={noti} alt="" />
                        </div>
                        <div className="flex  justify-center align-middle">
                            <img className="rounded-2xl" src={profile} alt="" />
                        </div>
                    </div>
                </div>
                <div className=" min-h-screen  flex flex-col">
                    <div className="h-96  flex  justify-center ">
                        <div className="rounded-lg bg-white h-4/5 w-6/12 flex flex-col gap-5 p-3 mt-14">
                            <div className="border border-dotted rounded-lg h-4/5 flex items-center justify-center flex-col gap-5">
                                <div>
                                    <img src={excel} alt="" />
                                </div>
                                <div>
                                    {fileName ? (
                                        fileName
                                    ) : (
                                        <>
                                            Drop your excel sheet here or
                                            <label
                                                htmlFor="fileInput"
                                                className="text-blue-500 cursor-pointer"
                                            >
                                                {" "}
                                                browse
                                            </label>
                                            <input
                                                type="file"
                                                id="fileInput"
                                                style={{ display: "none" }}
                                                accept=".csv"
                                                onChange={handleFileSelect}
                                            />
                                        </>
                                    )}
                                </div>
                                {fileName && (
                                    <div
                                        onClick={handleRemove}
                                        className="text-red-500 cursor-pointer"
                                    >
                                        Remove
                                    </div>
                                )}
                            </div>
                            <div className="h-1/5">
                                <div className='bg-[#605bff] text-[white] border-[none] rounded-[10px] w-full h-full font-semibold  font-montserrat flex items-center justify-center cursor-pointer' onClick={uploadData}>
                                    {showProgress ?
                                        <Box sx={{ display: 'flex' }}>
                                            <CircularProgress sx={{ color: "white", fontSize: 16 }} />
                                        </Box>
                                        :
                                    "Upload" 
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" min-h-screen">
                        <p className="font-figtree font-semibold text-2xl">Uploads</p>
                        <div className="flex items-center h-full justify-center  pt-5">
                            <Table tableData={csvData} showData={showData} onSelectTag={handleSelectTag} handleRemoveTag={handleRemoveTag} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
