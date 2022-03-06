import { FC, lazy, Fragment } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Container from '@mui/material/Container';
import Appbar from '_Shared/Appbar';
import Footer from '_Shared/Footer';
import Home from '_Pages/Home';
const Page2 = lazy(() => import('_Pages/Page2'));
const Page404 = lazy(() => import('_Pages/Page404'));

const Routing: FC = () => {
    return (
        <Fragment>
            <Appbar />
            <Container>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/page-2" component={Page2} />
                        <Route component={Page404} />
                    </Switch>
                </BrowserRouter>
            </Container>
            <Footer />
        </Fragment>
    );
};

export default Routing;
