import Header from '~/components/layouts/header';
import Footer from '~/components/layouts/footer';
import style from './account.module.scss';
import base from '~/components/styles/baseStyle/base.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const cx = classNames.bind(style);
const cbase = classNames.bind(base);

function Account() {
    useEffect(() => {
        const email = document.getElementById(`${cx('email')}`);
        const changeEmail = document.querySelector(`.${cx('change-email')}`);
        const setEmail = document.querySelector(`.${cx('email')}`);
        const updateEmail = document.getElementById(`${cx('email-up')}`);
        const cancelEmail = document.getElementById(`${cx('email-cancel')}`);

        email.addEventListener('click', () => {
            changeEmail.style.display = 'none';
            setEmail.style.display = 'flex';
        });
        cancelEmail.addEventListener('click', () => {
            setEmail.style.display = 'none';
            changeEmail.style.display = 'block';
        });
        // updateEmail.addEventListener('click', () => {});
    }, []);

    useEffect(() => {
        const password = document.getElementById(`${cx('password')}`);
        const changePass = document.querySelector(`.${cx('break')}`);
        const setPass = document.querySelector(`.${cx('pass')}`);
        const updatePass = document.getElementById(`${cx('pass-up')}`);
        const cancelPass = document.getElementById(`${cx('pass-cancel')}`);

        password.addEventListener('click', () => {
            changePass.style.display = 'none';
            setPass.style.display = 'inline-block';
        });
        cancelPass.addEventListener('click', () => {
            setPass.style.display = 'none';
            changePass.style.display = 'block';
        });
        // updateEmail.addEventListener('click', () => {});
    }, []);

    useEffect(() => {
        const create = document.getElementById(`${cx('create')}`);
        const invite = document.querySelector(`.${cx('invite')}`);
        const close = document.getElementById(`${cx('icon')}`);

        create.addEventListener('click', () => {
            invite.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
        close.addEventListener('click', () => {
            invite.style.display = 'none';
            document.body.style.overflow = 'unset';
        });
    }, []);

    return (
        <>
            <Header />
            <section className={cx('account')}>
                <div className={cbase('container-small')}>
                    <h1>Lương Văn Du</h1>
                    <p>
                        Ngày gia nhập:
                        <b>29/09/2020 21:40</b>
                    </p>
                    {/* -------------------------email------------------------- */}
                    <p className={cx('change-email')}>
                        Email: <b>luongvandu88@gmail.com</b> -{' '}
                        <a id={cx('email')} href="#">
                            Đổi email
                        </a>
                    </p>
                    <div className={cx('email')}>
                        <input placeholder="Địa chỉ email mới" />
                        <span id={cx('email-up')} className={cx('email-btn', 'update')}>
                            Cập nhật
                        </span>
                        <span id={cx('email-cancel')} className={cx('email-btn', 'cancel')}>
                            Hủy
                        </span>
                    </div>
                    {/* -------------------------password------------------------- */}
                    <a id={cx('password')} className={cx('break')} href="#">
                        Đổi mật khẩu
                    </a>
                    <div className={cx('pass')}>
                        <div className={cx('pass-input')}>
                            <input placeholder="Mật khẩu mới" /> <br />
                            <input type="password" placeholder="Nhập lại mật khẩu" /> <br />
                        </div>
                        <div className={cx('pass-btn')}>
                            <span id={cx('pass-up')} className={cx('btn', 'update')}>
                                Cập nhật
                            </span>
                            <span id={cx('pass-cancel')} className={cx('btn', 'cancel')}>
                                Hủy
                            </span>
                        </div>
                    </div>
                    {/* -------------------------create------------------------- */}
                    <a id={cx('create')} className={cx('break')} href="#">
                        Tạo mã giới thiệu
                    </a>
                    <div className={cx('invite')}>
                        <div className={cx('block-code')}>
                            <h3>Mã giới thiệu</h3>
                            <p>Để mời bạn bè tham gia trang web, hãy tạo mã giới thiệu và gửi họ.</p>
                            <button className={cx('code')}>Tạo mã</button>
                            <div id={cx('icon')} className={cx('icon')}>
                                <FontAwesomeIcon icon={faX} />
                            </div>
                        </div>
                    </div>
                    {/* ------------------------------------------------------------ */}
                    <p className={cx('cost')}>
                        Số dư: <b className={cx('money')}>6,538 đ</b>
                    </p>
                    <label className={cx('check')}>
                        <input type="checkbox" />
                        Bật chế độ kiểm duyệt phụ đề
                    </label>
                    <h6>Những từ ngữ tục, chửi thề... trong phụ đề sẽ được thay bằng ký tự lạ</h6>
                    {/* -------------------------VIP mode------------------------- */}
                    <button>Kích hoạt VIP mode</button>
                    {/* -------------------------note------------------------- */}
                    <h2>Các phim đã kích hoạt VIP Mode</h2>
                    <p className={cx('note')}>
                        Chú ý: chế độ VIP Mode có thời gian hiệu lực 10 ngày đối với phim. Tức là sau khi bạn kích hoạt
                        VIP Mode cho một phim nào đó, bạn có thể xem chế độ VIP với phim đó trong vòng 10 ngày.
                    </p>
                    <p className={cx('note')}>
                        Còn số dư trong tài khoản bạn thì không có thời hạn sử dụng. Bạn muốn dùng lúc nào cũng được.
                        Chẳng hạn tài khoản bạn còn 5000đ, thì 10 năm sau quay lại trang web bạn vẫn có thể dùng 5000đ
                        đó để kích hoạt VIP Mode cho phim.
                    </p>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Account;
