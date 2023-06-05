import classNames from 'classnames/bind';
import style from './series.module.scss';
import base from '~/components/styles/baseStyle/base.module.scss';
import Films from '~/components/layouts/filmsLayout';
import Header from '~/components/layouts/headerLayout';
import Footer from '~/components/layouts/footerLayout';
import Filter from '~/components/layouts/filterLayout';

const cx = classNames.bind(style);
const cbase = classNames.bind(base);

function Series() {
    return (
        <>
            <Header />
            <section className={cx('series')}>
                <div className={cbase('container-small')}>
                    <div>
                        <h1>Phim bộ</h1>
                        <Filter />
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

export default Series;
