const images = document.getElementsByClassName('image');
const names = document.getElementsByClassName('name');
const roles = document.getElementsByClassName('role');
const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    }
]

// print team in console
for (let i = 0; i < team.length; i++) {
    for (const key in team[i]) {
        if (Object.hasOwnProperty.call(team[i], key)) {
            console.log(`${key}: ${team[i][key]}`);
        }
    }
}

// fill cards with data
for (let i = 0; i < team.length; i++) {
    for (const key in team[i]) {
        images[i].src = `img/${team[i].img}`;
        names[i].innerHTML = team[i].name;
        roles[i].innerHTML = team[i].role;
    }
}