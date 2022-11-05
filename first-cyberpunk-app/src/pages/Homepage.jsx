import React from 'react'
import { Header } from '../components'
import Splash from '../data/media/pictures/landing_splash.jpg'

const Homepage = () => {
  return (
    <div className="grid flex-wrap justify-center justify-items-center">
      <div>
      <img src={Splash} alt="David Martinez"/>
      </div>
      <div>
        <p className='py-2.5 px-2 text-slate-800 dark:text-lime-400 text-center'>Un conjunto de tablas y colecciones de datos sobre el hardware de los sistemas operativos de 'Cyberpunk 2077' en honor a la serie de ficción 'Cyberpunk: Edgerunners'</p>
      </div>
    </div>
  )
}

export default Homepage