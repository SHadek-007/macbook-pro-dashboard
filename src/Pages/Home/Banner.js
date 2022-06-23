import React from 'react';
import { TiArrowSortedUp } from "react-icons/ti";
import bannerPic from '../../Assets/banner1.png';
import pulse from '../../Assets/appointments logo/pulse.png';
import blood from '../../Assets/appointments logo/blood.png';
import oxygen from '../../Assets/appointments logo/oxygen.png';
import glucose from '../../Assets/appointments logo/glucose.png';

const Banner = () => {
    return (
        <div>
            <div className=' bg-gradient-to-r from-[#FF7594] to-[#FF7C65] rounded-lg'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='flex items-center '>
                    <img src={bannerPic} className='' alt="BannerPhoto" />
                </div>
                <div className='flex items-center'>
                    <div className='text-white p-5'>
                        <h1 className='text-xl font-semibold'>Hello, Marry Jane!</h1>
                        <p><small>Stay Up-to-Date with your appointments.</small></p>
                        <p><small>You Have No pending Reports</small></p>
                    </div>
                </div>
            </div>
        </div>
            <div className='grid grid-cols-1 md:grid-cols-4 mt-7 gap-4'>
                <div>
                    <div className='max-w-xs border bg-white rounded-lg p-2 shadow-lg'>
                        <img src={pulse} alt="" />
                        <div>
                            <p className='font-bold text-xs mt-3'>Pulse Count</p>
                            <p className='my-1'>60 bpm</p>
                            <div className='flex gap-x-3 items-center'>
                            <TiArrowSortedUp/>
                            <small className='text-[#03922B] font-semibold'>Normal</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <div className='max-w-xs border bg-white rounded-lg p-2 shadow-lg'>
                        <img src={blood} alt="" />
                        <div>
                            <p className='font-bold text-xs mt-3'>Blood Pressure</p>
                            <p className='my-1'>110/70 mmHg</p>
                            <div className='flex gap-x-3 items-center'>
                            <TiArrowSortedUp/>
                            <small className='text-[#82AB0D] font-semibold'>Slightly higher</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <div className='max-w-xs border bg-white rounded-lg p-2 shadow-lg'>
                        <img src={oxygen} alt="" />
                        <div>
                            <p className='font-bold text-xs mt-3'>Oxygen Saturation</p>
                            <p className='my-1'>97 %</p>
                            <div className='flex gap-x-3 items-center'>
                            <TiArrowSortedUp/>
                            <small className='text-[#82AB0D] font-semibold'>Slightly higher</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <div className='max-w-xs border bg-white rounded-lg p-2 shadow-lg'>
                        <img src={glucose} alt="" />
                        <div>
                            <p className='font-bold text-xs mt-3'>Glucose Count</p>
                            <p className='my-1'>100 mm/dL</p>
                            <div className='flex gap-x-3 items-center'>
                            <TiArrowSortedUp/>
                            <small className='text-[#03922B] font-semibold'>Normal</small>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;