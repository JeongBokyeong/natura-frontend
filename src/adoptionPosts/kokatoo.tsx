import React from 'react';
import kokatooStyles from './kokatoo.module.css';

import relatedImg from './relatedImg.png';
import heart from './heart.jpg';
// import Likes from './likes';
import list from './list';
import { useRef } from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
function Kokatoo() {
    const ref = useRef(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.id);

    alert(event.currentTarget.id);
    };
    return (
        
        <div className={kokatooStyles.kokatooContainer}>
            <Header/>
            
            <hr className={kokatooStyles.hrShadow}></hr>
            <div className={kokatooStyles.v}>
            <div className={kokatooStyles.tags}>
                <span className={kokatooStyles.tag}><a href='#'>#왕관 앵무</a></span>
                <span className={kokatooStyles.tag}><a href='#'>#갈라 코카투</a></span>
                <span className={kokatooStyles.tag}><a href='#'>#듀컵 코카투</a></span>
                <span className={kokatooStyles.tag}><a href='#'>#미쉘</a></span>
                <span className={kokatooStyles.tag}><a href='#'>#엄브렐라 코카투</a></span>
                <span className={kokatooStyles.tag}><a href='#'>#대형 앵무</a></span>
                <span className={kokatooStyles.tag}><a href='#'>#앵무새</a></span>
             </div>
             <div className={kokatooStyles.tagImg}>
                    <img src={relatedImg} alt="연관키워드" id={kokatooStyles.relatedImg}></img>
                    <span>연관키워드</span>
            </div>
            <div className={kokatooStyles.numOfSearchResults}><span id={kokatooStyles.number}>31 </span><span id={kokatooStyles.numberExplanation}>개의 검색결과</span></div>
            <hr className={kokatooStyles.hrShadowUp}></hr>
             <div>
                
                
                <div className={kokatooStyles.sort}>
                    {/* dropdown button */}
                    <div className={kokatooStyles.dropdown}>
                        <button className={kokatooStyles.dropbtn}>인기순</button>
                        <div className={kokatooStyles.dropdownContent}>
                            {/* return button value */}
                            <button 
                                // id={kokatooStyles.pop}
                                // onClick={handleClick}>
                                ref={ref}
                                onClick={handleClick}
                                id = {kokatooStyles.pop}>
                                인기순
                            </button>
                            <button
                                // id = {kokatooStyles.rel}
                                // onClick={handleClick}>
                                ref={ref}
                                onClick={handleClick}
                                id = {kokatooStyles.rel}>
                                최신순
                            </button>
                            <button
                                // id = {kokatooStyles.like}
                                // onClick={handleClick} >
                                ref={ref}
                                onClick={handleClick}
                                id = {kokatooStyles.like}>
                                좋아요순
                            </button>
                        </div>
                    </div>
                  </div>
            </div>
            <div className={kokatooStyles.kokatoo__body}>
                <div className={kokatooStyles.posts}>
                    {list.map((post) => (
                        <Link to ={post.link}>
                        <div className={kokatooStyles.post}>
                            <img src={post.image} alt={post.name} className={kokatooStyles.post__img} />
                            <div className={kokatooStyles.post__data}>
                                <div className={kokatooStyles.post__titleContiner}>
                                    <div className={kokatooStyles.post__title}>{post.name}</div>
                                    <div>
                                        <img src={heart} alt="heart" className={kokatooStyles.heart}/>
                                        
                                        {/* <span className={kokatooStyles.likes}>{post.likes}</span> */}
                                    </div>
                                </div>
                                <p className={kokatooStyles.post__description}>
                                    {post.tags.map((tag) => (
                                        <span className={kokatooStyles.post__tag}>#{tag}</span>
                                    ))}
                                </p>                           
                                <div className={kokatooStyles.post__info}>{post.info}</div>
                                <div className={kokatooStyles.post__likes}>
                                    {/* <span className={kokatooStyles.post__likesNumber}>{post.likes}</span> */}
                                </div>  
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Kokatoo;