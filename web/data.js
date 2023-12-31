var alarmgraph = [{
  key: "Normal",
  value: 50
}, {
  key: "No Con",
  value: 3
}, {
  key: "OOS",
  value: 2
}, {
  key: "Critical",
  value: 3
}, {
  key: "Major",
  value: 3
}, {
  key: "Minor",
  value: 7
}];

var alarmHistory = [{
  hour: 0,
  nocon: 1,
  oos: 3,
  critical: 1,
  major: 4,
  minor: 7
}, {
  hour: 4,
  nocon: 3,
  oos: 5,
  critical: 3,
  major: 2,
  minor: 3
}, {
  hour: 8,
  nocon: 5,
  oos: 2,
  critical: 1,
  major: 4,
  minor: 7
}, {
  hour: 12,
  nocon: 0,
  oos: 1,
  critical: 1,
  major: 2,
  minor: 5
}, {
  hour: 16,
  nocon: 0,
  oos: 1,
  critical: 3,
  major: 3,
  minor: 13
}, {
  hour: 20,
  nocon: 0,
  oos: 9,
  critical: 3,
  major: 4,
  minor: 8
}, {
  hour: 24,
  nocon: 3,
  oos: 2,
  critical: 3,
  major: 3,
  minor: 7
}];

function getRandomArbitrary(min, max) {
  var temp = Math.random() * (max - min) + min;
  return Math.floor(temp);
}

var dummyArray = [];

var statusArray = [
  "Restored",
  "Alarm Occurred",
  "Shutdown Occurred",
  "Link Fail Occurred"
]

var dateArray = [
  "2019-10-02T14:56:22Z",
  "2019-10-02T14:59:38Z",
  "2019-10-02T07:12:08Z",
  "2019-10-10T16:48:14Z",
  "2019-10-05T03:24:16Z",
  "2019-10-07T12:17:39Z",
  "2019-09-29T03:25:59Z"
]

var regionArray = [
  "CA, Los Angeles",
  "MO, St. Louis",
  "AR, Little Rock",
  "MI, Lansing",
  "KS, Topeka"
]

var nameArray = [
  "Alpha",
  "Bravo",
  "Echo",
  "Whiskey",
  "Zulu"
]

var typeArray = [
  "Indoor",
  "Outdoor"
]

var modelArray = [
  "AD1",
  "IR1"
]

var alarmNameArray = [
  "Over Temp",
  "DL Over Input",
  "UL Over RSSI",
  "UL VSWR"
]

var alarmGradeArray = [
  "Minor",
  "Major",
  "Critical",
  "OOS",
  "No Con"
]

var alarmReasonArray = [
  "Unknown",
  "Environment"
]

var firmwareVersionArray = [
  "v1.0.7192.25347",
  "v1.0.7203.9816",
  "v1.0.7193.8907"
]

var serialNumberArray = [
  "20190602",
  "20190715",
  "20190706",
  "20190508"
]

var durationArray = [
  "All",
  "Over 10 sec",
  "Over 30 sec",
  "Over 60 sec"
]

function createDummyData(ID) {
  var dummyObject = {};
  dummyObject["ID"] = ID
  dummyObject["Status"] = statusArray[getRandomArbitrary(0, statusArray.length)]
  dummyObject["OccurrenceDate"] = dateArray[getRandomArbitrary(0, dateArray.length)]
  dummyObject["Region"] = regionArray[getRandomArbitrary(0, regionArray.length)]
  dummyObject["Name"] = nameArray[getRandomArbitrary(0, nameArray.length)] + " " + getRandomArbitrary(1, 64).toString();
  dummyObject["Type"] = typeArray[getRandomArbitrary(0, typeArray.length)]
  dummyObject["Model"] = modelArray[getRandomArbitrary(0, modelArray.length)]
  dummyObject["AlarmName"] = alarmNameArray[getRandomArbitrary(0, alarmNameArray.length)]
  dummyObject["AlarmGrade"] = alarmGradeArray[getRandomArbitrary(0, alarmGradeArray.length)]
  dummyObject["AlarmReason"] = alarmReasonArray[getRandomArbitrary(0, alarmReasonArray.length)]
  dummyObject["RefValue"] = getRandomArbitrary(-20, 90).toString();
  dummyObject["CurrentValue"] = getRandomArbitrary(-20, 90).toString();
  if (dummyObject["Status"] == "Restored") {
    dummyObject["Restornation"] = "OK"
  }
  else {
    dummyObject["Restornation"] = "Yet"
  }
  dummyObject["Duration"] = durationArray[getRandomArbitrary(0, durationArray.length)]
  dummyObject["FirmwareVersion"] = firmwareVersionArray[getRandomArbitrary(0, firmwareVersionArray.length)]
  dummyObject["SerialNumber"] = serialNumberArray[getRandomArbitrary(0, serialNumberArray.length)] + dummyObject["Region"].substr(0, 2) + "0" + dummyObject["Name"].substr(dummyObject["Name"].length - 1, 1);
  dummyObject["SystemParameter"] = getRandomArbitrary(-20, 90).toString();
  dummyObject["Address"] = "";
  dummyObject["Min"] = getRandomArbitrary(-20, 40).toString();
  dummyObject["Max"] = getRandomArbitrary(60, 90).toString();
  dummyObject["Avg"] = getRandomArbitrary(40, 60).toString();
  dummyObject["TransmissionTime"] = getRandomArbitrary(0, 300).toString() + " sec";
  dummyObject["ReceiveTime"] = getRandomArbitrary(0, 300).toString() + " sec";
  return dummyObject;
}

for (var i = 0; i < 30; i++) {
  dummyArray.push($.extend({}, createDummyData(i)));
}

var parameters = [{
  "ID": 1,
  "Name": "UL Gain",
}, {
  "ID": 2,
  "Name": "DL Gain",
}, {
  "ID": 3,
  "Name": "RSSI",
}, {
  "ID": 4,
  "Name": "Output Power",
}];

var unitTime = [
  "1 hour",
  "2 hour",
  "6 hour",
  "12 hour",
  "24 hour",
];