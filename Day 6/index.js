var songs=[

    {
        id:1,
        imageSrc:"https://1.bp.blogspot.com/-S6wPn6XzLak/XEXB-kBt2FI/AAAAAAAAGkk/QuP9ZIZXnt8P4-Q4CkyrTpujPBTCQZ06ACLcBGAs/s1600/aye_mere_watan_ke_logo_lyrics_in_hindi.jpeg",
        audioSrc:"https://pwdown.com/12514/Aye Mere Watan Ke Logo - Lata.mp3",
        title:"Aye Mere Watan Ke Logo - Lata Mangeshkar",
        download:"https://pwdown.com/12514/Aye%20Mere%20Watan%20Ke%20Logo%20-%20Lata.mp3"
    },

    {
        id:2,
        imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWN5EUXdBtZM4IPuFFSUTNSr2ul4Sy6iZM1g&usqp=CAU",
        audioSrc:"https://pwdown.com/110792/01. I Am A Disco Dancer.mp3",
        title:"I Am A Disco Dancer - Bappi Lahiri / Alisha Chinai",
        download:"https://pwdown.com/110792/01.%20I%20Am%20A%20Disco%20Dancer.mp3"
    },

    {
        id:3,
        imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_kSEuKPN22CZYI9yKWECQCpsVfhuxMa_trCCPrIXNPGRerAZmlgVVNQQlpeDaBqSnZQ&usqp=CAU",
        audioSrc:"https://pwdown.com/9302/05 Bhagwan Hai Kahan Re Tu - PK (Sonu Nigam)  - 190Kbps.mp3",
        title:"Bhagwan Hai Kahan Re Tu - Sonu Nigam",
        download:"https://pwdown.com/9302/05%20Bhagwan%20Hai%20Kahan%20Re%20Tu%20-%20PK%20(Sonu%20Nigam)%20%20-%20190Kbps.mp3"
    },

    {
        id:4,
        imageSrc:"https://i.ytimg.com/vi/eWNqzgPr6S0/maxresdefault.jpg",
        audioSrc:"https://pwdown.com/113355/01. Mera Rang De Basanti Chola.mp3",
        title:"Mera Rang De Basanti Chola - Udit Narayan",
        download:"https://pwdown.com/113355/01.%20Mera%20Rang%20De%20Basanti%20Chola.mp3"
    },

    {
        id:5,
        imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPonlBsFrAybKqAAMEohg2oQgcOTHNR6Ylg&usqp=CAU",
        audioSrc:"https://pwdown.com/112988/03. Bum Bum Bole.mp3",
        title:"Bum Bum Bole - Shaan",
        download:"https://pwdown.com/112988/03.%20Bum%20Bum%20Bole.mp3"
    },

    {
        id:6,
        imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9b4n5bPnoc1W44YxSlySucM1-XBPbzdGEdw&usqp=CAU",
        audioSrc:"https://pwdown.com/113041/09. Mehbooba Meri Mehbooba - Mohd Rafi.mp3",
        title:"Mehbooba Meri Mehbooba - Mohd Rafi",
        download:"https://pwdown.com/113041/09.%20Mehbooba%20Meri%20Mehbooba%20-%20Mohd%20Rafi.mp3"
    },

    {
        id:7,
        imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGDDXQsDMvslKExJFDbPwDjm8Hq3AAnVIu0g&usqp=CAU",
        audioSrc:"https://pwdown.com/113510/Pardesi Pardesi Jana Nahi Mujhe Chodke.mp3",
        title:"Pardesi Pardesi - Udit Narayan / Alka Yagnik",
        download:"https://pwdown.com/113510/variation/190K/Pardesi%20Pardesi%20Jana%20Nahi%20Mujhe%20Chodke.mp3"
    },

    {
        id:8,
        imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-rY5PX1dqFZg5sQyT5jcG5HDchZ0y7j7Wuw&usqp=CAU",
        audioSrc:"https://pwdown.com/112312/03. Deewangi Deewangi.mp3",
        title:"Deewangi Deewangi - Shaan",
        download:"https://pwdown.com/112312/03.%20Deewangi%20Deewangi.mp3"
    },

]

function generateAudioCards()
{

    let htmlString="";

    songs.forEach(function(song,index){

        let songHTML=`
                <div class="song">
                    <div class="song_img">
                        <img src="${song.imageSrc}">
                    </div>
                    <div class="song_details">
                        <h1 class="song_title">${song.title}</h1>
                        <div class="menu">
                            <button class="btn" onclick="playAudio(${song.id})">Play</button>
                            <button class="btn" onclick="pauseAudio(${song.id})">Pause</button>
                            <button class="btn" onclick="downloadAudio(${song.id})">Download</button>
                        </div>

                    </div>
                </div>
        `;

        htmlString+=songHTML;

    })

    document.getElementById("musics").innerHTML=htmlString;


}

generateAudioCards();

function playAudio(songid)
{
    var song=songs.find(function(song,index){
        return song.id===songid
    });
    document.getElementById("thumbnail").src=song.imageSrc;
    document.getElementById("audio_player").src=song.audioSrc;
    document.getElementById("audio_player_title").innerText = song.title;
    document.getElementById("audio_player").play();
}

function pauseAudio(songid)
{
    document.getElementById("audio_player").pause();    
}

function downloadAudio(songid)
{
    var song=songs.find(function(song,index){
        return song.id===songid
    });
    window.open(song.download, "_self");    
}

