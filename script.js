let whoplays='X',nomarked=0,x=[],o=[],won=false;
const board=document.querySelector('.maingame');
function winchecker(x)
{
    if(x.indexOf("1")!==-1)
    {
        if(x.indexOf("2")!=-1&&x.indexOf("3")!=-1)
        return true;
        else if(x.indexOf("4")!=-1&&x.indexOf("7")!=-1)
        return true;
        else if(x.indexOf("5")!=-1&&x.indexOf("9")!=-1)
        return true;
    }
    else if(x.indexOf("2")!=-1&&x.indexOf("5")!=-1&&x.indexOf("8")!=-1)
    return true;
    else if(x.indexOf("3")!=-1)
    {
        if(x.indexOf("5")!=-1&&x.indexOf("7")!=-1)
        return true;
        else if(x.indexOf("6")!=-1&&x.indexOf("9")!=-1)
        return true;
    }
    else if(x.indexOf("4")!=-1&&x.indexOf("5")!=-1&&x.indexOf("6")!=-1)
    return true;
    else if(x.indexOf("7")!=-1&&x.indexOf("8")!=-1&&x.indexOf("9")!=-1)
    return true;
}
board.addEventListener('click',(e)=>{
    if(e.target.classList.contains('cell'))
    {
        let t=e.target;
        if(x.indexOf(t.classList[1])==-1&&o.indexOf(t.classList[1])==-1&&!won)
        {            
            if(whoplays=='X')
            {
                t.innerText='X';
                x.push(t.classList[1]);
                whoplays='O';
            }
            else{
                t.innerText='O';
                o.push(t.classList[1]);
                whoplays='X';
            }
            console.log("O and X are at");
            console.log(o);
            console.log(x);
            nomarked++;
        }
        setTimeout(()=>
        {let xw=winchecker(x);
        if(xw)
        {
            won=true;
            alert('X HAS WON THE GAME!!!')
        }
        let yw=winchecker(o);
        if(yw)
        {
            won=true;
            alert('O HAS WON THE GAME!!!');
        }
        else if(nomarked==9&&!won)
        alert("DRAW!! Start A New Game");  },100);        
        
    }
})
const newg=document.querySelector('.new');
newg.addEventListener('click',()=>{
    whoplays='X';nomarked=0;x=[];o=[];won=false;
    for(let i=0;i<board.children.length;i++)
    {
        if(board.children[i].classList.contains('cell'))
        board.children[i].innerText="";
    }
})
