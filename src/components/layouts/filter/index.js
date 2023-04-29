import classNames from 'classnames/bind';
import style from './filter.module.scss';
import base from '~/components/styles/baseStyle/base.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTableCells } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);
const cbase = classNames.bind(base);

function Filter() {
    return (
        <section className={cx('filter')}>
            <div className={cbase('container-small')}>
                <ul className={cx('type')}>
                    <li className={cx('type-section')}>
                        <p>Loại phim:</p>
                        <select className={cx('section')}>
                            <option>All</option>
                            <option>Phim Lẻ</option>
                            <option>Phim Bộ</option>
                        </select>
                    </li>
                    <li className={cx('type-section')}>
                        <p>Thể loại:</p>
                        <select className={cx('section')}>
                            <option>All</option>
                            <option>Âm nhạc</option>
                            <option>Bí ẩn</option>
                            <option>Chiến tranh</option>
                            <option>Chiến tranh & Chính trị</option>
                            <option>Chính kịch</option>
                            <option>Gia đình</option>
                            <option>Giật gân</option>
                            <option>Hài</option>
                            <option>Hành động</option>
                            <option>Hành động & Phiêu lưu</option>
                            <option>Hoạt hình</option>
                            <option>Kinh dị</option>
                            <option>Kỳ ảo</option>
                            <option>Lãng mạng</option>
                            <option>Lịch sử</option>
                            <option>Nói chuyện</option>
                            <option>Phiêu lưu</option>
                            <option>Phim dài kỳ</option>
                            <option>Tài liệu</option>
                            <option>Thực tế</option>
                            <option>Tin tức</option>
                            <option>Tội phạm</option>
                            <option>Trẻ em</option>
                            <option>Truyền hình</option>
                            <option>Viễn tây</option>
                            <option>Viễn tưởng</option>
                            <option>Viễn tưởng & Thần thoại</option>
                        </select>
                    </li>
                    <li className={cx('type-section')}>
                        <p>Quốc gia:</p>
                        <select className={cx('section')}>
                            <option>All</option>
                            <option>Anh</option>
                            <option>Pháp</option>
                            <option>Mỹ</option>
                            <option>Trung Quốc</option>
                            <option>Hàn Quốc</option>
                            <option>Việt Nam</option>
                        </select>
                    </li>
                    <li className={cx('type-section')}>
                        <p>Năm:</p>
                        <select className={cx('section')}>
                            <option>All</option>
                            <option>2023</option>
                            <option>2022</option>
                            <option>2021</option>
                            <option>2020</option>
                            <option>2019</option>
                            <option>2018</option>
                            <option>2017</option>
                            <option>2016</option>
                            <option>2015</option>
                            <option>2014</option>
                            <option>2013</option>
                            <option>2012</option>
                            <option>2011</option>
                        </select>
                    </li>
                    <li className={cx('type-section')}>
                        <p>Thời lượng:</p>
                        <select className={cx('section')}>
                            <option>All</option>
                            <option>Dưới 30 phút</option>
                            <option>30' đến 1 tiếng</option>
                            <option>1 tiếng đến 2 tiếng</option>
                            <option>2 tiếng đến 3 tiếng</option>
                        </select>
                    </li>
                    <li className={cx('type-section')}>
                        <p>Sắp xếp:</p>
                        <select className={cx('section')}>
                            <option>Ngày cập nhật</option>
                            <option>Ngày phát hành</option>
                            <option>Điểm đánh giá</option>
                        </select>
                    </li>
                    <li className={cx('type-section', 'type-menu')}>
                        <p>Hiển thị:</p>
                        <div className={cx('section', 'menu')}>
                            <span className={cx('view')}>
                                <FontAwesomeIcon icon={faList} />
                            </span>
                            <span className={cx('view')}>
                                <FontAwesomeIcon icon={faTableCells} />
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Filter;
