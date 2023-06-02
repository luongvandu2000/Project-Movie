import Home from '~/pages/home';
import Search from '~/pages/search';
import Top from '~/pages/topMovies';
import Odd from '~/pages/oddMovies';
import Series from '~/pages/seriesMovies';
import New from '~/pages/newMovies';
import Account from '~/pages/account';
import Donate from '~/pages/donate';
import Faq from '~/pages/faq';
import FaqDonate from '~/pages/faqDonate';
import Movies from '~/components/layouts/movies';
import moviesPage from '~/pages/moviesPage';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/search', component: Search },
    { path: '/top', component: Top },
    { path: '/odd', component: Odd },
    { path: '/series', component: Series },
    { path: '/new', component: New },
    { path: '/account', component: Account },
    { path: '/donate', component: Donate },
    { path: '/faq', component: Faq },
    { path: '/faqDonate', component: FaqDonate },
    { path: '/movies', component: moviesPage },
]

export { publicRoutes }