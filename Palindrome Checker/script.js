const button = document.getElementById("button");
button.addEventListener("click", () => {
    const input = document.getElementById("input").value;
    const display = document.getElementById("display");

    function isPalindrome(str) {
        let reversed = "";
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }
        return reversed === str;
    }

    const inputString = input.toLowerCase();
    const result = isPalindrome(inputString);

    if (result) {
        display.value = "Is Palindrome";
        display.style.color = "#4CAF50";
    } else {
        display.value = "Is Not Palindrome";
        display.style.color = "red";
    }
});
