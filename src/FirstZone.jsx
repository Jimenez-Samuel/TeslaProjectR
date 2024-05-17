import { ButttonTransparent } from './buttons.jsx'
import { Span } from './Span.jsx'
import './FirstZone.css'
import { TitleZone } from './Title.jsx'

export function FirstZone ({ backgroundVideo, spanContent }) {
  return (
    <main className="container" id='firstZone' data-header-color={'white'}>
      <div className="content"> 
        <TitleZone titleColor={'white'} titleContent={'Disfrute de Tesla'}/>
        <Span spanContent={spanContent} spanColor={'white'}/>
      
        <ButttonTransparent id='transparentButton' buttonText={'Prueba de Conducción'}/>
      </div>

      <div className="videoContainer">
        <video src={backgroundVideo} autoPlay loop muted></video>
      </div>
    </main>
  )
}