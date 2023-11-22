'use client';
import React from 'react';
import Image from 'next/image';

function TaiWanMap() {
    const taiwanMap = [
        {id:0, name: '基隆市', size:13, top:131, left:395, value:'Keelung', uri:'/image/Keelung/KeelungDefault.png'},
        {id:1, name: '台北市', size:22, top:132, left:366, value:'Taipei', uri:'/image/Taipei/TaipeiDefault.png'},
        {id:2, name: '新北市', size:85, top:113, left:341, value:'NewTaipei', uri:'/image/NewTaipei/NewTaipeiDefault.png'},
        {id:3, name: '桃園市', size:62, top:141, left:316, value:'Taoyuan', uri:'/image/Taoyuan/TaoyuanDefault.png'},
        {id:4, name: '新竹市', size:18, top:177, left:296, value:'HsinchuCity', uri:'/image/HsinchuCity/HsinchuCityDefault.png'},
        {id:5, name: '新竹縣', size:55, top:159, left:304, value:'Hsinchu', uri:'/image/Hsinchu/HsinchuDefault.png'},
        {id:6, name: '苗栗縣', size:80, top:194, left:277, value:'Miaoli', uri:'/image/Miaoli/MiaoliDefault.png'},
        {id:7, name: '台中市', size:115, top:226, left:251, value:'Taichung', uri:'/image/Taichung/TaichungDefault.png'},
        {id:8, name: '彰化縣', size:46, top:274, left:234, value:'Changhua', uri:'/image/Changhua/ChanghuaDefault.png'},
        {id:9, name: '南投縣', size:80, top:247, left:283, value:'Nantou', uri:'/image/Nantou/NantouDefault.png'},
        {id:10, name: '雲林縣', size:60, top:300, left:221, value:'Yunlin', uri:'/image/Yunlin/YunlinDefault.png'},
        {id:11, name: '嘉義市', size:24, top:334, left:241, value:'ChiayiCity', uri:'/image/ChiayiCity/ChiayiCityDefault.png'},
        {id:12, name: '嘉義縣', size:92, top:324, left:219, value:'Chiayi', uri:'/image/Chiayi/ChiayiDefault.png'},
        {id:13, name: '台南市', size:70, top:362, left:221, value:'Tainan', uri:'/image/Tainan/TainanDefault.png'},
        {id:14, name: '高雄市', size:100, top:342, left:222, value:'Kaohsiung', uri:'/image/Kaohsiung/KaohsiungDefault.png'},
        {id:15, name: '屏東縣', size:45, top:421, left:251, value:'Pingtung', uri:'/image/Pingtung/PingtungDefault.png'},
        {id:16, name: '屏東鄉琉球鄉', size:20, top:489, left:213, value:'Liuqiu', uri:'/image/Liuqiu/LiuqiuDefault.png'},
        {id:17, name: '宜蘭縣', size:55, top:159, left:364, value:'Yilan', uri:'/image/Yilan/YilanDefault.png'},
        {id:18, name: '宜蘭縣龜山島', size:20, top:154, left:436, value:'Guishan', uri:'/image/Guishan/GuishanDefault.png'},
        {id:19, name: '花蓮縣', size:82, top:231, left:324, value:'Hualien', uri:'/image/Hualien/HualienDefault.png'},
        {id:20, name: '台東縣', size:58, top:366, left:299, value:'Taitung', uri:'/image/Taitung/TaitungDefault.png'},
        {id:21, name: '台東縣蘭嶼鄉', size:20, top:472, left:357, value:'Lanyu', uri:'/image/Lanyu/LanyuDefault.png'},
        {id:22, name: '台東縣綠島鄉', size:10, top:412, left:392, value:'Ludao', uri:'/image/Ludao/LudaoDefault.png'},
        {id:23, name: '澎湖縣', size:32, top:363, left:152, value:'Penghu', uri:'/image/Penghu/PenghuDefault.png'},
        {id:24, name: '金門縣', size:28, top:230, left:150, value:'Kinmen', uri:'/image/Kinmen/KinmenDefault.png'},
        {id:25, name: '連江縣馬祖', size:20, top:132, left:242, value:'Lienchiang', uri:'/image/Lienchiang/LienchiangDefault.png'},
    ];

    function taiwan(){
        return taiwanMap.map((item, index) => {
          return(
            <button key={item.id} className='absolute'
            style={{top:item.top, left: item.left}}>
              <Image alt={item.name} src={item.uri} width={item.size} height={40} />
            </button>
          )
        })
    }
    return (
        <div className='relative w-[40%] h-screen my-0 mx-auto'>
            {taiwan()}
        </div>
    )
  }
  
  export default TaiWanMap;