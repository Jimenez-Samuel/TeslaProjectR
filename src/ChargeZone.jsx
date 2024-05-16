import { TitleZone } from "./Title.jsx"
import { ButttonWhite } from "./buttons.jsx"

export function ChargeZone ({ background, title, spanContent }) {
  return (
    <main className="container" style={{backgroundImage: `url('${background}')`}} data-header-color='black'>
      <div className="content">
        <div className="titleContainer">
          <TitleZone titleContent={title} titleColor={'black'}/>
        </div>

        <div className="buttonsContainer">
          <ButttonWhite buttonText={'Saber más'}/>
        </div>
      </div>
    </main>
  )
}