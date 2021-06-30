//list of players ready to be picked
players = [' anna', ' emma', ' lily', ' ella', ' elle', ' ava', ' dayna', ' negg', ' eve', ' eva', ' evie', ' bob', ' ricky', ' brin', ' hana', ' juliet', ' riny', ' janice', ' poppet', ' randay', ' goby', ' hobba wobba', ' cherry', ' john'];

// asks the user how many players to sort into teams
    let teams = prompt('how many players would you like in each team?')

    while (teams > (players.length/2)||isNaN(teams)||teams == ' '||teams == null){
      console.log('sorry that is not an option. Pick a number from 1 - 12')
      teams = prompt('how many players would you like in each team?')  }

//       else if(isNaN(teams)||teams == ' '||teams == null){
// console.log('that is not a number. Please enter a number')
// let teams = prompt('how many players would you like in each team?')}
      
      
        
      

          





//sets value for round

let round = 0
//sets value as no. of players on the list
let length = players.length
//sets team 1 as a list
let team1 = []
//sets team2 as a list
let team2 = []
//starts loop


  do {

    //random pick
    //picks a random number
    random1 = Math.floor(Math.random() * length + 0)
    //prints name associated with that number in the list
    player1 = (players[random1])

    //adds randomly slected player to team 1
    team1.push(player1)

    //remove random person from list
    players.splice(random1, 1)
    //takes 1 off the length of list of players
    length--



    //random pick
    //picks a random number
    random2 = Math.floor(Math.random() * players.length + 0)
    //prints name associated with that number in the list
    player2 = (players[random2])

    //adds selected player to team 2
    team2.push(player2)
    //remove random person from list
    players.splice(random2, 1)


    //adding 1 to the value of team
    round++
    //taking 1 off the length of the players list
    length--
  }

  //conditions the loop will run for
  while (round < teams)


  //printing the list of members in the team

  console.log(' this is team 1: ' + team1)
  console.log('this is team 2: ' + team2)


