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

const cx = classNames.bind(style);
const cbase = classNames.bind(base);

function Header() {
    return (
        <header className={cx('header')}>
            <div className={cbase('container-large')}>
                <div className={cx('wrapper')}>
                    <div className={cx('nav')}>
                        <a href="#">
                            <img src={logo} />
                        </a>
                        <ul className={cx('nav-list')}>
                            <li>
                                <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                                Tìm kiếm
                            </li>
                            <li>Phim Hot</li>
                            <li>Phim Lẻ</li>
                            <li>Phim Bộ</li>
                            <li>Phim Mới</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className={cx('account')}>
                        <div className={cx('acc-nav')}>
                            <span>Lương Văn Du</span>
                            <FontAwesomeIcon className={cx('down-icon')} icon={faChevronDown} />
                        </div>
                        <ul>
                            <li>
                                <FontAwesomeIcon className={cx('acc-icon')} icon={faUser} />
                                Tài khoản
                            </li>
                            <li>
                                <FontAwesomeIcon className={cx('acc-icon')} icon={faCircleDollarToSlot} />
                                Donate
                            </li>
                            <li>
                                <FontAwesomeIcon className={cx('acc-icon')} icon={faFilm} />
                                Bộ sưu tập
                            </li>
                            <li>
                                <FontAwesomeIcon className={cx('acc-icon')} icon={faComment} />
                                Cặp câu song ngữ
                            </li>
                            <li>
                                <FontAwesomeIcon className={cx('acc-icon')} icon={faRightFromBracket} />
                                Thoát
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
