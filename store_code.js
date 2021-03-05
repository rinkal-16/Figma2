let pagination = {
empty: '',
extend(data) {
pagination.data_per_page = 3;
pagination.size = Math.ceil(objJson.length / data_per_page);
pagination.currentPage = 1;
pagination.pageBAC = 1;
},
addToPagination(st, fn) {
//console.log('add pgn: ',st, fn);
for (let i = st; i < fn; i++) {
pagination.empty += '<a>' + i + '</a>';
}
},
first() {
pagination.empty += '<a>1</a><i>...</i>';
tableUI(data,dataCount);
},
middle() {
pagination.empty = '<a>...</a>';
},
last() {
pagination.empty += '<i>...</i><a>' + pagination.size + '</a>';
},
prev() {
pagination.currentPage--;
if (pagination.currentPage < 1) {
pagination.currentPage = 1;
}
pagination.actualLogic();
},
next() {
pagination.currentPage++;
if (pagination.currentPage > pagination.size) {
pagination.currentPage = pagination.size;
}
pagination.actualLogic();
},
bindAll() {
let a = pagination.e.getElementsByTagName('a');
for (let i = 0; i < a.length; i++) {
if (+a[i].innerHTML === pagination.currentPage) {
a[i].className = 'current';

} else {
a[i].addEventListener('click', function () {
pagination.currentPage = +this.innerHTML;
pagination.actualLogic();

});
}
}
},
finish() {
pagination.e.innerHTML = pagination.empty;
pagination.empty = '';
pagination.bindAll();
},
actualLogic() {
let span = document.createElement('span');
if (pagination.size < pagination.pageBAC * 2) {
pagination.addToPagination(1, pagination.size + 1);
} else if (pagination.currentPage < pagination.pageBAC * 2) {
console.log('st: ',1, 'fn: ',pagination.pageBAC * 2);
pagination.addToPagination(1, pagination.pageBAC * 2);
pagination.last();
} else if (pagination.currentPage > pagination.size - pagination.pageBAC * 2) {
console.log(pagination.currentPage, pagination.size, pagination.pageBAC, pagination.size - pagination.pageBAC * 2);
pagination.first();
//console.log('st: ', pagination.size - pagination.pageBAC * 2, 'fn: ',pagination.size);
pagination.addToPagination(pagination.size - pagination.pageBAC * 2, pagination.size);
} else {
console.log('st: ',pagination.currentPage - pagination.pageBAC, 'fn: ',pagination.currentPage + pagination.pageBAC + 1);
pagination.addToPagination(pagination.currentPage - pagination.pageBAC, pagination.currentPage + pagination.pageBAC + 1);
}
pagination.finish();
},
displayButton(e) {
let a = e.getElementsByTagName('a');
a[0].addEventListener('click', pagination.prev);
a[1].addEventListener('click', pagination.next);
},
atFirstSight(e) {
let html = [
'<a>Prev</a>',
'<span></span>',
'<a>Next</a>',
];
e.innerHTML = html.join('');
pagination.e = e.getElementsByTagName('span')[0];
pagination.displayButton(e);
},
initialStage(e, data) {
pagination.extend(data);
pagination.atFirstSight(e);
pagination.actualLogic();
}
}
let inits = function() {
pagination.initialStage(document.getElementById('paginations'), {
size: Math.ceil(objJson.length / tableUI(data,dataCount)), // pages size
currentPage: 1,  // selected page
pageBAC: 1   // pages before and after current
});
};
document.addEventListener('DOMContentLoaded', inits, false);




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
// function prevButton() {
//     if(current_page > 1) {
//         current_page--;
//         changePage(current_page);
//     }
// }
// function nextButton() {
//     if(current_page < numPages()) {
//         current_page++;
//         changePage(current_page);
//     }
// }

