// design table structure showcsae server array of obj data in it
const data = [{name:"mamta" ,city: "India",age:30},
    {name:"Dipak" ,city: "Atlanta",age:32},
    {name:"Patil" ,city: "Na",age:33}
]

var table = document.createElement('table');
var theader = document.createElement("thead")
var headerRow = document.createElement("tr")

Object.keys(data[0]).forEach(function(key){
    var th = document.createElement("th")
    th.textContent = key;
    headerRow.appendChild(th)
})

theader.appendChild(headerRow);
table.appendChild(theader)
var tbody = document.createElement("tbody")
data.forEach(function(obj){
    var row = document.createElement('tr')
    Object.keys(obj).forEach(function(key){
        var cell = document.createElement("td")
        cell.textContent = obj[key];
        row.appendChild(cell)

    })
    tbody.appendChild(row)

})

table.appendChild(tbody);


// show tablw
document.body.appendChild(table)