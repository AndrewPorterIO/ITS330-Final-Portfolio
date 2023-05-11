window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        document.getElementById("myHeader").classList.add("headerColor");
    } else {
        document.getElementById("myHeader").classList.remove("headerColor");
    };
};