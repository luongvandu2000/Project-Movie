import Header from '~/components/layouts/header';
import Footer from '~/components/layouts/footer';
import style from './donate.module.scss';
import base from '~/components/styles/baseStyle/base.module.scss';
import classNames from 'classnames/bind';
import images from './image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(style);
const cbase = classNames.bind(base);

const courseCard = [
    {
        id: 1,
        img: 'viettel.png',
    },
    {
        id: 2,
        img: 'mobi.png',
    },
    {
        id: 3,
        img: 'vina.png',
    },
    {
        id: 4,
        img: 'gate.png',
    },
];

function Donate() {
    const [check, setCheck] = useState();

    useEffect(() => {
        const info = document.querySelector(`.${cx('info')}`);
        const qrInfo = document.querySelector(`.${cx('qr-info')}`);

        const handleInfo = () => {
            if (qrInfo.style.display == 'block') {
                qrInfo.style.display = 'none';
            } else {
                qrInfo.style.display = 'block';
            }
        };

        console.log('re-render');

        info.addEventListener('click', handleInfo);

        return () => {
            info.removeEventListener('click', handleInfo);
        };
    }, []);

    // const handleCheck = () => {}; //Hàm sau này xử lí dữ liệu card

    return (
        <>
            <Header />
            <section className={cx('donate')}>
                <div className={cbase('container-small')}>
                    <div className={cx('title')}>
                        <h1>Donate</h1>
                        <p>
                            Để ủng hộ website & sử dụng tính năng VIP mode cho phim, hãy donate cho website qua 1 trong
                            2 hình thức sau:
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
                                <li>
                                    Nội dung chuyển tiền: <span className={cx('vip')}>VIP 2wdyz</span>
                                </li>
                                <li>Hoàn tất quá trình chuyển tiền (tên người nhận tiền là LUONG VAN DU)</li>
                            </ol>
                            <p>Sau khoảng 1, 2 phút, tài khoản bạn trên web sẽ được cộng tiền.</p>
                            <div className={cx('img-qr')}>
                                <img src={images['./qr.jpg']} />
                            </div>
                            <p>
                                Nếu không quét mã được,{' '}
                                <span className={cx('info')}>bấm vào đây để xem thông tin chuyển tiền</span>.
                            </p>
                            <div className={cx('qr-info')}>
                                <p>
                                    Chú ý trong app ngân hàng chọn <b>Chuyển tiền nhanh (Naspas)</b> thì giao dịch mới
                                    được thực hiện ngay lập tức (nếu không sẽ phải chờ nhân viên ngân hàng xử lý):
                                </p>
                                <ul>
                                    <li>Ngân hàng TMCP Công Thương Việt Nam (VietinBank)</li>
                                    <li>
                                        Số tài khoản: <b>107867627525</b>
                                    </li>
                                    <li>
                                        Tên người nhận: <b>LUONG VAN DU</b>
                                    </li>
                                    <li>
                                        Nội dung chuyển tiền: <span className={cx('vip')}>VIP 2wdyz</span>
                                    </li>
                                </ul>
                                <p className={cx('note-info')}>
                                    <i>
                                        Chú ý nhập đúng nội dung chuyển tiền để hệ thống tự động xử lý cộng tiền vào tài
                                        khoản bạn!
                                    </i>
                                </p>
                            </div>
                        </div>
                        <div className={cx('or')}>
                            <p>|</p>
                            <p>Hoặc</p>
                            <p>|</p>
                        </div>
                        <div className={cx('card')}>
                            <h2>Nạp thẻ điện thoại</h2>
                            <p>
                                <span className={cx('text')}>Bị trừ 40%</span> số tiền nạp (do nhà mạng tính phí)
                            </p>
                            <p className={cx('note')}>
                                <i>Dùng thẻ điện thoại (thẻ cào giấy hoặc thẻ mua online qua app) để nạp tiền.</i>
                            </p>
                            <div>
                                <h3>Loại thẻ</h3>
                                <div className={cx('sevice')}>
                                    {courseCard.map((course) => (
                                        <div key={course.id}>
                                            <div className={cx('img')}>
                                                <img src={images[`./${course.img}`]} />
                                            </div>
                                            <input
                                                type="radio"
                                                checked={check === course.id}
                                                onChange={() => setCheck(course.id)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={cx('price')}>
                                <h3>Mệnh giá thẻ</h3>
                                <select>
                                    <option>- Chọn mệnh giá -</option>
                                    <option>10.000</option>
                                    <option>20.000</option>
                                    <option>30.000</option>
                                    <option>50.000</option>
                                    <option>100.000</option>
                                    <option>200.000</option>
                                    <option>300.000</option>
                                    <option>500.000</option>
                                </select>
                                <p>Chọn sai mệnh giá có thể mất thẻ!</p>
                            </div>
                            <div className={cx('code')}>
                                <h3>Mã thẻ (cào lớp tráng bạc)</h3>
                                <input />
                            </div>
                            <div className={cx('code')}>
                                <h3>Số seri (in trên thẻ)</h3>
                                <input />
                                <p>Nhập sai sêri có thể mất thẻ!</p>
                            </div>
                            <div className={cx('submit')}>
                                <button>Gửi</button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('attension')}>
                        <p>Chú ý:</p>
                        <p>
                            - Xem số dư tài khoản của bạn <a href="">ở đây</a>
                        </p>
                        <p>
                            - Các vấn đề thường gặp khi donate và cách xử lý <a href="">xem ở đây</a>
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Donate;
