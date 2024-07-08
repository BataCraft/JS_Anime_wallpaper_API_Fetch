let imagesFetch = async () => {
    try {
        const response = await fetch('https://shikimori.one/api/animes?page=${page}&limit=12&order=popularity');

        const data = await response.json();
        // const animeList = result.data; 
        let animeitems = ""; 
       

        data.forEach((data) => {

            animeitems += `<div class=" w-[20%] h-full " id="items">
                  <div>
                  <img src="https://shikimori.one/${data.image.original}" alt="" style="width: 400px; height:400px" class="object-cover object-center">
<div class="pt-6">
 <p id="anime_name" class="font-[600] text-xl" > ${data.name}</p>
                       
                  </div>
</div>
                       
                </div>`
        })
        document.getElementById('card').innerHTML = animeitems; 

        // console.log(data);
    } catch (error) {
        console.log(error);
    }
}

imagesFetch();







// let imagesFetch = async () => {
//     try {
//         const response = await fetch('https://kitsu.io/api/edge/anime?filter[categories]=adventure');
//         const result = await response.json();
//         const animeList = result.data; 
//         let animeItems = "";
//         animeList.forEach((anime) => {
//             const posterImage = anime.attributes.posterImage.large;
//             const animeId = anime.id;
//             const titles = anime.attributes.titles.en;

//             animeItems += `<div class=" w-[20rem]" id="items">
//                  <div>
//                 <img src="${posterImage}" alt="" style="max-width: 100%;">
                 
//                      <p id="anime_name"> ${animeId}</p>
//                      <p id="anime_name">  <${titles}</p>
//                    </div>             
//                    </div>`
//         });

//         document.getElementById('card').innerHTML = animeItems;
//     } catch (error) {
//         console.log(error);
//     }
// }

// imagesFetch();




