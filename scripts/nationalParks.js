let selectedParkType = "";
let selectedLocation = "";
document.addEventListener("DOMContentLoaded", e=> {
    parkTypesArray.forEach(pt => parkTypeList.innerHTML += `<option>${pt}</option>`);
    locationsArray.forEach(location => locationsList.innerHTML += `<option>${location}</option>`);
    parkTypeList.addEventListener("change", e => {
        selectedParkType = e.target.value;
        showResults();
     });
    locationsList.addEventListener("change", e => {
        selectedLocation = e.target.value;
        showResults();
    });
    function isMatch(p) {
        return (selectedLocation == "" || p.State == selectedLocation) &&
            (selectedParkType == "" || p.LocationName.includes(selectedParkType))
    }
    function getCard(p) {
        //allows flexibility for the phone fax and website
        let phoneNumber = `Phone number: ${p.Phone}`;
        let faxNumber = `Fax number: ${p.Fax}`;
        let web = `For more info <a href="${p.Visit}" target="_blank">${p.Visit}</a>`;
        if (p.Phone != 0) {
            phone = `<h4>${phoneNumber}  `
        }
        else {
            phone = '<h4>Phone number: No number listed  '
        }
        if (p.Fax != 0) {
            fax = `${faxNumber}</h4>`
        }
        else {
            fax = 'Fax number: No number listed</h4>'
        }
        if (p.Visit != undefined) {
            web = `<h4>${web}</h4>`
        }
        else {
            web = `<h4>No Website listed</h4>`
        }
        let contactInfo = phone + fax + web
        return `<div class="card park-card bg-warning-subtle">
                    <h2 class="card-header">${p.LocationName}</h2>
                    <div class="card=text">
                        <h3>
                            <b>${p.State}</b>
                        </h3>
                    </div>
                    <h4>${p.Address}, ${p.City}, ${p.ZipCode}</h4>
                    <h4>Location ID: <a href="https://www.google.com/maps/search/?api=1&query=${p.Latitude},${p.Longitude}" target="_blank">${p.LocationID}</a> </h4>
                    <h4>Coordinates: ${p.Longitude}, ${p.Latitude}</h4>${contactInfo}
                <div>`;
    }
    function showResults() {
        results.innerHTML = ""
        const filtered = nationalParksArray.filter(isMatch);
        filtered.forEach(p => results.innerHTML += getCard(p));
    }
    showResults();
});