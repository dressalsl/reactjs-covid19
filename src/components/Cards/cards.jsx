import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './cards.module.css';

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate }}) => {
    if(!confirmed) {
        return "Loading... "
    }
    
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infectados/>
                        <Typography variant="h5" component="h2">
                            <CountUp start={0} end={confirmed.value} duration={2.0} separator="," />
                        />
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()} />                         
                        <Typography variant="body2">Número de casos ativos pela Covid-19 />
                    />
                </Grid>

                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recuperados />
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2.0}  separator=","> />
                        />
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()} />
                        <Typography variant="body2">Número de casos recuperados pela Covid-19 />
                    />
                </Grid>

                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Mortes />
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.0}  separator=","> />
                        />
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()} />
                        <Typography variant="body2">Número de mortes causadas pela Covid-19 />
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;
