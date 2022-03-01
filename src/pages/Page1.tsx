import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

const Page1: FC = () => {
    const history = useHistory();

    return (
        <div className="root">
            <div>hi from Page1. Edit the code</div>
            <Button variant="outlined" onClick={() => history.push('/page-2')}>
                Go to Page2
            </Button>
        </div>
    );
};

export default Page1;
