function myFunction(){
    function getrandom(array){
        let result = Math.floor(Math.random()*array.length)
        return array[result]
    }
    let array = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]
    let result1 = getrandom(array)
    let result2 = getrandom(array)

    // Setting random value for image 1 using setAttribute

    let var1 = document.getElementById("img1")
    var1.setAttribute("src",result1)

    // Setting random value for image 2 using directly

    document.getElementById("img2").src = result2;

    // Changing the result

    if(result1 > result2){
        document.getElementById("title").innerHTML="🚩 Player 1 Wins"
    }
    else if(result1 < result2){
        document.getElementById("title").innerHTML="Player 2 Wins 🚩"
    }
    else{
        document.getElementById("title").innerHTML="🚩 Draw 🚩"
    }
}
