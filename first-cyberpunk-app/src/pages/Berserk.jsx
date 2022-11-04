import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, 
  ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject
} from '@syncfusion/ej2-react-grids'

import { berserkData, contextMenuItems, berserkGrid } from '../data/dummy'
import { Header } from '../components'


const Berserk = () => {
  return (
    <div className="m-2 md:10 p-2 md:p-10
    bg-white rounded-3xl">
      <Header category = "Pagina" title = "Berserk" subt="Lista de Sistemas Operativos de Berserk" />
      <GridComponent
        id = "gridComp"
        dataSource={berserkData}
        allowPaging
      >
        
        <ColumnsDirective>
          {berserkGrid.map((item, index)=> (
            <ColumnDirective key= {index}
            {...item} />
          ))}

        </ColumnsDirective>
        
      </GridComponent>


    </div>
  )
}

export default Berserk