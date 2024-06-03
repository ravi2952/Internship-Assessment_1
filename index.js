// Define the states for each country
const states = {
    "India": ["Maharashtra", "Karnataka", "Tamil Nadu"],
    "US": ["California", "Texas", "New York"]
};

// Define the localities for each state
const localities = {
    "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
    "Karnataka": ["Bangalore", "Mysore", "Hubli"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
    "California": ["Los Angeles", "San Francisco", "San Diego"],
    "Texas": ["Houston", "Dallas", "Austin"],
    "New York": ["New York City", "Buffalo", "Rochester"]
};

// Function to update the state dropdown based on the selected country
function updateStates() {
    const countrySelect = document.getElementById("country");
    const stateSelect = document.getElementById("state");
    const localitySelect = document.getElementById("locality");
    const selectedCountry = countrySelect.value;

    // Clear the state and locality dropdowns
    stateSelect.innerHTML = "";
    localitySelect.innerHTML = "";
    
    if (selectedCountry) {
        // Populate the state dropdown with the states of the selected country
        const countryStates = states[selectedCountry];
        countryStates.forEach(state => {
            const option = document.createElement("option");
            option.value = state;
            option.textContent = state;
            stateSelect.appendChild(option);
        });
    }
}

// Function to update the locality dropdown based on the selected state
function updateLocalities() {
    const stateSelect = document.getElementById("state");
    const localitySelect = document.getElementById("locality");
    const selectedState = stateSelect.value;

    // Clear the locality dropdown
    localitySelect.innerHTML = "";
    
    if (selectedState) {
        // Populate the locality dropdown with the localities of the selected state
        const stateLocalities = localities[selectedState];
        stateLocalities.forEach(locality => {
            const option = document.createElement("option");
            option.value = locality;
            option.textContent = locality;
            localitySelect.appendChild(option);
        });
    }
}

// Function to display the selected values in a table
function displaySelectedValues() {
    const country = document.getElementById("country").value;
    const state = document.getElementById("state").value;
    const locality = document.getElementById("locality").value;
    const fruit = document.getElementById("fruit").value;
    const color = document.getElementById("color").value;
    const buyer = document.getElementById("buyer").checked ? "Yes" : "No";
    const seller = document.getElementById("seller").checked ? "Yes" : "No";

    const table = document.getElementById("resultTable");
    table.innerHTML = `
        <tr>
            <th>Fruit</th>
            <th>Color</th>
            <th>Country</th>
            <th>State</th>
            <th>Locality</th>
            <th>Buyer</th>
            <th>Seller</th>
        </tr>
        <tr>
            <td>${fruit}</td>
            <td>${color}</td>
            <td>${country}</td>
            <td>${state}</td>
            <td>${locality}</td>
            <td>${buyer}</td>
            <td>${seller}</td>
        </tr>
    `;
}