// function changePage(pageNumber) {
//     let next_btn = document.getElementById("next_btn");
//     let prev_btn = document.getElementById("prev_btn");
//     let data = document.getElementById("data");
//     // let table = document.createElement('table');
//     // let td = table.appendChild(document.createElement('td'));
//     // let tr = td.appendChild(document.createElement('tr'));
//     // if(pageNumber < 1) {
//     //     pageNumber = 1;
//     // }
//     // if(pageNumber > numPages()) {
//     //     pageNumber = numPages();
//     // }
//     console.log(pageNumber-1, pageNumber*data_per_page, objJson.length);
//     console.log((pageNumber-1)*data_per_page);
//     let html = "";
//     data.innerHTML = "";
//     console.log((pageNumber - 1) * data_per_page);
//     console.log((pageNumber * data_per_page));
//     console.log(objJson.length);
//     for(let i = (pageNumber - 1) * data_per_page; i < (pageNumber * data_per_page) && i < objJson.length; i++) {
//         data.innerHTML += "<span>" + objJson[i].name + " , " + objJson[i].data + "</span><br>";
//         console.log(objJson[i].name, objJson[i].data);
//         // html += "<table>"+"<tr>"+
    //         //         "<td>"+(i+1)+"</td>"+
    //         //     "<td>"+objJson[i].name+"</td>"+
    //         //     "<td>"+objJson[i].fname+"</td>"+
    //         //     "</tr>"+"</table>";
//     }
//     // if(pageNumber === 1) {
//     //     document.getElementById('prev_btn').style.visibility = 'hidden';
//     // } else {
//     //     document.getElementById('prev_btn').style.visibility = 'visible';
//     // }
//     // if(pageNumber === numPages()) {
//     //     document.getElementById('next_btn').style.visibility = 'hidden';
//     // } else {
//     //     document.getElementById('next_btn').style.visibility = 'visible';
//     // }
// }
// function numPages() {
//     let abc = objJson.length / data_per_page;
//     let pqr = Math.ceil(abc);
//     return pqr;
// }
// window.onload = function () {
//     changePage(1);
// }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
// // objJson = new Array();
// let max = objJson.length;
// for(let i=1; i<=max; i++) {
//     objJson[i] = new Array();
// }
// function searchData() {
//     let input = document.getElementById('searchBox').value.toLowerCase();
//     var re = /Rinkal/i;
//     var found = objJson.match( re );
//     console.log(found);
//     let i=0;
//     let list="";
//     let pos=-1;
//     if(input != "") {
//         for(i=1; i<=objJson.length; i++) {
//             console.log(objJson[i]['name'].indexOf(input));
//             pos = objJson[i]['name'].findIndex(input);
//             console.log(pos);
//             if(pos!=-1) {
//                 list = list + '<a href=""'+objJson[i]['class']+'">'+ objJson[i]['data'] + '</a>' + '<br>';
//             }
//             pos=-1;
//         }
//         console.log(list);
//         if(list=="") {
//             document.getElementById("listing").innerHTML = "";
//             document.getElementById("listing").style.display = "none";
//         } else {
//             document.getElementById("listing").innerHTML = list;
//             document.getElementById("listing").style.display = "block";
//         }
//     }
// }
// function myFunction() {
//     // let input, filter, table, tr, td, i, txtValue;
//     // input = document.getElementById("myInput");
//     // filter = input.value.toUpperCase();
//     // table = document.getElementById("myTable");
//     // tr = table.getElementsByTagName("tr");
//     // for (i = 0; i < objJson.length; i++) {
//     //     console.log('+++',tr[i]);
//     //     td = tr[i].getElementsByTagName("td")[1];
//     //     if (td) {
//     //         txtValue = td.textContent || td.innerText;
//     //         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//     //             tr[i].style.display = "";
//     //         } else {
//     //             tr[i].style.display = "none";
//     //         }
//     //     }
//     // }
// }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //


// let per_page = document.getElementById("limit").value;
// let step = 1;
// let pgnUI = '';
// let currentPage = 1;
// let prev_btn = document.getElementById('prev');
// let next_btn = document.getElementById('next');
// let total_page = Math.ceil(objJson.length / per_page);
// let page_link = document.getElementById('page_number');
// let matches = objJson;

