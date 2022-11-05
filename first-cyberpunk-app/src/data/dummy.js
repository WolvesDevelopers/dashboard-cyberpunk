import React from "react";
import { AiOutlineBarChart, AiOutlineStock } from "react-icons/ai";
import {
  FiPieChart,
} from "react-icons/fi";
import { ReactComponent as BerserkIcon } from "./media/icons/berserk.svg"; //Ícono Berserk SO
import { ReactComponent as CyberdeckIcon } from "./media/icons/cyberdeck.svg"; //Ícono Cyberdeck SO
import { ReactComponent as SandevistanIcon } from "./media/icons/sandevistan.svg"; //Ícono Sandevistan SO
//Cyberpunk standarized hardware picture imports
//Berserk (hardware piece, berserk, manufacturer/model)
import hpbsBiodyne from "./media/pictures/hp_berserk_biodyne.jpg"
import hpbsMilitech from "./media/pictures/hp_berserk_militech.jpg"
import hpbsMooretech from "./media/pictures/hp_berserk_mooretech.jpg"
import hpbsZetatech from "./media/pictures/hp_berserk_zetatech.jpg"
//Cyberdeck (hardware piece, cyberdeck, manufacturer/model)
import hpcdArasaka from "./media/pictures/hp_cyberdeck_arasaka.jpg"
import hpcdBiotech from "./media/pictures/hp_cyberdeck_biotech.jpg"
import hpcdBiodyne from "./media/pictures/hp_cyberdeck_byodine.jpg"
import hpcdFuyutsuki from "./media/pictures/hp_cyberdeck_fuyutsuki.jpg"
import hpcdMilitech from "./media/pictures/hp_cyberdeck_militech.jpg"
import hpcdNetwatch from "./media/pictures/hp_cyberdeck_netwatch.jpg"
import hpcdRaven from "./media/pictures/hp_cyberdeck_raven.jpg"
import hpcdSeocho from "./media/pictures/hp_cyberdeck_seocho.jpg"
import hpcdStephenson from "./media/pictures/hp_cyberdeck_stephenson.jpg"
import hpcdTetratronic from "./media/pictures/hp_cyberdeck_tetratronic.jpg"
//Sandevistan (hardware piece, sandevistan, manufacturer/model)
import hpsvDylanar from "./media/pictures/hp_sandevistan_dylanar.jpg"
import hpsvMilitech from "./media/pictures/hp_sandevistan_militech.jpg"
import hpsvZetatech from "./media/pictures/hp_sandevistan_zetatech.jpg"
import hpsvQiant from "./media/pictures/hp_sandevistan_qiant.jpg"

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridCyberIcons = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3 place-content-center"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

export const barPrimaryXAxis = {
  valueType: "Category",
  interval: 1,
  majorGridLines: { width: 0 },
};
export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: "transparent" },
};
export const LinePrimaryXAxis = {
  valueType: "Category",
  labelFormat: "y",
  intervalType: "",
  edgeLabelPlacement: "Shift",
  majorGridLines: { width: 0 },
  background: "white",
};

export const LinePrimaryYAxis = {
  labelFormat: "{value}",
  rangePadding: "None",
  minimum: 0,
  maximum: 10,
  interval: 1,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const links = [
  {
    title: "Tablas de datos",
    links: [
      {
        name: "Berserk",
        icon: <BerserkIcon className="flex space-x-2 w-12 h-12" />,
      },
      {
        name: "Cyberdeck",
        icon: <CyberdeckIcon className="flex space-x-2 w-12 h-12" />,
      },
      {
        name: "Sandevistan",
        icon: <SandevistanIcon className="flex space-x-2 w-12 h-12" />,
      },
    ],
  },
  {
    title: "Estadísticas",
    links: [
      {
        name: "Rareza",
        icon: <AiOutlineBarChart className="flex space-x-2 w-12 h-12" />,
      },
      {
        name: "Manufactura",
        icon: <AiOutlineStock className="flex space-x-2 w-12 h-12" />,
      },
      {
        name: "Tipo",
        icon: <FiPieChart className="flex space-x-2 w-12 h-12" />,
      },
    ],
  },
];

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];

export const berserkGrid = [
  {
    headerText: "Icono",
    template: gridCyberIcons,
    textAlign: "Center",
    width: "120",
  },
  {
    field: "Manufacturer",
    headerText: "Manufactura",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "Model",
    headerText: "Modelo",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "Rarity",
    headerText: "Rareza",
    width: "150",
    textAlign: "Center",
  },
];

