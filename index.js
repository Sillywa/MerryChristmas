var options = {
  strings: [
      '我能想到最浪漫的事，就是和一起慢慢变老。今天是圣诞节，也是我们的一周年纪念日，祝我最漂亮可爱的周莹小宝贝圣诞快乐！一周年快乐！' + 
      '在这一年的时间内，我们逐渐熟悉了彼此，逐渐变得离不开对方。虽然相隔两地，但我们的心却是在一起的，“所爱隔山海，山海皆可平”。' + 
      '在以后的日子里，我会努力工作，赚钱养老婆，早点回去和你过上更加幸福快乐的生活，爱你，么么哒'
  ],
  typeSpeed: 200,   //打印速度
  startDelay: 300, //开始之前的延迟300毫
  // onComplete: initSnow
};
var typed = new Typed('#typed', options);

var now = new Date();
function createtime() {
    var grt= new Date("12/25/2021 12:30:00");
    now.setTime(now.getTime()+250);
    days = (now - grt ) / 1000 / 60 / 60 / 24; 
    dnum = Math.floor(days);
    hours = (now - grt ) / 1000 / 60 / 60 - (24 * dnum); 
    hnum = Math.floor(hours);
    if(String(hnum).length ==1 ){
      hnum = "0" + hnum;
    } 
    minutes = (now - grt ) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum);
    mnum = Math.floor(minutes); 
    if(String(mnum).length ==1 ){
      mnum = "0" + mnum;
    }
    seconds = (now - grt ) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
    snum = Math.round(seconds); 
    if(String(snum).length ==1 ){
      snum = "0" + snum;
    }
    document.getElementById("time").innerHTML ="在一起 " + dnum+" 天 " + hnum + " 小时 " + mnum + " 分 " + snum + " 秒";
}
setInterval(createtime,250);

(function() {
  var play = document.getElementById("play")
  var pause = document.getElementById("pause")
  var audio = document.getElementById("audio")
  play.addEventListener("click", function() {
    audio.play()
    play.classList.add('none')
    pause.classList.remove('none')
  })
  pause.addEventListener("click", function() {
    audio.pause()
    play.classList.remove('none')
    pause.classList.add('none')
  })

})()
