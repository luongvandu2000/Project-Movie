import classNames from 'classnames/bind';
import style from './footer.module.scss';
import base from '../../styles/baseStyle/base.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPodcast, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);
const cbase = classNames.bind(base);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cbase('container-small')}>
                <p>
                    Phim chất lượng cao online của <a href="#">XemPhim</a> khác gì so với các trang phim khác?
                </p>
                <ul>
                    <li className={cx('description')}>
                        Là phim bluray (reencoded), có độ phân giải thấp nhất là Full HD (1080p), trong khi hầu hết các
                        trang phim khác chỉ có tới độ phân giải HD (720p) là cao nhất
                    </li>
                    <li className={cx('description')}>
                        Chất lượng cao, lượng dữ liệu trên giây (bitrate) gấp từ 5 - 10 lần phim online thông thường -
                        đây là yếu tố quyết định độ nét của phim (thậm chí còn quan trọng hơn độ phân giải)
                    </li>
                    <li className={cx('description')}>
                        Âm thanh 5.1 (6 channel) thay vì stereo (2 channel) như các trang phim khác (kể cả Youtube)
                    </li>
                    <li className={cx('description')}>
                        Phù hợp để xem trên màn hình TV, máy tính, laptop có độ phân giải cao
                    </li>
                    <li className={cx('description')}>
                        Nếu không hài lòng với phụ đề có sẵn, bạn có thể tự upload phụ đề của riêng mình để xem online
                    </li>
                    <li className={cx('description')}>
                        Có lựa chọn hiện phụ đề song ngữ (tức hiện đồng thời cả tiếng Anh & tiếng Việt), phù hợp với
                        những người muốn học tiếng Anh qua phụ đề phim
                    </li>
                    <ul className={cx('icon')}>
                        <li className={cx('icon-footer')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </li>
                        <li className={cx('icon-footer', 'icon-mid')}>
                            <FontAwesomeIcon icon={faPodcast} />
                        </li>
                        <li className={cx('icon-footer')}>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </li>
                    </ul>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
