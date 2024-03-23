import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export const Table = ({ tableData, showData, onSelectTag, handleRemoveTag }) => {

  return (
    <>
      {showData && (
        <div className="h-screen   bg-tablebg w-11/12   rounded-lg p-4">
          <div className="h-10  flex items-center">
            <div className="w-1/5">
              <span className="text-sm font-figtree font-normal pl-3">
                Sl No.
              </span>
            </div>
            <div className="w-1/5">
              <span className="text-sm font-figtree font-normal pl-3 ">
                Links
              </span>
            </div>
            <div className="w-1/5">
              <span className="text-sm font-figtree font-normal pl-3 ">
                Prefix
              </span>
            </div>
            <div className="w-1/5">
              <span className="text-sm font-figtree font-normal pl-3 ">
                Add Tags
              </span>
            </div>
            <div className="w-2/6">
              <span className="text-sm font-figtree font-normal pl-3 ">
                Selected Tags
              </span>
            </div>
          </div>
          <div className=" pt-5 h-full gap-5 flex overflow-x-scroll  flex-col ">
            {tableData &&
              tableData.map((row, index) => (
                <div
                  key={index}
                  className="bg-white pt-4 pb-4 flex rounded-lg  items-center"
                >
                  <div className="w-1/5">
                    <span className="text-sm font-figtree font-normal pl-3 ">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="w-1/5">
                    <span className="text-sm font-figtree font-normal pl-3 underline text-blue-500 ">
                      {row?.links}
                    </span>
                  </div>
                  <div className="w-1/5">
                    <span className="text-sm font-figtree font-normal pl-3">
                      {row?.prefix}
                    </span>
                  </div>
                  <div className="w-1/5">
                    <div className="text-sm font-figtree font-normal pl-3">

                      <select
                        onChange={(event) => onSelectTag(index, event.target.value)}
                        className="p-2 border border-gray-200 rounded-lg"
                        name=""
                        id=""
                      >
                        <option
                          selected
                          disabled
                          value="
"
                        >
                          Select Tag
                        </option>
                        {row.selectTags.map((tag, tagIndex) => (
                          <option key={tagIndex} value={tag}>
                            {tag}
                          </option>
                        ))}
                      </select>
                      {/* <FormControl fullWidth sx={{ marginTop: 0, marginBottom: 0 }}>

                   
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          size="small"
                          className="p-2 border border-gray-200 rounded-lg"
                          sx={{ borderRadius: '5px', width: "80%" }}
                          label="Age"
                          onChange={(event) => onSelectTag(index, event.target.value)}
                        >

                          {row.selectTags.map((tag, tagIndex) => (
                            <MenuItem key={tagIndex} value={tag}>      {tag}</MenuItem>
                          ))}

                        </Select>
                      </FormControl> */}

                    </div>
                  </div>
                  <div className="w-2/6 text-sm font-figtree flex gap-3 font-normal pl-3 flex-wrap ">
                    {row.selectedTags.map((selectedTags, selectedTagIndex) => (

                      <div className="bg-blue-500 rounded-md p-2 h-6 w-auto text-white text-xs flex justify-center items-center gap-2">
                        <span>{selectedTags}</span>
                        <span className="cursor-pointer "
                          onClick={() => handleRemoveTag(index,selectedTagIndex)}
                        >X</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};
