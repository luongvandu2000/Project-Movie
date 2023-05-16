import classNames from 'classnames/bind';
import style from './movies.module.scss';
import base from '~/components/styles/baseStyle/base.module.scss';
import images from './image';
import Header from '../header';
import Footer from '../footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faShare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);
const cbase = classNames.bind(base);

function Movies() {
    return (
        <>
            <Header />
            <section className={cx('movies')}>
                <div className={cx('bg')}></div>
                <div className={cbase('container-small')}>
                    <div className={cx('detail')}>
                        <div className={cx('poster')}>
                            <img src="https://image.tmdb.org/t/p/w342/aX0H63vho7rZ9Rm3I567Zf00Z1t.jpg" />
                            <div className={cx('btn-view')}>
                                <FontAwesomeIcon className={cx('play')} icon={faPlay} />
                                <div className={cx('view')}>XEM PHIM</div>
                            </div>
                        </div>
                        <div className={cx('content')}>
                            <div className={cx('name-en')}>Guy Ritchie's The Covenant</div>
                            <div className={cx('name-vn')}>
                                Khế Ước (<Link to="">2023</Link>)
                            </div>
                            <div className={cx('times')}>2 giờ 3 phút</div>
                            <div className={cx('point')}>
                                <img src={images['./imdb.png']} />
                                <span>
                                    <b>7.7</b>
                                </span>
                            </div>
                            <div className={cx('switch')}>
                                <div className={cx('btn')}>
                                    <div className={cx('node', 'share')}>
                                        <FontAwesomeIcon icon={faShare} />
                                        <span>Chia sẻ</span>
                                    </div>
                                    <div className={cx('node', 'collect')}>
                                        <FontAwesomeIcon icon={faPlus} />
                                        <span>Bộ sưu tập</span>
                                        <div className={cx('addfilm')}>
                                            <div className={cx('add')}>
                                                Thêm vào danh sách phim <b>Đã Xem</b>
                                            </div>
                                            <div className={cx('add')}>
                                                Thêm vào danh sách phim <b>Muốn Xem</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('category')}>
                                    <div className={cx('types')}>Chiến tranh</div>
                                    <div className={cx('types')}>Chính kịch</div>
                                    <div className={cx('types')}>Hành động</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Footer /> */}
        </>
    );
}

export default Movies;
