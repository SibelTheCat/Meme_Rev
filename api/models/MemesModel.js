
/*class MemeCategory{
    memeCat;
    memeId;

    constructor(memeCat) {
        this.memeCat = memeCat
        this.memeId = 1;
    }
}


const memes = new Map();
const fakenews = new Map();
const idols = new Map();
const non_humain = new Map();
const daily_cat_facts = new Map();
const sciencebusters = new Map();
const hystorical = new Map();
const minime_me = new Map();
const ikea_memes = new Map();
const trending = new Map();
const latest = new Map();
const best_of = new Map();
const znarf = new Map();
const bad_hair_day = new Map();

let catFactsCategory = new MemeCategory(daily_cat_facts);*/

let memeId = 1;

//MemesModel.findMemesById(3, catFactsCategory);
const memes = new Map();

memes.set(memeId.toString(), {

    memeCategory : "daily_cat_facts",
    memeName :"grumpy cat",
    memePic : "img\/images-7.jpeg",
    memeDescription : "grumpy cat says hi",
    memeTag1 :  "cat",
    memeTag2 : "grumpy",
    memeTag3 : "kitty",
    PP : 0,
});


memeId++;

memes.set(memeId.toString(), {

    memeCategory : "daily_cat_facts",
    memeName :"grumpy cat",
    memePic : "img\/images-7.jpeg",
    memeDescription : "grumpy cat says hi",
    memeTag1 :  "cat",
    memeTag2 : "grumpy",
    memeTag3 : "kitty",
    PP : 0,
});

memeId++;
memes.set(memeId.toString(), {
    memeCategory : "daily_cat_facts",
    memeName :"grumpy cat",
    memePic : "img\/images-7.jpeg",
    memeDescription : "grumpy cat says hi",
    memeTag1 :  "cat",
    memeTag2 : "grumpy",
    memeTag3 : "kitty",
    PP : 0,
});

memeId++;

memes.set(memeId.toString(), {
    memeCategory : "daily_cat_facts",
    memeName :"grumpy cat",
    memePic : "img\/images-7.jpeg",
    memeDescription : "grumpy cat says hi",
    memeTag1 :  "cat",
    memeTag2 : "grumpy",
    memeTag3 : "kitty",
    PP : 0,
});


class MemesModel {
    static getMemes() {
        let booksArray = [];
        for (let [id, meme] of memes) {
            booksArray.push({id, meme});
        }
        return booksArray;
    }

    static findMemesById(id,) {
        let meme = memes.get(id);
        return meme;
    }
   /* static findMemesById(id, category) {
        let meme = category.memeCat.get(id);
        return meme;
    }*/

    static createMeme(meme) {

        memeId++;

        memes.set(memeId.toString(), {

            memeCategory : meme.memeCategory,
            memeName : meme.memeName,
            memePic : meme.memePic,
            memeDescription : "img\/"+ meme.memeDescription,
            memeTag1 :  meme.memeTag1,
            memeTag2 : meme.memeTag2,
            memeTag3 : meme.memeTag3,
            PP : 0,
        });
    }


    static updateMemeById(id,meme) {

        if (meme.has(id.toString())) {
            meme.set(id.toString(), {

                memeCategory : meme.memeCategory,
                memeName : meme.memeName,
                memePic : meme.memePic,
                memeDescription : "img\/"+ meme.memeDescription,
                memeTag1 :  meme.memeTag1,
                memeTag2 : meme.memeTag2,
                memeTag3 : meme.memeTag3,
                PP : 0,

            });
            return true;
        }
        return  false;
    }
    static deleteMemeById(id) {

        return memes.delete(id);


    }
}

module.exports = MemesModel;