import React from 'react';
import HeaderStyle from './donationHeader.module.css';

function DonationHeader() {
    return (
      <header className={HeaderStyle.header}>
        <li className={HeaderStyle.menuBar}>
          <a href='#' className={HeaderStyle.inProgress}>모금 진행중</a>
          <a href='#' className={HeaderStyle.finished}>모금 완료</a>
          <a href='#' className={HeaderStyle.review}>모금 후기</a>
        </li>
      </header>
    )
}
export default DonationHeader