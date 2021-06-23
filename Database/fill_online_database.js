let con = require('./connection_online_database');

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO meme2 (memeCategory, memeName, memePic, memeDescription, memeTag1, memeTag2, memeTag3, PP_helper,PP) VALUES ?";
  /*  var values = [
         ['daily_cat_facts', 'pickle kitty', 'pics/PickleCat.jpg', 'everybody loves grumpy cat', 'cat', 'grumpy', ' love',2, 0],
         ['daily_cat_facts', 'pickle kitty', 'pics/cat2.jpg', 'everybody loves grumpy cat', 'cat', 'grumpy', ' love',2, 0],
         ['daily_cat_facts', 'pickle kitty','pics/cat4.jpg', 'everybody loves grumpy cat', 'cat', 'grumpy', ' love',2, 0],
         ['daily_cat_facts', 'pickle kitty', 'pics/cat3.jpg', 'everybody loves grumpy cat', 'cat', 'grumpy', ' love',2, 0],
         ['daily_cat_facts', 'pickle kitty', 'pics/cat5.jpg', 'everybody loves grumpy cat', 'cat', 'grumpy', ' love', 2,0],
         ['daily_cat_facts', 'pickle kitty', 'pics/cat6.jpg', 'everybody loves grumpy cat', 'cat', 'grumpy', ' love', 2,0],
         ['daily_cat_facts', 'pickle kitty','pics/cat7.jpg', 'everybody loves grumpy cat', 'cat', 'grumpy', ' love',2, 0],
         ['daily_cat_facts', 'pickle kitty','pics/cat8.png', 'everybody loves grumpy cat', 'cat', 'grumpy', ' love',2, 0],
     ]*/
    var values = [
        ['fakenews', 'Trump', 'pics/f4f.jpg', 'sample text', '','','',2,0],
        ['fakenews', 'PickleTrump', 'pics/PickleFakeNews.jpg', 'sample text', 'pickle','','',2,0],
        ['idols', 'PickleIdol', 'pics/pickleIdol.jpg', 'sample text', '','','pickle',2,0],
        ['nonHumain', 'Pickle Girlfriend', 'pics/pickleNonHum.jpg', 'sample text', '','pickle','',2,0],
        ['scienceBusters', 'Pickle Science', 'pics/PickleScience.jpg', 'sample text', 'pickle','','',2,0],
        ['hystorical', 'sample Name', 'pics/art1.png', 'sample Text', '', '', '',2,0],
        ['hystorical', 'sample Name', 'pics/art2.png', 'sample Text', '', '', '',2,0],
        ['hystorical','sample Name', 'pics/art5.png', 'sample Text', '', '', '',2,0],
        ['hystorical', 'sample Name', 'pics/hystorical.png', 'sample Text', '', '', '',2,0],
        ['hystorical', 'pickle art', 'pics/PickleArt.jpg', 'sample text', '','','pickle',2,0],
        ['minime-me', 'picklememe', 'pics/Picklemememe.jpg', 'sample text', '','','pickle',2,0],
        ['ikea-memes', 'sample Name', 'pics/ikea1.png', 'sample Text', '', '', '',2,0],
        ['ikea-memes', 'sample Name', 'pics/ikea2.png', 'sample Text', '', '', '',2,0],
        ['ikea-memes', 'sample Name', 'pics/ikea3.png', 'sample Text', '', '', '',2,0],
        ['ikea-memes', 'Pickle at Ikea', 'pics/PickleIkea.jpg', 'sample text', '','pickle','',2,0],
        ['ikea-memes', 'sample Name', 'pics/ikea4.png', 'sample Text', '', '', '',2,0],
        ['trending', 'Pickle Trend', 'pics/PickleTrend.jpg', 'sample text', '','','pickle',2,0],
        ['latest', 'the latest pickle shit', 'pics/pickleLatest.jpg', 'sample text', 'pickle','','',2,0],
        ['best_Of', 'Best of pickle', 'pics/pickleBestof.jpg', 'sample text', '','pickle','',2,0],
        ['znarf', 'piiiickle', 'pics/pickleSnarf.jpg', 'sample text', '','','pickle',2,0],
        ['bad_hair_day', 'pickle hair', 'pics/pickleHair.jpg', 'sample text', '','pickle','',2,0],
    ]
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});