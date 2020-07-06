import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [ dailyData, setDailyData ] = useState([]);

    useEffect( () => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchApi();
    },[]);

    const lineChart = (
        dailyData.length 
        ? (
            <Line 
                data={{
                    labels: dailyData.map(({ date }) => date), 
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infectados',
                        borderColor: '#dc3545',
                        
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Mortes',
                        borderColor: '#343a40',
                    }],
                }}
            />) 
            : null
    );

    console.log(confirmed, recovered, deaths);

    const barChart = (
        confirmed
        ?(
            <Bar 
                data={{
                    labels: ['Infectados', 'Recuperados', 'Mortes'],
                    datasets: [{
                        label: 'Pessoas',
                        backgroundColor: ['#dc3545','#28a745','#343a40'],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false},
                    title: { display: true, text: `Status - ${country}`},
                }}
            />
        ) : null
    );

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;