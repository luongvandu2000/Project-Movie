import classNames from 'classnames/bind';
import style from './odd.module.scss';
import base from '~/components/styles/baseStyle/base.module.scss';
import Films from '~/components/layouts/films';
import Header from '~/components/layouts/header';
import Footer from '~/components/layouts/footer';
import Filter from '~/components/layouts/filter';

const cx = classNames.bind(style);
const cbase = classNames.bind(base);

function Odd() {
    return (
        <>
            <Header />
            <section className={cx('odd')}>
                <div className={cbase('container-small')}>
                    <div>
                        <h1>Phim lẻ</h1>
                        <Filter times/>
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
                    ]}
                    viewAll={false}
                />
            </section>
            <Footer />
        </>
    );
}

export default Odd;
