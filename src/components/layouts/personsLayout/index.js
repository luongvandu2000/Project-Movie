import classNames from 'classnames/bind';
import style from './person.module.scss';
import base from '~/components/styles/baseStyle/base.module.scss';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const cx = classNames.bind(style);
const cbase = classNames.bind(base);

const coursePersons = [
    {
        id: 1,
        name: 'Keanu Reeves',
        img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg',
        story: 'Keanu Charles Reeves là một diễn viên người Canada. Reeves được biết đến với vai trò trong Bill & amp; Cuộc phiêu lưu tuyệt vời, tốc độ, điểm đột phá và bộ ba ma trận của Ted là Neo. Ông đã hợp tác với các đạo diễn lớn như Stephen Frears (trong bộ phim truyền hình thời kỳ nguy hiểm năm 1988); Gus Van Sant (trong bộ phim độc lập năm 1991 My own Private Idaho); và Bernardo Bertolucci (trong bộ phim Little Buddha năm 1993). Đề cập đến việc phát hành bộ phim năm 1991 của mình, nhà phê bình Janet Maslin của tờ New York Times, đã ca ngợi tính linh hoạt của Reeves, nói rằng ông thể hiện kỷ luật và phạm vi đáng kể. Ông di chuyển dễ dàng giữa thái độ cởi nút phù hợp với câu chuyện tố tụng của cảnh sát cách thể hiện vai trò truyện tranh của anh ấy. Một chủ đề lặp đi lặp lại trong các vai trò mà anh đã thể hiện là cứu thế giới, bao gồm các nhân vật của Ted Logan, Phật, Neo, Johnny Mnemonic, John Constantine và Klaatu.',
        info: [
            {
                job: 'Diễn viên',
                gender: 'Nam',
                birthdate: '9/1/1964',
                birthplace: 'Beirut, Lebanon',
            },
        ],
        actorInMovies: [
            {
                nameMovie: 'Siberia',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/eGfIsvdrUhTlQOkxQIELU7obDYj.jpg',
            },
            {
                nameMovie: 'John Wick: Chapter 2',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/hXWBc0ioZP3cN4zCu6SN3YHXZVO.jpg',
            },
            {
                nameMovie: 'John Wick',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg',
            },
            {
                nameMovie: 'Man of Tai Chi',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/wnuT1D0fsFu7chFLtcQqwPBaBVg.jpg',
            },
            {
                nameMovie: 'The Matrix',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
            },
            {
                nameMovie: '47 Ronin',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/xDHnmcroujCRG0ysYQaiswjbyHd.jpg',
            },
            {
                nameMovie: 'Constantine',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/vPYgvd2MwHlxTamAOjwVQp4qs1W.jpg',
            },
            {
                nameMovie: 'The Gift',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/nQdBE1P0r4ZrgGqy5EX8sL2kXG6.jpg',
            },
            {
                nameMovie: 'Dracula',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/scFDS0U5uYAjcVTyjNc7GmcZw1q.jpg',
            },
        ],
        portrait: [
            'https://image.tmdb.org/t/p/w220_and_h330_face/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg',
            'https://image.tmdb.org/t/p/w220_and_h330_face/rRdru6REr9i3WIHv2mntpcgxnoY.jpg',
            'https://image.tmdb.org/t/p/w220_and_h330_face/tgWjOflzUXikIu3jZrWneFeDOCA.jpg',
            'https://image.tmdb.org/t/p/w220_and_h330_face/8nLu5EvzOHJP2QG322asLERv5BT.jpg',
            'https://image.tmdb.org/t/p/w220_and_h330_face/Apn0hBhgbUccOG4GaO5fSmLYWVC.jpg',
            'https://image.tmdb.org/t/p/w220_and_h330_face/gvZa55c23VdK2Ohr0TyiOxonv0x.jpg',
        ],
    },
    {
        id: 2,
        name: 'Donnie Yen',
        img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/hTlhrrZMj8hZVvD17j4KyAFWBHc.jpg',
        story: 'Chân Tử Đan (sinh ngày 27 tháng 7 năm 1963) là một diễn viên, võ sĩ, đạo diễn phim, biên đạo hành động và nhà sản xuất phim người Hồng Kông. Ngoài việc là một diễn viên điện ảnh và truyền hình nổi tiếng ở Hồng Kông, Yen còn được quốc tế công nhận khi xuất hiện trong nhiều bộ phim cùng với các diễn viên nổi tiếng và quốc tế khác như Thành Long, Lý Liên Kiệt và Michelle Yeoh. Ông được coi là ngôi sao hành động hàng đầu của Hồng Kông; đạo diễn Peter Chan đã đề cập rằng ông là người hành động nó ngay bây giờ và đã xây dựng mình thành một người đàn ông đứng đầu thực sự, người tình cờ trở thành một ngôi sao hành động.',
        info: [
            {
                job: 'Diễn viên',
                gender: 'Nam',
                birthdate: '7/26/1963',
                birthplace: 'Yuexiu District, Guangzhou, China',
            },
        ],
        actorInMovies: [
            {
                nameMovie: 'Rogue One: A Star Wars Story',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/i0yw1mFbB7sNGHCs7EXZPzFkdA1.jpg',
            },
            {
                nameMovie: 'Big Brother',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/z6Y6uQn2fORr7o43EggQrTsp08o.jpg',
            },
            {
                nameMovie: 'xXx: Return of Xander Cage',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/hba8zREJpP1AYhaXgb2oJLQeO0K.jpg',
            },
            {
                nameMovie: 'IP Man 3',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/RTt4lgyTDI8JHMGbZGDDbcZmkM.jpg',
            },
            {
                nameMovie: 'Crouching Tiger, Hidden Dragon 2: Sword of Destiny',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/te3aeAyhkfqgpa5BSTq3oNxGqQD.jpg',
            },
            {
                nameMovie: 'Chasing the Dragon',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/Lc0XGNZmsFe3uA1UMqhlBiJSY4.jpg',
            },
            {
                nameMovie: 'IP Man 2',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/yB5v6wRhIoZxlDvCFFCQhUNezDY.jpg',
            },
            {
                nameMovie: 'IP Man',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/ggTTUXZg7trvAhsVj3eyd65bAnh.jpg',
            },
            {
                nameMovie: 'Special ID',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/1JmlCQWg1mdQTUMgJQsH7XHcXpA.jpg',
            },
            {
                nameMovie: 'Blade II',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/wAn6VYamKbnOtfyTZ6arVtkMzDv.jpg',
            },
            {
                nameMovie: 'Kick Ass Girls',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/aTRRrw9l3yGgNoHThYmDbNkfmcr.jpg',
            },
            {
                nameMovie: 'Iceman',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/juAYTbpP05NR8co9GhDTPwEKqde.jpg',
            },
            {
                nameMovie: 'Hero',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/dsSTITP8sq2pO7ZWo72NNYejYLW.jpg',
            },
            {
                nameMovie: 'Kung Fu Jungle',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/myZQ4WocOQQCXNGVJkHeeJ1jTEj.jpg',
            },
        ],
        portrait: [
            'https://image.tmdb.org/t/p/w220_and_h330_face/hTlhrrZMj8hZVvD17j4KyAFWBHc.jpg',
            'https://image.tmdb.org/t/p/w220_and_h330_face/p3sugAyhw7yHPFPr3G3oRPcb2in.jpg',
            'https://image.tmdb.org/t/p/w220_and_h330_face/nc0O9FJs3iE2LqDsuPHv8Jv068f.jpg',
            'https://image.tmdb.org/t/p/w220_and_h330_face/q573E9wB1xRPETyxpLGQA9ioQOw.jpg',
            'https://image.tmdb.org/t/p/w220_and_h330_face/qOPkXfHbBAhNupOBFbERtebNbkw.jpg',
        ],
    },
    {
        id: 3,
        name: 'Ian McShane',
        img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/q9qKbux5Jo76Sj8g3luxBt6rYtz.jpg',
        story: 'Ian David McShane (sinh ngày 29 tháng 9 năm 1942) là một diễn viên người Anh. Mặc dù anh ấy đã xuất hiện trong nhiều bộ phim, nhưng qua các vai diễn trên truyền hình mà anh ấy thường được biết đến, bắt đầu với Lovejoy của BBC (1986. Anh đóng vai vua Silas Benjamin trong loạt phim Kings của NBC và vai Blackbeard trong Cướp biển vùng Caribbean: On Stranger Tides.',
        info: [
            {
                job: 'Diễn viên',
                gender: 'Nam',
                birthdate: '9/1/1964',
                birthplace: 'Beirut, Lebanon',
            },
        ],
        actorInMovies: [
            {
                nameMovie: 'Siberia',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/eGfIsvdrUhTlQOkxQIELU7obDYj.jpg',
            },
            {
                nameMovie: 'John Wick: Chapter 2',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/hXWBc0ioZP3cN4zCu6SN3YHXZVO.jpg',
            },
            {
                nameMovie: 'John Wick',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg',
            },
            {
                nameMovie: 'Man of Tai Chi',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/wnuT1D0fsFu7chFLtcQqwPBaBVg.jpg',
            },
            {
                nameMovie: 'The Matrix',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
            },
            {
                nameMovie: '47 Ronin',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/xDHnmcroujCRG0ysYQaiswjbyHd.jpg',
            },
            {
                nameMovie: 'Constantine',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/vPYgvd2MwHlxTamAOjwVQp4qs1W.jpg',
            },
            {
                nameMovie: 'The Gift',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/nQdBE1P0r4ZrgGqy5EX8sL2kXG6.jpg',
            },
            {
                nameMovie: 'Dracula',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/scFDS0U5uYAjcVTyjNc7GmcZw1q.jpg',
            },
        ],
        portrait: [
            'https://image.tmdb.org/t/p/w220_and_h330_face/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg',
            'https://image.tmdb.org/t/p/w220_and_h330_face/rRdru6REr9i3WIHv2mntpcgxnoY.jpg',
            'https://image.tmdb.org/t/p/w220_and_h330_face/tgWjOflzUXikIu3jZrWneFeDOCA.jpg',
            'https://image.tmdb.org/t/p/w220_and_h330_face/8nLu5EvzOHJP2QG322asLERv5BT.jpg',
            'https://image.tmdb.org/t/p/w220_and_h330_face/Apn0hBhgbUccOG4GaO5fSmLYWVC.jpg',
            'https://image.tmdb.org/t/p/w220_and_h330_face/gvZa55c23VdK2Ohr0TyiOxonv0x.jpg',
        ],
    },
    {
        id: 4,
        name: 'Bill Skarsgård',
        img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/cFQN6rLSSLhGx8NQI7krYWwdRpl.jpg',
        info: [
            {
                job: 'Diễn viên',
                gender: 'Nam',
            },
        ],
        actorInMovies: [
            {
                nameMovie: 'Rogue One: A Star Wars Story',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/i0yw1mFbB7sNGHCs7EXZPzFkdA1.jpg',
            },
            {
                nameMovie: 'Big Brother',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/z6Y6uQn2fORr7o43EggQrTsp08o.jpg',
            },
            {
                nameMovie: 'xXx: Return of Xander Cage',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/hba8zREJpP1AYhaXgb2oJLQeO0K.jpg',
            },
            {
                nameMovie: 'IP Man 3',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/RTt4lgyTDI8JHMGbZGDDbcZmkM.jpg',
            },
            {
                nameMovie: 'Crouching Tiger, Hidden Dragon 2: Sword of Destiny',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/te3aeAyhkfqgpa5BSTq3oNxGqQD.jpg',
            },
            {
                nameMovie: 'Chasing the Dragon',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/Lc0XGNZmsFe3uA1UMqhlBiJSY4.jpg',
            },
            {
                nameMovie: 'IP Man 2',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/yB5v6wRhIoZxlDvCFFCQhUNezDY.jpg',
            },
            {
                nameMovie: 'IP Man',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/ggTTUXZg7trvAhsVj3eyd65bAnh.jpg',
            },
            {
                nameMovie: 'Special ID',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/1JmlCQWg1mdQTUMgJQsH7XHcXpA.jpg',
            },
            {
                nameMovie: 'Blade II',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/wAn6VYamKbnOtfyTZ6arVtkMzDv.jpg',
            },
            {
                nameMovie: 'Kick Ass Girls',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/aTRRrw9l3yGgNoHThYmDbNkfmcr.jpg',
            },
            {
                nameMovie: 'Iceman',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/juAYTbpP05NR8co9GhDTPwEKqde.jpg',
            },
            {
                nameMovie: 'Hero',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/dsSTITP8sq2pO7ZWo72NNYejYLW.jpg',
            },
            {
                nameMovie: 'Kung Fu Jungle',
                img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/myZQ4WocOQQCXNGVJkHeeJ1jTEj.jpg',
            },
        ],
        portrait: [
            'https://image.tmdb.org/t/p/w220_and_h330_face/hTlhrrZMj8hZVvD17j4KyAFWBHc.jpg',
            'https://image.tmdb.org/t/p/w220_and_h330_face/p3sugAyhw7yHPFPr3G3oRPcb2in.jpg',
            'https://image.tmdb.org/t/p/w220_and_h330_face/nc0O9FJs3iE2LqDsuPHv8Jv068f.jpg',
            'https://image.tmdb.org/t/p/w220_and_h330_face/q573E9wB1xRPETyxpLGQA9ioQOw.jpg',
        ],
    },
];

