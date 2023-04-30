import classNames from 'classnames/bind';
import style from './top.module.scss';
import base from '~/components/styles/baseStyle/base.module.scss';
import Films from '~/components/layouts/films';
import Header from '~/components/layouts/header';
import Footer from '~/components/layouts/footer';
import { useEffect } from 'react';

const cx = classNames.bind(style);
const cbase = classNames.bind(base);

function Top() {
    useEffect(() => {
        const timeViews = document.querySelectorAll(`.${cx('times-view')}`);

        timeViews.forEach((element) => {
            element.addEventListener('click', () => {
                timeViews.forEach((e) => {
                    e.classList.remove(`${cx('active')}`);
                });
                element.classList.add(`${cx('active')}`);
            });
        });
    }, []);

    return (
        <>
            <Header />
            <section className={cx('top')}>
                <div className={cbase('container-small')}>
                    <div>
                        <h1>Top phim được xem nhiều nhất</h1>
                        <div className={cx('times')}>
                            <div className={cx('times-view', 'active')}>Ngày</div>
                            <div className={cx('times-view')}>Tuần</div>
                            <div className={cx('times-view')}>Tháng</div>
                        </div>
                    </div>
                </div>
                <Films
                    listfilm={[
                        { name: 'Tiếng Thét 6', desc: 'Scream 6', img: 'Scream.jpg' },
                        { name: 'Biệt Tích', desc: 'Ghosted', img: 'Ghosted.jpg' },
                        {
                            name: 'Thanh Gươm Diệt Quỷ',
                            desc: 'Demon Slayer: Kimetsu No Yaiba',
                            img: 'DemonSlayder.jpg',
                        },
                        { name: 'Học Kỳ Sinh Tử', desc: 'Duty After School', img: 'DutyAfterSchool.jpg' },
                        {
                            name: 'Người Kiến và Chiến binh Ong: Thế giới Lượng tử',
                            desc: 'Ant-Man and the Wasp: Quantumania',
                            img: 'AntmanQuantium.jpg',
                        },
                        { name: 'Tiếng Thét 6', desc: 'Scream 6', img: 'Scream.jpg' },
                        { name: 'Biệt Tích', desc: 'Ghosted', img: 'Ghosted.jpg' },
                        {
                            name: 'Thanh Gươm Diệt Quỷ',
                            desc: 'Demon Slayer: Kimetsu No Yaiba',
                            img: 'DemonSlayder.jpg',
                        },
                        { name: 'Học Kỳ Sinh Tử', desc: 'Duty After School', img: 'DutyAfterSchool.jpg' },
                        {
                            name: 'Người Kiến và Chiến binh Ong: Thế giới Lượng tử',
                            desc: 'Ant-Man and the Wasp: Quantumania',
                            img: 'AntmanQuantium.jpg',
                        },
                        { name: 'Tiếng Thét 6', desc: 'Scream 6', img: 'Scream.jpg' },
                        { name: 'Biệt Tích', desc: 'Ghosted', img: 'Ghosted.jpg' },
                        {
                            name: 'Thanh Gươm Diệt Quỷ',
                            desc: 'Demon Slayer: Kimetsu No Yaiba',
                            img: 'DemonSlayder.jpg',
                        },
                        { name: 'Học Kỳ Sinh Tử', desc: 'Duty After School', img: 'DutyAfterSchool.jpg' },
                        {
                            name: 'Người Kiến và Chiến binh Ong: Thế giới Lượng tử',
                            desc: 'Ant-Man and the Wasp: Quantumania',
                            img: 'AntmanQuantium.jpg',
                        },
                        { name: 'Tiếng Thét 6', desc: 'Scream 6', img: 'Scream.jpg' },
                        { name: 'Biệt Tích', desc: 'Ghosted', img: 'Ghosted.jpg' },
                        {
                            name: 'Thanh Gươm Diệt Quỷ',
                            desc: 'Demon Slayer: Kimetsu No Yaiba',
                            img: 'DemonSlayder.jpg',
                        },
                        { name: 'Học Kỳ Sinh Tử', desc: 'Duty After School', img: 'DutyAfterSchool.jpg' },
                        {
                            name: 'Người Kiến và Chiến binh Ong: Thế giới Lượng tử',
                            desc: 'Ant-Man and the Wasp: Quantumania',
                            img: 'AntmanQuantium.jpg',
                        },
                        { name: 'Tiếng Thét 6', desc: 'Scream 6', img: 'Scream.jpg' },
                        { name: 'Biệt Tích', desc: 'Ghosted', img: 'Ghosted.jpg' },
                        {
                            name: 'Thanh Gươm Diệt Quỷ',
                            desc: 'Demon Slayer: Kimetsu No Yaiba',
                            img: 'DemonSlayder.jpg',
                        },
                        { name: 'Học Kỳ Sinh Tử', desc: 'Duty After School', img: 'DutyAfterSchool.jpg' },
                        {
                            name: 'Người Kiến và Chiến binh Ong: Thế giới Lượng tử',
                            desc: 'Ant-Man and the Wasp: Quantumania',
                            img: 'AntmanQuantium.jpg',
                        },
                        { name: 'Tiếng Thét 6', desc: 'Scream 6', img: 'Scream.jpg' },
                        { name: 'Biệt Tích', desc: 'Ghosted', img: 'Ghosted.jpg' },
                        {
                            name: 'Thanh Gươm Diệt Quỷ',
                            desc: 'Demon Slayer: Kimetsu No Yaiba',
                            img: 'DemonSlayder.jpg',
                        },
                        { name: 'Học Kỳ Sinh Tử', desc: 'Duty After School', img: 'DutyAfterSchool.jpg' },
                        {
                            name: 'Người Kiến và Chiến binh Ong: Thế giới Lượng tử',
                            desc: 'Ant-Man and the Wasp: Quantumania',
                            img: 'AntmanQuantium.jpg',
                        },
                    ]}
                    viewAll={false}
                />
            </section>
            <Footer />
        </>
    );
}

export default Top;
