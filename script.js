let con = document.getElementById('con')

let img = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg']
let p = 0
let n = 0


function changePrev(){
    p = (p-1)%img.length
    
    if(p<0)
        p=img.length-1
    
    con.style.backgroundImage = "url('img/" + img[p] + "')" 
}
function changeNext(){
    n = (n+1)%img.length    
    con.style.backgroundImage = "url('img/" + img[n] + "')" 
}