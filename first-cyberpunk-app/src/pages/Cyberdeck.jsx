import React from 'react'

import {
  GridComponent, ColumnsDirective, ColumnDirective,
  Page, Search, Inject, Toolbar
} from '@syncfusion/ej2-react-grids'

import { cyberdeckData,cyberdeckGrid } from '../data/dummy'
import { Header } from '../components'


const Cyberdeck = () => {
  return (
    <div>
      <div className="m-2 md:10 p-2 md:p-10
    bg-white rounded-3xl">
        <Header category="Tabla de Datos" title="Cyberdeck" subt="Lista de Sistemas Operativos de Cyberdeck" />
        <GridComponent
          dataSource={cyberdeckData}
          allowPaging
          allowSorting
          toolbar = {['Search']}
          width ="auto"
          pageSettings={{pageSize:5}}

        >
          <ColumnsDirective>
            {cyberdeckGrid.map((item, index) => (
              <ColumnDirective key={index}
                {...item} />
            ))}

          </ColumnsDirective>
        </GridComponent>
        <Inject services={[Page, Search, Toolbar]} />

      </div>

    </div>
  )
}

export default Cyberdeck