export const cyberdeckGrid = [
  {
    headerText: "Icono",
    template: gridCyberIcons,
    textAlign: "Center",
    width: "120",
  },
  {
    field: "Manufacturer",
    headerText: "Manufactura",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "Model",
    headerText: "Modelo",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "Rarity",
    headerText: "Rareza",
    width: "150",
    textAlign: "Center",
  },
];

export const sandevistanGrid = [
  {
    headerText: "Icono",
    template: gridCyberIcons,
    textAlign: "Center",
    width: "120",
  },
  {
    field: "Manufacturer",
    headerText: "Manufactura",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "Model",
    headerText: "Modelo",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "Rarity",
    headerText: "Rareza",
    width: "150",
    textAlign: "Center",
  },
];

export const berserkData = [
  {
    ProductImage: hpbsBiodyne,
    Manufacturer: "BioDyne",
    Model: "Berserk Mk.1",
    Rarity: "Uncommon",
  },
  {
    ProductImage: hpbsBiodyne,
    Manufacturer: "BioDyne",
    Model: "Berserk Mk.2",
    Rarity: "Rare",
  },
  {
    ProductImage: hpbsBiodyne,
    Manufacturer: "BioDyne",
    Model: "Berserk Mk.3",
    Rarity: "Epic",
  },
  {
    ProductImage: hpbsBiodyne,
    Manufacturer: "BioDyne",
    Model: "Berserk Mk.4",
    Rarity: "Legendary",
  },
  {
    ProductImage: hpbsMilitech,
    Manufacturer: "Militech",
    Model: "Berserk Mk.5",
    Rarity: "Iconic",
  },
  {
    ProductImage: hpbsMooretech,
    Manufacturer: "Moore Tech",
    Model: "Berserk Mk.1",
    Rarity: "Uncommon",
  },
  {
    ProductImage: hpbsMooretech,
    Manufacturer: "Moore Tech",
    Model: "Berserk Mk.2",
    Rarity: "Rare",
  },
  {
    ProductImage: hpbsMooretech,
    Manufacturer: "Moore Tech",
    Model: "Berserk Mk.3",
    Rarity: "Epic",
  },
  {
    ProductImage: hpbsZetatech,
    Manufacturer: "Zetatech",
    Model: "Berserk Mk.4",
    Rarity: "Legendary",
  },
  {
    ProductImage: hpbsZetatech,
    Manufacturer: "Zetatech",
    Model: "Berserk Mk.5",
    Rarity: "Iconic",
  },
  
];

export const sandevistanData = [
  {
    ProductImage: hpsvDylanar,
    Manufacturer: "Dylanar",
    Model: "Sandevistan Mk.1",
    Rarity: "Uncommon",
  },
  {
    ProductImage: hpsvDylanar,
    Manufacturer: "Dylanar",
    Model: "Sandevistan Mk.2",
    Rarity: "Rare",
  },
  {
    ProductImage: hpsvDylanar,
    Manufacturer: "Dylanar",
    Model: "Sandevistan Mk.3",
    Rarity: "Epic",
  },
  {
    ProductImage: hpsvDylanar,
    Manufacturer: "Dylanar",
    Model: "Sandevistan Mk.4",
    Rarity: "Legendary",
  },
  {
    ProductImage: hpsvMilitech,
    Manufacturer: "Militech",
    Model: "'Falcon' Sandevistan Mk.5",
    Rarity: "Iconic",
  },
  {
    ProductImage: hpsvZetatech,
    Manufacturer: "Zetatech",
    Model: "Sandevistan Mk.1",
    Rarity: "Uncommon",
  },
  {
    ProductImage: hpsvZetatech,
    Manufacturer: "Zetatech",
    Model: "Sandevistan Mk.2",
    Rarity: "Rare",
  },
  {
    ProductImage: hpsvZetatech,
    Manufacturer: "Zetatech",
    Model: "Sandevistan Mk.3",
    Rarity: "Epic",
  },
  {
    ProductImage: hpsvQiant,
    Manufacturer: "QianT",
    Model: "Sandevistan Mk.4",
    Rarity: "Legendary",
  },
  {
    ProductImage: hpsvQiant,
    Manufacturer: "QianT",
    Model: "'Warp Dancer' Sandevistan Mk.5",
    Rarity: "Iconic",
  },
];

