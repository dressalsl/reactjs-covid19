import React, { useState, UseEffect } from 'react';
import { useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar, Bubble } from 'react-chartjs-2';

import styles from './chart.module.css';

const Chart = () => {
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
                        label: 'Infectado',
                        borderColor: '#dc3545',
                        fill: true,
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Mortes',
                        borderColor: '#343a40',
                        fill: true,
                    }],
                }}
            />) 
            : null
    );

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart;