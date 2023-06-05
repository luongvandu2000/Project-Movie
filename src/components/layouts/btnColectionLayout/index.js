import classNames from 'classnames/bind';
import style from './btnColection.module.scss';
import { FaCheck, FaEye, FaPlus, FaFacebookSquare } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const cx = classNames.bind(style);

function BtnCollection() {
    const [btn, setBtn] = useState(false);
    useEffect(() => {
        const view = document.getElementById(`${cx('add-view')}`);
        const wish = document.getElementById(`${cx('add-wish')}`);
        const del = document.getElementById(`${cx('delete')}`);
        const collection = document.getElementById(`${cx('collection')}`);
        const viewed = document.getElementById(`${cx('view')}`);
        const wishlist = document.getElementById(`${cx('wish')}`);

        view.addEventListener('click', () => {
            del.style.display = 'block';
            collection.style.display = 'none';
            viewed.style.display = 'flex';
            view.style.display = 'none';
            wishlist.style.display = 'none';
            wish.style.display = 'block';
        });
        wish.addEventListener('click', () => {
            del.style.display = 'block';
            collection.style.display = 'none';
            wishlist.style.display = 'flex';
            wish.style.display = 'none';
            viewed.style.display = 'none';
            view.style.display = 'block';
        });
        del.addEventListener('click', () => {
            collection.style.display = 'flex';
            del.style.display = 'none';
            wishlist.style.display = 'none';
            viewed.style.display = 'none';
            view.style.display = 'block';
            wish.style.display = 'block';
        });
    }, []);

    return (
        <div className={cx('btn')}>
            <div className={cx('node', 'share')}>
                    <FaFacebookSquare />
                    <span>Chia sẻ</span>
            </div>
            <div className={cx('collect')}>
                <div className={cx('frame')} id={cx('collection')}>
                    <FaPlus />
                    <span>Bộ sưu tập</span>
                </div>
                <div className={cx('frame')} style={{ display: 'none' }} id={cx('view')}>
                    <FaCheck />
                    <span>Đã xem</span>
                </div>
                <div className={cx('frame')} style={{ display: 'none' }} id={cx('wish')}>
                    <FaEye />
                    <span>Muốn xem</span>
                </div>
                <div className={cx('add-collection')}>
                    <div className={cx('add')} id={cx('add-view')}>
                        Thêm vào danh sách phim <b>Đã Xem</b>
                    </div>
                    <div className={cx('add')} id={cx('add-wish')}>
                        Thêm vào danh sách phim <b>Muốn Xem</b>
                    </div>
                    <div className={cx('add')} id={cx('delete')} style={{ display: 'none' }}>
                        Loại khỏi bộ sưu tập
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BtnCollection;
