import Style from  './NaturaHouse.module.css' ;
import Img01 from './Naturahouse.png';
import charIcon from './chatIcon.png';
import {Link} from 'react-router-dom';
import productImg01 from './productImg01.png';
import productImg02 from './productImg02.png';
import productImg03 from './productImg03.png';
import productImg04 from './productImg04.png';
import ContentImg01 from './ContentImg01.png';
import ContentImg02 from './ContentImg02.png';
import ContentImg03 from './ContentImg03.png';
import ContentImg04 from './ContentImg04.png';


function NaturaHouse() {
    const shoplist  = [
        {
            'species': "코카투",
            "store": "나뚜라 하우스",
            "tags": ["앵무새", "미쉘", "미쉘앵무새"],
            "info": "안녕하세요. 희귀동물 전문 매장 나뚜라 스토어입니다\n\n머리 위의 우관이 매력적인 코카투 친구들은 지능이 높고 친화력이 좋아 꾸준히 사랑받는 종인데요!\n\n나뚜라 스토어의 사랑스러운 코카투 아이들오 함께할 가족을 찾고있어요!",
            "warning":"*사이테스 2급의 동물입니다\n담당자와 상담 후 분양이 가능합니다.",

        }
    ]
    const productlist = [
        {
            'species': "듀컵 코카투",
            "info": "4개월 / 여아",
            "img": productImg01
        },
        {
            'species': "듀컵 코카투",
            "info": "8개월 / 여아",
            "img": productImg02
        },
        {
            'species': "갈라 코카투",
            "info": "5개월 / 남아",
            "img": productImg03
        },
        {
            'species': "엄브렐라 코카투",
            "info": "2살 / 남아",
            "img": productImg04
        }
    ]
    const warnings = [
        {
            "species:": "코카투",
            "food": ["펠렛과 알곡 혼합", "과일 / 채소 / 견과 / 무염국수 및 파스타 추가급여 가능\n(급여를 다양하게 해주시는 것이 좋습니다)"],
            "life": ["울음소리가 비교적 큰 동물이기에 분양 시 고려해주세요", "우관을 정리하기 위해 '파우더'라는 흰 가루가 소량 발생합니다", "외로움을 잘 타는 친구들이기에 주인분과 함께할 시간이 늘 필요해요"]
        }
    ]
    return (
        <div className={Style.naturaHouseContainer}>
            {/* <h1>Natura House</h1> */}
            <hr className={Style.hrShadow}></hr>
            <img src={Img01} alt="Natura House" className={Style.mainImg} />
            <hr className={Style.shorthr}></hr>
            <div className={Style.shopList}>
                {
                shoplist.map((index) => 
                    (
                        <div className={Style.naturaHouseContent}>
                            <div id={Style.header}>
                                <span id={Style.species}>{index.species}</span>
                                <Link to='../../chat' id={Style.border}><img src={charIcon} alt="chatIcon" className={Style.chatIcon} /></Link>
                            </div>
                            <div id={Style.store}>{index.store}</div>
                            <div id={Style.tags}>
                                {
                                    index.tags.map((tag) => (
                                        <div className={Style.tag}>#{tag}</div>
                                    ))
                                }
                            </div>
                            <div id={Style.info}>{index.info}</div>
                            <div id={Style.warning}>{index.warning}</div>
                        </div>
                    ))
                }
            
            </div>
            <div id={Style.btnContainer}><button className={Style.adoptionbtn}>분양하러 가기</button></div>
            <hr className={Style.shorthr}></hr>
            <div className={Style.productList}>
                <div className={Style.productTitle}>보유개체</div>
                <div className={Style.productContainer}>
                {
                    productlist.map((index) => (
                        <div className={Style.product}>
                            <img src={index.img
                            } alt="productImg" className={Style.productImg} />
                            <div className={Style.productInfo}>
                                <div className={Style.productSpecies}>{index.species}</div>
                                <div className={Style.productspeInfo}>{index.info}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <hr className={Style.shorthr}></hr>
        <div className={Style.contentContainer}>
            <img src={ContentImg01} alt="contentImg" className={Style.contentImg} />
            <img src={ContentImg02} alt="contentImg" className={Style.contentImg} />               
            <img src={ContentImg03} alt="contentImg" className={Style.contentImg} />
            <img src={ContentImg04} alt="contentImg" className={Style.contentImg} />
        </div>
        <hr className={Style.shorthr}></hr>
        <div className={Style.warningsContainer}>
            <div className={Style.productTitle}>주의사항</div>
            {
            warnings.map( (index) => (
                <div className={Style.warning}>
                    <div className={Style.warningSpecies}>{index['species:']}</div>
                    <div className={Style.warningFood}>
                        *식단{
                        index.food.map((food) => (
                            <div className={Style.food}> - {food}</div>
                        ))
                        }
                    </div>
                    <div className={Style.warningLife}>*생활
                        {
                        index.life.map((life) => (
                            <div className={Style.life}> - {life}</div>
                        ))
                        }
                    </div>
                </div>
            ))
            }
        </div>
        <hr className={Style.shorthr}></hr>
        </div>
    );
    }

export default NaturaHouse;