import './Header.css'

export function Header ({ isActive = 'active' }) {
  return (
    <header className={isActive} id='headerpage'>
      <div className="imageContainer">
        <a href=".">
          <svg className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path></svg>
        </a>
      </div>

      <ul className='midList'>
        <li><a href="#" className='list-a'>Vehículos</a></li>
        <li><a href="#" className='list-a'>Energía</a></li>
        <li><a href="#" className='list-a'>Carga</a></li>
        <li><a href="#" className='list-a'>Descubrir</a></li>
        <li><a href="#" className='list-a'>Tienda</a></li>
      </ul>

      <ul className='list'>
        <li><a href="#" className='list-a'><i className="fa-solid fa-question"></i></a></li>
        <li><a href="#" className='list-a'><i className="fa-solid fa-globe"></i></a></li>
        <li><a href="#" className='list-a'><i className="fa-regular fa-circle-user"></i></a></li>
      </ul>

      <div className="menu-cellphone">
        <div className="dropdown">
          <button className="dropdown-button">Menú</button>
          <div className="dropdown-content">
            <a href="#">Vehículos</a>
            <a href="#">Energía</a>
            <a href="#">Carga</a>
            <a href="#">Descubrir</a>
            <a href="#">Tienda</a>
            <a href="#">Soporte</a>
            <a href="#"><i className="fa-solid fa-globe"></i> Idioma</a>
            <a href="#"><i className="fa-regular fa-circle-user"></i> Cuenta</a>
          </div>
        </div>
      </div>
    </header>
  )
}