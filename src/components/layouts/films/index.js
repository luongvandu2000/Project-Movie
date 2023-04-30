import classNames from 'classnames/bind';
import style from './films.module.scss';
import base from '~/components/styles/baseStyle/base.module.scss';
import images from './image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

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
                    {listfilm.map((element) => {
                        return (
                            <div className={cx('poster')}>
                                <image>
                                    <img src={images[`./${element.img}`]} />
                                </image>
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
