let sideMenuToggler = document.querySelector("#sideMenuToggler")

let sideMenu = document.querySelector("#sideMenu")

let markets = document.querySelector("#markets")
let earnings = document.querySelector("#earnings")
let property = document.querySelector("#property")
let banking = document.querySelector("#banking")
let hint = document.querySelector("#hint")
let links = document.querySelectorAll(".nvg-submenu li a")

let hints = { 
    "Shares":{ heading: "Search and explore a share", description: "Find out who are the major buyers, holders, or sellers of a share, and what other shares they are trading. See how the share price is affected by foreign inflows and outflows." },
    "Shareholders":{ heading: "Search and explore shareholders", description: "Discover the portfolio composition and performance of any shareholder. Learn what other shares they are interested in and how they diversify their investments." }, 
    "Market Dashboard":{ heading: "Understand characteristics of diverse markets", description: "Analyze the daily trend and impact of foreign flows on different markets. Examine the foreign ownership statistics and how they vary across sectors and regions. Track the shifts in market structure and concentration over time." }, 
    "Calls & Reports":{ heading: "Detailed report per call", description: "Get the most important sentences and key takeaways from any call transcript. Access an in-depth sentiment report that shows the tone and emotion of the speakers. Read concise summaries for all calls in a series or a category." }, 
    "Data Explorer":{ heading: "Discover Trends", description: "Explore interactive data visualizations that reveal the patterns and insights from a large collection of call transcripts. Uncover the underlying themes and topics that emerge from the conversations." }, 
    "NaviChat BETA":{ heading: "Launch the global corporate transcript interaction tool", description: "Engage with comprehensive transcripts from over 13,000 companies worldwide. Ask natural language questions and get instant answers. Powered by the cutting-edge advancements in Large Language Model technology." }, 
    "Country":{ heading: "Explore listed property companies at country level", description: "Compare and contrast the listed property companies in a country based on various metrics and indicators. See how the trends in the mall car park affect the property market. Assess the health and spending power of the average household." }, 
    "Listed Companies":{ heading: "Explore listed property companies at property owner level", description: "Dig deeper into the listed property companies and their retail portfolios. Identify which company has the highest or lowest activity level, occupancy rate, or rental income. Find out where the problem malls or the growth opportunities are for each company." }, 
    "BA 900 Explorer":{ heading: "View banking data on dashboard", description: "View the BA900 data from the South African Reserve Bank (SARB) on a user-friendly dashboard. Filter, sort, and visualize the data by various categories and dimensions. Export the data to Excel or PDF formats." } 
}

let menuItems = [markets, earnings, property, banking]

function openCloseSideMenu() {
    if(sideMenu.classList.contains('w-24')){
        sideMenu.classList.remove('w-24');
        sideMenu.classList.add('w-96');
    } else {
        sideMenu.classList.remove('w-96');
        sideMenu.classList.add('w-24');
    }

    let openCloseIcon = sideMenuToggler.querySelector('i')
    if(openCloseIcon.classList.contains('bx-x')){
        openCloseIcon.classList.remove('bx-x');
        openCloseIcon.classList.add('bx-menu');
    }
    else {
        openCloseIcon.classList.remove('bx-menu');
        openCloseIcon.classList.add('bx-x');
    }

    menuItems.forEach(menuItem => {
        menuItem.querySelector('.nvg-menu-item').classList.toggle('hidden')
        menuItem.querySelector('.nvg-submenu').classList.toggle('hidden')
    });
}

sideMenuToggler.addEventListener('click', ()=> {
    openCloseSideMenu()
})

menuItems.forEach(menuItem => {
    menuItem.querySelector('a').addEventListener('click', ()=> {
        let div = menuItem.querySelector('.nvg-submenu');
        if(sideMenu.classList.contains('w-24')){
            openCloseSideMenu()
            if (div.classList.contains('h-0')) {
                div.classList.remove('h-0', 'opacity-0', 'invisible');
                div.classList.add('h-auto', 'opacity-100', 'visible');
            }
        } 
        else {
            if (div.classList.contains('h-0')) {
                div.classList.remove('h-0', 'opacity-0', 'invisible');
                div.classList.add('h-auto', 'opacity-100', 'visible');
            } else {
                div.classList.remove('h-auto', 'opacity-100', 'visible');
                div.classList.add('h-0', 'opacity-0', 'invisible');
            }
        }
        
    })
});

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        let key = link.querySelector(".nvg-submenu-item").innerText
        let hintHeading = hint.querySelector('#hintHeading')
        let hintDescription = hint.querySelector('#hintDescription')
        hintHeading.innerText = hints[key].heading 
        hintDescription.innerText = hints[key].description
        hint.classList.remove('-z-50')
        hint.classList.add('z-50')
    })
    link.addEventListener('mouseout', () => {
        hint.classList.remove('z-50')
        hint.classList.add('-z-50')
    })
})