let selectedParkType = "";
let selectedLocation = "";
document.addEventListener("DOMContentLoaded", createParkCard=> {
    parkTypesArray.forEach(pt => parkTypeList.innerHTML += `<option>${pt}</option>`);
    locationsArray.forEach(location => locationsList.innerHTML += `<option>${location}</option>`);
    parkTypeList.addEventListener("change", npt => {
        selectedParkType = npt.target.value;
        showResults();
     });
    locationsList.addEventListener("change", npl => {
        selectedLocation = npl.target.value;
        showResults();
    });
    function isMatch(npd) {
        return (selectedLocation == "" || npd.State == selectedLocation) &&
            (selectedParkType == "" || npd.LocationName.includes(selectedParkType))
    }
    function getCard(npd) {
        //allows flexibility for the phone fax and website
        let phoneNumber = `Phone number: ${npd.Phone}`;
        let faxNumber = `Fax number: ${npd.Fax}`;
        let web = `For more info <a href="${npd.Visit}" target="_blank">${npd.Visit}</a>`;
        if (npd.Phone != 0) {
            phone = `<h4>${phoneNumber}  `
        }
        else {
            phone = '<h4>Phone number: No number listed  '
        }
        if (npd.Fax != 0) {
            fax = `${faxNumber}</h4>`
        }
        else {
            fax = 'Fax number: No number listed</h4>'
        }
        if (npd.Visit != undefined) {
            web = `<h4>${web}</h4>`
        }
        else {
            web = `<h4>No Website listed</h4>`
        }
        let contactInfo = phone + fax + web
        return `<div class="card park-card bg-warning-subtle">
                    <h2 class="card-header">${npd.LocationName}</h2>
                    <div class="card=text">
                        <h3>
                            <b>${npd.State}</b>
                        </h3>
                    </div>
                    <h4>${npd.Address}, ${npd.City}, ${npd.ZipCode}</h4>
                    <h4>Location ID: <a href="https://www.google.com/maps/search/?api=1&query=${npd.Latitude},${npd.Longitude}" target="_blank">${npd.LocationID}</a> </h4>
                    <h4>Coordinates: ${npd.Longitude}, ${npd.Latitude}</h4>${contactInfo}
                <div>`;
    }
    function showResults() {
        results.innerHTML = ""
        const filtered = nationalParksArray.filter(isMatch);
        filtered.forEach(npd => results.innerHTML += getCard(npd));
    }
    showResults();
});