import React from 'react'
import { Header, LineChart } from '../../components';

const Manufacturer = () => {
  return (
    <div>      
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <Header  title="Sistemas Operativos" subt="Conteo por manufactura" />
        <div className="w-full items-center">
          <LineChart />
        </div>
      </div>
    </div>
  )
}

export default Manufacturer