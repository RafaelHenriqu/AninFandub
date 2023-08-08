function LoadingPage(Pagina,Videos,Episodio,MaxEp){
    window.location.href = `../Paginas/${Pagina}.html`
    localStorage.Video = Videos
    localStorage.Ep = Episodio
    localStorage.MaxEps = MaxEp
}
function VideoPlay(){
    
    let Video = localStorage.Video
    let Eps = localStorage.Ep
    let VideoSelect = `../Videos/${Video}${Eps}.mp4`
    document.querySelector('h1').innerHTML = Video
    document.querySelector('video').src = VideoSelect  
    document.querySelector('video').poster = "../Imgs/Desenhos/Poster/" + Video + ".jpg"
     
}

function Thumbnail(){
     let Divs = document.querySelectorAll('div');
    Divs.forEach(div => {
        div.style.backgroundImage = `url(../Imgs/Desenhos/${div.id}.jpg)`
    })

}

function MudarEpisodio(Objs)
{
if (Objs == "Back")
{
if (localStorage.Ep > 1 ){

    localStorage.Ep = Number(localStorage.Ep)-1
    window.location.reload()
     
 
}
}else
{
    if (localStorage.Ep < Number(localStorage.MaxEps))

    {
        
    localStorage.Ep = Number(localStorage.Ep)+ 1
    window.location.reload()
   

    }
}
}

function Sair()
{
    window.location.href = 'Animes.html'
}






