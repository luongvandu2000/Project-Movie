import Slider from 'react-slick';
import '../../../../node_modules/slick-carousel/slick/slick.scss';
import '../../../../node_modules/slick-carousel/slick/slick-theme.scss';

import { useEffect, useLayoutEffect, useState } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import style from './movies.module.scss';
import base from '~/components/styles/baseStyle/base.module.scss';
import BtnCollection from '../btnColectionLayout';
import images from './image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faShare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { HiXMark } from 'react-icons/hi2';
import { FaCheck, FaEye, FaPlus, FaFacebookSquare } from 'react-icons/fa';

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
const similarMovies = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
};

function Movies({ movies }) {
    useEffect(() => {
        document.querySelectorAll(`.${cx('trailer-items')}`).forEach((e, i) => {
            e.addEventListener('click', () => {
                document.querySelector(`.${cx('trailer-videos')}#${cx(`trailer-${i}`)}`).style.display = 'block';
            });
        });
        document.querySelectorAll(`.${cx('trailer-videos')}`).forEach((e, i) => {
            e.addEventListener('click', () => {
                document.querySelector(`.${cx('trailer-videos')}#${cx(`trailer-${i}`)}`).style.display = 'none';
            });
        });
    });

    //URL imgUrl
    const imgUrl = 'https://image.tmdb.org/t/p/original';

    //Convert minutes -> hours + minutes
    const [data, setData] = useState({});

    useLayoutEffect(() => {
        handleGetAPI();
    }, []);

    const handleGetAPI = () => {
        axios
            .get(
                'https://api.themoviedb.org/3/movie/603692?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos',
            )
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <section className={cx('movies')}>
                <div className={cx('bg')}>
                    {data.backdrop_path == undefined ? '' : <img src={imgUrl + data.backdrop_path} />}
                </div>
                <div className={cbase('container-small')}>
                    <div className={cx('detail')}>
                        <div className={cx('poster')}>
                            {data.poster_path == undefined ? '' : <img src={imgUrl + data.poster_path} />}
                            <Link to={'/watch'} className={cx('btn-view')}>
                                <FontAwesomeIcon className={cx('play')} icon={faPlay} />
                                <div className={cx('view')}>XEM PHIM</div>
                            </Link>
                        </div>
                        <div className={cx('content')}>
                            <div className={cx('name-en')}>{data.title}</div>
                            <div className={cx('name-vn')}>
                                {movies.nameVn} (<Link to="">{movies.year}</Link>)
                            </div>
                            <div className={cx('frame-times')}>
                                <div className={cx('times')}>
                                    {Math.floor(data.runtime / 60)} giờ {data.runtime % 60} phút
                                </div>
                                <div className={cx('content-rate')}>R</div>
                            </div>
                            <div className={cx('point')}>
                                <img src={images['./imdb.png']} />
                                <span>
                                    <b>{data.vote_average == undefined ? '' : data.vote_average.toFixed(1)}</b>
                                </span>
                            </div>
                            <div className={cx('switch')}>
                                <BtnCollection />
                                <div className={cx('category')}>
                                    {data.genres == undefined
                                        ? ''
                                        : data.genres.map((e, i) => (
                                              <Link to={''} key={i} className={cx('types')}>
                                                  {e.name}
                                              </Link>
                                          ))}
                                </div>
                            </div>
                            <dl className={cx('info-moview')}>
                                <dt>Đạo diễn</dt>
                                <dd>
                                    {movies.director.map((e, i) => (
                                        <Link to={'/person'} key={i}>
                                            {e}
                                            {i != movies.director.length - 1 ? ', ' : ''}
                                        </Link>
                                    ))}
                                </dd>
                                <dt>Kịch bản</dt>
                                <dd>
                                    {movies.screenWriter.map((e, i) => (
                                        <Link to={'/person'} key={i}>
                                            {e}
                                            {i != movies.screenWriter.length - 1 ? ', ' : ''}
                                        </Link>
                                    ))}
                                </dd>
                                <dt>Quốc gia</dt>
                                <dd>
                                    {data.production_countries == undefined
                                        ? ''
                                        : data.production_countries.map((e, i) => (
                                              <Link to={''} key={i}>
                                                  {e.name}
                                                  {i != data.production_countries.length - 1 ? ', ' : ''}
                                              </Link>
                                          ))}
                                </dd>
                                <dt>Khởi chiếu</dt>
                                <dd>
                                    <span>{data.release_date}</span>
                                </dd>
                            </dl>
                            <div className={cx('description')}>
                                <p>{movies.shorDecription}</p>
                            </div>
                            <div className={cx('actor')}>
                                <span className={cx('catalogue')}>DIỄN VIÊN</span>
                                <Slider {...actor}>
                                    {movies.actors.map((e, i) => (
                                        <div className={cx('actor-items')} key={i}>
                                            <Link to={`/person/${e.id}`}>
                                                <figure>
                                                    <img src={e.img} />
                                                </figure>
                                                <p>{e.name}</p>
                                            </Link>
                                            <div className={cx('character')}>{e.character}</div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                            <div className={cx('trailer')}>
                                <div className={cx('catalogue')}>TRAILER</div>

                                <Slider {...trailer}>
                                    {movies.trailers.map((e, i) => (
                                        <div className={cx('trailer-items')} key={i}>
                                            <div>
                                                <img src={e.img} />
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                                {movies.trailers.map((e, i) => (
                                    <div className={cx('trailer-videos')} id={cx(`trailer-${i}`)} key={i}>
                                        <>
                                            <div className={cx('videos')}>
                                                <iframe
                                                    width="1000"
                                                    height="563"
                                                    src={e.srcVideo}
                                                    title={e.title}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    frameBorder="0"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                            <div className={cx('close')}>
                                                <HiXMark />
                                            </div>
                                        </>
                                    </div>
                                ))}
                            </div>
                            <div className={cx('similar-movies')}>
                                <div className={cx('catalogue')}>PHIM TƯƠNG TỰ</div>
                                <Slider {...similarMovies}>
                                    {movies.similar.map((e, i) => (
                                        <Link to={''} className={cx('movie-items')} key={i}>
                                            <img src={e.img} />
                                            <p>{e.name}</p>
                                        </Link>
                                    ))}
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
