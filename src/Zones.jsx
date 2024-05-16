import { TitleZone } from "./Title.jsx"
import { BaseA } from "./BaseA.jsx"
import { ButttonWhite, ButttonBlack } from "./buttons.jsx"

export function Zone ({ background, title, baseA }) {
  return (
    <main className="container" style={{backgroundImage: `url('${background}')`}} data-header-color='black'>
      <div className="content">
        <div className="titleContainer">
          <TitleZone titleContent={title} titleColor={'black'}/>
        </div>

        <div className="buttonsContainer">
          <ButttonBlack buttonText={'Encargar'}/>
          <ButttonWhite buttonText={'Prueba de conducción'}/>
        </div>

        <BaseA Acolor={'white'} disabled={baseA}/>
      </div>
    </main>
  )
}