// Country data: name, population, and flag URL.
const countries = [
    { name: "India", population: 1400000000, flag: "https://flagcdn.com/in.svg" },
    { name: "European Union", population: 447000000, flag: "https://flagcdn.com/eu.svg" },
    { name: "USA", population: 331000000, flag: "https://flagcdn.com/us.svg" },
    { name: "Indonesia", population: 276000000, flag: "https://flagcdn.com/id.svg" },
    { name: "Pakistan", population: 231000000, flag: "https://flagcdn.com/pk.svg" },
    { name: "Bangladesh", population: 168000000, flag: "https://flagcdn.com/bd.svg" },
    { name: "Russian Federation", population: 143000000, flag: "https://flagcdn.com/ru.svg" },
    { name: "Mexico", population: 128000000, flag: "https://flagcdn.com/mx.svg" },
    { name: "Iran", population: 88000000, flag: "https://flagcdn.com/ir.svg" },
    { name: "UK", population: 67000000, flag: "https://flagcdn.com/gb.svg" },
    { name: "South Africa", population: 60000000, flag: "https://flagcdn.com/za.svg" },
    { name: "South Korea", population: 52000000, flag: "https://flagcdn.com/kr.svg" },
    { name: "Algeria", population: 44700000, flag: "https://flagcdn.com/dz.svg" },
    { name: "Ukraine", population: 40000000, flag: "https://flagcdn.com/ua.svg" },
    { name: "Uzbekistan", population: 34000000, flag: "https://flagcdn.com/uz.svg" },
    { name: "Ghana", population: 33000000, flag: "https://flagcdn.com/gh.svg" },
    { name: "Mozambique", population: 32000000, flag: "https://flagcdn.com/mz.svg" },
    { name: "Madagascar", population: 28000000, flag: "https://flagcdn.com/mg.svg" },
    { name: "Venezuela", population: 28000000, flag: "https://flagcdn.com/ve.svg" },
    { name: "North Korea", population: 26000000, flag: "https://flagcdn.com/kp.svg" },
    { name: "Taiwan", population: 23000000, flag: "https://flagcdn.com/tw.svg" },
    { name: "Syria", population: 22000000, flag: "https://flagcdn.com/sy.svg" },
    { name: "Mali", population: 21000000, flag: "https://flagcdn.com/ml.svg" },
    { name: "Sri Lanka", population: 22000000, flag: "https://flagcdn.com/lk.svg" },
    { name: "Romania", population: 19000000, flag: "https://flagcdn.com/ro.svg" },
    { name: "Chad", population: 17000000, flag: "https://flagcdn.com/td.svg" },
    { name: "Senegal", population: 17000000, flag: "https://flagcdn.com/sn.svg" },
    { name: "Cambodia", population: 16000000, flag: "https://flagcdn.com/kh.svg" },
    { name: "Rwanda", population: 13000000, flag: "https://flagcdn.com/rw.svg" },
    { name: "Tunisia", population: 12000000, flag: "https://flagcdn.com/tn.svg" },
    { name: "Belgium", population: 11500000, flag: "https://flagcdn.com/be.svg" },
    { name: "Dominican Republic", population: 11000000, flag: "https://flagcdn.com/do.svg" },
    { name: "Jordan", population: 10000000, flag: "https://flagcdn.com/jo.svg" },
    { name: "South Sudan", population: 11000000, flag: "https://flagcdn.com/ss.svg" },
    { name: "Czechia (Czech Republic)", population: 10000000, flag: "https://flagcdn.com/cz.svg" },
    { name: "Azerbaijan", population: 10000000, flag: "https://flagcdn.com/az.svg" },
    { name: "Portugal", population: 10000000, flag: "https://flagcdn.com/pt.svg" },
    { name: "Belarus", population: 9400000, flag: "https://flagcdn.com/by.svg" },
    { name: "Togo", population: 8000000, flag: "https://flagcdn.com/tg.svg" },
    { name: "Austria", population: 9000000, flag: "https://flagcdn.com/at.svg" },
    { name: "El Salvador", population: 6500000, flag: "https://flagcdn.com/sv.svg" },
    { name: "Slovakia", population: 5400000, flag: "https://flagcdn.com/sk.svg" },
    { name: "Finland", population: 5500000, flag: "https://flagcdn.com/fi.svg" },
    { name: "Mauritania", population: 5000000, flag: "https://flagcdn.com/mr.svg" },
    { name: "Panama", population: 4200000, flag: "https://flagcdn.com/pa.svg" },
    { name: "Croatia", population: 4100000, flag: "https://flagcdn.com/hr.svg" },
    { name: "Georgia", population: 3700000, flag: "https://flagcdn.com/ge.svg" },
    { name: "Mongolia", population: 3300000, flag: "https://flagcdn.com/mn.svg" },
    { name: "Uruguay", population: 3400000, flag: "https://flagcdn.com/uy.svg" },
    { name: "Moldova", population: 2600000, flag: "https://flagcdn.com/md.svg" },
    { name: "Lithuania", population: 2800000, flag: "https://flagcdn.com/lt.svg" },
    { name: "Botswana", population: 2400000, flag: "https://flagcdn.com/bw.svg" },
    { name: "Namibia", population: 2500000, flag: "https://flagcdn.com/na.svg" },
    { name: "Guinea-Bissau", population: 2000000, flag: "https://flagcdn.com/gw.svg" },
    { name: "North Macedonia", population: 2100000, flag: "https://flagcdn.com/mk.svg" },
    { name: "Mauritius", population: 1200000, flag: "https://flagcdn.com/mu.svg" },
    { name: "Comoros", population: 850000, flag: "https://flagcdn.com/km.svg" },
    { name: "Bhutan", population: 800000, flag: "https://flagcdn.com/bt.svg" },
    { name: "Solomon Islands", population: 700000, flag: "https://flagcdn.com/sb.svg" },
    { name: "Maldives", population: 500000, flag: "https://flagcdn.com/mv.svg" },
    { name: "Iceland", population: 370000, flag: "https://flagcdn.com/is.svg" },
    { name: "Kiribati", population: 120000, flag: "https://flagcdn.com/ki.svg" },
    { name: "San Marino", population: 34000, flag: "https://flagcdn.com/sm.svg" },
    { name: "Palau", population: 18000, flag: "https://flagcdn.com/pw.svg" },
    { name: "Tuvalu", population: 12000, flag: "https://flagcdn.com/tv.svg" },
  ];
  
  
