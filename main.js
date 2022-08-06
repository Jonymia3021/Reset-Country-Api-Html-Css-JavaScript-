fetch('https://restcountries.com/v3/all')
.then(res => res.json())
.then(data => {
    let card = '';
    data.forEach(country => {
        console.log(country.cca2);
        card = card + `
        <a onclick='handleClickedCountry(this)' id='${country.cca2}' href="#ditails">
            <div class="card">
                <img src="${country.flags[1]}" alt="">
                <h3>${country.name.common}</h3>
                <p>Population: ${country.population}</p>
                <p>Region: ${country.region}</p>
            </div>
        </a>
        `;
        document.getElementById('countries').innerHTML = card;
    });
})

document.getElementById('submit').addEventListener('click', function () {
    const inputValue = document.getElementById('input').value;
    let countryDitails = '';

    fetch(`https://restcountries.com/v3/name/${inputValue}`)
    .then(response => response.json())
    .then(country => {
        countryDitails = countryDitails + `
            <img src="${country[0].flags[1]}" alt="">
            <h4>${country[0].name.common}</h4>
            <p>Official Name: <strong>${country[0].name.official}</strong></p>
            <p>TimeZone: <strong>${country[0].timezones[0]}</strong></p>
            <p>Capital: <strong>${country[0].capital[0]}</strong></p>
            <p>Population: <strong>${country[0].population}</strong></p>
            <p>Area: <strong>${country[0].area}</strong>&#13218;</p>
        `;
        document.getElementById('ditails').innerHTML = countryDitails;
    })
})

function handleClickedCountry(a) {
    let countryDitails = '';
    fetch(`https://restcountries.com/v3/alpha/${a.id}`)
    .then(response => response.json())
    .then(country => {
        countryDitails = countryDitails + `
            <img src="${country[0].flags[1]}" alt="">
            <h4>${country[0].name.common}</h4>
            <p>Official Name: <strong>${country[0].name.official}</strong></p>
            <p>TimeZone: <strong>${country[0].timezones[0]}</strong></p>
            <p>Capital: <strong>${country[0].capital[0]}</strong></p>
            <p>Population: <strong>${country[0].population}</strong></p>
            <p>Area: <strong>${country[0].area}</strong>&#13218;</p>
        `;
        document.getElementById('ditails').innerHTML = countryDitails;
    })
  }