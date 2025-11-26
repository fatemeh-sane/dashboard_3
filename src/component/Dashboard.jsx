import {IoStatsChart} from "react-icons/io5";
import ChartOne from "./ChartOne.jsx";
import ChartTwo from "./ChartTwo.jsx";
import ChartThree from "./ChartThree.jsx";
import ChartFour from "./ChartFour.jsx";


const Dashboard = () => {
    // const itemList= [{
    //     id:1,
    //     title:'کاربران',
    //     number:2500,
    //     icon:"*",
    //     bgColor:'#FFDEDE',
    //     color:'#F65464'
    // },
    //     {
    //         id:1,
    //         title:'کاربران',
    //         number:2500,
    //         icon:"*"
    //     },{
    //         id:1,
    //         title:'کاربران',
    //         number:2500,
    //
    //         icon:"*"
    //     },{
    //         id:1,
    //         title:'کاربران',
    //         number:2500,
    //         icon:"*"
    //     }
    //
    // ]


    return (<>
        {/*<div className="flex">*/}
        {/*    <img className="w-full" src="images/mainbg.svg" alt=""/>*/}
        {/*</div>*/}

        <div className='container'>

            <div className="grid grid-cols-4   relative -bottom-32 ">
                <div className="grid col-span-4 grid-cols-4  gap-4 m-12">
                    <div className='p-9 flex items-center justify-center gap-6 bg-primary shadow rounded-xl'>
                        <div
                            className=' flex  bg-subPurple items-center justify-center text-white w-14 h-14 rounded-md	'>
                            <IoStatsChart className='flex m-auto  text-xl '/>
                        </div>
                        <div className='flex items-start flex-col '>
                            <div className='text-2xl flex  items-center text-white font-bold '>۳۰۰,۰۰۰</div>
                            <div className='text-lg text-white'>تعداد کل تیم ها</div>
                        </div>
                    </div>
                    <div className='p-9 flex items-center justify-center gap-6 bg-primary shadow rounded-xl'>
                        <div
                            className=' flex  bg-subPurple items-center justify-center text-white w-14 h-14 rounded-md	'>
                            <IoStatsChart className='flex m-auto  text-xl '/>
                        </div>
                        <div className='flex items-start flex-col '>
                            <div className='text-2xl flex   items-center text-white font-bold '>۳۰۰,۰۰۰</div>
                            <div className='text-lg text-white'>تعداد کل تیم ها</div>
                        </div>
                    </div>
                    <div className='p-9 flex items-center justify-center gap-6 bg-primary shadow rounded-xl'>
                        <div
                            className=' flex  bg-subPurple items-center justify-center text-white w-14 h-14 rounded-md	'>
                            <IoStatsChart className='flex m-auto  text-xl '/>
                        </div>
                        <div className='flex items-start flex-col '>
                            <div className='text-2xl flex  items-center text-white font-bold '>۳۰۰,۰۰۰</div>
                            <div className='text-lg text-white'>تعداد کل تیم ها</div>
                        </div>
                    </div>
                    <div className='p-9 flex items-center justify-center gap-6 bg-primary shadow rounded-xl'>
                        <div
                            className=' flex  bg-subPurple items-center justify-center text-white w-14 h-14 rounded-md	'>
                            <IoStatsChart className='flex m-auto  text-xl '/>
                        </div>
                        <div className='flex items-start flex-col '>
                            <div className='text-2xl flex  items-center text-white font-bold '>۳۰۰,۰۰۰</div>
                            <div className='text-lg text-white'>تعداد کل تیم ها</div>
                        </div>
                    </div>
                </div>
                <div className={' grid col-span-4 grid-cols-4 gap-4 mx-12'}>
                        <div className={'grid col-span-2 shadow rounded-xl'} ><ChartOne/></div>
                        <div className={'grid col-span-2 shadow rounded-xl'}><ChartTwo/></div>
                        <div className={'grid col-span-2 shadow p-6 rounded-xl'}><ChartThree/></div>
                        <div className={'grid col-span-2 shadow  p-6 rounded-xl '}><ChartFour/></div>
                </div>
            </div>

   


        </div>

    </>)
}
export default Dashboard

