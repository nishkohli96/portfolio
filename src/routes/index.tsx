import { FC, lazy, Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import Appbar from '_Shared/Appbar';
import Footer from '_Shared/Footer';
import Home from '_Pages/Home';
const Projects = lazy(() => import('_Pages/Projects'));
const Page404 = lazy(() => import('_Pages/Page404'));

const Routing: FC = () => {
    return (
        <Fragment>
            <Appbar />
            <Container>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={Home} />
                        <Route path="/projects" element={Projects} />
                        <Route element={Page404} />
                    </Routes>
                </BrowserRouter>
            </Container>
            <Footer />
        </Fragment>
    );
};

export default Routing;
