import React from 'react';
import { Header, Stacked } from '../../components';

const Rareza = () => {
  return (
    <div>      
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <Header  title="Sistemas Operativos" subt="Categorizados por rareza" />
        <div className="w-full items-center">
          <Stacked />
        </div>
      </div>
    </div>
  )
}

export default Rareza