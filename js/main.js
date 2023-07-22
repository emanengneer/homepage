var imgs=Array.from(document.querySelectorAll('.cartItem img'))
var boxContainer=document.getElementById('boxContainer')
var close
=document.getElementById('close')
var boxItem=document.getElementById('boxItem')
var next=document.getElementById('next')
var prev=document.getElementById('prev')
var  imgIndex=0


for(var i=0;i<imgs.length;i++){
    imgs[i].addEventListener('click',function(e){
        imgIndex=imgs.indexOf(e.target)


        boxItem.style.backgroundImage=`url(${e.target.src})`
        boxContainer.style.display='flex'

    })
}
close.addEventListener('click' ,function(){
    boxContainer.style.display='none'
})

next.addEventListener('click',function(){
    imgIndex++
    if(imgIndex == imgs.length){
        imgIndex=0
    }

    var newSrc=imgs[imgIndex].src
    boxItem.style.backgroundImage=`url(${newSrc})`
})
prev.addEventListener('click',function(){
    imgIndex--
    if(imgIndex <0){
        imgIndex=imgs.length
        
    }

    var newSrc=imgs[imgIndex].src
    boxItem.style.backgroundImage=`url(${newSrc})`
})




