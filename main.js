/*JavaScript document,write,getElementById,querySelector,for,var,let,const,add,style,addEventListener,classList,parentElementchildren,nextElementSibling,previousElementSibling,querySelectorAll,getElementsByTagName,createElement,createTextNode,appendChild,removeChild,insertBefore,function,innerHTML,Math,sqrt,pow,random,floor,ceilmax,date new Date(),object,array,date.get FullYear,Month,Hours,MinutesDay,constractor,pop,push,shift,unshiftsplice,slice,sort,break,continue,while,doif,else if,else,switch,case,default,Number,parseInt,parseFloat,toString()toFixed,toPrecision,length,charAt,toUppercase,concat,inside,Literals,name,Names,names,age,roll,concat,StudentsInfo,Students,student,info,var,let,const,return,console,log,fetch,axios,method,ajax,Xml http requestevent:onload(),onerror()property: response,responseText,responseType,responseUrl,status,statusTextfunction: open(),send(),setRequestHeader()methods:get,post,put,patch,deleteAPI: https://jsonplaceholder.typicode.com/posts,localStorage,setItem(),getItem,sessionStorage*/





var openMenu =document.querySelector(".openMenu");
var menuList =document.querySelector(".menu");
var count = 0;
for(x=0;x<4;x++){
   var link =document.querySelectorAll(".menu a")[x];
   link.addEventListener("click",function(){
   menuList.style.opacity="0";
   openMenu.classList.remove("fa-times");
   count=0;
})
}

openMenu.addEventListener("click",function(){
   
   // alert('hi');
   count++;
   if(count==1){
   // menuList.style.display="block";
   menuList.style.opacity="1";
   openMenu.classList.add("fa-times");
   
  }
   
   else{
      // menuList.style.display="none";
      menuList.style.opacity="0";
      count=0;
      
      openMenu.classList.remove("fa-times");
   }
})

