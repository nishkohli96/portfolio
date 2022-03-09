import { FC, Fragment } from 'react';
import { Typography, Grid, TypographyProps } from '@mui/material';
import AosDiv from '_Shared/AosDiv';

const Home: FC = () => {
    const CenterTypo = (props: TypographyProps) => (
        <Typography
            variant={props.variant}
            align="center"
            display="block"
            {...props}
        >
            {props.children}
        </Typography>
    );

    return (
        <Grid
            container
            sx={{ backgroundColor: 'powderblue', padding: '30px 0px' }}
        >
            <Grid item xs={12}>
                <AosDiv animName="fade-up">
                    <CenterTypo variant="h3">
                        Hi There&nbsp;
                        <span role="img" aria-label="hi">
                            👋
                        </span>
                    </CenterTypo>
                </AosDiv>
                <AosDiv animName="fade-up" delay={1000}>
                    <CenterTypo variant="h6">Nice to meet you.</CenterTypo>
                </AosDiv>
            </Grid>
            <Grid
                container
                item
                xs={12}
                justifyContent="center"
                sx={{ padding: '20px 15vw' }}
            >
                <AosDiv animName="fade-right" delay={2000}>
                    <CenterTypo variant="subtitle1">
                        Myself Nishant. I am a Self-taught&nbsp;
                        <span role="img" aria-label="graduate">
                            👨‍🎓
                        </span>
                        &nbsp;FullStack Developer with over three years of
                        experience.
                    </CenterTypo>
                </AosDiv>
                <AosDiv animName="fade-left" duration={1000} delay={3000}>
                    <CenterTypo variant="body1">
                        My core skillset includes ReactJS and React-Native along
                        with relevant experience in NodeJS, Express, Fastify,
                        MongoDB etc. I love playing around with new libraries
                        and frameworks.
                    </CenterTypo>
                </AosDiv>
                <AosDiv animName="fade-right" duration={2000} delay={3000}>
                    <CenterTypo variant="body1">
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
                    </CenterTypo>
                </AosDiv>
            </Grid>
            <Grid container item xs={12} justifyContent="center">
                <AosDiv animName="fade-up" duration={2000} delay={3000}>
                    <Fragment>
                        <CenterTypo variant="h6">
                            I also am a Travel Vlogger.
                        </CenterTypo>
                        <iframe
                            title='Latest YouTube Video'
                            src="https://www.tubebuddy.com/quicknav/latestembed/UCHouZ86kSOoF52kJpIdQs3g"
                            frameBorder="0"
                            allowFullScreen
                        />
                    </Fragment>
                </AosDiv>
            </Grid>
        </Grid>
    );
};

export default Home;
