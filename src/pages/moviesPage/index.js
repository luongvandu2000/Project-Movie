import Movies from '~/components/layouts/movies';
import Header from '~/components/layouts/header';
import Footer from '~/components/layouts/footer';

const courseMovies = [
    {
        id: 1,
        poster: 'https://image.tmdb.org/t/p/w342/aX0H63vho7rZ9Rm3I567Zf00Z1t.jpg',
        nameEn: "Guy Ritchie's The Covenant",
        nameVn: 'Khế Ước',
        year: '2023',
        time: '2 giờ 3 phút',
        imdb: '7.7',
        type: ['Chiến tranh', 'Chính kịch', 'Hành động'],
        director: ['Chad Stahelski'],
        script: ['Shay Hatten', 'Michael Finch'],
        country: ['Đức', 'Mỹ'],
        premiere: '3/22/2023',
        shorDecription:
            'Trong nhiệm vụ cuối cùng ở Afghanistan, Trung sĩ John Kinley cùng đội với phiên dịch viên bản địa Ahmed. Khi đơn vị của họ bị phục kích, Kinley và Ahmed là 2 người sống sót duy nhất. Bị kẻ địch truy đuổi, Ahmed liều mạng đưa Kinley đang bị thương băng qua nhiều dặm đường địa hình khắc nghiệt đến nơi an toàn. Trở về Mỹ, Kinley biết rằng Ahmed và gia đình không dc cấp giấy thông hành tới Mỹ như đã hứa. Quyết tâm bảo vệ bạn mình và đền ơn cứu mạng, Kinley trở lại chiến trường để giúp Ahmed và gia đình trước khi lực lượng phiến quân phát hiện ra họ.',
    },
];

function moviesPage() {
    return (
        <>
            <Header />
            <Movies movies={courseMovies[0]} />
            <Footer />
        </>
    );
}

export default moviesPage;
