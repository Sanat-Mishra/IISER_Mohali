function toggleEventList(liId, btnId, eventList, partOfWeekList, urlList, baseUrl) {
    var button = document.getElementById(btnId);
    var liDiv = document.getElementById(liId);
    if (button.classList.contains('expandButton')) {
        eventList = eventList.split(",");
        partOfWeekList = partOfWeekList.split(",");
        urlList = urlList.split(",");
        var htmlli="" ;
        for(var i = 0; i < eventList.length; i++) {
            if (partOfWeekList[i] == 'false') {
                htmlli += `<li><a href=`+baseUrl+urlList[i]+` class="eventListElement">`+eventList[i]+`</a></li>`;
            }
        }
        liDiv.innerHTML = `<ul>`+htmlli+`</ul>`;
        console.log(htmlli);
        button.classList.remove('expandButton');
        button.classList.add('collapseButton');
    } else {
        liDiv.innerHTML = ``;
        button.classList.remove('collapseButton');
        button.classList.add('expandButton');
    }
}