// List of countries with existing webpages
const existingWebpages = ["india", "european-union", "indonesia", "pakistan"];

function generateCards() {
  const container = document.getElementById("country-cards");
  container.innerHTML = "";
  countries.forEach(country => {
    const card = document.createElement("div");
    card.className = "card";
    
    // Check if the country has an existing webpage
    const countryPage = existingWebpages.includes(country.name.toLowerCase().replace(/ /g, "-"))
      ? `${country.name.toLowerCase().replace(/ /g, "-")}.html`
      : "cs.html";
    
    card.onclick = () => window.location.href = countryPage;
    card.innerHTML = `
      <img src="${country.flag}" alt="${country.name} flag">
      <h4>${country.name}</h4>
      <p>Population: ${country.population.toLocaleString()}</p>
    `;
    container.appendChild(card);
  });
}

  
  // Sorting logic based on dropdown selection
  function sortCards() {
    const sortBy = document.getElementById("sort").value;
    countries.sort((a, b) => {
      if (sortBy === "alphabetical") return a.name.localeCompare(b.name);
      if (sortBy === "reverseAlphabetical") return b.name.localeCompare(a.name);
      if (sortBy === "population") return a.population - b.population;
      if (sortBy === "reversePopulation") return b.population - a.population;
    });
    generateCards();
  }
  
  // Initial render
  window.onload = () => {
    generateCards();
  };
  