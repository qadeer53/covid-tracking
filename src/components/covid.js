import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import './covid.css'

import coronaImage from '../images/covid19.png'; 

const Covid = () => {

    const [data, setData] = useState([])

    const getCovidData = async () => {
        try {
            const res = await fetch("https://covid19.mathdro.id/api/countries/PAK")
            const actualData = await res.json();
            console.log(actualData)
            setData(actualData)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <>
            <section className='mb-5'>
                <img className="image" src={coronaImage} alt='covid-19' />
                <h1 className='mx-5 mb-3'>Pakistan</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 infected">
                            <h6 className='mt-5'>Infected</h6>
                            <h1><CountUp start={0} end={data.confirmed.value} duration={3} separator="," /></h1>
                            <h4>{new Date(data.lastUpdate).toDateString()}</h4>
                            <h4 className='mb-5'>Active Cases of COVID-19</h4>
                        </div>
                         <div className="col-sm-3 recovered">
                            <h6 className='mt-5'>Recovered</h6>
                            <h1><CountUp start={0} end={data.recovered.value} duration={3} separator="," /></h1>
                            <h4>{new Date(data.lastUpdate).toDateString()}</h4>
                            <h4 className='mb-5'>Recovered Cases of COVID-19</h4>
                        </div>
                         <div className="col-sm-3 deaths">
                            <h6 className='mt-5'>Deaths</h6>
                            <h1><CountUp start={0} end={data.deaths.value} duration={3} separator="," /></h1>
                            <h4>{new Date(data.lastUpdate).toDateString()}</h4>
                            <h4 className='mb-5'>deaths due to COVID-19</h4>
                        </div>
                    </div>
                </div>                              
            </section>
        </>
    )
}

export default Covid