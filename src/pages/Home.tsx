import { FC } from 'react';
import { Typography, Grid } from '@mui/material';

const Home: FC = () => {
    return (
        <Grid container style={{ backgroundColor: 'powderblue'}}>
           <Grid container item xs={12} md={6} justifyContent='center' alignItems='center'>
                <Typography variant='h2'>
                    Hi There&nbsp;
                    <span role="img" aria-label="hi">
                        👋
                    </span>
                </Typography>
                <Typography variant='h4'>
                    Nice to meet you.
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <p className="text-lg lg:text-xl lg:leading-relaxed leading-8">
                    Myself Nishant. I am a Self-taught&nbsp;
                    <span role="img" aria-label="graduate">
                        👨‍🎓
                    </span>
                    &nbsp;FullStack Developer with over three years of experience.
                </p>
                <p className="text-lg lg:text-xl lg:leading-relaxed mt-5 leading-8">
                    My core skillset includes ReactJS and React-Native along
                    with relevant experience in NodeJS, Express, Fastify,
                    MongoDB etc. I love playing around with new libraries and
                    frameworks.
                </p>
                <p className="text-lg lg:text-xl lg:leading-relaxed mt-5 leading-8">
                    Besides that, I love travelling &nbsp;
                    <span role="img" aria-label="travel">
                        ✈
                    </span>
                    , watching movies &nbsp;
                    <span role="img" aria-label="tv">
                        📺
                    </span>
                    , listening music &#127925;, playing video games &nbsp;
                    <span role="img" aria-label="games">
                        🎮
                    </span>
                    &nbsp; and hanging out with friends &amp; family &nbsp;
                    <span role="img" aria-label="friends">
                        👨‍👦‍👦.
                    </span>
                    I also am a Travel Vlogger.
                </p>
            </Grid>
        </Grid>
    );
};

export default Home;
