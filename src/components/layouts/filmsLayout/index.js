import classNames from 'classnames/bind';
import style from './films.module.scss';
import base from '~/components/styles/baseStyle/base.module.scss';
import images from './image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);
const cbase = classNames.bind(base);

function Films({ title, listfilm, viewAll }) {
    return (
        <section className={cx('film')}>
            <div className={cbase('container-small')}>
                {title != undefined ? (
                    <div className={cx('nav')}>
                        <h1 className={cx('category')}>{title}</h1>
                        {viewAll ? (
                            <div>
                                <a>
                                    Xem Tất Cả
                                    <FontAwesomeIcon className={cx('icon')} icon={faCaretRight} />
                                </a>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                ) : (
                    ''
                )}
                <div className={cx('frame')}>
                    {listfilm.map((element, i) => {
                        return (
                            <div key={i} className={cx('poster')}>
                                <Link to={'/movies'}>
                                    <div>
                                        <img src={images[`./${element.img}`]} />
                                    </div>
                                </Link>
                                <h2>{element.name}</h2>
                                <p>{element.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Films;
