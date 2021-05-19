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
           this.PP = "0";
        }


    addMeemToScreen(meme) {

        let mainNode = document.getElementById("inspiration");
        let article = document.createElement("article");
        //let articleNode = document.createElement("lll"); // if its emtpy it does not work :(
       // article.appendChild(articleNode);

        let testIt = document.getElementById(meme.memeCategory);
        let category = document.createElement("h1");
        let categoryNode = document.createTextNode(meme.memeCategory);
        categoryNode.id = meme.memeCategory;
        category.appendChild(categoryNode);


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
        buttonPP.innerHTML = "PP";

        let showPP = document.createElement("p");
        let showPPNode = document.createTextNode(meme.PP);
        showPP.appendChild(showPPNode)

        let buttonpp = document.createElement("BUTTON");
        buttonpp.innerHTML = "pp";


        mainNode.appendChild(article);
        article.appendChild(category);
        article.appendChild(memeName);
        article.appendChild(description);
        article.appendChild(memePic);
        article.appendChild(buttonPP);
        article.appendChild(showPP);
        article.appendChild(buttonpp);

    }}

    const memeMeme = new Meme();
    let meme = [];

    meme[0]= new Meme("fakenews", "Trump", "f4f.jpg", "sample text", "","","");
    meme[1]= new Meme ("daily_cat_facts", "grumpy cat", "images-7.jpeg", "sample texts", "", "", "");
    meme[2] = new Meme("hystorical", "sampel Name", "art1.png", "sample Text", "", "", "");
    meme[3] = new Meme("hystorical", "sampel Name", "art2.png", "sample Text", "", "", "");
    meme[4] = new Meme("hystorical", "sampel Name", "art5.png", "sample Text", "", "", "");
    meme[5] = new Meme("hystorical", "sampel Name", "hystorical.png", "sample Text", "", "", "");
    meme[6] = new Meme("ikea-memes", "sampel Name", "ikea1.png", "sample Text", "", "", "");
    meme[7] = new Meme("ikea-memes", "sampel Name", "ikea2.png", "sample Text", "", "", "");
    meme[8] = new Meme("ikea-memes", "sampel Name", "ikea3.png", "sample Text", "", "", "");
    meme[9] = new Meme("ikea-memes", "sampel Name", "ikea4.png", "sample Text", "", "", "");

    memeMeme.addMeemToScreen(meme[0]);
    memeMeme.addMeemToScreen(meme[1]);
    memeMeme.addMeemToScreen(meme[2]);
    memeMeme.addMeemToScreen(meme[3]);
    memeMeme.addMeemToScreen(meme[4]);
    memeMeme.addMeemToScreen(meme[5]);
    memeMeme.addMeemToScreen(meme[6]);
    memeMeme.addMeemToScreen(meme[7]);

});