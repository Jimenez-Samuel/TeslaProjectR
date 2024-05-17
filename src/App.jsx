import { Header } from './Header'
import { FirstZone } from './FirstZone'
import { SecondZone } from './SecondZone.jsx'
import { Zone } from './Zones.jsx'
import Video from './assets/TeslaVideo.webm'
import background1 from './assets/model-y.jpg'
import background3 from './assets/model-s.jpg'
import background4 from './assets/model-x.jpg'
import background5 from './assets/solar-panel.jpg'
import background6 from './assets/Accesories.avif'
import { SolarZone } from './SolarZone.jsx'
import { ChargeZone } from './ChargeZone.jsx'
import './App.css'
import React from 'react'
import { useInView } from 'react-intersection-observer'

export default function App() {

  const [active, setActive] = React.useState(false)
  const {ref, inView} = useInView({
    threshold: 0.9,
  });

  React.useEffect(() => {
    if(inView){
      setActive(true);
    }
  }, [inView])
  return (
    <>
      <Header isActive={`${inView ? '' : 'active'}`}/>
      <main className="main">
        <div className="zoneContainer" ref={ref}>
          <FirstZone backgroundVideo={Video} titleContent={'Disfrute de Tesla'} spanContent={'Programe una prueba de conducción hoy mismo'} />
        </div>
        <div className="zoneContainer">
          <SecondZone background={background1}/>
        </div>
        <div className="zoneContainer">
          <Zone background={'https://hips.hearstapps.com/hmg-prod/images/2024-tesla-model-3-european-model-3-64f21a71e3c45.png'} title={'Model 3'} baseA={'flex'}/>
        </div>
        <div className="zoneContainer">
          <Zone background={background3} title={'Model S'} baseA={'none'}/>
        </div>
        <div className="zoneContainer">
          <Zone background={background4} title={'Model X'} baseA={'none'}/>
        </div>
        <div className="zoneContainer">
          <SolarZone background={background5} title={'Solar y Powerwall'} spanContent={'Enegía para todos'} />
        </div>
        <div className="zoneContainer">
          <ChargeZone background={background6} title={'Accesorios'}/>
        </div>

      </main>
    </>
  )
}
