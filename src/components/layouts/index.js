import Header from './headerLayout';
import Footer from './footerLayout';

function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
