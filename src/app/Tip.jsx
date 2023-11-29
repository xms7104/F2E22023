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
                    <Card className='w-[40vw] mr-4'>
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
                <Card key={item+'_'+index} style={{ width: '18rem' }}>
                    <Card.Body>
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
                            className='xl:w-[27vw] lg:w-[27vw] md:w-[56vw] sm:w-[60vw] flex justify-start lg:items-baseline lg:mb-4 md:items-center md:mb-2 sm:mb-2'>
                                <p 
                                    className='rounded-full h-[25px] w-[25px] text-sm text-white flex justify-center items-center mr-2'
                                    style={{backgroundColor: partyInformation[item]['color']}}>
                                        {index+1}
                                    </p>
                                    <div className='border-r-2 border-solid mr-2 pr-2 w-[40%]'
                                    style={{borderColor: partyInformation[item]['color']}}>
                                        <p className='mb-2 font-semibold text-[18px]'>{item}</p>
                                        <p className='mb-2 text-sm'>
                                            {partyInformation[item]['cp']} ｜ {partyInformation[item]['cvp']}
                                        </p>
                                    </div>
                                    <div>
                                        <p className='mb-2'>
                                            {votingProportion} %
                                        </p>
                                        <p className='mb-2'>
                                            {partyInformation[item]['voting']}
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
        console.log(city)
        return(
            <div className='xl:block xl:w-[250px] lg:block lg:w-[180px] md:hidden'>
                {city.value === 0 ? (
                    <>
                        <Card
                        className="mb-2 bg-[#CCCCCC] text-black w-[90%]"
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
                        className="mb-2 bg-[#CCCCCC] text-black w-[90%]"
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
        <div>
            <div className='xl:block lg:block md:hidden sm:hidden'>
                {pcLayout()}
            </div>
            <div className='xl:hidden lg:hidden md:block sm:block'>
                {mobileLayout()}
            </div>
        </div>
    )
  }
  
  export default Tip;