// create map
const map = L.map("mapid").setView([-23.6772801, -46.6923497], 16);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  IconAnchor: [29, 68],
});

let marker;

//create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);
  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add at field photos
function addPhotoField() {
  //pick up the photo container #images
  const container = document.querySelector("#images");

  //take the container to duplicate .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");

  //clone the last image added
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //check if the field is empty, if yes, do not add it to the image container
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }
  //clear the field before adding it to the container #images
  input.value = "";

  //add the clone to the container #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    //clean value of field
    span.parentNode.children[0].value = "";

    return;
  }

  //delete field
  span.parentNode.remove();
}

//change of value at field yes and no
function toggleSelect(event) {
  //remove the .active classes from the buttons
  document.querySelectorAll(".button-select button").forEach(function (button) {
    button.classList.remove("active");
  });

  //put the class .active
  const button = event.currentTarget;
  button.classList.add("active");

  //update input with selected value
  const input = document.querySelector('[name="open_on_weekends"]');

  input.value = button.dataset.value;
}

/*function validate(event) {
    
    const needsLatAndLng = true;
    //validade se lat e lng estão preenchidos
    if (needsLatAndLng) {

        needsLatAndLng.value = ""
        event.preventDefault()
        alert('Selecione um ponto no mapa.')
    }
    
}*/
