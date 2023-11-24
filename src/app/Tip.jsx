'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Tip() {
    return (
        <div className='xl:block xl:w-[250px] lg:block lg:w-[180px] md:hidden'>
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
        </div>
    )
  }
  
  export default Tip;