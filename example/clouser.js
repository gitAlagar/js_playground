function bdyFuntion(bdy,name){
    var prefix,suffix;
    prefix = ' wow!';
    suffix = ' days you have until birthday!';

    return function(todaysDate){
        var startDate = todaysDate;
        var endDate = bdy;
        // console.log(endDate)
        // console.log(startDate)

        var timeDiff = (new Date(endDate)) - (new Date(startDate));

        //var days =timeDiff / (1000*60*60*24);
        var days =Math.round(timeDiff / (1000*60*60*24));

        console.log(prefix + name + ' , '+ days + suffix);
    }
}
var birthDay = bdyFuntion('09-11-2000','alagar');
birthDay('04-12-2023');

