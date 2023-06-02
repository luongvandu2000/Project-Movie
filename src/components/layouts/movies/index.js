import Slider from 'react-slick';
import '../../../../node_modules/slick-carousel/slick/slick.scss';
import '../../../../node_modules/slick-carousel/slick/slick-theme.scss';

import { useEffect } from 'react';
import classNames from 'classnames/bind';
import style from './movies.module.scss';
import base from '~/components/styles/baseStyle/base.module.scss';
import images from './image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faShare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { HiXMark } from 'react-icons/hi2';

const cx = classNames.bind(style);
const cbase = classNames.bind(base);

const actor = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
};
const trailer = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
};
const movies = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
};

function Movies({ movies }) {
    useEffect(() => {
        document.querySelectorAll(`.${cx('trailer-items')}`).forEach((e) => {
            e.addEventListener('click', () => {
                document.querySelector(`.${cx('trailer-video')}`).style.display = 'block';
            });
        });
        document.querySelectorAll(`.${cx('trailer-video')}`).forEach((e) => {
            e.addEventListener('click', () => {
                document.querySelector(`.${cx('trailer-video')}`).style.display = 'none';
            });
        });
    });

    return (
        <>
            <section className={cx('movies')}>
                <div className={cx('bg')}></div>
                <div className={cbase('container-small')}>
                    <div className={cx('detail')}>
                        <div className={cx('poster')}>
                            <img src={movies.poster} />
                            <Link to={''} className={cx('btn-view')}>
                                <FontAwesomeIcon className={cx('play')} icon={faPlay} />
                                <div className={cx('view')}>XEM PHIM</div>
                            </Link>
                        </div>
                        <div className={cx('content')}>
                            <div className={cx('name-en')}>{movies.nameEn}</div>
                            <div className={cx('name-vn')}>
                                {movies.nameVn} (<Link to="">{movies.year}</Link>)
                            </div>
                            <div className={cx('times')}>{movies.time}</div>
                            <div className={cx('point')}>
                                <img src={images['./imdb.png']} />
                                <span>
                                    <b>{movies.imdb}</b>
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
                                    {movies.type.map((e) => (
                                        <div key={e} className={cx('types')}>
                                            {e}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <dl className={cx('info-moview')}>
                                <dt>Đạo diễn</dt>
                                <dd>
                                    {movies.director.map((e, i) => (
                                        <>
                                            <Link to={''} key={e}>
                                                {e}
                                            </Link>
                                            {i != movies.director.length - 1 ? ', ' : ''}
                                        </>
                                    ))}
                                </dd>
                                <dt>Kịch bản</dt>
                                <dd>
                                    {movies.script.map((e, i) => (
                                        <>
                                            <Link to={''} key={e}>
                                                {e}
                                            </Link>
                                            {i != movies.script.length - 1 ? ', ' : ''}
                                        </>
                                    ))}
                                </dd>
                                <dt>Quốc gia</dt>
                                <dd>
                                    {movies.country.map((e, i) => (
                                        <>
                                            <Link to={''} key={e}>
                                                {e}
                                            </Link>
                                            {i != movies.country.length - 1 ? ', ' : ''}
                                        </>
                                    ))}
                                </dd>
                                <dt>Khởi chiếu</dt>
                                <dd>
                                    <span>{movies.premiere}</span>
                                </dd>
                            </dl>
                            <div className={cx('description')}>
                                <p>{movies.shorDecription}</p>
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
                                        <div>
                                            <img src="https://img.youtube.com/vi/GAjlZOTDV6o/mqdefault.jpg" />
                                        </div>
                                    </div>
                                    <div className={cx('trailer-items')}>
                                        <div>
                                            <img src="https://img.youtube.com/vi/e_iYAfDvGQo/mqdefault.jpg" />
                                        </div>
                                    </div>
                                    <div className={cx('trailer-items')}>
                                        <div>
                                            <img src="https://img.youtube.com/vi/3WnUo16nBfo/mqdefault.jpg" />
                                        </div>
                                    </div>
                                    <div className={cx('trailer-items')}>
                                        <div>
                                            <img src="https://img.youtube.com/vi/T_kZgRKDSV4/mqdefault.jpg" />
                                        </div>
                                    </div>
                                    <div className={cx('trailer-items')}>
                                        <div>
                                            <img src="https://img.youtube.com/vi/3WnUo16nBfo/mqdefault.jpg" />
                                        </div>
                                    </div>
                                    <div className={cx('trailer-items')}>
                                        <div>
                                            <img src="https://img.youtube.com/vi/T_kZgRKDSV4/mqdefault.jpg" />
                                        </div>
                                    </div>
                                </Slider>
                                <div className={cx('trailer-video')}>
                                    <div className={cx('videos')}>
                                        <iframe
                                            id="videoIframe"
                                            width="1000"
                                            height="563"
                                            src="https://www.youtube.com/embed/GAjlZOTDV6o"
                                            title="THE COVENANT | A Process Of Discovery – Featurette"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <div className={cx('close')}>
                                        <HiXMark />
                                    </div>
                                </div>
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
        </>
    );
}

export default Movies;
