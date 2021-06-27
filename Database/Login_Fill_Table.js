let con = require('./connection_online_database');

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO meme_user2 (name, email, password) VALUES ?";
    var values = [
        ['horst', 'test@test.at', '12test34!'],
    ]
    /*  var values = [
          ['fakenews', 'Trump', 'pics/f4f.jpg', 'sample text', '','','',0],
          ['fakenews', 'PickleTrump', 'pics/PickleFakeNews.jpg', 'sample text', 'pickle','','',0],
          ['idols', 'PickleIdol', 'pics/pickleIdol.jpg', 'sample text', '','','pickle',0],
          ['nonHumain', 'Pickle Girlfriend', 'pics/pickleNonHum.jpg', 'sample text', '','pickle','',0],
          ['scienceBusters', 'Pickle Science', 'pics/PickleScience.jpg', 'sample text', 'pickle','','',0],
          ['hystorical', 'sample Name', 'pics/art1.png', 'sample Text', '', '', '',0],
          ['hystorical', 'sample Name', 'pics/art2.png', 'sample Text', '', '', '',0],
          ['hystorical','sample Name', 'pics/art5.png', 'sample Text', '', '', '',0],
          ['hystorical', 'sample Name', 'pics/hystorical.png', 'sample Text', '', '', '',0],
          ['hystorical', 'pickle art', 'pics/PickleArt.jpg', 'sample text', '','','pickle',0],
          ['minime-me', 'picklememe', 'pics/Picklemememe.jpg', 'sample text', '','','pickle',0],
          ['ikea-memes', 'sample Name', 'pics/ikea1.png', 'sample Text', '', '', '',0],
          ['ikea-memes', 'sample Name', 'pics/ikea2.png', 'sample Text', '', '', '',0],
          ['ikea-memes', 'sample Name', 'pics/ikea3.png', 'sample Text', '', '', '',0],
          ['ikea-memes', 'Pickle at Ikea', 'pics/PickleIkea.jpg', 'sample text', '','pickle','',0],
          ['ikea-memes', 'sample Name', 'pics/ikea4.png', 'sample Text', '', '', '',0],
          ['trending', 'Pickle Trend', 'pics/PickleTrend.jpg', 'sample text', '','','pickle',0],
          ['latest', 'the latest pickle shit', 'pics/pickleLatest.jpg', 'sample text', 'pickle','','',0],
          ['best_Of', 'Best of pickle', 'pics/pickleBestof.jpg', 'sample text', '','pickle','',0],
          ['znarf', 'piiiickle', 'pics/pickleSnarf.jpg', 'sample text', '','','pickle',0],
          ['bad_hair_day', 'pickle hair', 'pics/pickleHair.jpg', 'sample text', '','pickle','',0],
      ]*/
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});