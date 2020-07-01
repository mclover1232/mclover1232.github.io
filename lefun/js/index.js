/*此脚本请使用ECMAScript 6 标准编写代码*/
let listActived=false;
window.onload=()=>{
    document.querySelector('.list_bt').addEventListener("click",listSwap);

    setTimeout(function(){document.querySelector('.loadmask').remove();},3500)

};
const listSwap=()=> {
    if (listActived === false) {
        document.querySelector('.list_bt').setAttribute("isActived", "true");
        document.querySelector('.extra_list').setAttribute("isActived", "true");
        listActived = true;
    } else {
        document.querySelector('.list_bt').setAttribute("isActived", "false");
        document.querySelector('.extra_list').setAttribute("isActived", "false");
        listActived = false;
    }
};
const tomain=()=>{
    document.querySelector('#ggfight').setAttribute("ifon","flase");
    document.querySelector('#ggmain').setAttribute("ifon","true");
    document.querySelector('main').innerHTML=`  <h4>我的课程</h4>
    <div class="lesson myles">
        <div class="le_leader">JavaScript</div>
        <div class="progresser">已学习到：13 基础函数</div>
    </div>
    <h4>推荐课程</h4>
    <div class="lesson">
        <div class="le_leader">CSS3</div>
        <div class="progresser">未学习</div>
    </div>
    <div class="lesson">
        <div class="le_leader">HTML5</div>
        <div class="progresser">未学习</div>
    </div>
    <div class="lesson">
        <div class="le_leader">React</div>
        <div class="progresser">未学习</div>
    </div>
    <div class="lesson">
        <div class="le_leader">Node.js</div>
        <div class="progresser">未学习</div>
    </div>
    <div class="lesson">
        <div class="le_leader">Vue</div>
        <div class="progresser">未学习</div>
    </div>
    <div class="lesson">
        <div class="le_leader">Java</div>
        <div class="progresser">未学习</div>
    </div>`;
};
const tofight=()=>{
    document.querySelector('#ggfight').setAttribute("ifon","true");
    document.querySelector('#ggmain').setAttribute("ifon","false");
    document.querySelector('main').innerHTML=`<h2>范力挑战</h2>
   <div class="pp_bt">
       开始匹配
   </div>`;
};