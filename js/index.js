/*此脚本请使用ECMAScript 6 标准编写代码*/
const openlink=(linkstr)=>{
    setTimeout(function(){
        window.location.href=`https://mclover1232.github.io/${linkstr}`
    },1000)
    document.getElementById(linkstr).disabled=true;
    document.getElementById(linkstr).innerHTML="正在进入。。请等待"
};