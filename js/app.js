$(function () {
    let tbody = $('#tableBooks')
    $('#test').on("click",function () {
        downloadBooks(tbody)
    })
    downloadBooks(tbody)
})

function downloadBooks(table) {
    table.html("")
    $.ajax({
        url:"http://localhost:8282/books",
        method:"GET",
        dataType:"json"
    }).done(function (response) {
        response.forEach(function (item) {
            showBook(table,item)
        })
    })
}
function showBook(table, book) {
    let row = $(`<tr> 
            <th scope="row">${book.id}</th>
            <th>${book.title}</th>
            <th>${book.isbn}</th>
            <th><button class="btn btn-info" data-id="${book.id}">Usuń</button></th>
            </tr>`)
    table.append(row)
}