import Faqs from '~/components/layouts/faqs';

function Faq() {
    return (
        <>
            <Faqs
                title="Câu hỏi thường gặp"
                listFaqs={[
                    {
                        id: 1,
                        ask: 'Xem phim bị chậm, mặc dù đã kích hoạt VIP Mode cho phim đó?',
                        answer: {
                            contents: [
                                'Nếu phim chạy nhưng cứ một đoạn lại bị dừng để chờ load tiếp (dù đã thử chọn các server khác nhau), cần xác định do thiết bị hay do mạng của bạn.',
                            ],
                            details: [
                                {
                                    content:
                                        'Hãy thử xem phim trên một thiết bị khác (máy tính / điện thoại / TV...). Nếu đổi sang thiết bị khác phim lại chạy mượt => do thiết bị cũ của bạn. Nếu đó là TV, hãy kiểm tra thiết lập TV và tắt giao thức kết nối mạng IPv6. Nếu đó là một thiết bị chạy iOS, thì hãy thử dùng một trình duyệt khác (chẳng hạn Chrome) thay vì trình duyệt Safari mặc định, nhưng nói chung player trên iOS rất hay có vấn đề với phim bitrate cao + âm thanh 5.1.',
                                },
                                {
                                    content: (
                                        <>
                                            Nếu phim chạy chậm trên tất cả các thiết bị mà bạn thử, với tất cả các
                                            server mà trang web cung cấp (bật chế độ VIP mới có), thì đó là do{' '}
                                            <b>băng thông đường truyền quốc tế</b> mạng của bạn bị bóp (do đường truyền
                                            quốc tế bị nghẽn vào giờ cao điểm hoặc đứt cáp...). Có 2 cách giải quyết: 1.
                                            Gọi điện phản ánh với nhà mạng; 2. Sử dụng một VPN (mạng riêng ảo) để tăng
                                            tốc độ cho mạng của bạn. Chúng tôi <b>đề xuất bạn dùng ứng dụng WARP</b>{' '}
                                            {'=>'}{' '}
                                            <a href="https://1.1.1.1/" target="_blank">
                                                download tại đây
                                            </a>{' '}
                                            ( hoặc tải WARP+{' '}
                                            <a href="https://apkcombo.com/vi/vpn/" target="_blank">
                                                tại đây
                                            </a>
                                            ).
                                        </>
                                    ),
                                    paragraphs: [
                                        {
                                            content:
                                                'Lưu ý: việc bật VPN sẽ làm thay đổi tuyến đường truyền dữ liệu từ máy chủ tới thiết bị của bạn, và không phải cứ bật VPN mạng sẽ nhanh hơn - đôi khi bật VPN sẽ khiến mạng bạn chậm hơn! Cũng giống như có lúc tuyến đường này tắc, giao thông ùn trệ, thì nên đổi sang tuyến đường khác thông thoáng hơn, nhưng lúc khác thì ngược lại!',
                                        },
                                        {
                                            content:
                                                'Do đó, lúc nào xem phim bị lag hãy làm như sau để tìm được tuyến đường truyền dữ liệu nhanh nhất:',
                                            lists: [
                                                <>
                                                    <b>Tắt</b> VPN rồi thử đổi từng server trên trang web
                                                </>,
                                                <>
                                                    <b>Bật</b> VPN rồi thử đổi từng server trên trang web
                                                </>,
                                            ],
                                        },
                                        {
                                            content:
                                                '...cho tới khi tìm được sự kết hợp nào giúp xem phim mượt nhất. Và hãy nhớ, sự kết hợp đó chưa chắc đã là tốt nhất mọi lúc. Nên lúc nào bị lag, hãy lặp lại các bước thử trên!',
                                        },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: 2,
                        ask: 'Gặp vấn đề về âm thanh: phim không có tiếng, mất tiếng nhân vật, hoặc âm thanh bị rè?',
                        answer: {
                            details: [
                                {
                                    content: (
                                        <>
                                            Nếu xem trên điện thoại: Lỗi âm thanh là do trình duyệt của bạn (thường là
                                            Chrome). Hãy {' '}
                                            <a
                                                href="https://play.google.com/store/apps/details?id=org.mozilla.firefox"
                                                target="_blank"
                                            >
                                                cài & dùng trình duyệt Firefox
                                            </a>
                                            !
                                        </>
                                    ),
                                },
                                {
                                    content:
                                        'Nếu bạn xem trên PC: Khác với phim / clip trên các web khác (kể cả Youtube), phim trên XemPhim sử dụng âm thanh 5.1 (6 channel) thay vì âm thanh stereo (2 channel). Nếu thiết bị bạn xem chỉ có 2 loa, bạn cần thiết lập chương trình quản lý âm thanh trên thiết bị cho đúng: chọn đúng chế độ với số loa mình có (stereo), đừng chọn nhiều hơn, nếu không thiết bị của bạn sẽ cố gắng xuất âm thanh ra những loa không tồn tại => mất tiếng.',
                                    paragraphs: [
                                        {
                                            content: (
                                                <>
                                                    Ví dụ đây là phần chọn các chế độ âm thanh của Realtek HD Audio
                                                    Manager:{' '}
                                                    <a href="https://imgur.com/a/D6nPGcl" target="_blank">
                                                        click vào đây
                                                    </a>
                                                </>
                                            ),
                                        },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: 3,
                        ask: 'Làm sao để xem phim trên TV?',
                        answer: {
                            contents: [
                                'Để xem phim trên TV, TV bạn phải có trình duyệt web. Hầu hết các loại Smart TV những năm gần đây đều có cài sẵn trình duyệt. Nếu TV bạn không có sẵn trình duyệt, bạn có thể cài trình duyệt từ cửa hàng ứng dụng (Google Play Store / CH Play / App Store) trên TV. Với TV Android, bạn nên cài trình duyệt Puffin. Sau khi cài trình duyệt, truy cập trang web như bạn vẫn làm trên máy tính / điện thoại và xem phim.',
                                'Nếu bạn không thể xem phim bằng trình duyệt trên TV, bạn có thể kết nối máy tính với TV (thường qua cổng HDMI) rồi phát từ máy tính lên TV.',
                            ],
                        },
                    },
                ]}
            />
        </>
    );
}

export default Faq;
