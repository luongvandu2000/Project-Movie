import Header from '~/components/layouts/headerLayout';
import Footer from '~/components/layouts/footerLayout';
import WatchLayout from '~/components/layouts/watchLayout';

const courseWatchMovies = [
    {
        id: 1,
        src: "",
        nameVn: "Sát thủ John Wick: Phần 4",
        nameEn: "John Wick: Chapter 4",
        year: "2023",
    },
]

function Watch() { 
    return (
        <>
            <Header />
            <WatchLayout watch={courseWatchMovies[0]} />
            {/* <Footer /> */}
        </>
    );
}

export default Watch;
