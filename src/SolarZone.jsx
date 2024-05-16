import { TitleZone } from "./Title.jsx"
import { Span } from "./Span.jsx"
import { ButttonBlack } from "./buttons.jsx"

export function SolarZone ({ background, title, spanContent }) {
  return (
    <main className="container" style={{backgroundImage: `url('${background}')`}} data-header-color='black'>
      <div className="content">
        <div className="titleContainer">
          <TitleZone titleContent={title} titleColor={'black'}/>
          <Span spanContent={spanContent} spanColor={'black'}/>
        </div>

        <div className="buttonsContainer">
          <ButttonBlack buttonText={'Saber más'}/>
        </div>
      </div>
    </main>
  )
}