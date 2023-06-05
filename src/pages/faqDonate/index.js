import Faqs from '~/components/layouts/faqsLayout';

function FaqDonate() {
    return (
        <>
            <Faqs
                title="Các vấn đề thường gặp khi Donate"
                listFaqs={[
                    {
                        id: 1,
                        ask: 'Sau khi chuyển khoản không thấy tiền vào tài khoản',
                        answer: {
                            contents: [
                                <>
                                    Sau khi chuyển khoản theo hướng dẫn, hãy chờ 1, 2 phút. Nếu{' '}
                                    <a href="">kiểm tra tài khoản</a> vẫn chưa thấy có tiền thì có thể do một trong các
                                    nguyên nhân sau:
                                </>,
                            ],
                            details: [
                                {
                                    content: 'Bạn quên nhập hoặc nhập sai Nội dung chuyển tiền (xem kỹ lại hướng dẫn!)',
                                },
                                {
                                    content: (
                                        <>
                                            Bạn dùng Techcombank và chuyển ít hơn 50.000đ: Theo{' '}
                                            <a
                                                href="https://techcombank.com/khach-hang-ca-nhan/ngan-hang-truc-tuyen/ngan-hang-so/techcombank-mobile/cau-hoi-thuong-gap"
                                                target="_blank"
                                            >
                                                quy định của Techcombank
                                            </a>
                                            , những giao dịch nhỏ hơn 50.000đ sẽ được ngân hàng xử lý thủ công thay vì
                                            chuyển nhanh. Nên bạn phải đợi nhân viên ngân hàng bạn xử lý trong giờ làm
                                            việc hành chính. Chẳng hạn nếu bạn nạp vào tối thứ 6 thì sẽ phải chờ tới
                                            sáng thứ 2 tuần sau giao dịch mới được tiến hành.
                                        </>
                                    ),
                                },
                                {
                                    content:
                                        'Đôi khi hệ thống thanh toán có thể bảo trì, khiến việc xử lý bị chậm (thường chỉ bị chậm 10, 15 phút là cùng)',
                                },
                            ],
                        },
                    },
                    {
                        id: 2,
                        ask: 'Bạn nhập nội dung chuyển tiền đúng cú pháp theo hướng dẫn, nhưng nhập nhầm chữ',
                        answer: {
                            details: [
                                {
                                    content: (
                                        <>
                                            VD: Hướng dẫn yêu cầu nhập <b>VIP xyz</b>, bạn lại nhập <b>VIP xyz</b>.
                                            Trường hợp này giao dịch của bạn sẽ được cộng tiền vào tài khoản người khác.
                                            Hãy liên hệ với admin <a>ở đây</a>, nhớ gửi kèm ảnh chi tiết giao dịch (có
                                            đầy đủ các thông tin về thời gian, nội dung chuyển tiền mà bạn đã nhập...)
                                        </>
                                    ),
                                },
                            ],
                        },
                    },
                    {
                        id: 3,
                        ask: 'Bạn quên hoặc lỡ nhập sai nội dung chuyển tiền',
                        answer: {
                            contents: [
                                <>
                                    Hãy <a>vào đây</a> để tìm và yêu cầu hệ thống xử lý lại giao dịch.
                                </>,
                            ],
                        },
                    },
                    {
                        id: 4,
                        ask: 'Các vấn đề phát sinh khác',
                        answer: {
                            contents: [
                                <>
                                    Hãy liên hệ với admin <a>ở đây</a> hoặc inbox qua{' '}
                                    <a href="https://www.facebook.com/profile.php?id=100008170181401" target="_blank">
                                        page FB
                                    </a>
                                    .
                                </>,
                            ],
                        },
                    },
                ]}
            />
        </>
    );
}

export default FaqDonate;
