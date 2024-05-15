import { BaseA } from "BaseA.jsx";
import { TitleZone } from "Title.jsx";
import { ButttonWhite, ButttonBlack } from "buttons.jsx";
import 'SecondZone.css'

export function SecondZone({ background }) {
  return (
    <main className="container" style={{backgroundImage: `url('${background}')`}} data-header-color='black'>
      <div className="content">
        <div className="titleContainer">
          <TitleZone titleColor={'black'} titleContent={'Model Y'} />
        </div>
        <div className="buttonsContainer">
          <ButttonWhite buttonText={'Encargar'} />

          <ButttonBlack buttonText={'Prueba de Conducción'} />
        </div>

        <BaseA Acolor={'black'} disabled={'flex'}/>    
      </div>
    </main>
  )
}