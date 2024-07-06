// let imagesFetch = async () => {
//     try {
//         const response = await fetch('https://kitsu.io/api/edge/anime?filter[categories]=adventure');

//         const data = await response.json();
//         const animeList = result.data; 
//         let animeitems = ""; 

//         animeList.forEach((anime) => {
//             const posterImage = anime.attributes.posterImage.large;
//                     const animeId = anime.id;
//                     const titles = anime.attributes.titles;

//             animeitems += `<div class=" w-[20rem]" id="items">
//                   <div>
//                   <img src="${posterImage}" alt="" style="max-width: 100%;">

//                         <p id="anime_name"> ${animeId}</p>
//                         <p id="anime_name"> russian: <${data.titles}</p>
//                   </div>
//                 </div>`
//         })
//         document.getElementById('card').innerHTML = animeitems; 

//         // console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// imagesFetch();







let imagesFetch = async () => {
    try {
        const response = await fetch('https://kitsu.io/api/edge/anime?filter[categories]=adventure');
        const result = await response.json();
        const animeList = result.data; // Accessing the array of anime items

        let animeItems = "";
        animeList.forEach((anime) => {
            const posterImage = anime.attributes.posterImage.large;
            const animeId = anime.id;
            const titles = anime.attributes.titles.en;

            animeItems += `<div class=" w-[20rem]" id="items">
                 <div>
                <img src="${posterImage}" alt="" style="max-width: 100%;">
                 
                     <p id="anime_name"> ${animeId}</p>
                     <p id="anime_name">  <${titles}</p>
                   </div>             
                   </div>`
        });

        document.getElementById('card').innerHTML = animeItems;
    } catch (error) {
        console.log(error);
    }
}

imagesFetch();