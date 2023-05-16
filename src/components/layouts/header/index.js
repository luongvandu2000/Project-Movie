import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import logo from '~/assets/img/logo/logo-netflix.png';
import style from './header.module.scss';
import base from '../../styles//baseStyle/base.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronDown,
    faMagnifyingGlass,
    faUser,
    faCircleDollarToSlot,
    faFilm,
    faComment,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const cx = classNames.bind(style);
const cbase = classNames.bind(base);

function Header() {
    useEffect(() => {
        const header = document.querySelector(`.${cx('header')}`);

        const handleScroll = () => {
            if (window.scrollY > 0) {
                header.style.backgroundColor = '#412d40';
            } else {
                header.style.backgroundColor = 'unset';
            }
        };
        window.addEventListener('scroll', handleScroll);
    }, []);
    function ScrollToTopOnLink() {
        const location = useLocation();

        React.useEffect(() => {
            window.scrollTo(0, 0);
        }, [location]);

        return null;
    }

    return (
        <header className={cx('header')}>
            <ScrollToTopOnLink />
            <div className={cbase('container-large')}>
                <div className={cx('wrapper')}>
                    <div className={cx('nav')}>
                        <Link to="/">
                            <img src={logo} />
                        </Link>
                        <ul className={cx('nav-list')}>
                            <li>
                                <Link to="/search">
                                    <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                                    Tìm kiếm
                                </Link>
                            </li>
                            <li>
                                <Link to="/top">Phim Hot</Link>
                            </li>
                            <li>
                                <Link to="/odd">Phim Lẻ</Link>
                            </li>
                            <li>
                                <Link to="/series">Phim Bộ</Link>
                            </li>
                            <li>
                                <Link to="/new">Phim Mới</Link>
                            </li>
                            <li>
                                <Link to="/faq">FAQs</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('account')}>
                        <div className={cx('acc-nav')}>
                            <span>Lương Văn Du</span>
                            <FontAwesomeIcon className={cx('down-icon')} icon={faChevronDown} />
                        </div>
                        <ul>
                            <li>
                                <Link to="/account">
                                    <FontAwesomeIcon className={cx('acc-icon')} icon={faUser} />
                                    Tài khoản
                                </Link>
                            </li>
                            <li>
                                <Link to="/donate">
                                    <FontAwesomeIcon className={cx('acc-icon')} icon={faCircleDollarToSlot} />
                                    Donate
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <FontAwesomeIcon className={cx('acc-icon')} icon={faFilm} />
                                    Bộ sưu tập
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <FontAwesomeIcon className={cx('acc-icon')} icon={faComment} />
                                    Cặp câu song ngữ
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <FontAwesomeIcon className={cx('acc-icon')} icon={faRightFromBracket} />
                                    Thoát
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
