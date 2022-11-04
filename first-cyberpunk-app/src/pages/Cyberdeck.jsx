import React from 'react'

import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, 
  ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject
} from '@syncfusion/ej2-react-grids'

import { cyberdeckData, contextMenuItems, cyberdeckGrid } from '../data/dummy'
import { Header } from '../components'


const Cyberdeck = () => {
  return (
    <div>
      <div className="m-2 md:10 p-2 md:p-10
    bg-white rounded-3xl">
      <Header category = "Page" title = "Cyberdeck" subt="Lista Cyberware: Corteza Frontal" />
      <GridComponent>
        <ColumnsDirective>
          {cyberdeckGrid.map((item, index)=> (
            <ColumnDirective key= {index}
            {...item} />
          ))}

        </ColumnsDirective>
      </GridComponent>


    </div>

    </div>
  )
}

export default Cyberdeck