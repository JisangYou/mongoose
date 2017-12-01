module.exports = function(app, Class)

{
    // GET ALL BOOKS
    app.get('/api/class', function(req,res){
        Class.find(function(err, classes){
            if(err) return res.status(500).send({error: 'database failure'});
            // var dataobj = {
            //     data : classes
            // }
            res.json(classes);
        })
    });

    // // GET SINGLE BOOK
    // app.get('/api/class/:content', function(req, res){
    //     Class.findOne({_id: req.params.content}, function(err, classes){
    //         if(err) return res.status(500).json({error: err});
    //         if(!classes) return res.status(404).json({error: 'Class not found'});
    //         res.json(classes);
    //     })
    // });

    // // GET BOOK BY AUTHOR
    // app.get('/api/class/author/:author', function(req, res){
    //     Class.find({author: req.params.author}, {_id: 0, content: 1, author: 1 , videoURl:1, videoDuration:1},  function(err, classes){
    //         if(err) return res.status(500).json({error: err});
    //         if(classes.length === 0) return res.status(404).json({error: 'Class not found'});
    //         res.json(classes);
    //     })
    // });

    // CREATE BOOK
    app.post('/api/class', function(req, res){
        var mClass = new Class();
        mClass.title = req.body.title;
        mClass.tutor = req.body.tutor;
        mClass.totalDuration = req.body.totalDuration;
        mClass.feedback = req.body.feedback;
        mClass.subscriberCount = req.body.subscriberCount;
        mClass.subScriber = req.body.subScriber;
        mClass.video = req.body.video;
        mClass.project = req.body.project;
        mClass.review = req.body.review;
        mClass.category = req.body.category;
        mClass.relatedClass  = req.body.relatedClass ;
        mClass.discussion  = req.body.discussion ;
     

        mClass.save(function(err){
            if(err){
                console.error(err);
                res.json({result: 0});
                return;
            }

            res.json({result: 1});

        });
    });

    // // UPDATE THE BOOK
    // app.put('/api/books/:book_id', function(req, res){
    //     Class.update({ _id: req.params.book_id }, { $set: req.body }, function(err, output){
    //         if(err) res.status(500).json({ error: 'database failure' });
    //         console.log(output);
    //         if(!output.n) return res.status(404).json({ error: 'book not found' });
    //         res.json( { message: 'book updated' } );
    //     })

    // });

    // // DELETE BOOK
    // app.delete('/api/books/:book_id', function(req, res){
    //     Class.remove({ _id: req.params.book_id }, function(err, output){
    //         if(err) return res.status(500).json({ error: "database failure" });

    //         /* ( SINCE DELETE OPERATION IS IDEMPOTENT, NO NEED TO SPECIFY )
    //         if(!output.result.n) return res.status(404).json({ error: "book not found" });
    //         res.json({ message: "book deleted" });
    //         */

    //         res.status(204).end();
    //     })
    // });
     
}