export const cyberdeckData = [
  {
    ProductImage: hpcdArasaka,
    Manufacturer: "Arasaka",
    Model: "Cyberdeck Mk.3",
    Rarity: "Epic",
  },
  {
    ProductImage: hpcdArasaka,
    Manufacturer: "Arasaka",
    Model: "Cyberdeck Mk.4",
    Rarity: "Legendary",
  },
  {
    ProductImage: hpcdBiodyne,
    Manufacturer: "BioDyne",
    Model: "Cyberdeck Mk.1",
    Rarity: "Uncommon",
  },
  {
    ProductImage: hpcdBiodyne,
    Manufacturer: "BioDyne",
    Model: "Cyberdeck Mk.2",
    Rarity: "Rare",
  },
  {
    ProductImage: hpcdBiotech,
    Manufacturer: "BioTech Σ",
    Model: "Cyberdeck Mk.1",
    Rarity: "Uncommon",
  },
  {
    ProductImage: hpcdBiotech,
    Manufacturer: "BioTech Σ",
    Model: "Cyberdeck Mk.2",
    Rarity: "Rare",
  },
  {
    ProductImage: hpcdBiotech,
    Manufacturer: "BioTech Σ",
    Model: "Cyberdeck Mk.3",
    Rarity: "Epic",
  },
  {
    ProductImage: hpcdFuyutsuki,
    Manufacturer: "Fuyutsuki",
    Model: "Electronics Mk.1",
    Rarity: "Common",
  },
  {
    ProductImage: hpcdFuyutsuki,
    Manufacturer: "Fuyutsuki",
    Model: "Tinkerer Mk.3",
    Rarity: "Iconic",
  },
  {
    ProductImage: hpcdMilitech,
    Manufacturer: "Militech",
    Model: "Paraline",
    Rarity: "Common",
  },
  {
    ProductImage: hpcdNetwatch,
    Manufacturer: "NetWatch",
    Model: "Netdriver Mk.5",
    Rarity: "Iconic",
  },
  {
    ProductImage: hpcdRaven,
    Manufacturer: "Raven MicroCyber",
    Model: "Cyberdeck Mk.3",
    Rarity: "Epic",
  },
  {
    ProductImage: hpcdRaven,
    Manufacturer: "Raven MicroCyber",
    Model: "Cyberdeck Mk.4",
    Rarity: "Legendary",
  },
  {
    ProductImage: hpcdSeocho,
    Manufacturer: "Seocho Electronics",
    Model: "Cyberdeck Mk.1",
    Rarity: "Uncommon",
  },
  {
    ProductImage: hpcdSeocho,
    Manufacturer: "Seocho Electronics",
    Model: "Cyberdeck Mk.2",
    Rarity: "Rare",
  },
  {
    ProductImage: hpcdStephenson,
    Manufacturer: "Stephenson Tech",
    Model: "Cyberdeck Mk.2",
    Rarity: "Rare",
  },
  {
    ProductImage: hpcdStephenson,
    Manufacturer: "Stephenson Tech",
    Model: "Cyberdeck Mk.3",
    Rarity: "Epic",
  },
  {
    ProductImage: hpcdStephenson,
    Manufacturer: "Stephenson Tech",
    Model: "Cyberdeck Mk.4",
    Rarity: "Legendary",
  },
  {
    ProductImage: hpcdTetratronic,
    Manufacturer: "Tetratronic",
    Model: "Cyberdeck Mk.1",
    Rarity: "Uncommon",
  },
  {
    ProductImage: hpcdTetratronic,
    Manufacturer: "Tetratronic",
    Model: "Cyberdeck Mk.2",
    Rarity: "Rare",
  },
  {
    ProductImage: hpcdTetratronic,
    Manufacturer: "Tetratronic",
    Model: "Cyberdeck Mk.3",
    Rarity: "Epic",
  },
  {
    ProductImage: hpcdTetratronic,
    Manufacturer: "Tetratronic",
    Model: "Rippler Mk.4",
    Rarity: "Iconic",
  },
];

