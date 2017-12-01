var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var tutorSchema = new Schema( // 
    {
        name: String,
        follower : String,
        className : String
    
    },{versionKey:false}); // 튜터 스키마 부분은 따로 파일을 만들어 export 해오는 방향으로 생각해 볼것
                           // 왜냐하면 따로 크게 한 부분으로 나뉘어 져있기 때문에 
    module.exports = mongoose.model('tutor', tutorSchema);
   //---------------------------------------Class내 tutor db모델----------------------------------------

 var subScriberSchema = new Schema({
        
            name: String,
            recentTime : String,
            order : String,
            url : String
        
        },{versionKey:false});
    
    
     module.exports = mongoose.model('subScriber', subScriberSchema);
    //---------------------------------------Class내 subScriber db모델----------------------------------------
        
 var videoSchema = new Schema({        
       
            duration: String,
            videoTitle : String,
            videoThumbnail : String,
            videoUrl : String,
            order : String
         },{versionKey:false});
    
     module.exports = mongoose.model('video', videoSchema);
    //---------------------------------------Class내 video db모델----------------------------------------

 var projectSchema = new Schema({        
            
            thumbnail : String
            
         },{versionKey:false});
    
     module.exports = mongoose.model('project', projectSchema);
     //---------------------------------------Class내 project db모델----------------------------------------

 var reviewSchema = new Schema({        
        
            content : String,
            likeOrDislike : String,
            reviewerPicture : String,
            reviewerName : String,
            registrationId : String 
        
        },{versionKey:false});

    module.exports = mongoose.model('review', reviewSchema);
    //---------------------------------------Class내 review db모델----------------------------------------
    
 var relatedClassSchema = new Schema({        
        
            title : String,
            thumbnail : String,
            tutor : String
        
        },{versionKey:false});

    module.exports = mongoose.model('related', relatedClassSchema);
    //---------------------------------------Class내 related db모델----------------------------------------
    

 var discussionSchema = new Schema({        
            
            name : String,
            picture : String,
            content : String,
            time : String,
            like : String,
            rediscussion : String
            
        },{versionKey:false});
        
    module.exports = mongoose.model('discussion', discussionSchema);
   //---------------------------------------Class내 related db모델---------------------------------------- 

var classSchema = new Schema({
    
    title: String, //trim 필요
    tutor: [tutorSchema], //trim 필요, 하위에 이름, 팔로워, 클래스
    totalDuration : String,//num
    feedback : String, //trim
    subscriberCount : String,//num
    subScriber : [subScriberSchema],//trim userId 타고 name,recentTime, order, url, duration
    video : [videoSchema], // videoId 타고 duration, videotitle, video Thumbnail, videourl, order
    project : [projectSchema],//trim projetId타고 썸네일
    review : [reviewSchema],//trim, reivewid타고 콘텐츠, 좋아요(싫어요), 리뷰어사진, 리뷰어이름,registraionId
    category : [String],//배열
    relatedClass : [relatedClassSchema],//trim classId 타고, title, thumbnail, tutor
    discussion : [discussionSchema] //trim, discussion Id 타고 name, pic, content, time, like, discussion
    
}, {versionKey : false});

module.exports = mongoose.model('class', classSchema);
//---------------------------------------Class db모델---------------------------------------- 

























































// var classSchema = new Schema({
//     title: String,
//     tutor: String,
//     totalDuration : String,
//     feedback : String,
//     subscriberCount : String,
//     subScriber : String,
//     video : String,
//     project : String,
//     review : String,
//     category : String,
//     relatedClass : String,
//     discussion : String

// }, {versionKey : false});