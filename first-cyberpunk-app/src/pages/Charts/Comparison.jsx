import React from 'react'
import { Header, Pie, Footer } from '../../components';
import { pieChartData } from '../../data/dummy';

const Comparison = () => {
  return (
    <div>      
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <Header  title="Sistemas Operativos" subt="Cantidad relativa por manufactura, por modelo" />
        
        <div className="flex justify-evenly flex-wrap margin-auto">
          <div className="px-4 items-center col-span-4">
            <Pie id="Berserk" data={pieChartData[0]} legendVisiblity={true} width="600px" height="400px"/>
            <Footer label="Berserk"/>
          </div>
          <div className="px-4 items-center col-span-4">
            <Pie id="Cyberdeck" data={pieChartData[1]} legendVisiblity={true} width="600px" height="400px"/>
            <Footer label="Cyberdeck"/>
          </div>
          <div className="px-4 items-center">
            <Pie id="Sandevistan" data={pieChartData[2]} legendVisiblity={true} width="600px" height="400px"/>
            <Footer label="Sandevistan"/>
          </div>
          <div className="px-4 items-center">
            <Pie id="Totales" data={pieChartData[3]} legendVisiblity={true} width="600px" height="400px"/>
            <Footer label="Totales"/>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Comparison