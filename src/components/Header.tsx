import React from 'react';
import HeaderStyle from './Header.module.css';
import logo from '../Logo/mypageLogo.png';  
import menuIcon from '../Logo/menuIcon.svg';
import FacebookIcon from '../Logo/Facebook.png';
import InstaIcon from '../Logo/Insta.png';
import NaverIcon from '../Logo/Naver.png';
import ChatIcon from '../Logo/Chat.png';
import MainLogo from '../Logo/MainLogo.png';
import { Route, Link } from 'react-router-dom';
import Search from './search/search';
import shrink from './shrinkMenubar/shrink';

function Header() {
//  if user's first visit, show the tutorial
//  if user's not first visit, show the main page
  const [isFirstVisit, setIsFirstVisit] = React.useState(true);

  // confirm user's first visi

  return (
    // <BrowserRouter>/
      <header className={HeaderStyle.header}>
        <div className={HeaderStyle.headerSearch}>
          {/* <Link to='/' className={HeaderStyle.linktoMain}> */}
            <img src={MainLogo} alt="MainLogo"  className={HeaderStyle.MainLogo}/>
            <div className={HeaderStyle.Logo}>
              <Link to='/'>NATURA</Link>
            </div>
            <div className={HeaderStyle.search}>
              <Search/>
            </div>  
          <div className={HeaderStyle.Icons}>
              <Link to='/mypage'><img src={logo} alt="logo" className={HeaderStyle.logo}/></Link>
              <Link to='/chat'><img src={ChatIcon} alt="menuIcon" className={HeaderStyle.ChatIcon}/></Link>
          </div>
        </div>
        {/* <div className={HeaderStyle.collapsingPart}> */}
          <hr className={HeaderStyle.headerHr}/> 
          <div className={HeaderStyle.HeaderUtils}>
            <div className={HeaderStyle.Menus}>
              <a href="#">
                <img src={FacebookIcon} alt="FacebookIcon" />
              </a>
              <a href="#">
                <img src={InstaIcon} alt="InstaIcon" />
              </a>
              <a href="#">
                <img src={NaverIcon} alt="NaverIcon" />
              </a>
              
            </div>
            <div className={HeaderStyle.Links}>
              <a href="#">Q&A</a>
              <div></div>
              <a href="#">마켓후기</a>
              <div></div>
              <a href="#">로그인</a>
              <div></div>
              <a href="#">회원가입</a>
            </div>
          </div>
        <hr className={HeaderStyle.headerHr}/>
        <div className={HeaderStyle.Menubar}>
            <div><Link to='./AllCategories' className={HeaderStyle.menubarComponents}>
                    <div className={HeaderStyle.seeAllMenu}>
                      <img src={menuIcon} alt="menuIcon" className={HeaderStyle.menuIcon} />
                      전체 카테고리
                    </div>
                  </Link>
            </div>
            <div><Link to ='/adopt' className={HeaderStyle.menubarComponents}>동물분양</Link> </div>
            <div><Link to='/community' className={HeaderStyle.menubarComponents}>커뮤니티</Link></div>
            <div><Link to ='/donation' className={HeaderStyle.menubarComponents}>모금</Link></div>
            <div><Link to="/aboutus" className={HeaderStyle.menubarComponents}>ABOUT US</Link></div>
          </div> 
      </header>
  );
}
export default Header

