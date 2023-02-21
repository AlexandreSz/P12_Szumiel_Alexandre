import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Activity from '../components/Activity/Activity'
import Session from '../components/Session/Session'
import Performance from '../components/Performance/Performance'
import Score from '../components/Score/Score'
import Informations from '../components/Informations/Informations'
import {
  getUserMainData,
  getUserActivity,
  getUserSession,
  getUserPerformance,
} from '../Services/fetchData.js'

/**
 * @component - shows the main page of the dashboard
 * @returns Home Page
 */

const Home = () => {
  const { id } = useParams()
  const [data, setData] = useState({})

  useEffect(() => {
    async function getData() {
      try {
        const user = await getUserMainData(id)
        const activity = await getUserActivity(id)
        const sessions = await getUserSession(id)
        const performance = await getUserPerformance(id)
        setData({ user, activity, sessions, performance })
      } catch (error) {
        console.log(error)
      }
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <section className="user">
      <div className="user__infos">
        <h1>
          Bonjour <span>{data?.user?.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>

      <div className="user__charts">
        <article className="charts-container">
          <Activity activity={data?.activity?.sessions} />
          <div className="charts-container-flex">
            <Session sessions={data?.sessions?.sessionData} />
            <Performance performance={data?.performance?.formatPerf} />
            <Score score={data?.user?.score[0].value} />
          </div>
        </article>

        <article className="user__informations">
          <Informations />
        </article>
      </div>
    </section>
  )
}

export default Home
