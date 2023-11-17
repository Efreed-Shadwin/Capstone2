# Capstone2 Aspiring Outdoorsman
## This website is a project to test out JavaScript skills while solidifying our HTML and CSS abilities. 
### In this project i made use of select drop downs to search through an array to find the national parks in the list that match the search criteria. The results are then displayed in cards which show the name of the location its address coordinates and contact info. 
### Some of the options included a website so i have those linked and the location ID was used as a link to their location on maps. I also had to create some if else rule to deal with some of the options not having the same amount of infoso that the ones that had it displayed it with the others showing a message about it being missing 
## Contributors 
### Our teacher Kevin Long taught us what we know about JavaScript and helped us solidify our HTML and CSS skills https://github.com/kevinelong
### Jkeise Bryce Haile and Trevor helped me with making sure my site was styled the way i want it 
### https://github.com/Jkeise1 
### https://github.com/Bryceapk 
### https://github.com/schaile4 
### https://github.com/TrevorBelmontVPK
## A piece of code i had some difficulty with getting to behave the way i wanted was this section.
### Once i got it to create the code like i wanted i realized it was a mess that i could barely read and i couldnt figure out how to add stuff initially. That lead to this mess which i am not entirely sure is the correct way to use return for something like this.
```
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
```
![home-page](https://github.com/Efreed-Shadwin/Capstone2/assets/146854297/d2a9387b-8f56-4c10-9031-96409aa2cf9a)
![mountains-page](https://github.com/Efreed-Shadwin/Capstone2/assets/146854297/6a826f88-09e6-485f-8bc7-e9785cf04a98)
![national-parks-page](https://github.com/Efreed-Shadwin/Capstone2/assets/146854297/74107cb4-686d-4ad4-b965-76b6c80ad3a9)

