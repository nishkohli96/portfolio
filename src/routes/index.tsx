import { FC, lazy } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Page1 from '_Pages/Page1';
const Page2 = lazy(() => import('_Pages/Page2'));
const Page404 = lazy(() => import('_Pages/Page404'));

const Routing: FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Page1} />
                <Route exact path="/page-2" component={Page2} />
                <Route component={Page404} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routing;
