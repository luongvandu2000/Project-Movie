import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import Filter from './components/layouts/filter';
import Films from './components/layouts/films';
import Faqs from './pages/faqs';

function App() {
    return (
        <>
            {/* <Header />
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
                title="PHIM LẺ MỚI CẬP NHẬT"
                listfilm={[
                    { name: 'Ối! Có ma', desc: 'Oh! My Ghost', img: 'Oh My Ghost.jpg' },
                    { name: 'Mèo béo siêu đẳng', desc: 'The Amazing Maurice', img: 'The Amazing Maurice.jpg' },
                    { name: 'Tìm nhau', desc: 'Finding You', img: 'Finding You.jpg' },
                    { name: 'Liệt Thám', desc: 'Fierce Cop', img: 'Fierce Cop.jpg' },
                    { name: 'AKA', desc: 'AKA', img: 'AKA.jpg' },
                    { name: 'Dạ Điểu', desc: 'The Night Owl', img: 'The Night Owl.jpg' },
                    { name: 'Bà mối', desc: 'The Matchmaker', img: 'The Matchmaker.jpg' },
                    {
                        name: 'Cự Xà Sông Hoàng Hà',
                        desc: 'Giant Snake Events in Yellow River',
                        img: 'Giant Snake Events in Yellow River.jpg',
                    },
                    {
                        name: 'Phong Thần Dương Tiễn',
                        desc: 'The Legend Of Yang Jian / God of Trident: YangJian',
                        img: 'The Legend Of Yang Jian  God of Trident YangJian.jpg',
                    },
                    {
                        name: 'Phim anh em Super Mario',
                        desc: 'The Super Mario Bros. Movie',
                        img: 'The Super Mario Bros. Movie.jpg',
                    },
                ]}
                viewAll={true}
            />
            <Films
                title="PHIM BỘ MỚI CẬP NHẬT"
                listfilm={[
                    {
                        name: 'Kẻ Đánh Cắp Báu Vật',
                        desc: 'Stealer: The Treasure Keeper',
                        img: 'Stealer The Treasure Keeper.jpg',
                    },
                    { name: 'Citadel', desc: 'Citadel', img: 'Citadel.jpg' },
                    {
                        name: 'Các bệnh nhân của bác sĩ García',
                        desc: 'The Patients of Dr. García',
                        img: 'The Patients of Dr. García.jpg',
                    },
                    { name: 'Người mẹ tồi của tôi', desc: 'The Good Bad Mother', img: 'The Good Bad Mother.jpg' },
                    {
                        name: 'Chính trường nổi sóng',
                        desc: 'Wave Makers',
                        img: 'Wave Makers.jpg',
                    },
                    {
                        name: 'Trường Nguyệt Tẫn Minh',
                        desc: 'Till The End of The Moon',
                        img: 'Till The End of The Moon.jpg',
                    },
                    { name: 'Dr. Stone', desc: 'Dr. Stone', img: 'Dr. Stone.jpg' },
                    { name: 'Sweet Tooth: Cậu bé gạc nai', desc: 'Sweet Tooth', img: 'Sweet Tooth.jpg' },
                    { name: 'Học Kỳ Sinh Tử', desc: 'Duty After School', img: 'DutyAfterSchool.jpg' },
                    {
                        name: 'Người Kiến và Chiến binh Ong: Thế giới Lượng tử',
                        desc: 'Ant-Man and the Wasp: Quantumania',
                        img: 'AntmanQuantium.jpg',
                    },
                ]}
                viewAll={true}
            />
            <Footer /> */}
        <Header />
        <Faqs />
        <Footer />
        </>
    );
}

export default App;