// function search(subject, objects) {
//     let input, filter;
//     input = document.getElementById("myInput");
//     filter = input.value;
//     matches = [];
//     let regexp = new RegExp(filter, 'g');
//     for (let i = 0; i < objJson.length; i++) {
//         for (let key in objJson[i]) {
//             if (objJson[i][key].match(regexp)) matches.push(objJson[i]);
//         }
//     }
//     console.log(matches);
//     return matches;
// };
// function first() {
//     return pgnUI = '<a class="btn" href="javascript:display(' + 1 + ')">1</a><i>...</i>';
// }
// function last() {
//     return pgnUI = '<i>...</i><a class="btn" href="javascript:display(' + total_page + ')">' + total_page + '</a>';
// }
// function prev() {
//     currentPage--;
//     display(currentPage);
// }
// function next() {
//     currentPage++;
//     display(currentPage);
// }
// function setLimit(event) {
//     let selectElement = event.target.value;
//     let first = document.getElementById("limit").value;
//     return selectElement;
// }
// function display(pageNum) {
//     per_page = document.getElementById("limit").value;
//     page_link.innerHTML = mainLogic(pageNum);
//     currentPage = pageNum;
//     let jsonData = '';
//     for (let i = (pageNum - 1) * per_page; i < (pageNum * per_page); i++) {
//         if (i < objJson.length) {
//             jsonData += '<tr><td class="td">' + (i + 1) + '</td><td class="td">' + objJson[i].name + '</td><td class="td">' + objJson[i].data + '</td><td class="td">' + objJson[i].class + '</td>';
//         } else if(i < matches.length) {
//             console.log(matches[i].name, matches[i].data, matches[i].class);
//             jsonData += '<tr><td class="td">' + (i + 1) + '</td><td class="td">' + matches[i].name + '</td><td class="td">' + matches[i].data + '</td><td class="td">' + matches[i].class + '</td>';
//         }
//     }
//     document.getElementById('data').innerHTML = jsonData;
//     // For prev button
//     if(currentPage <= 1) prev_btn.className = 'hide_un_hide';
//     else prev_btn.className = 'btn'
//     // For next button
//     if(currentPage >= total_page) next_btn.className = 'hide_un_hide';
//     else next_btn.className = 'btn'
// }
// function mainLogic(currentPage) {
//      if (total_page < (step * 2) + 5) return add(1, total_page, currentPage);
//      else if (total_page > (step * 2) + 4 && currentPage < 5) return add(1, 5, currentPage) + last();
//      else if (currentPage > 4 && currentPage < (total_page - 3)) return first() + add((currentPage - step), (currentPage + step), currentPage) + last();
//      else if (currentPage > (total_page - 5)) return first() + add((total_page - 4), total_page, currentPage);
// }
// function add(s, f, currentPage) {
//     pgnUI = '';
//     for (let i = s; i <= f; i++) {
//         pgnUI += '<a id = "' + i +'" class="'+(currentPage===i) +' btn" href="javascript:display(' + i + ')">' + i + '</a>';
//     }
//     return pgnUI;
// }
// window.onload = function () {
//     display(currentPage);
// };


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
// Code block for pagination UI.
// let z = [];
// for(let k=0; k < rangeWithDots.length; k++) {
//     z[k]=rangeWithDots[k];
//     let li = document.createElement('li');
//     let a = document.createElement('button');
//     li.className = "page-item";
//     a.className = "page-link";
//     if(n == "...") {
//         a.setAttribute("href", 'javascript:void(0)');
//         a.setAttribute("id",'page_box');
//         a.innerText = z[k];
//         li.appendChild(a);
//         pagData += z[k];
//         document.getElementById('page_box').innerHTML = pagData;
//         li.className = "pgn_box";
//     }
//     else {
//         a.setAttribute("href", '#');
//         a.setAttribute("id",'page_box');
//         a.innerText = z[k];
//         li.appendChild(a);
//         pagData += z[k];
//         document.getElementById('page_box').innerHTML = pagData;
//         li.className = "pgn_box";
//     }
// li.appendChild(a);
// let m = li.appendChild(a);
// m = document.getElementById("page_box");
// console.log(m);
// a.onclick = showData(k);
// function showData(k) {
//     console.log("clicked...");
//     // for(let a=0; a<z.length; a++) {
//     //     console.log(z[a]);
//         for (let i = (z[0] - 1) * setLimit; i < (z[0] * setLimit); i++) {
//             if (i < objJson.length) {
//                 console.log(i+1, objJson[i].name, objJson[i].data, objJson[i].class);
//                 jsonData += '<tr><td class="td">' + (i + 1) + '</td><td class="td">' + objJson[i].name + '</td><td class="td">' + objJson[i].data + '</td><td class="td">' + objJson[i].class + '</td>';
//             }
//             document.getElementById('data').innerHTML = jsonData;
//         }
//     // }
// }
//}
// for (let i = (z[0] - 1) * setLimit; i < (z[0] * setLimit); i++) {
//     if (i < objJson.length) {
//         jsonData += '<tr><td class="td">' + (i + 1) + '</td><td class="td">' + objJson[i].name + '</td><td class="td">' + objJson[i].data + '</td><td class="td">' + objJson[i].class + '</td>';
//     }
//     document.getElementById('data').innerHTML = jsonData;
// }
//return tempArray, rangeWithDots;
