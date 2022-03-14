
$("img").each(function () {
    if ($(this).attr('alt') == undefined)
        $(this).attr('alt', $(this).attr('src').split('/').reverse()[0].split('.')[0].replace('-', ' ').replace('_', ' '))
})