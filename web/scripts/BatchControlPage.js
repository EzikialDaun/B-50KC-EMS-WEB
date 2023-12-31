$(function () {
  $("#general-controls").dxDataGrid({
    dataSource: dummyArray,
    paging: {
      enabled: false
    },
    rowAlternationEnabled: true,
    allowColumnResizing: true,
    columnWidth: 100,
    selection: {
      allowSelectAll: true,
      // deferred:false,
      mode: "multiple",
      // selectAllMode:"allPages",
      // showCheckBoxesMode:"onClick"
    },
    onSelectionChanged: function () {

    },
    showBorders: true,
    export: {
      enabled: false
    },
    headerFilter: {
      visible: true
    },
    scrolling: {
      columnRenderingMode: "virtual"
    },
    groupPanel: {
      visible: true
    },
    searchPanel: {
      visible: true,
      width: 240,
      placeholder: "Search..."
    },
    columns: [
      {
        dataField: "Region",
        width: 180
      },
      {
        dataField: "Name",
        width: 130
      },
      {
        dataField: "Type",
        width: 100
      },
      {
        dataField: "Result",
        width: 100
      },
      {
        dataField: "Model",
        width: 100
      },
      {
        dataField: "FirmwareVersion",
        width: 150
      },
      {
        dataField: "TransmissionTime",
        width: 150
      },
      {
        dataField: "ReceiveTime",
        width: 120
      }]
  });

  $("#reset").dxDataGrid({
    dataSource: dummyArray,
    paging: {
      enabled: false
    },
    rowAlternationEnabled: true,
    allowColumnResizing: true,
    columnWidth: 100,
    selection: {
      allowSelectAll: true,
      // deferred:false,
      mode: "multiple",
      // selectAllMode:"allPages",
      // showCheckBoxesMode:"onClick"
    },
    onSelectionChanged: function () {

    },
    showBorders: true,
    export: {
      enabled: false
    },
    headerFilter: {
      visible: true
    },
    scrolling: {
      columnRenderingMode: "virtual"
    },
    groupPanel: {
      visible: true
    },
    searchPanel: {
      visible: true,
      width: 240,
      placeholder: "Search..."
    },
    columns: [
      {
        dataField: "Status",
        width: 200,
      },
      {
        dataField: "Region",
        width: 180
      },
      {
        dataField: "Name",
        width: 130
      },
      {
        dataField: "Type",
        width: 100
      },
      {
        dataField: "Model",
        width: 100
      },
      {
        dataField: "FirmwareVersion",
        width: 150
      }]
  });
});