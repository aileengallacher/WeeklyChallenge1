// 20.05.2020: Refactored Weekly Challenge console app
// changes made: (1) switch statement replaced if/else.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {

    let drinks = [{
        drink: "Cappuccino",
        hot: true,
        ingredients: ["espresso", "steamed milk", "foam"]
    },
    {
        drink: "Water",
        hot: false,
        ingredients: ["just water"]
    }]
    // let drink1 = {
    //     drink: "Cappuccino",
    //     hot: true,
    //     ingredients: ["espresso", "steamed milk", "foam"]
    // }

    // let drink2 = {
    //     drink: "Black Tea",
    //     hot: true,
    //     ingredients: ["hot water", "tea bag of your choice"]
    // }

    // let drink3 = {
    //     drink: "Orange Juice",
    //     hot: false,
    //     ingredients: ["just oranges"]
    // }

    // let drink4 = {
    //     drink: "Water",
    //     hot: false,
    //     ingredients: ["just water"]
    // }

    // let drink5 = {
    //     drink: "Latte",
    //     hot: true,
    //     ingredients: ["espresso", "steamed milk"]
    // }

    let userName = await askQuestion("Please enter your name: ");
    console.log();
    console.log(`Welcome ${userName}`);
    console.log();
    console.log("Choose an option below to see what drinks are available.");
    console.log();
    let shouldLoop = true;
    while (shouldLoop) {
        console.log("[1] Hot Drinks");
        console.log("[2] Cold Drinks");
        console.log("[3] Not Interested, show me all the drinks");
        let userOption = await askQuestion("Enter your selection.");
        console.log();
        switch (userOption) {
            case "1":        // HotDrinks
                function hotDrinksList(drinks) {
                    return drinks.hot == true;
                }
                console.log(drinks.filter(hotDrinksList));
                break;
            case "2":    // ColdDrinks
                function coldDrinksList(drinks) {
                    return drinks.hot = ! true;
                }
                console.log(drinks.filter(coldDrinksList));
                break;
            default:
                shouldLoop = false;
                break;
        }
        console.log("Are you here?")
        console.log();
        console.log(`You have selected ${drink1.drink}.`)
        let outputIngredients = "The ingredients are ";
        for (let i = 0; i < drink1.ingredients.length; i++) {
            let drinkChecked = drink1.ingredients[i];
            outputIngredients += drinkChecked;
            if (i == drink1.ingredients.length - 2) {   // For the second last element 
                outputIngredients += " and ";
            } else if (i == drink1.ingredients.length - 1) {   // For the last element
                outputIngredients += ".";
            } else {                            // For all the other elements
                outputIngredients += ", ";
            }
        }
        console.log(outputIngredients);
        break;
            case "2":
        console.log(`You have selected ${drink2.drink}.`);
        let outputIngredients2 = "The ingredients are ";
        for (let i = 0; i < drink2.ingredients.length; i++) {
            let drinkChecked = drink2.ingredients[i];
            outputIngredients2 += drinkChecked;
            if (i == drink2.ingredients.length - 2) {
                outputIngredients2 += " and ";
            } else if (i == drink2.ingredients.length - 1) {
                outputIngredients2 += ".";
            } else {
                outputIngredients2 += ", ";
            }
        }
        console.log(outputIngredients2);
        break;
            case "3":
        console.log(`You have selected ${drink3.drink}.`);
        let outputIngredients3 = "The ingredients are ";
        for (let i = 0; i < drink3.ingredients.length; i++) {
            let drinkChecked = drink3.ingredients[i];
            outputIngredients3 += drinkChecked;
            if (i == drink3.ingredients.length - 2) {
                outputIngredients3 += " and ";
            } else if (i == drink3.ingredients.length - 1) {
                outputIngredients3 += ".";
            } else {
                outputIngredients3 += ", ";
            }
        }
        console.log(outputIngredients3);
        break;
            case "4":
        console.log(`You have selected ${drink4.drink}.`);
        let outputIngredients4 = "The ingredients are ";
        for (let i = 0; i < drink4.ingredients.length; i++) {
            let drinkChecked = drink4.ingredients[i];
            outputIngredients4 += drinkChecked;
            if (i == drink4.ingredients.length - 2) {
                outputIngredients4 += " and ";
            } else if (i == drink4.ingredients.length - 1) {
                outputIngredients4 += ".";
            } else {
                outputIngredients4 += ", ";
            }
        }
        console.log(outputIngredients4);
        break;
            case "5":
        console.log(`You have selected ${drink5.drink}.`);
        let outputIngredients5 = "The ingredients are ";
        for (let i = 0; i < drink5.ingredients.length; i++) {
            let drinkChecked = drink5.ingredients[i];
            outputIngredients5 += drinkChecked;
            if (i == drink5.ingredients.length - 2) {
                outputIngredients5 += " and ";
            } else if (i == drink5.ingredients.length - 1) {
                outputIngredients5 += ".";
            } else {
                outputIngredients5 += ", ";
            }
        }
        console.log(outputIngredients5);
        break;
            case "6":
        shouldLoop = false;
        break;
            default:
        console.log("!! Invalid option. Select an option between 1 and 6 !!");
    }
    console.log();
}
console.log(`Thank you, enjoy your drink ${userName}!`);
console.log();
}
Program().then(() => {
    process.exit(0);
});