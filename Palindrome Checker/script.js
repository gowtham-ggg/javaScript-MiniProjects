const button = document.getElementById("button");
button.addEventListener("click", () => {
    const input = document.getElementById("input").value;
    const display = document.getElementById("display");

    function isPalindrome(str) {
        let reversed = "";
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }
        return reversed;
    }

    const inputString = input;
    const result = isPalindrome(input);

    if (result === inputString) {
        display.value = "Is Palindrome";
        display.style.color = "#4CAF50";
    } else {
        display.value = "Is Not Palindrome"; 
        display.style.color = "red";
    }
});