export const lineChartData = [
  [
    { x: "Arasaka", y: 0 },
    { x: "BioDyne", y: 4 },
    { x: "Biotech Σ", y: 0 },
    { x: "Dylanar", y: 0 },
    { x: "Fuyutsuki", y: 0 },
    { x: "Militech", y: 1 },
    { x: "Moore Tech", y: 3 },
    { x: "NetWatch", y: 0 },
    { x: "QianT", y: 0 },
    { x: "Raven MicroCyber", y: 0 },
    { x: "Seocho Electronics", y: 0 },
    { x: "Stephenson Tech", y: 0 },
    { x: "Tetratronic", y: 0 },
    { x: "Zetatech", y: 2 },
  ],
  [
    { x: "Arasaka", y: 2 },
    { x: "BioDyne", y: 2 },
    { x: "Biotech Σ", y: 3 },
    { x: "Dylanar", y: 0 },
    { x: "Fuyutsuki", y: 2 },
    { x: "Militech", y: 1 },
    { x: "Moore Tech", y: 0 },
    { x: "NetWatch", y: 1 },
    { x: "QianT", y: 0 },
    { x: "Raven MicroCyber", y: 2 },
    { x: "Seocho Electronics", y: 2 },
    { x: "Stephenson Tech", y: 3 },
    { x: "Tetratronic", y: 4 },
    { x: "Zetatech", y: 0 },
  ],
  [
    { x: "Arasaka", y: 0 },
    { x: "BioDyne", y: 0 },
    { x: "Biotech Σ", y: 0 },
    { x: "Dylanar", y: 4 },
    { x: "Fuyutsuki", y: 0 },
    { x: "Militech", y: 1 },
    { x: "Moore Tech", y: 0 },
    { x: "NetWatch", y: 0 },
    { x: "QianT", y: 2 },
    { x: "Raven MicroCyber", y: 0 },
    { x: "Seocho Electronics", y: 0 },
    { x: "Stephenson Tech", y: 0 },
    { x: "Tetratronic", y: 0 },
    { x: "Zetatech", y: 3 },
  ],
  [
    { x: "Arasaka", y: 2 },
    { x: "BioDyne", y: 6 },
    { x: "Biotech Σ", y: 3 },
    { x: "Dylanar", y: 4 },
    { x: "Fuyutsuki", y: 2 },
    { x: "Militech", y: 3 },
    { x: "Moore Tech", y: 3 },
    { x: "NetWatch", y: 1 },
    { x: "QianT", y: 2 },
    { x: "Raven MicroCyber", y: 2 },
    { x: "Seocho Electronics", y: 2 },
    { x: "Stephenson Tech", y: 3 },
    { x: "Tetratronic", y: 4 },
    { x: "Zetatech", y: 5 },
  ],
];

export const lineCustomSeries = [
  {
    dataSource: lineChartData[0],
    xName: "x",
    yName: "y",
    name: "Berserk",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },

  {
    dataSource: lineChartData[1],
    xName: "x",
    yName: "y",
    name: "Cyberdeck",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },

  {
    dataSource: lineChartData[2],
    xName: "x",
    yName: "y",
    name: "Sandevistan",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },

  {
    dataSource: lineChartData[3],
    xName: "x",
    yName: "y",
    name: "Sumatoria",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },
];

