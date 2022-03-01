import { FC, lazy, Fragment } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Appbar from '_Shared/Appbar';

import Page1 from '_Pages/Page1';
const Page2 = lazy(() => import('_Pages/Page2'));
const Page404 = lazy(() => import('_Pages/Page404'));

const Routing: FC = () => {
    return (
        <Fragment>
            <Appbar />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Page1} />
                    <Route exact path="/page-2" component={Page2} />
                    <Route component={Page404} />
                </Switch>
            </BrowserRouter>
        </Fragment>
    );
};

export default Routing;
