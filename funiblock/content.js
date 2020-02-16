function sleep(msec) {
    return new Promise(function(resolve) {
  
       setTimeout(function() {resolve()}, msec);
  
    })
 }

$(async function() {
    var ads = null;
    var iframe = document.querySelector("#player");

    var player_doc = iframe.contentDocument;
    var count = 0;
    while (player_doc == null){
        await sleep(500);
        player_doc = iframe.contentDocument;
        count += 1;

        if (count == 30){
            break;
        }
    }
    
    count = 0;
    while (ads == null) {
        await sleep(500);
        ads = player_doc.getElementById('funimation-error-screen');
        count += 1;

        if (count == 100){
            break;
        }
    }
    ads.remove();
    console.log("終わったよ");
  });