export const pieChartData = [
  [
    { x: "Arasaka", y: 0, text: "-" },
    { x: "BioDyne", y: 4, text: "40%" },
    { x: "Biotech Σ", y: 0, text: "-" },
    { x: "Dylanar", y: 0, text: "-" },
    { x: "Fuyutsuki", y: 0, text: "-" },
    { x: "Militech", y: 1, text: "10%" },
    { x: "Moore Tech", y: 3, text: "30%" },
    { x: "NetWatch", y: 0, text: "-" },
    { x: "QianT", y: 0, text: "-" },
    { x: "Raven MicroCyber", y: 0, text: "-" },
    { x: "Seocho Electronics", y: 0, text: "-" },
    { x: "Stephenson Tech", y: 0, text: "-" },
    { x: "Tetratronic", y: 0, text: "-" },
    { x: "Zetatech", y: 2, text: "20%" },
  ],
  [
    { x: "Arasaka", y: 2, text: "9.09%" },
    { x: "BioDyne", y: 2, text: "9.09%" },
    { x: "Biotech Σ", y: 3, text: "13.64%" },
    { x: "Dylanar", y: 0, text: "-" },
    { x: "Fuyutsuki", y: 2, text: "9.09%" },
    { x: "Militech", y: 1, text: "4.55%" },
    { x: "Moore Tech", y: 0, text: "-" },
    { x: "NetWatch", y: 1, text: "4.55%" },
    { x: "QianT", y: 0, text: "-" },
    { x: "Raven MicroCyber", y: 2, text: "9.09%" },
    { x: "Seocho Electronics", y: 2, text: "9.09%" },
    { x: "Stephenson Tech", y: 3, text: "13.64%" },
    { x: "Tetratronic", y: 4, text: "18.18%" },
    { x: "Zetatech", y: 0, text: "-" },
  ],
  [
    { x: "Arasaka", y: 0, text: "-" },
    { x: "BioDyne", y: 0, text: "-" },
    { x: "Biotech Σ", y: 0, text: "-" },
    { x: "Dylanar", y: 4, text: "40%" },
    { x: "Fuyutsuki", y: 0, text: "-" },
    { x: "Militech", y: 1, text: "10%" },
    { x: "Moore Tech", y: 0, text: "-" },
    { x: "NetWatch", y: 0, text: "-" },
    { x: "QianT", y: 2, text: "20%" },
    { x: "Raven MicroCyber", y: 0, text: "-" },
    { x: "Seocho Electronics", y: 0, text: "-" },
    { x: "Stephenson Tech", y: 0, text: "-" },
    { x: "Tetratronic", y: 0, text: "0" },
    { x: "Zetatech", y: 3, text: "30%" },
  ],
  [
    { x: "Arasaka", y: 2, text: "4.76%" },
    { x: "BioDyne", y: 6, text: "14.29%" },
    { x: "Biotech Σ", y: 3, text: "7.14%" },
    { x: "Dylanar", y: 4, text: "9.52%" },
    { x: "Fuyutsuki", y: 2, text: "4.76%" },
    { x: "Militech", y: 3, text: "7.14%" },
    { x: "Moore Tech", y: 3, text: "7.14%" },
    { x: "NetWatch", y: 1, text: "2.38%" },
    { x: "QianT", y: 2, text: "4.76%" },
    { x: "Raven MicroCyber", y: 2, text: "4.76%" },
    { x: "Seocho Electronics", y: 2, text: "4.76%" },
    { x: "Stephenson Tech", y: 3, text: "7.14%" },
    { x: "Tetratronic", y: 4, text: "9.52%" },
    { x: "Zetatech", y: 5, text: "11.90%" },
  ],
];

export const contextMenuItems = [
  "AutoFit",
  "AutoFitAll",
  "SortAscending",
  "SortDescending",
  "Copy",
  "Edit",
  "Delete",
  "Save",
  "Cancel",
  "PdfExport",
  "ExcelExport",
  "CsvExport",
  "FirstPage",
  "PrevPage",
  "LastPage",
  "NextPage",
];

export const stackedChartData = [
  [
    { x: "Common", y: 0 },
    { x: "Uncommon", y: 2 },
    { x: "Rare", y: 2 },
    { x: "Epic", y: 2 },
    { x: "Legendary", y: 2 },
    { x: "Iconic", y: 2 },
  ],
  [
    { x: "Common", y: 2 },
    { x: "Uncommon", y: 4 },
    { x: "Rare", y: 5 },
    { x: "Epic", y: 5 },
    { x: "Legendary", y: 3 },
    { x: "Iconic", y: 3 },
  ],
  [
    { x: "Common", y: 0 },
    { x: "Uncommon", y: 2 },
    { x: "Rare", y: 2 },
    { x: "Epic", y: 2 },
    { x: "Legendary", y: 2 },
    { x: "Iconic", y: 2 },
  ],
];

export const stackedCustomSeries = [
  {
    dataSource: stackedChartData[0],
    xName: "x",
    yName: "y",
    name: "Berserk",
    type: "StackingColumn",
    background: "blue",
  },

  {
    dataSource: stackedChartData[1],
    xName: "x",
    yName: "y",
    name: "Cyberware",
    type: "StackingColumn",
    background: "red",
  },

  {
    dataSource: stackedChartData[2],
    xName: "x",
    yName: "y",
    name: "Sandevistan",
    type: "StackingColumn",
    background: "red",
  },
];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: "Rotate45",
  valueType: "Category",
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 0,
  maximum: 10,
  interval: 1,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: "{value}",
};

