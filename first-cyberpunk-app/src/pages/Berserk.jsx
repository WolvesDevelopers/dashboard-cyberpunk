import React from 'react'
import {
  GridComponent, ColumnsDirective, ColumnDirective, Sort, Page, Search, Inject, Toolbar
} from '@syncfusion/ej2-react-grids'

import { berserkData, berserkGrid } from '../data/dummy'
import { Header } from '../components'


const Berserk = () => {
  return (
    <div className="m-2 md:10 p-2 md:p-10
    bg-white rounded-3xl">
      <Header category="Tabla de Datos" title="Berserk" subt="Lista de Sistemas Operativos de Berserk" />
      <GridComponent
          dataSource={berserkData}
          allowPaging
          allowSorting
          toolbar = {['Search']}
          width ="auto"
          pageSettings={{pageSize:5}}

      >

        <ColumnsDirective>
          {berserkGrid.map((item, index) => (
            <ColumnDirective key={index}
              {...item} />
          ))}

        </ColumnsDirective>
        <Inject services={[Page,Toolbar, Sort , Search]} />
      </GridComponent>


    </div>
  )
}

export default Berserk