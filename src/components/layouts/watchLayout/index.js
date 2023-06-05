import classNames from 'classnames/bind';
import style from './watch.module.scss';
import base from '~/components/styles/baseStyle/base.module.scss';

const cx = classNames.bind(style);
const cbase = classNames.bind(base);

function WatchLayout({ watch }) {
    return (
        <>
            <section className={cx('watch')}>
                <div>
                    <video
                        class="player-video"
                        autoplay=""
                        preload="auto"
                        playsinline=""
                        webkit-playsinline=""
                        controls="true"
                        height="700px"
                        width="100%"
                        src=""
                        poster="https://s199.imacdn.com/vg/2023/03/30/3a312cbbdeb00073_590f2573ff2414f5_25149168014434893.jpg"
                    ></video>
                </div>
                <div className={cbase('container-small')}>
                    <div>{watch.nameVn}</div>
                    <div>
                        {watch.nameEn} ({watch.year})
                    </div>
                </div>
            </section>
        </>
    );
}

export default WatchLayout;
