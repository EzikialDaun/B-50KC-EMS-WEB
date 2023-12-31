$(function () {
  $("#btn-legend").click(function () {
    if ($("#btn-legend").text() == "Legend On") {
      $("#btn-legend").text("Legend Off")
      createAlarmLineChart(true);
    }
    else {
      $("#btn-legend").text("Legend On")
      createAlarmLineChart(false)
    }
  });

  $("#operation-status").dxChart({
    dataSource: alarmgraph,
    palette: ['#92d050', '#808080', '#ff0000', '#cc00ff', '#e26b0a', '#ffcc00'],
    commonSeriesSettings: {
      argumentField: "key",
      valueField: "value",
      name: "Alarm Status",
      type: "bar",
    },
    seriesTemplate: {
      nameField: "key"
    },
    tooltip: {
      enabled: true
    },
    equalBarWidth: false,
    legend: {
      verticalAlignment: "top",
      horizontalAlignment: "right",
      position: "outside",
      columnCount: 0,
      columnItemSpacing: 10,
      font: {
        size: 9
      }
    },
  });

  createAlarmLineChart(false);

  function createAlarmLineChart(legendFlag) {
    $("#chart").dxChart({
      dataSource: alarmHistory,
      palette: ['#808080', '#ff0000', '#cc00ff', '#e26b0a', '#ffcc00'],
      commonSeriesSettings: {
        argumentField: "hour",
        point: {
          size: 8
        }
      },
      commonAxisSettings: {
        grid: {
          visible: true
        }
      },
      series: [
        { valueField: "nocon", name: "No Con" },
        { valueField: "oos", name: "OOS" },
        { valueField: "critical", name: "Critical" },
        { valueField: "major", name: "Major" },
        { valueField: "minor", name: "Minor" }
      ],
      tooltip: {
        enabled: true
      },
      legend: {
        verticalAlignment: "top",
        horizontalAlignment: "right",
        position: "outside",
        columnItemSpacing: 10,
        font: {
          size: 9
        },
        visible: legendFlag
      },
      "export": {
        enabled: false
      },
      argumentAxis: {
        label: {
          format: {
            type: "decimal"
          }
        },
        allowDecimals: false,
        axisDivisionFactor: 60
      }
    });
  }

  function createAlarmStatusChart(){
    $("#gridStatus").dxDataGrid({
      dataSource: dummyArray,
      paging: {
        enabled: false
      },
      rowAlternationEnabled: true,
      allowColumnResizing: true,
      columnWidth: 100,
      selection: {
        mode: "single"
      },
      onRowClick: function () {
        // var grid = $("#gridAlarmStatus").dxDataGrid("instance");
        // new DevExpress.data.ArrayStore(grid.getSelectedRowsData())
        //   .load({
        //     sort: grid.getController("data").dataSource().sort()
        //   })
        //   .done(function (item) {
        //     console.log(item);
        //     console.log(item[0].Name);
        //   })
      },
      showBorders: true,
      "export": {
        enabled: true,
        fileName: "AlarmStatus",
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
          dataField: "OccurrenceDate",
          width: 200
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
          dataField: "AlarmName",
          width: 200
        },
        {
          dataField: "AlarmGrade",
          width: 110
        },
        {
          dataField: "AlarmReason",
          width: 120
        },
        {
          dataField: "RefValue",
          width: 100
        },
        {
          dataField: "CurrentValue",
          width: 120
        },
        {
          dataField: "Restornation",
          width: 150
        },
        {
          dataField: "Duration",
          width: 100
        },
        {
          dataField: "FirmwareVersion",
          width: 150
        },
        {
          dataField: "SerialNumber",
          width: 130
        },
      ]
    });
  }

  function createOperationStatusChart() {
    $("#gridStatus").dxDataGrid({
      dataSource: dummyArray,
      paging: {
        enabled: false
      },
      rowAlternationEnabled: true,
      allowColumnResizing: true,
      columnWidth: 100,
      showBorders: true,
      onInitialized: function () {
      },
      // selection: {
      //   mode: "multiple"
      // },
      "export": {
        enabled: true,
        fileName: "OperationStatus",
        //allowExportSelectedData: true
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
          width: 190
        },
        {
          dataField: "Region",
          width: 160
        },
        {
          dataField: "Name",
          width: 110
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
        },
        {
          dataField: "SerialNumber",
          width: 130
        },
        {
          dataField: "SystemParameter",
          width: 150
        },
        {
          dataField: "Address",
          width: 130
        },
      ]
    })
  }

  createAlarmStatusChart();

  $("#tab1").click(function () {
    createAlarmStatusChart();
  });

  $("#tab2").click(function () {
    createOperationStatusChart();
  });
});