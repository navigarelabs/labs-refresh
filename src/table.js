let shareTable = document.querySelector('#shareTable')
let shareSearchBar = document.querySelector('#shareSearchBar')

let shareholderTable = document.querySelector('#shareholderTable')
let shareholderSearchBar = document.querySelector('#shareholderSearchBar')

let shares = [
    {name: "MTN", code: "MTN", sector: "telecommunications", country: "South Africa"},
    {name: "Sable Exploration & Mining", code: "SEM", sector: "mining", country: "South Africa"},
    {name: "Investec Ltd", code: "INL", sector: "financial services", country: "South Africa"},
    {name: "Kibo Energy plc", code: "KBO", sector: "energy", country: "South Africa"},
    {name: "Acsion Limited", code: "ACS", sector: "real estate", country: "South Africa"},
    {name: "Standard Bank Group Ltd", code: "SBK", sector: "banking", country: "South Africa"},
    {name: "AT&T Inc.", code: "T", sector: "telecommunications", country: "United States"},
    {name: "Newmont Corporation", code: "NEM", sector: "mining", country: "United States"},
    {name: "JPMorgan Chase & Co.", code: "JPM", sector: "financial services", country: "United States"},
    {name: "Exxon Mobil Corporation", code: "XOM", sector: "energy", country: "United States"},
    {name: "Simon Property Group, Inc.", code: "SPG", sector: "real estate", country: "United States"},
    {name: "Bank of America Corporation", code: "BAC", sector: "banking", country: "United States"},
    {name: "Deutsche Telekom AG", code: "DTE", sector: "telecommunications", country: "Germany"},
    {name: "Glencore plc", code: "GLEN", sector: "mining", country: "United Kingdom"},
    {name: "HSBC Holdings plc", code: "HSBA", sector: "financial services", country: "United Kingdom"},
    {name: "TotalEnergies SE", code: "TTE", sector: "energy", country: "France"},
    {name: "Unibail-Rodamco-Westfield SE", code: "URW", sector: "real estate", country: "France"},
    {name: "Barclays plc", code: "BARC", sector: "banking", country: "United Kingdom"},
]

let shareholders = [
    {name: "Coronation", country: "South Africa"},
    {name: "Ninety One", country: "South Africa"},
    {name: "Stanlib", country: "South Africa"},
    {name: "Old Mutual Investment Group", country: "South Africa"},
    {name: "Absa Asset Managers", country: "South Africa"},
    {name: "Sanlam Investment Management", country: "South Africa"},
    {name: "Allan Gray", country: "South Africa"},
    {name: "Investcorp", country: "South Africa"},
    {name: "BlackRock", country: "United States"},
    {name: "Vanguard Group", country: "United States"},
    {name: "Fidelity Investments", country: "United States"},
    {name: "State Street Global Advisors", country: "United States"},
    {name: "Morgan Stanley", country: "United States"},
    {name: "JPMorgan Chase", country: "United States"},
    {name: "Goldman Sachs", country: "United States"},
    {name: "Capital Group", country: "United States"},
    {name: "UBS Group", country: "Switzerland"},
    {name: "Allianz Group", country: "Germany"},
    {name: "Amundi Asset management", country: "France"},
    {name: "Legal & General Investment Management", country: "United Kingdom"},
    {name: "Credit Suisse", country: "Switzerland"},
    {name: "Duetsche Bank", country: "Germany"},
    {name: "BNP Paribas Asset Management", country: "France"},
    {name: "Blackfriars Asset Management", country: "United Kingdom"}
];

let defaultRowsDisplayed = 15
let numRowsDisplayed = shares.length > defaultRowsDisplayed ? defaultRowsDisplayed : shares.length

function searchShares(shares, substring) {
    if(substring.length === 0) 
        return shares

    substring = substring.toLowerCase()
    return [...shares].sort((a, b) => {
        let aCodeMatch = a.code.toLowerCase().includes(substring) ? 1 : 0;
        let aNameMatch = a.name.toLowerCase().includes(substring) ? 1 : 0;
        let bCodeMatch = b.code.toLowerCase().includes(substring) ? 1 : 0;
        let bNameMatch = b.name.toLowerCase().includes(substring) ? 1 : 0;

        // Prioritize code match over name match
        let aScore = aCodeMatch * 2 + aNameMatch;
        let bScore = bCodeMatch * 2 + bNameMatch;

        // Sort in descending order of score
        return bScore - aScore;
    });
}

function searchShareholders(shareholders, substring) {
    if(substring.length === 0) 
        return shareholders

    substring = substring.toLowerCase()
    return [...shareholders].sort((a, b) => {
        let aNameMatch = a.name.toLowerCase().includes(substring) ? 1 : 0;
        let bNameMatch = b.name.toLowerCase().includes(substring) ? 1 : 0;

        // Prioritize code match over name match
        let aScore = aNameMatch * 2;
        let bScore = bNameMatch * 2;

        // Sort in descending order of score
        return bScore - aScore;
    });
}

function renderSharesTable(shares) {
    for (let index = 0; index < numRowsDisplayed; index++) {
        let shareCode = shares[index].code;
        let shareName = shares[index].name;
    
        let div = document.createElement('div');
        
        div.innerHTML = 
        `
        <div>
            <a href="https://navigarelabs.co.za/#/markets/za/perspective/share/55/shareholders?data-set=104&starting-position=owners&type=month-on-month">
                <div class="flex justify-between border-b-2 cursor-pointer border-nvg-blue tableRow hover:text-nvg-green active:text-nvg-gold">
                    <div class="flex-1 border-nvg-blue pl-1">${shareCode}</div>
                    <div class="flex-1 border-nvg-blue pl-1">${shareName}</div>
                </div>
            </a>
        <div/>
        `;
    
        shareTable.appendChild(div);    
    }
}

function renderShareholderTable(shareholders) {
    for (let index = 0; index < numRowsDisplayed; index++) {
        let shareholderName = shareholders[index].name;
    
        let div = document.createElement('div');
        
        div.innerHTML = 
        `
        <div>
            <a href="https://navigarelabs.co.za/#/markets/za/perspective/asset-managers/229/deltas?data-set=104&type=month-on-month">
                <div class="flex justify-between border-b-2 cursor-pointer border-nvg-blue tableRow hover:text-nvg-green active:text-nvg-gold">
                    <div class="flex-1 border-nvg-blue pl-1">${shareholderName}</div>
                </div>
            </a>
        <div/>
        `;
    
        shareholderTable.appendChild(div);    
    }
}

function clearTable(table) {
    let aTags = table.querySelectorAll('a');
    aTags.forEach((aTag) => {
        aTag.remove();
    });
}

renderSharesTable(shares)
renderShareholderTable(shareholders)

shareSearchBar.addEventListener('input', (e)=> {
    let orderedShares = searchShares(shares, e.target.value)
    clearTable(shareTable)
    renderSharesTable(orderedShares)
})

shareholderSearchBar.addEventListener('input', (e)=> {
    let orderedShareholders = searchShareholders(shareholders, e.target.value)
    clearTable(shareholderTable)
    renderShareholderTable(orderedShareholders)
})