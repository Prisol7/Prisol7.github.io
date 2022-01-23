        //User no longer has to manually type in the answer instead they can simply push a button 
        let userScore = 0;
        let computerScore = 0;
        let tie = 0
        let turns = 0;
        let gamescoreUser = 0;
        let gamescoreCom = 0;
        let gamescoreTie = 0;
        let glog = []
        gStatus = 0;
        let newLog = ''

        //just selects the proper elements  
        const rockbtn = document.querySelector('#rock');
        const paperbtn = document.querySelector('#paper');
        const matchUpUser = document.getElementById('#user')
        const matchUpComputer = document.getElementById('#computer')
        const scissorsbtn = document.querySelector('#scissors');
        const userElement = document.getElementById("userscore");
        const comElement = document.getElementById("comscore");
        const tieElement = document.getElementById("ties");
        //add doc selector for computer pick
        
        
        //function that determines the selection of the computer randomly
        let computerplay = () => {
            let selection = ['rock', 'paper', 'scissors']
            const random = Math.floor(Math.random() * selection.length)
            return(selection[random])
        }
        
        //takes user and computer input and returns a 0 for computer win; 1 for user win; 2 for tie
        let determineWinner = (answer, comanswer) => {


            if (answer == 'rock' ) {
                if (comanswer == 'paper') {
                    console.log(`computer wins: ${comanswer} beats ${answer}`)
                
                    return(
                        0
                    )
                } else if(comanswer == 'scissors') {
                    console.log(`I win: : ${answer} beats ${comanswer}`)
                  
                    return(1)
                }
                else{
                    console.log(`It is a tie: ${answer} equals ${comanswer}`)
                   
                    return(2)
                }
                
            } 
            else if(answer == 'paper') {
                if (comanswer == 'scissors') {
                    console.log(`computer wins: ${comanswer} beats ${answer}`)
                    return(0)
                } else if(comanswer == 'rock') {
                    console.log(`I win: : ${answer} beats ${comanswer}`)
                    return(1)
                }
                else{
                    console.log(`It is a tie: ${answer} equals ${comanswer}`)
                    return(2)
                }
            }
            else{
                if (comanswer == 'rock') {
                    console.log(`computer wins: ${comanswer} beats ${answer}`)
                    return(0)
                } else if(comanswer == 'paper') {
                    console.log(`I win: : ${answer} beats ${comanswer}`)
                    return(1)
                }
                else{
                    console.log(`It is a tie: ${answer} equals ${comanswer}`)
                    return(2)
                }
            }
        }

        let gameWinner = (userScore, computerScore, tie) => {
            if(userScore > computerScore){
                return 'You won the game'
            }
            else if(computerScore > userScore){
                return 'The computer won the game'
            }
            else if(computerScore == userScore){
                return 'It is a tie'
            }
        }

        let matchUp =(userScore, computerPick) => {
            console.log(computerPick)
            switch (userScore) {
                case 'rock':
                    document.getElementById('umatchup-image').src="./image/misc-pet-rock.svg"
                    break;
                case 'paper':
                    document.getElementById('umatchup-image').src="./image/loose_leaf_paper.svg"
                    break;
                case 'scissors':
                    document.getElementById('umatchup-image').src="./image/scissors_01.svg"
                    break;
                default:
                    break;
            }
            switch (computerPick) {
                case 'rock':
                    document.getElementById('cmatchup-image').src="./image/misc-pet-rock.svg"
                    break;
                case 'paper':
                    document.getElementById('cmatchup-image').src="./image/loose_leaf_paper.svg"
                    break;
                case 'scissors':
                    document.getElementById('cmatchup-image').src="./image/scissors_01.svg"
                    break;
                default:
                    break;
            }
        }
        //when a button is pushed, game runs and determines the winnerof the round and awards a point to user, computer, or tie
        let game = (userInput, computerplay, determineWinner) => {
                computerPick = computerplay();
                k = determineWinner( userInput, computerPick) 
                matchUp(userInput, computerPick)  //work in prgress

                if (k == 0 ) {
                    computerScore++;
                    gamescoreCom++;
                    glog.push(`User: ${userInput} Computer: ${computerPick}`)
                    comElement.innerHTML = `${computerScore}`;  //updates the dom with the score
                } else if (k == 1){
                    userScore++
                    gamescoreUser++
                    glog.push(`User: ${userInput} Computer: ${computerPick}`)
                    userElement.innerHTML = `${userScore}`;
                }
                else{
                    tie++
                    gamescoreTie++
                    glog.push(`User: ${userInput} Computer: ${computerPick} `)
                    tieElement.innerHTML = `${tie}`;
                }
            turns++
            //every 5 turns is considered a game and will display the game winner
            if(turns>4){
                
                let winner = gameWinner(gamescoreUser, gamescoreCom, gamescoreTie)
                const newDiv = document.createElement("div");
                const newContent = document.createTextNode(`${winner}`);
              


                newDiv.style.cssText += 'text-align: center; margin-bottom: 20px; height: 150px; width: 300px; margin: 0 auto; background-color: #faf0e6; padding-top: 20px;';
                newDiv.appendChild(newContent);
                for (let index = 0; index < glog.length; index++) {
                    console.log(glog[index])
                    newDiv.appendChild(document.createElement('br'))
                    newDiv.appendChild(document.createTextNode(glog[index]))
                    
                }

                const currentDiv = document.getElementById("results");
                let parentDiv = currentDiv.parentNode
                parentDiv.insertBefore(newDiv, currentDiv.nextSibling);
              
                turns = 0
                gamescoreUser = 0;
                gamescoreCom=0;
                gamescoreTie = 0;
                glog = []
            }
            
            

            console.log(`User: ${userScore} - Computer: ${computerScore} - ties: ${tie}`)
        }
        /*game(userInput, computerplay, determineWinner)*/

        rockbtn.onclick = () => game('rock', computerplay, determineWinner);
        paperbtn.onclick = () => game('paper', computerplay, determineWinner);
        scissorsbtn.onclick = () => game('scissors', computerplay, determineWinner);
        