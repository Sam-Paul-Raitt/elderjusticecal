$.ajax({
    url: "include/header.html",
    success: function (data) { $('#header').append(data); },
    dataType: 'html'
});
$.ajax({
    url: "include/main-nav.html",
    success: function (data) { $('#main-nav').append(data); },
    dataType: 'html'
});
$.ajax({
    url: "include/footer.html",
    success: function (data) { $('#footer').append(data); },
    dataType: 'html'
});
