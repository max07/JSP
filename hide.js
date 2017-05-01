var hidePosts = function() {
    var adsPlane = document.getElementById("pagelet_ego_pane");
    adsPlane.style.display = 'none';
}();

var spanList = $("span").filter(function() {
    //console.log("Text: ", $(this).text());
    return ($(this).text().indexOf('commented') > -1) || ($(this).text().indexOf('reacted') > -1) || ($(this).text().indexOf('liked') > -1) || ($(this).text().indexOf('shared') > -1) || ($(this).text().indexOf('suggested') > -1)
});
console.log('spanList: ', spanList);
for (i in spanList) {
    $(spanList[i]).closest("div[id^='hyperfeed_story_']").hide();
}