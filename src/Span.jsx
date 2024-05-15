export function Span ({ spanContent, spanColor }) {
  return (
    <span className="span" style={{color: `${spanColor}`}}>{spanContent}</span>
  )
}