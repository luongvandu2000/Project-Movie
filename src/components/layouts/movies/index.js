import Slider from 'react-slick';
import '../../../../node_modules/slick-carousel/slick/slick.scss';
import '../../../../node_modules/slick-carousel/slick/slick-theme.scss';

import classNames from 'classnames/bind';
import style from './movies.module.scss';
import base from '~/components/styles/baseStyle/base.module.scss';
import images from './image';
import Header from '../header';
import Footer from '../footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faShare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { HiOutlineArrowUturnLeft, HiOutlineArrowUturnRight } from 'react-icons/hi2';

const cx = classNames.bind(style);
const cbase = classNames.bind(base);

const actor = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
};
const trailer = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
};
const movies = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
};

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
                            <Link to={''} className={cx('btn-view')}>
                                <FontAwesomeIcon className={cx('play')} icon={faPlay} />
                                <div className={cx('view')}>XEM PHIM</div>
                            </Link>
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
                            <dl className={cx('info-moview')}>
                                <dt>Đạo diễn</dt>
                                <dd>
                                    <Link to={''}>Chad Stahelski</Link>
                                </dd>
                                <dt>Kịch bản</dt>
                                <dd>
                                    <Link to={''}>Shay Hatten, </Link>
                                    <Link to={''}>Michael Finch</Link>
                                </dd>
                                <dt>Quốc gia</dt>
                                <dd>
                                    <Link to={''}>Đức, </Link>
                                    <Link to={''}>Mỹ</Link>
                                </dd>
                                <dt>Khởi chiếu</dt>
                                <dd>
                                    <span>3/22/2023</span>
                                </dd>
                            </dl>
                            <div className={cx('description')}>
                                <p>
                                    Trong nhiệm vụ cuối cùng ở Afghanistan, Trung sĩ John Kinley cùng đội với phiên dịch
                                    viên bản địa Ahmed. Khi đơn vị của họ bị phục kích, Kinley và Ahmed là 2 người sống
                                    sót duy nhất. Bị kẻ địch truy đuổi, Ahmed liều mạng đưa Kinley đang bị thương băng
                                    qua nhiều dặm đường địa hình khắc nghiệt đến nơi an toàn. Trở về Mỹ, Kinley biết
                                    rằng Ahmed và gia đình không dc cấp giấy thông hành tới Mỹ như đã hứa. Quyết tâm bảo
                                    vệ bạn mình và đền ơn cứu mạng, Kinley trở lại chiến trường để giúp Ahmed và gia
                                    đình trước khi lực lượng phiến quân phát hiện ra họ.
                                </p>
                            </div>
                            <div className={cx('actor')}>
                                <span className={cx('catalogue')}>DIỄN VIÊN</span>
                                <Slider {...actor}>
                                    <div className={cx('actor-items')}>
                                        <Link to={''}>
                                            <figure>
                                                <img src="https://image.tmdb.org/t/p/w138_and_h175_face/rJdYHYNhlcOBwbPvDZVvt1xw7bi.jpg" />
                                            </figure>
                                            <p>Jake Gyllenhaal</p>
                                        </Link>
                                        <div className={cx('character')}>Sgt. John Kinley</div>
                                    </div>
                                    <div className={cx('actor-items')}>
                                        <Link to={''}>
                                            <figure>
                                                <img src="https://image.tmdb.org/t/p/w138_and_h175_face/oTYCqdF6nfZTsvt1fbypi54ydI.jpg" />
                                            </figure>
                                            <p>Jake Gyllenhaal</p>
                                        </Link>
                                        <div className={cx('character')}>Sgt. John Kinley</div>
                                    </div>
                                    <div className={cx('actor-items')}>
                                        <Link to={''}>
                                            <figure>
                                                <img src="https://image.tmdb.org/t/p/w138_and_h175_face/efqC1XQSyHaRWYyTRWCQbbPOfRC.jpg" />
                                            </figure>
                                            <p>Jake Gyllenhaal</p>
                                        </Link>
                                        <div className={cx('character')}>Sgt. John Kinley</div>
                                    </div>
                                    <div className={cx('actor-items')}>
                                        <Link to={''}>
                                            <figure>
                                                <img src="https://image.tmdb.org/t/p/w138_and_h175_face/rJdYHYNhlcOBwbPvDZVvt1xw7bi.jpg" />
                                            </figure>
                                            <p>Jake Gyllenhaal</p>
                                        </Link>
                                        <div className={cx('character')}>Sgt. John Kinley</div>
                                    </div>
                                    <div className={cx('actor-items')}>
                                        <Link to={''}>
                                            <figure>
                                                <img src="https://image.tmdb.org/t/p/w138_and_h175_face/oTYCqdF6nfZTsvt1fbypi54ydI.jpg" />
                                            </figure>
                                            <p>Jake Gyllenhaal</p>
                                        </Link>
                                        <div className={cx('character')}>Sgt. John Kinley</div>
                                    </div>
                                    <div className={cx('actor-items')}>
                                        <Link to={''}>
                                            <figure>
                                                <img src="https://image.tmdb.org/t/p/w138_and_h175_face/efqC1XQSyHaRWYyTRWCQbbPOfRC.jpg" />
                                            </figure>
                                            <p>Jake Gyllenhaal</p>
                                        </Link>
                                        <div className={cx('character')}>Sgt. John Kinley</div>
                                    </div>
                                    <div className={cx('actor-items')}>
                                        <Link to={''}>
                                            <figure>
                                                <img src="https://image.tmdb.org/t/p/w138_and_h175_face/unP5YUgEdECL2gMLs0zCNya6is6.jpg" />
                                            </figure>
                                            <p>Jake Gyllenhaal</p>
                                        </Link>
                                        <div className={cx('character')}>Sgt. John Kinley</div>
                                    </div>
                                    <div className={cx('actor-items')}>
                                        <Link to={''}>
                                            <figure>
                                                <img src="https://image.tmdb.org/t/p/w138_and_h175_face/oTYCqdF6nfZTsvt1fbypi54ydI.jpg" />
                                            </figure>
                                            <p>Jake Gyllenhaal</p>
                                        </Link>
                                        <div className={cx('character')}>Sgt. John Kinley</div>
                                    </div>
                                    <div className={cx('actor-items')}>
                                        <Link to={''}>
                                            <figure>
                                                <img src="https://image.tmdb.org/t/p/w138_and_h175_face/efqC1XQSyHaRWYyTRWCQbbPOfRC.jpg" />
                                            </figure>
                                            <p>Jake Gyllenhaal</p>
                                        </Link>
                                        <div className={cx('character')}>Sgt. John Kinley</div>
                                    </div>
                                    <div className={cx('actor-items')}>
                                        <Link to={''}>
                                            <figure>
                                                <img src="https://image.tmdb.org/t/p/w138_and_h175_face/unP5YUgEdECL2gMLs0zCNya6is6.jpg" />
                                            </figure>
                                            <p>Jake Gyllenhaal</p>
                                        </Link>
                                        <div className={cx('character')}>Sgt. John Kinley</div>
                                    </div>
                                </Slider>
                            </div>
                            <div className={cx('trailer')}>
                                <div className={cx('catalogue')}>TRAILER</div>
                                <Slider {...trailer}>
                                    <div className={cx('trailer-items')}>
                                        <Link to={''}>
                                            <img src="https://img.youtube.com/vi/GAjlZOTDV6o/mqdefault.jpg" />
                                        </Link>
                                    </div>
                                    <div className={cx('trailer-items')}>
                                        <Link to={''}>
                                            <img src="https://img.youtube.com/vi/e_iYAfDvGQo/mqdefault.jpg" />
                                        </Link>
                                    </div>
                                    <div className={cx('trailer-items')}>
                                        <Link to={''}>
                                            <img src="https://img.youtube.com/vi/3WnUo16nBfo/mqdefault.jpg" />
                                        </Link>
                                    </div>
                                    <div className={cx('trailer-items')}>
                                        <Link to={''}>
                                            <img src="https://img.youtube.com/vi/T_kZgRKDSV4/mqdefault.jpg" />
                                        </Link>
                                    </div>
                                    <div className={cx('trailer-items')}>
                                        <Link to={''}>
                                            <img src="https://img.youtube.com/vi/3WnUo16nBfo/mqdefault.jpg" />
                                        </Link>
                                    </div>
                                    <div className={cx('trailer-items')}>
                                        <Link to={''}>
                                            <img src="https://img.youtube.com/vi/T_kZgRKDSV4/mqdefault.jpg" />
                                        </Link>
                                    </div>
                                </Slider>
                            </div>
                            <div className={cx('similar-movies')}>
                                <div className={cx('catalogue')}>PHIM TƯƠNG TỰ</div>
                                <Slider {...movies}>
                                    <div className={cx('movie-items')}>
                                        <Link to={''}>
                                            <img src="https://image.tmdb.org/t/p/w342/tDe5eLxAbeK7sYckUn5aH3ngWnn.jpg" />
                                            <p>Hunt</p>
                                        </Link>
                                    </div>
                                    <div className={cx('movie-items')}>
                                        <Link to={''}>
                                            <img src="https://image.tmdb.org/t/p/w342/r7ZipEd9oHHVVXTcvbx3Sd3Tukv.jpg" />
                                            <p>Hunt</p>
                                        </Link>
                                    </div>
                                    <div className={cx('movie-items')}>
                                        <Link to={''}>
                                            <img src="https://image.tmdb.org/t/p/w342/9N3KwhzBCcqmFcqHpPCsjqfym9M.jpg" />
                                            <p>Hunt</p>
                                        </Link>
                                    </div>
                                    <div className={cx('movie-items')}>
                                        <Link to={''}>
                                            <img src="https://image.tmdb.org/t/p/w342/3BSxAjiporlwQTWzaHZ9Yrl5C9D.jpg" />
                                            <p>Hunt</p>
                                        </Link>
                                    </div>
                                    <div className={cx('movie-items')}>
                                        <Link to={''}>
                                            <img src="https://image.tmdb.org/t/p/w342/y2d2SBqK33mGOG2CqAYMo3YbWE4.jpg" />
                                            <p>Hunt</p>
                                        </Link>
                                    </div>
                                    <div className={cx('movie-items')}>
                                        <Link to={''}>
                                            <img src="https://image.tmdb.org/t/p/w342/tDe5eLxAbeK7sYckUn5aH3ngWnn.jpg" />
                                            <p>Hunt</p>
                                        </Link>
                                    </div>
                                    <div className={cx('movie-items')}>
                                        <Link to={''}>
                                            <img src="https://image.tmdb.org/t/p/w342/9N3KwhzBCcqmFcqHpPCsjqfym9M.jpg" />
                                            <p>Hunt</p>
                                        </Link>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Movies;
