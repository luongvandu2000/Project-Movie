import Movies from '~/components/layouts/moviesLayout';
import Header from '~/components/layouts/headerLayout';
import Footer from '~/components/layouts/footerLayout';

const courseMovies = [
    {
        id: 1, //id
        bg: 'https://www.digitaltrends.com/wp-content/uploads/2023/04/Dar-Salim-and-Jake-Gyllenhaal-sit-in-a-humvee-together-in-The-Covenant.jpg?p=1',
        poster: 'https://image.tmdb.org/t/p/w342/aX0H63vho7rZ9Rm3I567Zf00Z1t.jpg', //backdrop_path
        nameEn: "Guy Ritchie's The Covenant", //title
        nameVn: 'Khế Ước', //title
        year: '2023', //
        time: '170', //runtime
        imdb: '7.7', //vote_average
        type: ['Chiến tranh', 'Chính kịch', 'Hành động'],//genres
        director: ['Chad Stahelski'],
        screenWriter: ['Shay Hatten', 'Michael Finch'], //
        country: ['Đức', 'Mỹ'], //production_countries
        premiere: '3/22/2023', //release_date
        shorDecription: //overview
            'Trong nhiệm vụ cuối cùng ở Afghanistan, Trung sĩ John Kinley cùng đội với phiên dịch viên bản địa Ahmed. Khi đơn vị của họ bị phục kích, Kinley và Ahmed là 2 người sống sót duy nhất. Bị kẻ địch truy đuổi, Ahmed liều mạng đưa Kinley đang bị thương băng qua nhiều dặm đường địa hình khắc nghiệt đến nơi an toàn. Trở về Mỹ, Kinley biết rằng Ahmed và gia đình không dc cấp giấy thông hành tới Mỹ như đã hứa. Quyết tâm bảo vệ bạn mình và đền ơn cứu mạng, Kinley trở lại chiến trường để giúp Ahmed và gia đình trước khi lực lượng phiến quân phát hiện ra họ.', 
        actors: [ 
            {
                id: 1,
                img: 'https://image.tmdb.org/t/p/w138_and_h175_face/rJdYHYNhlcOBwbPvDZVvt1xw7bi.jpg',
                name: 'Jake Gyllenhaal',
                character: 'Sgt. John Kinley',
            },
            {
                id: 2,
                img: 'https://image.tmdb.org/t/p/w138_and_h175_face/oTYCqdF6nfZTsvt1fbypi54ydI.jpg',
                name: 'Dar Salim',
                character: 'Ahmed',
            },
            {
                id: 3,
                img: 'https://image.tmdb.org/t/p/w138_and_h175_face/efqC1XQSyHaRWYyTRWCQbbPOfRC.jpg',
                name: 'Jake',
                character: 'Sgt. John Kinley',
            },
            {
                id: 4,
                img: 'https://image.tmdb.org/t/p/w138_and_h175_face/unP5YUgEdECL2gMLs0zCNya6is6.jpg',
                name: 'Gyllenhaal',
                character: 'Sgt. John Kinley',
            },
            {
                img: 'https://image.tmdb.org/t/p/w138_and_h175_face/otCQdDtnrMvZ5tPC62zLx0SaXeR.jpg',
                name: 'Jake Gyllenhaal',
                character: 'Sgt. John Kinley',
            },
            {
                img: 'https://image.tmdb.org/t/p/w138_and_h175_face/knR5avTlO4Xnxw7Nc3xxUj3rtjh.jpg',
                name: 'Jake Gyllenhaal',
                character: 'Sgt. John Kinley',
            },
            {
                img: 'https://image.tmdb.org/t/p/w138_and_h175_face/rJdYHYNhlcOBwbPvDZVvt1xw7bi.jpg',
                name: 'Jake Gyllenhaal',
                character: 'Sgt. John Kinley',
            },
            {
                img: 'https://image.tmdb.org/t/p/w138_and_h175_face/rJdYHYNhlcOBwbPvDZVvt1xw7bi.jpg',
                name: 'Jake Gyllenhaal',
                character: 'Sgt. John Kinley',
            },
            {
                img: 'https://image.tmdb.org/t/p/w138_and_h175_face/rJdYHYNhlcOBwbPvDZVvt1xw7bi.jpg',
                name: 'Jake Gyllenhaal',
                character: 'Sgt. John Kinley',
            },
            {
                img: 'https://image.tmdb.org/t/p/w138_and_h175_face/rJdYHYNhlcOBwbPvDZVvt1xw7bi.jpg',
                name: 'Jake Gyllenhaal',
                character: 'Sgt. John Kinley',
            },
        ],
        trailers: [
            {
                img: 'https://img.youtube.com/vi/GAjlZOTDV6o/mqdefault.jpg',
                srcVideo: 'https://www.youtube.com/embed/GAjlZOTDV6o',
            },
            {
                img: 'https://img.youtube.com/vi/e_iYAfDvGQo/mqdefault.jpg',
                srcVideo: 'https://www.youtube.com/embed/e_iYAfDvGQo',
            },
            {
                img: 'https://img.youtube.com/vi/3WnUo16nBfo/mqdefault.jpg',
                srcVideo: 'https://www.youtube.com/embed/3WnUo16nBfo',
            },
            {
                img: 'https://img.youtube.com/vi/T_kZgRKDSV4/mqdefault.jpg',
                srcVideo: 'https://www.youtube.com/embed/T_kZgRKDSV4',
            },
            {
                img: 'https://img.youtube.com/vi/GAjlZOTDV6o/mqdefault.jpg',
                srcVideo: 'https://www.youtube.com/embed/GAjlZOTDV6o',
            },
        ],
        similar: [
            {
                link: '',
                img: 'https://image.tmdb.org/t/p/w342/tDe5eLxAbeK7sYckUn5aH3ngWnn.jpg',
                name: 'Hunt',
            },
            {
                link: '',
                img: 'https://image.tmdb.org/t/p/w342/r7ZipEd9oHHVVXTcvbx3Sd3Tukv.jpg',
                name: 'Candy Land',
            },
            {
                link: '',
                img: 'https://image.tmdb.org/t/p/w342/9N3KwhzBCcqmFcqHpPCsjqfym9M.jpg',
                name: 'Battle for Saipan',
            },
            {
                link: '',
                img: 'https://image.tmdb.org/t/p/w342/3BSxAjiporlwQTWzaHZ9Yrl5C9D.jpg',
                name: 'AKA',
            },
            {
                link: '',
                img: 'https://image.tmdb.org/t/p/w342/y2d2SBqK33mGOG2CqAYMo3YbWE4.jpg',
                name: 'Assassin Club',
            },
            {
                link: '',
                img: 'https://image.tmdb.org/t/p/w342/9N3KwhzBCcqmFcqHpPCsjqfym9M.jpg',
                name: 'Battle for Saipan',
            },
            {
                link: '',
                img: 'https://image.tmdb.org/t/p/w342/3BSxAjiporlwQTWzaHZ9Yrl5C9D.jpg',
                name: 'AKA',
            },
            {
                link: '',
                img: 'https://image.tmdb.org/t/p/w342/y2d2SBqK33mGOG2CqAYMo3YbWE4.jpg',
                name: 'Assassin Club',
            },
        ],
    },
];

function MoviesPage() {
    return (
        <>
            <Header />
            <Movies movies={courseMovies[0]} />
            <Footer />
        </>
    );
}

export default MoviesPage;
