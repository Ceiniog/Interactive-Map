/*
This script will load the SVG data of the map into the page
so that the styling can be displayed properly.
*/


async function loadMap(mapPath) {
    let svgData = "";
    try { 
        let file = await fetch(mapPath); // Get file from path

        // fetch does not throw an error, only returns a HTTP code. If code is not 200 (ok) then throw error
        if(!file.ok) { throw new Error(`Network error while attempting to load: ${mapPath}`); }

        svgData = await file.text(); // Read file as text  
    } 
    catch(err) { svgData = `<p style="color: red">${err}</p>`; }

    finally {
    let mapSection = document.getElementById('map'); // Get map element - svg will be inserted within here
    mapSection.insertAdjacentHTML('beforeend', svgData); // Insert into HTML
    }
    
}
