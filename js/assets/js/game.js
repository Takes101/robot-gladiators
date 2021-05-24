var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100
var playerAttack = 10
var playerMoney = 100

// You can also log mutlipe values at once like this 
console.log(playerName, playerHealth, playerAttack)

var enemyNames = ["Roborto", "Bro Ryz", "Amy Adams"]
var enemyHealth = 20
var enemyAttack = 12


var fight = function(enemyName) {
    while (enemyHealth > 0 && playerHealth > 0) { 
        // ask player if they'd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
        console.log(promptFight)

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");



        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            // award player money for winning
            playerMoney = playerMoney + 20;

             // leave while() loop since enemy is dead
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health remaining.");
        }
        // remove players's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            // leave while() loop if player is dead
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health remaining.");
        }
    }
};

// function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");

    // if player still has health, player wins
    if (playerHealth > 0) {
        window.alert("Great job, you'vs won the game! You now have a score of " + playerMoney + ".");
    } 
    else {
        window.alert("You have been defeated. LOL");
    }


    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    } 
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
  };


var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 100;
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
             // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            // reset enemyHealth before starting new fight
            enemyHealth = 50

            // use debugger to pause script from running and check what's going on at that moment in the code
            debugger;

            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);

            // if there are still items left in array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                //ask player if they want to visit the shop
                var storeConfirm = window.confirm("The fight is over. Do you want to enter the shop?");

                // if yes, take them to store
                if (storeConfirm) {
                    shop();
                }
            } 
        }     
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
        
    }
    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};

var shop = function() {
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Enter one: REFILL, UPGRADE, or LEAVE.");
    
    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");

            // upgrade health and decrease money
            playerMoney = playerMoney - 7;
            playerHealth = playerHealth + 20;
            } 
            else {
                window.alert("You do not have enough money!");
            } 
            break;

        case "UPGRADE":    
        case "upgrade":
            if (playerMoney >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");

            // upgrade attack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            }
            else{
                window.alert("You do not have enough money!");
            }
            break;
        
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            break;
    
        case "default":
            window.alert("Please pick a valid option.");

            // call shop() again to force player to pick valid option
            shop();
            break;
    } 
};

// start the game when the page loads
startGame();

