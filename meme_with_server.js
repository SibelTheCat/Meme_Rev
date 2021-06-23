document.addEventListener("DOMContentLoaded", function (event) {
 let position = 1; //global Variable for Meme of the day Funktion

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

            // tryout
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
       console.log(meme.PP);
       // console.log(meme.memeID);
            meme.PP = meme.PP + 1;
            let amount = document.getElementById(meme.id+"node");
        amount.innerHTML = meme.PP;
    }

    function decrementValue(meme) {
        meme.PP = meme.PP -1;
        let amount =   document.getElementById(meme.id+"node") ;
        amount.innerHTML = meme.PP;
    }


    function deleteMeme(id){
        alert("meme got deleted");
        let removeMeme = document.getElementById("article"+id);
        removeMeme.remove();

        let url = "http://localhost:3000/api/v1/meme/"+id;

        let opts = {
            method: 'DELETE',
            headers: {}
        };
        fetch(url, opts).then(function (response){
           // alert(response.json());
        }).catch(function (error){
           // alert(error);
        });


    }
    const memeMeme = new Meme();

   /* let memeFakenews = [];
    memeFakenews[0]= "FakeNews";
    memeFakenews[1]= new Meme("fakenews", "Trump", "pics/f4f.jpg", "sample text", "","","");
    memeFakenews[2]= new Meme("fakenews", "PickleTrump", "pics/PickleFakeNews.jpg", "sample text", "pickle","","");

    let memeIdols = [];
    memeIdols [0] = "Idols";
    memeIdols [1]= new Meme("idols", "PickleIdol", "pics/pickleIdol.jpg", "sample text", "","","pickle");

    let memeNonHuman = [];
    memeNonHuman [0] = "Non Human";
    memeNonHuman[1]= new Meme("non_human", "Pickle Girlfriend", "pics/pickleNonHum.jpg", "sample text", "","pickle","");

    let memeSciencebusters = [];
    memeSciencebusters [0] = "Sciencebusters";
    memeSciencebusters [1]= new Meme("scienceBusters", "Pickle Science", "pics/PickleScience.jpg", "sample text", "pickle","","");

    let memeDaily_Cat_Facts = [];
    memeDaily_Cat_Facts [0] = "Daily Cat Facts";
    memeDaily_Cat_Facts[1]= new Meme ("daily_cat_facts", "grumpy cat", "pics/images-7.jpeg", "sample texts", "", "", "");
    memeDaily_Cat_Facts[2]= new Meme("daily_cat_facts", "pickle kitty", "pics/PickleCat.jpg", "sample text", "","pickle","");
    memeDaily_Cat_Facts[3]= new Meme ("daily_cat_facts", "grumpy cat", "pics/cat2.jpg", "sample texts", "", "", "");
    memeDaily_Cat_Facts[4]= new Meme("daily_cat_facts", "pickle kitty", "pics/cat4.jpg", "sample text", "","pickle","");
    memeDaily_Cat_Facts[5]= new Meme ("daily_cat_facts", "grumpy cat", "pics/cat3.jpg", "sample texts", "", "", "");
    memeDaily_Cat_Facts[6]= new Meme("daily_cat_facts", "pickle kitty", "pics/cat5.jpg", "sample text", "","pickle","");
    memeDaily_Cat_Facts[7]= new Meme ("daily_cat_facts", "grumpy cat", "pics/cat6.jpg", "sample texts", "", "", "");
    memeDaily_Cat_Facts[8]= new Meme("daily_cat_facts", "pickle kitty", "pics/cat7.jpg", "sample text", "","pickle","");
    memeDaily_Cat_Facts[9]= new Meme("daily_cat_facts", "pickle kitty", "pics/cat8.png", "sample text", "","pickle","");

    let memeHystorical = [];
    memeHystorical [0] = "Hystorical";
    memeHystorical[1] = new Meme("hystorical", "sample Name", "pics/art1.png", "sample Text", "", "", "");
    memeHystorical[2] = new Meme("hystorical", "sample Name", "pics/art2.png", "sample Text", "", "", "");
    memeHystorical[3] = new Meme("hystorical", "sampel Name", "pics/art5.png", "sample Text", "", "", "");
    memeHystorical[4] = new Meme("hystorical", "sampel Name", "pics/hystorical.png", "sample Text", "", "", "");
    memeHystorical[5]= new Meme("hystorical", "pickle art", "pics/PickleArt.jpg", "sample text", "","","pickle");

    let memeMinime_me = [];
    memeMinime_me [0] = "Minime-me";
    memeMinime_me [1]= new Meme("minime-me", "pickleme", "pics/Picklemememe.jpg", "sample text", "","","pickle");

    let memeIkea = [];
    memeIkea [0] = "Ikea";
    memeIkea[1] = new Meme("ikea-memes", "sampel Name", "pics/ikea1.png", "sample Text", "", "", "");
    memeIkea[2] = new Meme("ikea-memes", "sampel Name", "pics/ikea2.png", "sample Text", "", "", "");
    memeIkea[3] = new Meme("ikea-memes", "sampel Name", "pics/ikea3.png", "sample Text", "", "", "");
    memeIkea[4]= new Meme("ikea-memes", "Pickle at Ikea", "pics/PickleIkea.jpg", "sample text", "","pickle","");
    memeIkea[5] = new Meme("ikea-memes", "sampel Name", "pics/ikea4.png", "sample Text", "", "", "");

    let memeTrending = [];
    memeTrending [0] = "Trending";
    memeTrending [1]= new Meme("trending", "Pickle Trend", "pics/PickleTrend.jpg", "sample text", "","","pickle");

    let memeLatest = [];
    memeLatest [0] = "Latest";
    memeLatest [1]= new Meme("latest", "the lastest pickle shit", "pics/pickleLatest.jpg", "sample text", "pickle","","");

    let memeBestOf = [];
    memeBestOf [0] = "Best of";
    memeBestOf[1]= new Meme("best_Of", "Best of pickle", "pics/pickleBestof.jpg", "sample text", "","pickle","");

    let memeZnarf = [];
    memeZnarf [0] = "Znarf";
    memeZnarf[1]= new Meme("znarf", "piiiickle", "pics/pickleSnarf.jpg", "sample text", "","","pickle");

    let memeBad_hair_day = [];
    memeBad_hair_day [0] = "Bad Hair Day";
    memeBad_hair_day[1]= new Meme("bad_hair_day", "pickle hair", "pics/pickleHair.jpg", "sample text", "","pickle","");*/

  /*  let memeHome = [];
    memeHome[0]= "Meme of the Day";
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
    getMemesOfTheDay(memeBad_hair_day, wordForMemeOfTheDay);*/



    async function fillTheScreen(category) {

        //  let memes = null;
        //  console.log(category);
        let div = document.getElementById('inspiration');
        //Seite springt zur "youtube-Section"
        location.href = "#youtube_section";

        while (div.firstChild) {
            //Seite wird wieder  geleert ->  //https://stackoverflow.com/questions/3450593/how-do-i-clear-the-content-of-a-div-using-javascript
            div.removeChild(div.firstChild);
        }

        //   console.log(category);



        let titleElement = document.createElement("h1");
        let categoryNode = document.createTextNode(category);
        titleElement.appendChild(categoryNode);
        div.appendChild(titleElement);

        if(category ==="daily_cat_facts"){
            let catFacts = document.createElement("h2");
            let fact = getDailyCatFact();
            let catFactNode = document.createTextNode(await fact);
            catFacts.appendChild(catFactNode);
            div.appendChild(catFacts);

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
    }


        function getMemesOfTheDay(memeArrays, nameLookFor){

            for (let i = 1 ; i < memeArrays.length; i++) {
              if (memeArrays[i].memeTag1 === nameLookFor || memeArrays[i].memeTag2 === nameLookFor || memeArrays[i].memeTag2 === nameLookFor  ){
                  memeHome[position] = memeArrays[i];
                  position ++;
              }
        }
    }

    async function getDailyCatFact(){
        //get daily cat fact as String
        let url2 = "https://cat-fact.herokuapp.com/facts";
        console.log(url2);
        let myObject2 = await fetch(url2);
        let quote = await myObject2.json();
        let catFact = quote[1];
        let realFact = catFact.text;
        console.log(realFact);

        return realFact;

    }


    fillTheScreen("");

    document.getElementById("homeNAV").onclick = function() {fillTheScreen("")};
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

   // module.exports = Meme;
});
