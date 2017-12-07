module.exports = function(app, Home)

{

 app.get('/home', function(req,res){
    Home.find(function(err, classes){
        if(err) return res.status(500).send({error: 'database failure'});
            res.json(classes);
        })
    });
 
 // CREATE home
 app.post('/home', function(req, res){
    var home = new Home();
    home.types = req.body.types;
    home.title = req.body.title;
    home.picture = req.body.picture;
    home.tutorName = req.body.tutorName;
    home.duration = req.body.duration;
   
    
 
// Save 
    home.save(function(err){
        if(err){
            console.error(err);
            res.json({result: 0});
            return;
        }

        res.json({result: 1});

    });
});

}