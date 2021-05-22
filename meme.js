document.addEventListener("DOMContentLoaded", function (event) {
 let position = 1; //global Variable for Meme of the day Funktion

    class Meme {
        constructor(memeCategory, memeName, memePic, memeDescription, memeTag1, memeTag2, memeTag3) {
            this.memeCategory = memeCategory;
            this.memeName = memeName;
            this.memePic = memePic;
            this.memeDescription = memeDescription;
            this.memeTag1 = memeTag1;
            this.memeTag2 = memeTag2;
            this.memeTag3 = memeTag3;
            this.PP = 0;
        }


        addMemeToScreen(meme) {

            let mainNode = document.getElementById("inspiration");
            let article = document.createElement("article");
            //let articleNode = document.createElement("lll"); // if its emtpy it does not work :(
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

            let buttonPP = document.createElement("BUTTON");
            buttonPP.setAttribute("class", "bigppButton");
            buttonPP.innerHTML = "PP";

            let showPP = document.createElement("p");
            let showPPNode = document.createTextNode(meme.PP);
            showPP.appendChild(showPPNode)

            let buttonpp = document.createElement("BUTTON");
            buttonpp.setAttribute("class", "smallppButton");
            buttonpp.innerHTML = "pp";


            mainNode.appendChild(article);
            //article.appendChild(category);
            article.appendChild(memeName);
            article.appendChild(description);
            article.appendChild(memePic);
            article.appendChild(buttonPP);
            article.appendChild(showPP);
            article.appendChild(buttonpp);

        }
    }

    const memeMeme = new Meme();




    let memeFakenews = [];
    memeFakenews[0]= "FakeNews";
    memeFakenews[1]= new Meme("fakenews", "Trump", "f4f.jpg", "sample text", "","","");
    memeFakenews[2]= new Meme("fakenews", "PickleTrump", "PickleFakeNews.jpg", "sample text", "pickle","","");

    let memeIdols = [];
    memeIdols [0] = "Idols";
    memeIdols [1]= new Meme("idols", "PickleIdol", "pickleIdol.jpg", "sample text", "","","pickle");

    let memeNonHuman = [];
    memeNonHuman [0] = "Non Human";
    memeNonHuman[1]= new Meme("non human", "Pickle Girlfriend", "pickleNonHum.jpg", "sample text", "","pickle","");

    let memeSciencebusters = [];
    memeSciencebusters [0] = "Sciencebusters";
    memeSciencebusters [1]= new Meme("scienceBusters", "Pickle Science", "PickleScience.jpg", "sample text", "pickle","","");

    let memeDaily_Cat_Facts = [];
    memeDaily_Cat_Facts [0] = "Daily Cat Facts";
    memeDaily_Cat_Facts[1]= new Meme ("daily_cat_facts", "grumpy cat", "images-7.jpeg", "sample texts", "", "", "");
    memeDaily_Cat_Facts[2]= new Meme("daily_cat_facts", "pickle kitty", "PickleCat.jpg", "sample text", "","pickle","");

    let memeHystorical = [];
    memeHystorical [0] = "Hystorical";
    memeHystorical[1] = new Meme("hystorical", "sample Name", "art1.png", "sample Text", "", "", "");
    memeHystorical[2] = new Meme("hystorical", "sample Name", "art2.png", "sample Text", "", "", "");
    memeHystorical[3] = new Meme("hystorical", "sampel Name", "art5.png", "sample Text", "", "", "");
    memeHystorical[4] = new Meme("hystorical", "sampel Name", "hystorical.png", "sample Text", "", "", "");
    memeHystorical[5]= new Meme("hystorical", "pickle art", "PickleArt.jpg", "sample text", "","","pickle");

    let memeMinime_me = [];
    memeMinime_me [0] = "Minime-me";
    memeMinime_me [1]= new Meme("minime-me", "pickleme", "Picklemememe.jpg", "sample text", "","","pickle");

    let memeIkea = [];
    memeIkea [0] = "Ikea";
    memeIkea[1] = new Meme("ikea-memes", "sampel Name", "ikea1.png", "sample Text", "", "", "");
    memeIkea[2] = new Meme("ikea-memes", "sampel Name", "ikea2.png", "sample Text", "", "", "");
    memeIkea[3] = new Meme("ikea-memes", "sampel Name", "ikea3.png", "sample Text", "", "", "");
    memeIkea[4]= new Meme("ikea-memes", "Pickle at Ikea", "PickleIkea.jpg", "sample text", "","pickle","");
    memeIkea[5] = new Meme("ikea-memes", "sampel Name", "ikea4.png", "sample Text", "", "", "");

    let memeTrending = [];
    memeTrending [0] = "Trending";
    memeTrending [1]= new Meme("trending", "Pickle Trend", "PickleTrend.jpg", "sample text", "","","pickle");

    let memeLatest = [];
    memeLatest [0] = "Latest";
    memeLatest [1]= new Meme("latest", "the lastest pickle shit", "pickleLatest.jpg", "sample text", "pickle","","");

    let memeBestOf = [];
    memeBestOf [0] = "Best of";
    memeBestOf[1]= new Meme("best Of", "Best of pickle", "pickleBestof.jpg", "sample text", "","pickle","");

    let memeZnarf = [];
    memeZnarf [0] = "Znarf";
    memeZnarf[1]= new Meme("znarf", "piiiickle", "pickleSnarf.jpg", "sample text", "","","pickle");

    let memeBad_hair_day = [];
    memeBad_hair_day [0] = "Bad Hair Day";
    memeBad_hair_day[1]= new Meme("bad hair day", "pickle hair", "pickleHair.jpg", "sample text", "","pickle","");

    let memeHomeButton = [];
    memeHomeButton[0]= "Meme of the Day";
    let wordForMemeOfTheDay = "pickle"
    getMemesOfTheDay(memeFakenews, wordForMemeOfTheDay);
    getMemesOfTheDay(memeIdols, wordForMemeOfTheDay);
    getMemesOfTheDay(memeNonHuman, wordForMemeOfTheDay);
    getMemesOfTheDay(memeSciencebusters, wordForMemeOfTheDay);
    getMemesOfTheDay(memeDaily_Cat_Facts, wordForMemeOfTheDay);
    getMemesOfTheDay(memeHystorical, wordForMemeOfTheDay);
    getMemesOfTheDay(memeMinime_me, wordForMemeOfTheDay);
    getMemesOfTheDay(memeIkea, wordForMemeOfTheDay);
    getMemesOfTheDay(memeTrending, wordForMemeOfTheDay);
    getMemesOfTheDay(memeLatest, wordForMemeOfTheDay);
    getMemesOfTheDay(memeBestOf, wordForMemeOfTheDay);
    getMemesOfTheDay(memeZnarf, wordForMemeOfTheDay);
    getMemesOfTheDay(memeBad_hair_day, wordForMemeOfTheDay);



    function fillTheScreen(params) {
        //https://stackoverflow.com/questions/3450593/how-do-i-clear-the-content-of-a-div-using-javascript
        let div = document.getElementById('inspiration');
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }

        let category = document.createElement("h1");
        let categoryNode = document.createTextNode(params[0]);
        category.appendChild(categoryNode);
        div.appendChild(category);

        for (let i = 1; i < params.length; i++) {
            memeMeme.addMemeToScreen(params[i]);
        }
    }


        function getMemesOfTheDay(memeArrays, nameLookFor){

            for (let i = 1 ; i < memeArrays.length; i++) {
              if (memeArrays[i].memeTag1 === nameLookFor || memeArrays[i].memeTag2 === nameLookFor || memeArrays[i].memeTag2 === nameLookFor  ){
                  memeHomeButton[position] = memeArrays[i];
                  position ++;
              }
        }
    }

    fillTheScreen(memeHomeButton);

    document.getElementById("homeNAV").onclick = function() {fillTheScreen(memeHomeButton)};
    document.getElementById("fakenewsNAV").onclick = function() {fillTheScreen(memeFakenews)};
    document.getElementById("idolsNAV").onclick = function() {fillTheScreen(memeIdols)};
    document.getElementById("none_humanNAV").onclick = function() {fillTheScreen(memeNonHuman)};
    document.getElementById("daily_cat_factsNAV").onclick = function() {fillTheScreen(memeDaily_Cat_Facts)};
    document.getElementById("sciencebustersNAV").onclick = function() {fillTheScreen(memeSciencebusters)};
    document.getElementById("hystoricalNAV").onclick = function() {fillTheScreen(memeHystorical)};
    document.getElementById("minime_meNAV").onclick = function() {fillTheScreen(memeMinime_me)};
    document.getElementById("ikea-memesNAV").onclick = function() {fillTheScreen(memeIkea)};
    document.getElementById("trendingNAV").onclick = function() {fillTheScreen(memeTrending)};
    document.getElementById("latestNAV").onclick = function() {fillTheScreen(memeLatest)};
    document.getElementById("best_ofNAV").onclick = function() {fillTheScreen(memeBestOf)};
    document.getElementById("znarfNAV").onclick = function() {fillTheScreen(memeZnarf)};
    document.getElementById("bad_hair_dayNAV").onclick = function() {fillTheScreen(memeBad_hair_day)};

});