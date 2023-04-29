import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import Filter from './components/layouts/filter';
import Films from './components/layouts/films';

function App() {
    return (
        <>
            <Header />
            <Filter />
            <Films
                title="PHIM ĐỀ CỬ"
                listfilm={[
                    { name: 'Tiếng Thét 6', desc: 'Scream 6', img: 'Scream.jpg' },
                    { name: 'Biệt Tích', desc: 'Ghosted', img: 'Ghosted.jpg' },
                    { name: 'Thanh Gươm Diệt Quỷ', desc: 'Demon Slayer: Kimetsu No Yaiba', img: 'DemonSlayder.jpg' },
                    { name: 'Học Kỳ Sinh Tử', desc: 'Duty After School', img: 'DutyAfterSchool.jpg' },
                    {
                        name: 'Người Kiến và Chiến binh Ong: Thế giới Lượng tử',
                        desc: 'Ant-Man and the Wasp: Quantumania',
                        img: 'AntmanQuantium.jpg',
                    },
                ]}
                viewAll={false}
            />
            <Films
                title="PHIM BỘ MỚI CẬP NHẬT"
                listfilm={[
                    { name: 'Tiếng Thét 6', desc: 'Scream 6', img: 'Scream.jpg' },
                    { name: 'Biệt Tích', desc: 'Ghosted', img: 'Ghosted.jpg' },
                    { name: 'Thanh Gươm Diệt Quỷ', desc: 'Demon Slayer: Kimetsu No Yaiba', img: 'DemonSlayder.jpg' },
                    { name: 'Học Kỳ Sinh Tử', desc: 'Duty After School', img: 'DutyAfterSchool.jpg' },
                    {
                        name: 'Người Kiến và Chiến binh Ong: Thế giới Lượng tử',
                        desc: 'Ant-Man and the Wasp: Quantumania',
                        img: 'AntmanQuantium.jpg',
                    },
                    { name: 'Tiếng Thét 6', desc: 'Scream 6', img: 'Scream.jpg' },
                    { name: 'Biệt Tích', desc: 'Ghosted', img: 'Ghosted.jpg' },
                    { name: 'Thanh Gươm Diệt Quỷ', desc: 'Demon Slayer: Kimetsu No Yaiba', img: 'DemonSlayder.jpg' },
                    { name: 'Học Kỳ Sinh Tử', desc: 'Duty After School', img: 'DutyAfterSchool.jpg' },
                    {
                        name: 'Người Kiến và Chiến binh Ong: Thế giới Lượng tử',
                        desc: 'Ant-Man and the Wasp: Quantumania',
                        img: 'AntmanQuantium.jpg',
                    },
                ]}
                viewAll={true}
            />
            <Films
                title="PHIM LẺ MỚI CẬP NHẬT"
                listfilm={[
                    { name: 'Tiếng Thét 6', desc: 'Scream 6', img: 'Scream.jpg' },
                    { name: 'Biệt Tích', desc: 'Ghosted', img: 'Ghosted.jpg' },
                    { name: 'Thanh Gươm Diệt Quỷ', desc: 'Demon Slayer: Kimetsu No Yaiba', img: 'DemonSlayder.jpg' },
                    { name: 'Học Kỳ Sinh Tử', desc: 'Duty After School', img: 'DutyAfterSchool.jpg' },
                    {
                        name: 'Người Kiến và Chiến binh Ong: Thế giới Lượng tử',
                        desc: 'Ant-Man and the Wasp: Quantumania',
                        img: 'AntmanQuantium.jpg',
                    },
                    { name: 'Tiếng Thét 6', desc: 'Scream 6', img: 'Scream.jpg' },
                    { name: 'Biệt Tích', desc: 'Ghosted', img: 'Ghosted.jpg' },
                    { name: 'Thanh Gươm Diệt Quỷ', desc: 'Demon Slayer: Kimetsu No Yaiba', img: 'DemonSlayder.jpg' },
                    { name: 'Học Kỳ Sinh Tử', desc: 'Duty After School', img: 'DutyAfterSchool.jpg' },
                    {
                        name: 'Người Kiến và Chiến binh Ong: Thế giới Lượng tử',
                        desc: 'Ant-Man and the Wasp: Quantumania',
                        img: 'AntmanQuantium.jpg',
                    },
                ]}
                viewAll={true}
            />
            <Footer />
        </>
    );
}

export default App;
