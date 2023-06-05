import classNames from 'classnames/bind';
import style from './faqs.module.scss';
import base from '~/components/styles/baseStyle/base.module.scss';
import Header from '~/components/layouts/headerLayout';
import Footer from '~/components/layouts/footerLayout';

const cx = classNames.bind(style);
const cbase = classNames.bind(base);

function Faqs({ title, listFaqs }) {
    return (
        <>
            <Header />
            <section className={cx('ques')}>
                <div className={cbase('container-small')}>
                    <h1>{title}</h1>
                    {listFaqs.map((ques, quesIndex) => (
                        <div key={quesIndex}>
                            <h2>
                                {quesIndex + 1}. {ques.ask}
                            </h2>
                            {ques.answer.contents != undefined
                                ? ques.answer.contents.map((content, contentIndex) => (
                                      <p key={contentIndex}>{content}</p>
                                  ))
                                : ''}
                            {ques.answer.details != undefined ? (
                                <ul>
                                    {ques.answer.details.map((detail, deIndex) => (
                                        <li key={deIndex} className={cx('tab')}>
                                            {detail.content}
                                            {detail.paragraphs != undefined
                                                ? detail.paragraphs.map((paragraph, paIndex) => (
                                                      <div key={paIndex}>
                                                          <p>{paragraph.content}</p>
                                                          {paragraph.lists != undefined ? (
                                                              <ul>
                                                                  {paragraph.lists.map((list, listIndex) => (
                                                                      <li key={listIndex}>{list}</li>
                                                                  ))}
                                                              </ul>
                                                          ) : (
                                                              ''
                                                          )}
                                                      </div>
                                                  ))
                                                : ''}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                ''
                            )}
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Faqs;
