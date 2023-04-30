import classNames from 'classnames/bind';
import style from './search.module.scss';
import base from '~/components/styles/baseStyle/base.module.scss';
import Films from '~/components/layouts/films';
import Header from '~/components/layouts/header';
import Footer from '~/components/layouts/footer';

const cx = classNames.bind(style);
const cbase = classNames.bind(base);

function Search() {
    return (
        <>
            <Header />
            <section className={cx('search')}>
                <div className={cbase('container-small')}>
                    <input className={cx('search-films')} placeholder="Nhập tên phim..." />
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

export default Search;
