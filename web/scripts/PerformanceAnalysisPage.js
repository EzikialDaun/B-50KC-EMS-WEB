$(function () {
  var paramDict = {};
  paramDict["1 hour"] = 1;
  paramDict["2 hour"] = 2;
  paramDict["6 hour"] = 6;
  paramDict["12 hour"] = 12;
  paramDict["24 hour"] = 24;

  $("#btn-option").click(function () {
    if ($("#row-option").css("display") == "none") {
      $("#row-option").slideDown("slow");
    }
    else {
      $("#row-option").slideUp("slow");
    }
  });

  $("#btn-option-hide").click(function () {
    $("#row-option").slideUp("slow");
  });

  $("#toast").dxToast({
    message: "Can not select more than 3 elements.",
    type: "warning",
    displayTime: 3000
  });

  $("#parameterList").dxList({
    dataSource: parameters,
    height: 400,
    searchEnabled: false,
    itemTemplate: function (data) {
      return $("<div>").text(data.Name);
    }
  });

  $("#gridPerformanceTable").dxDataGrid({
    dataSource: dummyArray,
    paging: {
      enabled: false
    },
    rowAlternationEnabled: true,
    allowColumnResizing: true,
    columnWidth: 100,
    selection: {
      allowSelectAll: false,
      // deferred:false,
      mode: "multiple",
      // selectAllMode:"allPages",
      // showCheckBoxesMode:"onClick"
    },
    onSelectionChanged: function () {
      var grid = $("#gridPerformanceTable").dxDataGrid("instance");
      new DevExpress.data.ArrayStore(grid.getSelectedRowsData())
        .load({
          sort: grid.getController("data").dataSource().sort()
        })
        .done(function (items) {
          if (items.length > 3) {
            $("#toast").dxToast("show");
            grid.deselectRows(items[items.length - 1]);
          }
          else {
            createParameterChart(items);
          }
        });
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
      },
      {
        dataField: "SerialNumber",
        width: 130
      },
      {
        dataField: "Min",
        width: 120
      },
      {
        dataField: "Avg",
        width: 120
      },
      {
        dataField: "Max",
        width: 120
      }]
  });

  $("#period-start").dxDateBox({
    type: "datetime",
    value: new Date()
  });

  $("#period-end").dxDateBox({
    type: "datetime",
    value: new Date()
  });

  $("#unit-time").dxSelectBox({
    items: unitTime,
    onValueChanged: function (data) {
      createSlider("#time-adjust", paramDict[data.value] * -1, 0, 0, 0.1, "hour(s)");
    }
  });

  createSlider("#time-adjust", -1, 0, 0, 0.1, "hour(s)");

  createParameterChart([]);

  function createSlider(tagID, minValue, maxValue, currentValue, stepValue, toolTip) {
    $(tagID).dxSlider({
      min: minValue,
      max: maxValue,
      value: currentValue,
      step: stepValue,
      label: {
        visible: true,
        format: function (value) {
          return value + " " + toolTip;
        },
        position: "top"
      },
      tooltip: {
        enabled: true
      }
    });
  }

  function createParameterChart(seriesArray) {
    var seriesValueArray = [];
    var seriesObject = {
      "valueField": "",
      "name": ""
    };

    if (seriesArray.length >= 1) {
      seriesObject = {
        "valueField": "nocon",
        "name": "No Con"
      }
      seriesValueArray.push($.extend({}, seriesObject));
    }
    if (seriesArray.length >= 2) {
      seriesObject = {
        "valueField": "oos",
        "name": "OOS"
      }
      seriesValueArray.push($.extend({}, seriesObject));
    }
    if (seriesArray.length >= 3) {
      seriesObject = {
        "valueField": "major",
        "name": "Major"
      }
      seriesValueArray.push($.extend({}, seriesObject));
    }

    $("#parameter-chart").dxChart({
      dataSource: alarmHistory,
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
      series: seriesValueArray,
      tooltip: {
        enabled: true
      },
      legend: {
        visible: false
      },
      export: {
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
});