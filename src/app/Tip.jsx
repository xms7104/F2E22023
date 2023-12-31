'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../app/index.css'

function Tip({city, area, areaDetail, partyInformation}) {
    const [tipTitleArr, setTipTitleArr] = useState([])

    useEffect(() => {
        let titleArr = [];
        if(city.value !== undefined){
            titleArr.push(city.value);
        }
        if(area.value !== undefined){
            titleArr.push(area.value);
        }
        if(areaDetail.value !== undefined){
            titleArr.push(areaDetail.value);
        }

        setTipTitleArr(titleArr);
    },[city, area, areaDetail]);

    const swiperStyle = {
        width: 'auto !important',
    };

    function tipCardSwiper(){
        return tipTitleArr.map((item, index) => {
            return(
                <SwiperSlide key={item+'_'+index} className='w-auto !w-important' style={swiperStyle}>
                    <Card className='xl:w-[40vw] lg:w-[40vw] md:w-[40vw] sm:w-[65vw] mr-4'>
                        <Card.Body>
                            <p>{item}</p>
                            <div>
                                {tipCardContainer()}
                            </div>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
            )
        })
    }

    function tipCard(){
        return tipTitleArr.map((item, index) => {
            return(
                <Card key={item+'_'+index} className='mb-4'>
                    <Card.Body className=' lg:px-2 lg:py-2'>
                        <Card.Title>{item}</Card.Title>
                        {tipCardContainer()}
                    </Card.Body>
                </Card>
            )
        })
    }

    function tipCardContainer(){
        if(partyInformation.length !== 0){
            const title = Object.keys(partyInformation);
            if(title.length !== 0){
                return title.map((item, index) => {
                    if(item !== '有效票數'){
                        const votingNum = parseInt(partyInformation[item]['voting'].replace(/,/g, ''), 10);
                        const votingTotalNum = parseInt(partyInformation['有效票數'].replace(/,/g, ''), 10);
                        const votingProportion = ((votingNum / votingTotalNum) *100).toFixed(2);
                        return(
                            <div key={item}
                            className='w-auto flex justify-start lg:items-baseline lg:mb-4 md:items-center md:mb-2 sm:mb-2'>
                                <p 
                                    className='rounded-full h-[25px] w-[25px] xl:text-sm lg:text-xs md:text-xs sm:text-sx text-white flex justify-center items-center mr-2'
                                    style={{backgroundColor: partyInformation[item]['color']}}>
                                        {index+1}
                                    </p>
                                    <div className='border-r-2 border-solid mr-2 pr-2 xl:w-[130px] lg:w-[110px] md:w-[130px] sm:w-[130px]'
                                    style={{borderColor: partyInformation[item]['color']}}>
                                        <p className='xl:mb-2 lg:mb-1 md:mb-1 sm:mb-1 font-semibold xl:text-[18px] lg:text-base md:text-[14px] sm:md:text-[14px]'>{item}</p>
                                        <p className='xl:mb-2 lg:mb-1 md:mb-1 sm:mb-1 xl:text-sm lg:text-xs md:text-xs sm:text-xs w-max'>
                                            {partyInformation[item]['cp']} ｜ {partyInformation[item]['cvp']}
                                        </p>
                                    </div>
                                    <div>
                                        <p className='xl:mb-2 lg:mb-1 md:mb-1 sm:mb-1 xl:text-sm lg:text-xs md:text-xs sm:text-xs'>
                                            {votingProportion} %
                                        </p>
                                        <p className='xl:mb-2 lg:mb-1 md:mb-1 sm:mb-1 xl:text-sm lg:text-xs md:text-xs sm:text-xs'>
                                            {partyInformation[item]['voting']} 票
                                        </p>
                                    </div>
                            </div>
                        )
                    }
                })
            }
        }
    }

    function pcLayout(){
        return(
            <div className='xl:block xl:w-auto lg:grid lg:w-auto md:hidden'>
                {city.length === 0 ? (
                    <>
                        <Card
                        className="mb-2 bg-[#CCCCCC] text-black xl:w-auto lg:w-auto"
                        >
                        <Card.Body>
                            <div className='flex justify-start items-center'>
                                <FontAwesomeIcon icon={faCircleExclamation} />
                                <p className='mb-0 ml-1'>小提示</p>
                            </div>
                            <p className='mt-2 mb-0 mx-0 text-sm'>
                                點擊選擇縣市、區、村里，可查看選舉結果
                            </p>
                            <Image alt='seletTip' src={'/image/tipSelect.svg'} className='mt-3 mb-0 mx-auto' width={120} height={10} />
                        </Card.Body>
                        </Card>
                        <Card
                        className="mb-2 bg-[#CCCCCC] text-black w-full"
                        >
                        <Card.Body>
                            <div className='flex justify-start items-center'>
                                <FontAwesomeIcon icon={faCircleExclamation} />
                                <p className='mb-0 ml-1'>小提示</p>
                            </div>
                            <p className='mt-2 mb-0 mx-0 text-sm'>
                                點擊地圖查看縣市的選舉結果
                            </p>
                            <Image alt='seletTip' src={'/image/tipMap.svg'} className='mt-3 mb-0 mx-auto' width={120} height={10} />
                        </Card.Body>
                        </Card>
                    </>
                ) : tipCard() }
            </div>
        )
    }

    function mobileLayout(){
        return(
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                >
                {city.value === undefined ? (
                    <>
                        <SwiperSlide>
                            <Card
                                className="mb-2 bg-[#CCCCCC] text-black w-[90%] mx-auto my-0"
                                >
                                <Card.Body>
                                    <div className='flex justify-start items-center'>
                                        <FontAwesomeIcon icon={faCircleExclamation} />
                                        <p className='mb-0 ml-1'>小提示</p>
                                    </div>
                                    <p className='mt-2 mb-0 mx-0 text-sm'>
                                        點擊選擇縣市、區、村里，可查看選舉結果
                                    </p>
                                    <Image alt='seletTip' src={'/image/tipSelect.svg'} className='mt-3 mb-0 mx-auto' width={120} height={10} />
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card
                            className="mb-2 bg-[#CCCCCC] text-black w-[90%] mx-auto my-0"
                            >
                            <Card.Body>
                                <div className='flex justify-start items-center'>
                                    <FontAwesomeIcon icon={faCircleExclamation} />
                                    <p className='mb-0 ml-1'>小提示</p>
                                </div>
                                <p className='mt-2 mb-0 mx-0 text-sm'>
                                    點擊地圖查看縣市的選舉結果
                                </p>
                                <Image alt='seletTip' src={'/image/tipMap.svg'} className='mt-3 mb-0 mx-auto' width={120} height={10} />
                            </Card.Body>
                            </Card>
                        </SwiperSlide>
                    </>
                ): tipCardSwiper()
                }
            </Swiper>
        )
    }

    return (
        <div className='xl:w-[30%] lg:w-[61%]'>
            <div className='xl:block lg:block md:hidden sm:hidden w-auto'>
                {pcLayout()}
            </div>
            <div className='xl:hidden lg:hidden md:block sm:block'>
                {mobileLayout()}
            </div>
        </div>
    )
  }
  
  export default Tip;