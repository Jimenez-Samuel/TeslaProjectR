import './Title.css'

export function TitleZone ({ titleContent, titleColor }) {
  return (
    <h1 className="titleZone" style={{color: `${titleColor}`}}>{titleContent}</h1>
  )
}