import './BaseA.css'

export function BaseA ({ Acolor, disabled }) {
  return (
    <a href="#" className="BaseA" style={{color: `${Acolor}`, display: `${disabled}`}}>Disponible con Moves lll</a>
  )
}