function PersonsLayout() {
    const { id } = useParams();
    useEffect(() => {
        console.log(id);
    });

    return (
        <section className={cx('persons')}>
            <div className={cbase('container-small')}>
                <div className={cx('person-frame')}>
                    <div className={cx('short-info')}>
                        <img src={coursePersons[id - 1].img} />
                        <h2>Thông tin cá nhân</h2>
                        {coursePersons[id - 1].info.map((e, i) => (
                            <ul key={i}>
                                {e.job == undefined ? (
                                    ''
                                ) : (
                                    <li>
                                        <div className={cx('field')}>Nghề nghiệp</div>
                                        <div className={cx('field-detail')}>{e.job}</div>
                                    </li>
                                )}
                                {e.gender == undefined ? (
                                    ''
                                ) : (
                                    <li>
                                        <div className={cx('field')}>Giới tính</div>
                                        <div className={cx('field-detail')}>{e.gender}</div>
                                    </li>
                                )}
                                {e.birthdate == undefined ? (
                                    ''
                                ) : (
                                    <li>
                                        <div className={cx('field')}>Ngày sinh</div>
                                        <div className={cx('field-detail')}>{e.birthdate}</div>
                                    </li>
                                )}
                                {e.birthplace == undefined ? (
                                    ''
                                ) : (
                                    <li>
                                        <div className={cx('field')}>Nơi sinh</div>
                                        <div className={cx('field-detail')}>{e.birthplace}</div>
                                    </li>
                                )}
                            </ul>
                        ))}
                    </div>
                    <div className={cx('info-detail')}>
                        <h1>{coursePersons[id - 1].name}</h1>
                        <div className={cx('story')}>
                            {coursePersons[id - 1].story == undefined ? (
                                ''
                            ) : (
                                <>
                                    <h2>Tiểu sử</h2>
                                    <p>{coursePersons[id - 1].story}</p>
                                </>
                            )}
                        </div>
                        <div className={cx('inMoviesFrame')}>
                            {coursePersons[id - 1].actorInMovies == undefined ? (
                                ''
                            ) : (
                                <>
                                    <h2>Các phim đã tham gia</h2>
                                    <div className={cx('inMovies')}>
                                        {coursePersons[id - 1].actorInMovies.map((e, i) => (
                                            <div key={i} className={cx('img-wrap')}>
                                                <Link to={'/movies'}>
                                                    <img src={e.img} />
                                                </Link>
                                                <h1>{e.nameMovie}</h1>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                        {coursePersons[id - 1].portrait == undefined ? (
                            ''
                        ) : (
                            <>
                                <h2>Ảnh</h2>
                                <div className={cx('img-portrait')}>
                                    {coursePersons[id - 1].portrait.map((e, i) => (
                                        <div key={i} className={cx('img-wrap')}>
                                            <img src={e} />
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PersonsLayout;
