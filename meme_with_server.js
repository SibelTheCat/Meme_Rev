document.addEventListener("DOMContentLoaded", function (event) {


    class Meme {
        constructor(id, memeCategory, memeName, memePic, memeDescription, memeTag1, memeTag2, memeTag3) {

            this.id = id;
            this.memeCategory = memeCategory;
            this.memeName = memeName;
            this.memePic = memePic;
            this.memeDescription = memeDescription;
            this.memeTag1 = memeTag1;
            this.memeTag2 = memeTag2;
            this.memeTag3 = memeTag3;
            this.PP_helper = 2;
            this.PP = 0;

            }



        addMemeToScreen(meme) {


            let mainNode = document.getElementById("inspiration");
            let article = document.createElement("article");
            article.id = "article"+meme.id;
            //let articleNode = document.createElement("lll"); // if its empty it does not work :(
            // article.appendChild(articleNode);


            /*    let category = document.createElement("h1");
                let categoryNode = document.createTextNode(meme.memeCategory);
                categoryNode.id = meme.memeCategory;
                category.appendChild(categoryNode);*/


            let memeName = document.createElement("h2");
            let memeNameNode = document.createTextNode(meme.memeName);
            memeName.appendChild(memeNameNode);

            let description = document.createElement("h3");
            let descriptionNode = document.createTextNode(meme.memeDescription);
            description.appendChild(descriptionNode);

            let memePic = document.createElement("p");
            let memePicNode = document.createElement("IMG");
            memePicNode.setAttribute("src", meme.memePic);
            memePicNode.setAttribute("class", "memePicture");
            memePic.appendChild(memePicNode);

            // white meme window
            let memeWindow = document.createElement("p");
            memeWindow.setAttribute("class", "memeWindow");
            memeWindow.appendChild(memePic);

            let buttonPP = document.createElement("BUTTON");
            buttonPP.setAttribute("class", "bigpp Button");
            buttonPP.id =meme.memeName+"PP";
            buttonPP.addEventListener("click", event => incrementValue(meme));
            buttonPP.innerHTML = "PP";

            let showPP = document.createElement("p");
            showPP.id = meme.id +"node";
            let showPPNode = document.createTextNode(meme.PP);
            showPPNode.id=meme.memeName;
            showPP.appendChild(showPPNode);

            let buttonpp = document.createElement("BUTTON");
            buttonpp.setAttribute("class", "smallpp Button");
            buttonpp.id =meme.memeName +"pp";
            buttonpp.addEventListener("click", event => decrementValue(meme));
            buttonpp.innerHTML = "pp";

            let commentButton = document.createElement("BUTTON");
            commentButton.setAttribute("class", "comment Button");
            commentButton.id =meme.memeName +"commentButton";
            commentButton.innerHTML = '<i class="fa fa-comment" aria-hidden="true"></i>';
            let shareButton = document.createElement("BUTTON");
            shareButton.setAttribute("class", "share Button");
            shareButton.id =meme.memeName +"shareButton";
            shareButton.innerHTML = '<i class="fa fa-share" aria-hidden="true"></i>';
            let deleteButton = document.createElement("BUTTON");
            deleteButton.setAttribute("class", "delete Button");
            deleteButton.id =meme.memeName +"deleteButton";
            deleteButton.addEventListener("click", event => deleteMeme(meme.id));
            deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';


            mainNode.appendChild(article);
            //article.appendChild(category);
            article.appendChild(memeName);
            article.appendChild(description);
            article.appendChild(buttonPP);
            article.appendChild(showPP);
            article.appendChild(buttonpp);
            article.appendChild(memeWindow);
            article.appendChild(commentButton);
            article.appendChild(shareButton);
            article.appendChild(deleteButton);


        }


    }
    function incrementValue(meme) {
        //PP_helper makes shure, that PP can only go up max by 1
       if(meme.PP_helper <3){
       console.log(meme.PP_helper);
       // console.log(meme.memeID);
            meme.PP = meme.PP + 1;
            meme.PP_helper = meme.PP_helper+1;
            let amount = document.getElementById(meme.id+"node");
        amount.innerHTML = meme.PP;


        let updateMeme = {
            id:meme.id,
            memeCategory: meme.memeCategory,
            memeName: meme.memeName,
            memePic: meme.memePic,
            memeDescription:meme.memeDescription,
            memeTag1: meme.memeTag1,
            memeTag2:meme.memeTag2,
            memeTag3:meme.memeTag3,
            PP:meme.PP


        };

        let opts = {
            method: 'PUT',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(updateMeme),
        };
        let url = "http://localhost:3000/api/v1/meme/"+meme.id;

        fetch(url, opts).then(function (response){
           // alert(response.text)
        }) .catch(function (error){
                // alert(error);

        });
    }}

    function decrementValue(meme) {
        if(meme.PP_helper >1){
        //PP_helper makes shure, that PP can only go down max by 1
        meme.PP = meme.PP -1;
        meme.PP_helper = meme.PP_helper-1;

        let amount =   document.getElementById(meme.id+"node") ;

        amount.innerHTML = meme.PP;

        let updateMeme = {
            id:meme.id,
            memeCategory: meme.memeCategory,
            memeName: meme.memeName,
            memePic: meme.memePic,
            memeDescription:meme.memeDescription,
            memeTag1: meme.memeTag1,
            memeTag2:meme.memeTag2,
            memeTag3:meme.memeTag3,
            PP:meme.PP

        };

        let opts = {
            method: 'PUT',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(updateMeme),
        };
        let url = "http://localhost:3000/api/v1/meme/"+meme.id;

        fetch(url, opts).then(function (response){
            // alert(response.text)
        }) .catch(function (error){
            // alert(error);

        });
    }}


    function deleteMeme(id){
        alert("meme got deleted");
        let removeMeme = document.getElementById("article"+id);


        let url = "http://localhost:3000/api/v1/meme/"+id;

        let opts = {
            method: 'DELETE',
            headers: {}
        };
        fetch(url, opts).then(function (response){
            if(response.ok) {
                //erst wenn es klappt wird das Objekt vom DOM gelöscht
                removeMeme.remove();
                // alert(response.json());
            } }).catch(function (error){
           // alert(error);
        });


    }
    const memeMeme = new Meme();




     function fillTheScreen(category) {


        //  console.log(category);
        let div = document.getElementById('inspiration');
        let div2 = document.getElementById('catfact');

        //Seite springt zur "youtube-Section"
        location.href = "#youtube_section";
        while (div2.firstChild) {
            div2.removeChild(div2.firstChild);
        }
        while (div.firstChild) {
            //Seite wird wieder  geleert ->  //https://stackoverflow.com/questions/3450593/how-do-i-clear-the-content-of-a-div-using-javascript
            div.removeChild(div.firstChild);
        }

        //   console.log(category);
        if(category !="daily_cat_facts"){
        let titleElement = document.createElement("h1");
        let categoryNode = document.createTextNode(category);
        titleElement.appendChild(categoryNode);
        div.appendChild(titleElement);}

        if(category ==="daily_cat_facts"){
            getDailyCatFact();
        }


        //an Url wird category angehängt
       let url = "http://localhost:3000/api/v1/meme?category="+category;
       // console.log(url);
       fetch(url).then(function(response){
           if(!response.ok){
               throw new Error(response.status.toString());
           }
           return response.json();
       }).then(function(memes){
           for (let i = 0; i < memes.length; i++) {
               // console.log(memes[i]);
               //console.log(memes);
               memeMeme.addMemeToScreen(memes[i]);
           }

       }).catch(function (error){
           alert("could not load memes");
       })
    }

    function getDailyCatFact(){

        fillDailyCat("cats look at about 500 memes a day");

     /*   let url2 = "https://cat-fact.herokuapp.com/facts";
       //fetch ist ein Promises
        fetch(url2).then(function (response){
           // console.log(response);
            //das fetch unterscheidet nicht welchen Statuscode ist habe, auch wenn 404 zurückkommt muss ich es manuell abfangen
           // wenn Error geworfen wir geht das Programm weiter in die catch Funktion
            if (!response.ok){throw new Error(response.status.toString())}
            //Response ist auch ein promises
            return response.json()
        })
            //Promises wird mit dem Datenobjekt resolved
            //then wird eine Funktion übergeben, die data erhält und die Funktion fillDailyCat aufruft
            .then(data=>fillDailyCat(data[1].text))
            .catch(function (error){
               // console.log(error);
                fillDailyCat("cats look at about 500 memes a day");
            });*/
    }


    function fillDailyCat(catfact){

        let div = document.getElementById('catfact');
        let titleElement = document.createElement("h1");
        let categoryNode = document.createTextNode("daily_cat_facts");
        titleElement.appendChild(categoryNode);

        let article = document.createElement("article");
        let catFacts = document.createElement("h2");

            let catFactNode = document.createTextNode(catfact);

            catFacts.appendChild(catFactNode);

            article.appendChild(catFacts);
            div.appendChild(titleElement);
             div.appendChild(article);
    }


    fillTheScreen("meme of the day");

    document.getElementById("homeNAV").onclick = function() {fillTheScreen("meme of the day")};
    document.getElementById("fakenewsNAV").onclick = function() {fillTheScreen( "fakenews")};
    document.getElementById("idolsNAV").onclick = function() {fillTheScreen( "idols")};
    document.getElementById("none_humainNAV").onclick = function() {fillTheScreen( "nonHumain")};
    document.getElementById("daily_cat_factsNAV").onclick = function() {fillTheScreen("daily_cat_facts")};
    document.getElementById("sciencebustersNAV").onclick = function() {fillTheScreen( "scienceBusters")};
    document.getElementById("hystoricalNAV").onclick = function() {fillTheScreen( "hystorical")};
    document.getElementById("minime_meNAV").onclick = function() {fillTheScreen("minime-me")};
    document.getElementById("ikea-memesNAV").onclick = function() {fillTheScreen( "ikea-memes")};
    document.getElementById("trendingNAV").onclick = function() {fillTheScreen("trending")};
    document.getElementById("latestNAV").onclick = function() {fillTheScreen( "latest")};
    document.getElementById("best_ofNAV").onclick = function() {fillTheScreen( "best_Of")};
    document.getElementById("znarfNAV").onclick = function() {fillTheScreen( "znarf")};
    document.getElementById("bad_hair_dayNAV").onclick = function() {fillTheScreen( "bad_hair_day")};


});

/*
async function fillTheScreen(category) {


    //  console.log(category);
    let div = document.getElementById('inspiration');
    let div2 = document.getElementById('catfact');


    //Seite springt zur "youtube-Section"
    location.href = "#youtube_section";
    while (div2.firstChild) {
        div2.removeChild(div2.firstChild);
    }
    while (div.firstChild) {
        //Seite wird wieder  geleert ->  //https://stackoverflow.com/questions/3450593/how-do-i-clear-the-content-of-a-div-using-javascript
        div.removeChild(div.firstChild);
    }

    //   console.log(category);
    if(category !="daily_cat_facts"){
        let titleElement = document.createElement("h1");
        let categoryNode = document.createTextNode(category);
        titleElement.appendChild(categoryNode);
        div.appendChild(titleElement);}

    if(category ==="daily_cat_facts"){
        getDailyCatFact();
    }


    //an Url wird category angehängt
    let url = "http://localhost:3000/api/v1/meme?category="+category;
    // console.log(url);
    let myObject = await fetch(url);
    let memes = await myObject.json();

    for (let i = 0; i < memes.length; i++) {
        // console.log(memes[i]);
        //console.log(memes);
        memeMeme.addMemeToScreen(memes[i]);
    }
}*/
