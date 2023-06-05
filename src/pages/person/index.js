import Header from '~/components/layouts/headerLayout';
import Footer from '~/components/layouts/footerLayout';
import PersonsLayout from '~/components/layouts/personsLayout';



function Person() {
    return ( 
        <>
            <Header />
            <PersonsLayout />
            <Footer />
        </>
     );
}

export default Person;