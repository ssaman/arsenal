document.addEventListener("deviceready", onDeviceReady, false);
// Cordova is ready
//
function onDeviceReady() {

var db = window.sqlitePlugin.openDatabase({name: "basededatos.db"});
var sql = "SELECT nombre FROM monografia order by nombre";
navigator.notification.alert("");
db.executeSql(sql, [id], llenarLista);
}

function alertDismissed() {
    // do something
}

navigator.notification.alert(
    'You are the winner!',  // message
    alertDismissed,         // callback
    'Game Over',            // title
    'Done'                  // buttonName
);

function llenarLista(tx, results) {
var len = results.rows.length;
for (var i=0; i<len; i++) {
var employee = results.rows.item(i);
  document.getElementById("reportList").append('<ons-list-item class="topcoat-list__item__line-height">'+employee.nombre+'</ons-list-item>');
}
}
