import React from 'react'

export const Table = ({ tableData, showData }) => {
    return (
        <>
            {showData &&
                <div className='h-96  pb-10  bg-tablebg w-11/12  overflow-scroll rounded-lg p-4'>
                    <div className='h-16  flex items-center'>
                        <div className='w-1/5'><span className='text-sm font-figtree font-normal pl-3'>Sl No.</span></div>
                        <div className='w-1/5'><span className='text-sm font-figtree font-normal pl-3 '>Links</span></div>
                        <div className='w-1/5'><span className='text-sm font-figtree font-normal pl-3 '>Prefix</span></div>
                        <div className='w-1/5'><span className='text-sm font-figtree font-normal pl-3 '>Add Tags</span></div>
                        <div className='w-2/6'><span className='text-sm font-figtree font-normal pl-3 '>Selected Tags</span></div>
                    </div>
                    <div className='pt-5 gap-5 flex  flex-col '>

                        {tableData && tableData.map((row, index) => (
                            <div className='bg-white flex h-16 rounded-lg  items-center'>
                                <div className='w-1/5'><span className='text-sm font-figtree font-normal pl-3 '>0{index + 1}</span></div>
                                <div className='w-1/5'><span className='text-sm font-figtree font-normal pl-3 underline text-blue-500 '>{row?.links}</span></div>
                                <div className='w-1/5'><span className='text-sm font-figtree font-normal pl-3'>{row?.prefix}</span></div>
                                <div className='w-1/5'><div className='text-sm font-figtree font-normal pl-3'><select className='p-2 border border-gray-200 rounded-lg' name="" id="">
                                    <option selected disabled value="
">
                                        Select Tag

                                    </option>
                                    {/* <option value="
                            ">

                            {row?.selecttags[0]}
                            </option> */}
                                </select>
                                </div></div>
                                <div className='w-2/6 text-sm font-figtree font-normal pl-3 '>
                                    <div className='bg-blue-500 rounded-md p-1 h-6 w-16 text-white text-xs flex justify-center items-center'>

                                        Tag 1

                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>



            }
        </>




    )
}
