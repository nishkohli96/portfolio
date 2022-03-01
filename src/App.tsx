import { Suspense } from 'react';

import Loading from '_Shared/Loading';
import Routing from '_Routes/index';

function App() {
    return (
        <Suspense fallback={Loading}>
            <Routing />
        </Suspense>
    );
}

export default App;
