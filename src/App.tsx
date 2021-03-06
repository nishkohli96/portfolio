import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '_Redux/index';
import Loading from '_Shared/Loading';
import Routing from '_Routes/index';

function App() {
    return (
        <Suspense fallback={Loading}>
            <Provider store={store}>
                <PersistGate loading={<Loading />} persistor={persistor}>
                    <Routing />
                </PersistGate>
            </Provider>
        </Suspense>
    );
}

export default App;
