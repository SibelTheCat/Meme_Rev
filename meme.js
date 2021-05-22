document.addEventListener("DOMContentLoaded", function (event) {

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

    let memeHome = [];
    memeHome[0]= "Meme of the Day";

    let memeFakenews = [];
    memeFakenews[0]= "FakeNews";
    memeFakenews[1]= new Meme("fakenews", "Trump", "f4f.jpg", "sample text", "","","");

    let memeIdols = [];
    memeIdols [0] = "Idols";

    let memeNonHuman = [];
    memeNonHuman [0] = "Non Human";

    let memeSciencebusters = [];
    memeSciencebusters [0] = "Sciencebusters";

    let memeDaily_Cat_Facts = [];
    memeDaily_Cat_Facts [0] = "Daily Cat Facts";
    memeDaily_Cat_Facts[1]= new Meme ("daily_cat_facts", "grumpy cat", "images-7.jpeg", "sample texts", "", "", "");

    let memeHystorical = [];
    memeHystorical [0] = "Hystorical";
    memeHystorical[1] = new Meme("hystorical", "sampel Name", "art1.png", "sample Text", "", "", "");
    memeHystorical[2] = new Meme("hystorical", "sampel Name", "art2.png", "sample Text", "", "", "");
    memeHystorical[3] = new Meme("hystorical", "sampel Name", "art5.png", "sample Text", "", "", "");
    memeHystorical[4] = new Meme("hystorical", "sampel Name", "hystorical.png", "sample Text", "", "", "");

    let memeMinime_me = [];
    memeMinime_me [0] = "Minime-me";

    let memeIkea = [];
    memeIkea [0] = "Ikea";
    memeIkea[1] = new Meme("ikea-memes", "sampel Name", "ikea1.png", "sample Text", "", "", "");
    memeIkea[2] = new Meme("ikea-memes", "sampel Name", "ikea2.png", "sample Text", "", "", "");
    memeIkea[3] = new Meme("ikea-memes", "sampel Name", "ikea3.png", "sample Text", "", "", "");
    memeIkea[4] = new Meme("ikea-memes", "sampel Name", "ikea4.png", "sample Text", "", "", "");

    let memeTrending = [];
    memeTrending [0] = "Trending";

    let memeLatest = [];
    memeLatest [0] = "Latest";

    let memeBestOf = [];
    memeBestOf [0] = "Best of";

    let memeZnarf = [];
    memeZnarf [0] = "Znarf";

    let memeBad_hair_day = [];
    memeBad_hair_day [0] = "Bad Hair Day";

    function fillTheScreen(params)
    {
        //https://stackoverflow.com/questions/3450593/how-do-i-clear-the-content-of-a-div-using-javascript
        let div = document.getElementById('inspiration');
        while(div.firstChild){div.removeChild(div.firstChild);
        }

        let category = document.createElement("h1");
        let categoryNode = document.createTextNode(params[0]);
        category.appendChild(categoryNode);
        div.appendChild(category);

        for (let i = 1; i < params.length; i++) {
            memeMeme.addMemeToScreen(params[i]);
        }
    }
    document.getElementById("homeNAV").onclick = function() {fillTheScreen(memeHome)};
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