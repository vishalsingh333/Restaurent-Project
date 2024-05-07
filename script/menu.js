const menuData = {
    breakfast: [
        {
            image:"/images/idli&sambhar.jpg",
            title:"Idli & Sambar",
            description:"Steamed rice cakes served with a lentil and vegetable stew.",
            price:"59$"
        },
        {
            image:"/images/dosa.jpg",
            title:"Dosa",
            description:" A crispy fermented crepe made from rice and lentil batter.",
            price:"29$"
        },
        {
            image:"/images/poha.jpg",
            title:"Poha",
            description:"Flattened rice flakes stir-fried with vegetables, spices, and sometimes nuts.",
            price:"29$"
        },
        {
            image:"/images/paratha.jpg",
            title:"Paratha",
            description:" A layered flatbread stuffed with various fillings like potatoes.",
            price:"19$"
        },
        {
            image:"/images/chole bhature.jpg",
            title:"Chole Bhature",
            description:"Spicy chickpea curry (chole) served with deep-fried leavened bread (bhature).",
            price:"29$"
        },
        {
            image:"/images/sabudana khichdi.jpg",
            title:"Sabudana Khichdi",
            description:"A light and healthy dish made with tapioca pearls, peanuts, and potatoes.",
            price:"29$"
        },
        {
            image:"/images/puri bhaji.jpg",
            title:"Puri Bhaji",
            description:"Deep-fried puffed bread served with a potato curry.",
            price:"49$"
        },
        {
            image:"/images/dhokla.jpg",
            title:"Dhokla",
            description:"Made with lentils and rice, dhokla is a good source of protein and carbohydrates.",
            price:"39$"
        }
        
    ],
    lunch: [
        {
            image:"/images/dal makhani.jpg",
            title:"Dal Makhani",
            description:"Creamy black lentil stew with butter and spices.",
            price:"29$"
        },
        {
            image:"/images/saag paneer.jpg",
            title:"Saag Paneer",
            description:" Spinach curry with paneer (Indian cottage cheese).",
            price:"29$"
        },
        {
            image:"/images/biryani.jpg",
            title:"Biryani",
            description:"Fragrant rice dish with meat, vegetables, or both.",
            price:"49$"
        },
        {
            image:"/images/veg pulao.jpg",
            title:"Veg Pulao",
            description:" Aromatic rice dish with vegetables.",
            price:"19$"
        },
        {
            image:"/images/kathiyawadi thali.jpg",
            title:"Kathiyawadi Thali",
            description:"A platter with various Gujarati dishes like vegetables, lentils, and flatbreads.",
            price:"89$"
        },
        {
            image:"/images/pasta.jpg",
            title:"Pasta",
            description:"Endless variations with different shapes, sauces (tomato, pesto, cream-based), and ingredients.",
            price:"39$"
        },
        {
            image:"/images/dumplings.jpg",
            title:"Dumplings",
            description:"Steamed or pan-fried pockets filled with vegetables, popular in various Asian cuisines.",
            price:"49$"
        },
        {
            image:"/images/salad.jpg",
            title:"Salads",
            description:"Variety of greens, vegetables, proteins (carrot, cucumber), and dressings.",
            price:"19$"
        }
    ],

    dinner: [
        {
            image:"/images/dal makhani.jpg",
            title:"Dal Makhani",
            description:"Creamy black lentil stew with butter and spices.",
            price:"29$"
        },
        {
            image:"/images/saag paneer.jpg",
            title:"Saag Paneer",
            description:" Spinach curry with paneer (Indian cottage cheese).",
            price:"29$"
        },
        {
            image:"/images/malai kofta.jpg",
            title:"Malai Kofta",
            description:"bread-balls made with paneer and nuts in a creamy gravy, a flavorful option.",
            price:"29$"
        },
        {
            image:"/images/veg pulao.jpg",
            title:"Veg Pulao",
            description:" Aromatic rice dish with vegetables.",
            price:"29$"
        },
        {
            image:"/images/kathiyawadi thali.jpg",
            title:"Kathiyawadi Thali",
            description:"A platter with various Gujarati dishes like vegetables, lentils, and flatbreads.",
            price:"89$"
        },
        {
            image:"/images/garlic naan.jpg",
            title:"Garlic Naan",
            description:"Soft and fluffy leavened flatbread cooked in a tandoor, perfect for scooping up curries.",
            price:"19$"
        },
        {
            image:"/images/Navratan Korma.jpg",
            title:"Navratan Korma",
            description:"Rich and creamy vegetable stew with nine different vegetables and nuts.",
            price:"59$"
        },
        {
            image:"/images/salad.jpg",
            title:"Salads",
            description:"Variety of greens, vegetables, proteins (carrot, cucumber), and dressings.",
            price:"19$"
        }
    ],

    dessert: [
        {
            image:"/images/Gulab Jamun Cheesecake.jpg",
            title:"Gulab Jamun Cheesecake",
            description:" A creamy cheesecake with hints of rosewater and cardamom, inspired by the beloved Gulab Jamun.",
            price:"19$"
        },
        {
            image:"/images/Shrikhand.jpg",
            title:"Shrikhand",
            description:"Layered dessert with creamy saffron-infused yogurt (Shrikhand) and fresh fruit compote.",
            price:"29$"
        },
        {
            image:"/images/Jalebi.jpg",
            title:"Jalebi",
            description:"Crispy, twisted sweet fritters drizzled with saffron syrup, inspired by the classic Jalebi.",
            price:"29$"
        },
        {
            image:"/images/meetha bhaat.jpg",
            title:"Meetha bhaat",
            description:" Aromatic rice dish with suger mixed.",
            price:"19$"
        },
        {
            image:"/images/Kheer.jpg",
            title:"Kheer",
            description:"Creamy rice pudding baked with a caramelized sugar crust, inspired by the comforting Kheer.",
            price:"39$"
        },
        {
            image:"/images/Rasmalai.jpg",
            title:"Rasmalai",
            description:"Layered dessert with juicy cheese dumplings (Rasmalai) swimming in a creamy saffron-milk reduction.",
            price:"69$"
        },
        {
            image:"/images/Mango Lassi Kulfi.jpg",
            title:"Mango Lassi Kulfi",
            description:"Made with mango puree, yogurt, and hints of cardamom, inspired by the popular drink Mango Lassi.",
            price:"69$"
        },
        {
            image:"/images/Rasgulla.jpg",
            title:"Rasgulla",
            description:"Rich and dense fudge with a touch of cardamom,just like gulab jamun",
            price:"39$"
        }
    ]
    ,

    drink: [
        {
            image:"/images/Chai.jpg",
            title:"Chai",
            description:"a spiced milk tea with cardamom, ginger, cinnamon, and other spices, is a classic choice.",
            price:"19$"
        },
        {
            image:"/images/Lassi.jpg",
            title:"Lassi",
            description:"A yogurt-based drink with various flavoring options like mango (aam lassi), rosewater (gulab lassi).",
            price:"29$"
        },
        {
            image:"/images/Aam Panna.jpg",
            title:"Aam Panna",
            description:"A tangy and refreshing drink made with raw mango pulp, perfect for beating the heat.",
            price:"29$"
        },
        {
            image:"/images/hot coffie.jpg",
            title:"Hot Coffie",
            description:"strong coffee brewed with a special metal filter, perfect for a caffeine kick after a meal.",
            price:"19$"
        },
        {
            image:"/images/cold coffie.jpg",
            title:"COld coffie",
            description:"strong coffee brewed with a special metal filter, perfect for a caffeine kick after a meal.",
            price:"39$"
        },
        {
            image:"/images/Buttermilk.jpg",
            title:"Buttermilk",
            description:"A simple yet refreshing drink made with churned yogurt, often spiced with cumin and coriander.",
            price:"69$"
        },
        {
            image:"/images/Sol Kadhi.jpg",
            title:"Sol Kadhi",
            description:"A light and tangy drink from Goa made with coconut milk, kokum.",
            price:"69$"
        },
        {
            image:"/images/Thandai.jpg",
            title:"Thandai",
            description:"A chilled beverage from North India made with milk, almonds, melon seeds, rosewater.",
            price:"39$"
        }
    ]
}

