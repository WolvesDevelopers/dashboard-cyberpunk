import React from 'react'
import {
  GridComponent, ColumnsDirective, ColumnDirective, Search, Page,Toolbar, Inject
} from '@syncfusion/ej2-react-grids'

import { sandevistanData, sandevistanGrid } from '../data/dummy'
import { Header } from '../components'


const Sandevistan = () => {


  return (
    <div className="m-2 md:10 p-2 md:p-10
    bg-white rounded-3xl">
      <Header category="Tabla de Datos" title="Sandevistan" subt="Lista de Sistemas Operativos de Sandevistan" />
      <GridComponent
        id="gridComp"
        dataSource={sandevistanData}
        allowPaging
        allowSorting
        toolbar = {['Search']}
        width ="auto"
        pageSettings={{pageSize:5}}


      >
        <ColumnsDirective>
          {sandevistanGrid.map((item, index) => (
            <ColumnDirective key={index}
              {...item} />
          ))}

        </ColumnsDirective>
      </GridComponent>
      <Inject services={[Page,Search, Toolbar,]} />
    </div>
  )
}

export default Sandevistan