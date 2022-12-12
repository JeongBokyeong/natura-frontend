import ContentsStyle from './Contents.module.css';
import snake from '../AnimalIcons/snake.png';
import parrot from '../AnimalIcons/parrot.png';
import lizard from '../AnimalIcons/lizard.png';
import fish from '../AnimalIcons/fish.png';
import all from '../AnimalIcons/all.png';
import turtle from '../AnimalIcons/turtle.png';
import fox from '../AnimalIcons/fox.png';
import shop1 from '../shopImgs/shop1.png';
import shop2 from '../shopImgs/shop2.png';
import shop3 from '../shopImgs/shop3.png';

import snakeHovered from '../AnimalIcons/snakeHovered.png';
import parrotHovered from '../AnimalIcons/parrotHovered.png';
import lizardHovered from '../AnimalIcons/lizardHovered.png';
import fishHovered from '../AnimalIcons/fishHovered.png';
import foxHovered from '../AnimalIcons/foxHovered.png';
import turtleHovered from '../AnimalIcons/turtleHovered.png';

import Banner from './Banner/utils';


function Contents(){
    const Posts = [
        
        {
            "post_id": "shop1",
            "img" : shop1,
            "title" :"사랑마을 병원 샵",
            "detail" : "11종 앵무새 보유",
            "detail2" : "유리앵무 / 사랑앵무 / 모란앵무 /왕관앵무 / 로리앵무"
        },
        {
            "post_id": "shop1",
            "img" : shop2,
            "title" : "버드트리",
            "detail" : "4종 앵무새 보유",
            "detail2" : "썬코뉴어 / 파인애플코뉴어 / 블루코뉴어 / 옐로사이드코뉴어"
        },
        {
            "post_id": "shop1",
            "img" : shop3,
            "title" : "그린앵그리버드샵",
            "detail" : "4종 앵무새 보유",
            "detail2" : "갈라코카투 / 트리톤코카투 / 엄브렐라코카투 / 홍금강앵무"
        }
    ]
    const PopularAnimals= [
        {
            "species" : "전체보기",
            "link" : "#",
            "img" : all,
            "imgHovered": all
        },
        {
            "species" : "앵무새",
            "link" : "#",
            "img" : parrot,
            "imgHovered": parrotHovered
        },
        {
            "species" : "뱀",
            "link" : "#",
            "img" : snake,
            "imgHovered": snakeHovered
        },
        {
            "species" : "물고기",
            "link" : "#",
            "img" : fish,
            "imgHovered": fishHovered
        },
        {
            "species" : "거북이",
            "link" : "#",
            "img" : turtle,
            "imgHovered": turtleHovered
        },
        {
            "species" : "여우",
            "link" : "#",
            "img" :fox,
            "imgHovered": foxHovered
        },
        {
            "species" : "도마뱀",
            "link" : "#",
            "img" : lizard,
            "imgHovered": lizardHovered
        }
    ]
    const Community = [
        {
            "post_id": "shop1",
            "img" : shop1,
            "title" :"사랑마을 병원 샵",
            "detail" : "11종 앵무새 보유",
            "detail2" : "유리앵무 / 사랑앵무 / 모란앵무 /왕관앵무 / 로리앵무"
        },
        {
            "post_id": "shop1",
            "img" : shop1,
            "title" :"사랑마을 병원 샵",
            "detail" : "11종 앵무새 보유",
            "detail2" : "유리앵무 / 사랑앵무 / 모란앵무 /왕관앵무 / 로리앵무"
        },
        {
            "post_id": "shop1",
            "img" : shop1,
            "title" :"사랑마을 병원 샵",
            "detail" : "11종 앵무새 보유",
            "detail2" : "유리앵무 / 사랑앵무 / 모란앵무 /왕관앵무 / 로리앵무"
        }
    ]
    const Donations = [
        {
            "post_id": "shop2",
            "img" : shop2,
            "title" :"사랑마을 병원 샵",
            "detail" : "11종 앵무새 보유",
            "detail2" : "유리앵무 / 사랑앵무 / 모란앵무 /왕관앵무 / 로리앵무"
        },
        {
            "post_id": "shop2",
            "img" : shop2,
            "title" :"사랑마을 병원 샵",
            "detail" : "11종 앵무새 보유",
            "detail2" : "유리앵무 / 사랑앵무 / 모란앵무 /왕관앵무 / 로리앵무"
        },
        {
            "post_id": "shop2",
            "img" : shop2,
            "title" :"사랑마을 병원 샵",
            "detail" : "11종 앵무새 보유",
            "detail2" : "유리앵무 / 사랑앵무 / 모란앵무 /왕관앵무 / 로리앵무"
        }
    ]
    const shops = [
        {
            "post_id": "shop1",
            "img" : shop1,
            "title" :"사랑마을 병원 샵",
            "detail" : "11종 앵무새 보유",
            "detail2" : "유리앵무 / 사랑앵무 / 모란앵무 /왕관앵무 / 로리앵무"
        },
        {
            "post_id": "shop2   ",
            "img" : shop2,
            "title" :"사랑마을 병원 샵",
            "detail" : "11종 앵무새 보유",
            "detail2" : "유리앵무 / 사랑앵무 / 모란앵무 /왕관앵무 / 로리앵무"
        },
        {
            "post_id": "shop3",
            "img" : shop3,
            "title" :"사랑마을 병원 샵",
            "detail" : "11종 앵무새 보유",
            "detail2" : "유리앵무 / 사랑앵무 / 모란앵무 /왕관앵무 / 로리앵무"
        }
    ]

    return (
        <div className = {ContentsStyle.contentContainer}>
            
             <div className = {ContentsStyle.whiteSpace}></div>
             <div className={ContentsStyle.banner}><Banner/></div>
             
             {/* <BannerSwipe/> */}
              {/* <div className = {ContentsStyle.whiteSpace}></div> */}
            <div className={ContentsStyle.popContainer}>
                <div className={ContentsStyle.subtitle}>인기동물 둘러보기</div>
                <div className={ContentsStyle.contentOfcontent}>
                    {
                        PopularAnimals.map((name) => (
                            <div className={ContentsStyle.contentBorder} key={name.species}>
                                    <a href={name.link}>
                                        <img src={name.img} alt = {name.species}/>
                                        <img src={name.imgHovered} alt = {name.species} className={ContentsStyle.popAnimalsHovered}/>
                                        {/* <img className={ContentsStyle.line} src={line} alt="line"/> */}
                                        <div className={ContentsStyle.Text}>{name.species}</div>
                                    </a>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* <div className={ContentsStyle.subT}</div> */}
            <div className = {ContentsStyle.whiteSpace}></div>
            {/* <hr className={ContentsStyle.line}/> */}
            {/* <div className = {ContentsStyle.whiteSpace2}></div> */}
            <div className={ContentsStyle.shops}>
                <div>
                    {
                        shops.map((post) => (
                            <a href='#' className={ContentsStyle.shopsContainer} key={post.post_id}>
                                <img src={post.img} alt = {post.post_id} className={ContentsStyle.shopImg}/>
                                <div className={ContentsStyle.ShopHeader}>
                                    <div className={ContentsStyle.shopName}>{post.title}</div>
                                    {/* <Likes className={ContentsStyle.likes}/> */}
                                </div>
                                <div className={ContentsStyle.shopInfo}>
                                    <div>{post.detail}</div>
                                    <div>{post.detail2}</div>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
            <div className = {ContentsStyle.whiteSpace2}></div>
            <div className={ContentsStyle.moreShops}>
                <a href='#'>더보기</a>
            </div>
            <hr className={ContentsStyle.line}/>
            <div className = {ContentsStyle.whiteSpace2}></div>
            <div className={ContentsStyle.subT}>커뮤니티</div>
            <div className={ContentsStyle.shops}>
                <div>
                    {
                        Donations.map((post) => (
                            <a href='#' className={ContentsStyle.shopsContainer} key={post.post_id}>
                                <img src={post.img} alt = {post.post_id} className={ContentsStyle.shopImg}/>
                                <div className={ContentsStyle.ShopHeader}>
                                    <div className={ContentsStyle.shopName}>{post.title}</div>
                                    {/* <Likes className={ContentsStyle.likes}/> */}
                                </div>
                                <div className={ContentsStyle.shopInfo}>
                                    <div>{post.detail}</div>
                                    <div>{post.detail2}</div>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
            <div className={ContentsStyle.moreShops}>
                <a href='#'>더보기</a>
            </div>
            <hr className={ContentsStyle.line}/>
            <div className = {ContentsStyle.whiteSpace2}></div>
            <div className={ContentsStyle.subT}>진행중인 모금</div>
            <div className={ContentsStyle.shops}>
                <div>
                    {
                        Community.map((post) => (
                            <a href='#' className={ContentsStyle.shopsContainer} key={post.post_id}>
                                <img src={post.img} alt = {post.post_id} className={ContentsStyle.shopImg}/>
                                <div className={ContentsStyle.ShopHeader}>
                                    <div className={ContentsStyle.shopName}>{post.title}</div>
                                    {/* <Likes className={ContentsStyle.likes}/> */}
                                </div>
                                <div className={ContentsStyle.shopInfo}>
                                    <div>{post.detail}</div>
                                    <div>{post.detail2}</div>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
            <div className={ContentsStyle.moreShops}>
                <a href='#'>더보기</a>
            </div>
            {/* <DropDownMenu></DropDownMenu> */}
            {/* add white space */}
            <div className = {ContentsStyle.whiteSpace2}></div>
            {/* <div className = {ContentsStyle.whiteSpace2}></div> */}
            {/* <div className = {ContentsStyle.whiteSpace2}></div>      */}
            
            {/* <h1>dsjhfskhdf</h1> */}
    </div>
    );
}
export default Contents

