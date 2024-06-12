let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msgWinner = document.querySelector("#msg");

let turn_O = true;
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let count = 0;
boxes.forEach((box)=>
{
    box.addEventListener('click', ()=>
    {
        if (turn_O)
        {
            box.innerText = "O";
            turn_O = false;
        }
        else
        {
            box.innerText = "X";
            turn_O = true;
        }
        box.disabled = true;
        count++;
       let isWinner = checkWinner();
       if (count === 9 && !isWinner)
       {
        showDraw();
       }
    });
});

const disabledBoxes = () =>
{
    for (let box of boxes)
    {
        box.disabled = true;
    }
}

const enabledBoxes = () =>
{
    for (let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) =>
{
    msg.innerText = `Congratulations! ${winner} is the Winner of Game!`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
const showDraw = ()=>
{
    msgWinner.innerText = "Oops! Draw has occured...\nGood Luck for next time.";
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
const checkWinner = ()=>
{
    for (let pattern of winPatterns)
    {
        let pos_1 = boxes[pattern[0]].innerText;
        let pos_2 = boxes[pattern[1]].innerText;
        let pos_3 = boxes[pattern[2]].innerText;

        if (pos_1 != "" && pos_2 != "" && pos_3 != "")
        {
            if (pos_1 === pos_2 && pos_2 === pos_3)
            {
                showWinner(pos_1);
            }
        }
    }
}
const resetGame = () =>
{
    turn_O = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
    count = 0;
}
reset_btn.addEventListener('click',resetGame);
newGamebtn.addEventListener('click',resetGame);