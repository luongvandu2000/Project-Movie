import Header from '~/components/layouts/header';
import Footer from '~/components/layouts/footer';
import style from './donate.module.scss';
import base from '~/components/styles/baseStyle/base.module.scss';
import classNames from 'classnames/bind';
import images from './image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const cx = classNames.bind(style);
const cbase = classNames.bind(base);

function Donate() {
    return (
        <section className={cx('donate')}>
            <div className={cbase('container-small')}>
                <div className={cx('title')}>
                    <h1>Donate</h1>
                    <p>
                        Để ủng hộ website & sử dụng tính năng VIP mode cho phim, hãy donate cho website qua 1 trong 2
                        hình thức sau:
                    </p>
                </div>
                <div className={cx('bank')}>
                    <div className={cx('qr')}>
                        <h2>Chuyển khoản (khuyến khích)</h2>
                        <ol>
                            <li>
                                Vào ứng dụng ngân hàng của bạn trên điện thoại và chọn chức năng quét mã QR trong đó
                            </li>
                            <li>Quét mã QR bên dưới</li>
                            <li>Nhập số tiền bạn muốn chuyển (bao nhiêu cũng được)</li>
                            <li>Nội dung chuyển tiền: VIP 2wdyz</li>
                            <li>Hoàn tất quá trình chuyển tiền (tên người nhận tiền là LUONG VAN DU)</li>
                        </ol>
                        <p>Sau khoảng 1, 2 phút, tài khoản bạn trên web sẽ được cộng tiền.</p>
                        <img src={images['./qr.jpg']} />
                        <p>Nếu không quét mã được, <a href=''>bấm vào đây để xem thông tin chuyển tiền</a>.</p>
                    </div>
                    <div className={cx('or')}>
                        <p>|</p>
                        <p>Hoặc</p>
                        <p>|</p>
                    </div>
                    <div className={cx('card')}>
                        <h2>Nạp thẻ điện thoại</h2>
                        <p>
                            <b>Bị trừ 40%</b> số tiền nạp (do nhà mạng tính phí)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Donate;
