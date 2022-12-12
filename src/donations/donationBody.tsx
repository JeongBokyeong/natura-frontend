import React from 'react';
import DonationBodyStyle from './donationBody.module.css';
import Img01 from './DonationImg/donation01.jpg';
import Img02 from './DonationImg/donation02.jpg';
import Img03 from './DonationImg/donation03.jpg';
import Img04 from './DonationImg/donation04.jpg';
import Img05 from './DonationImg/donation05.jpg';
import Img06 from './DonationImg/donation06.jpg';
import Img07 from './DonationImg/donation07.jpg';
import Img08 from './DonationImg/donation08.jpg';
import Img09 from './DonationImg/donation09.jpg';
import Img10 from './DonationImg/donation10.jpg';
import Img11 from './DonationImg/donation11.jpg';
import Img12 from './DonationImg/donation12.jpg';


function DonationBody() {
    const donationImg =[
        {   
            "id": 1,
            "img": Img01,
            "title": "멸종위기에 놓여있는 흑동고래를 살려주세요",
            "source": "동물연합 Y&B",
            "percent": 38,
            "current": "2,841,200",
            "currentInt": 2841200,
        },
        {
            "id": 2,
            "img": Img02,
            "title": "개 보신탕으로 고통받는 강아지들을 도와주세요",
            "source": "안산중앙동물복지연합회",
            "percent": 38,
            "current": "8,320,600",
            "currentInt": 8320600
        },
        {
            "id": 3,
            "img": Img03,
            "title": "동물실험으로부터 고통받는 동물들을 구해요",
            "source": "이산법인 동물환경연대",
            "percent": 11,
            "current": "416,400",
            "currentInt": 416400
        },
        {
            "id": 4,
            "img": Img04,
            "title": "멸종위기에 놓여있는 고래상어를 살려주세요..",
            "source": "보민스인터내셔널",
            "percent": 24,
            "current": "368,100",
            "currentInt": 368100
        },
        {
            "id": 5,
            "img": Img05,
            "title": "동물실험으로 고통받는 동물들을 구해요",
            "source": "이산법인 동물환경연대",
            "percent": 11,
            "current": "416,400",
            "currentInt": 416400
        },
        {
            "id": 6,
            "img": Img06,
            "title": "서식지를 빼앗기고 있는 코알라 친구들을 도와주세요",
            "source": "OSN",
            "percent": 54,
            "current": "4,962,900",
            "currentInt": 4962900
        },
        {
            "id": 7,
            "img": Img07,
            "title": "아름다운 동식물의 보금자리, 맹그로브 숲을 지켜주세요.",
            "source": "동물연합 Y&B",
            "percent": 38,
            "current": "2,841,200",
            "currentInt": 2841200
        },
        {
            "id": 8,
            "img": Img08,
            "title": "해양오염으로 고통받는 바다생물들을 구해요",
            "source": "안산중앙동물복지연합회",
            "percent": 79,
            "current": "8,320,600",
            "currentInt": 8320600
        },
        {
            "id": 9,
            "img": Img09,
            "title": "동물실험으로 고통받는 동물들을 구해요",
            "source": "이산법인 동물환경연대",
            "percent": 11,
            "current": "416,400",
            "currentInt": 416400
        },
        {
            "id": 10,
            "img": Img10,
            "title": "녹아내리는 빙아로 갈 곳을 잃은 북극곰들을 도와주세요",
            "source": "보민스인터내셔널",
            "percent": 24,
            "current": "368,100",
            "currentInt": 368100
        },
        {
            "id": 11,
            "img": Img11,
            "title": "동물실험으로 고통받는 동물들을 구해요",
            "source": "이산법인 동물환경연대",
            "percent": 11,
            "current": "416,400",
            "currentInt": 416400
        },
        {
            "id": 12,
            "img": Img12,
            "title": "잘못 알려진 상식으로 상아를 빼앗기고 있는 코뿔소들을 구해요",
            "source": "더 라이트 핸즈",
            "percent": 54,
            "current": "4,962,900",
            "currentInt": 4962900
        }

    ]

  return (
      <div className={DonationBodyStyle.wrapper}>
        <div className={DonationBodyStyle.preview}>
            <div>
                {
                donationImg.map((item) => (
                    <div className={DonationBodyStyle.contentBorder} key = {item.id}>
                        <a href='#'>
                            <img src={item.img}/>
                            <div className={DonationBodyStyle.content}>
                                <div className={DonationBodyStyle.imgTitle}>{item.title}</div>
                                <div className={DonationBodyStyle.imgSource}>{item.source}</div>
                                <div className={DonationBodyStyle.graphBar}>
                                    <span className={DonationBodyStyle.imgPercent}>{item.percent}% </span>
                                    {/* create a vertical bar chart */}
                                    <div className={DonationBodyStyle.graph}></div>

                                    <span className={DonationBodyStyle.imgCurrent}>{item.current}원</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    ))
                }
            </div>
        </div>
      </div>
  )
}

export default DonationBody