window.addEventListener('DOMContentLoaded', (event) => {
    // Get the Breakfast button
    const breakfastButton = document.getElementById('breakfast');
    
    // Programmatically click the Breakfast button
    breakfastButton.click();
});

const buttons = document.querySelectorAll('.menu-buttons');

buttons.forEach(button => {
    button.addEventListener("click", () => {
        setActiveButton(button);
        const category = button.id;
        displayMenuItems(category);
    });
});

function setActiveButton(clickedButton) {
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    clickedButton.classList.add('active');
}

function displayMenuItems(category){
    const menuButton = document.getElementById(category);
    menuButton.classList.add('active');
    const menuItemsContainer = document.getElementById('ItemsContainer');
    menuItemsContainer.innerHTML = "";
    const menuItems =  menuData[category];

    menuItems.forEach(dish => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
        <img class="menu-image" src="${dish.image}" alt="">
        
        <div class="menu-details">
            <div class="combined-menu">
                <h2 class="menu-title">${dish.title}</h2>
                <p class="menu-description">${dish.description}</p>
            </div>
            <button class="order-now">Order Now!</button>
            <span class="menu-price">${dish.price}</span>
        </div>
    `;
    itemDiv.classList.add('selected');
    menuItemsContainer.appendChild(itemDiv);
    }
    );

}