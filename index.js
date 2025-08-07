const line1 = "Hi. I'm Anuj.";
const line2 = "I like computers.";

const typedLine1 = document.getElementById("typed-line1");
const typedLine2 = document.getElementById("typed-line2");
const cursor1 = document.getElementById("cursor1");
const cursor2 = document.getElementById("cursor2");

cursor1.style.display = "inline-block";
cursor2.style.display = "none";

function typeLine(text, element, cursor, callback, speed = 60) {
    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
            cursor.style.display = "none";
            if (callback) callback();
        }
    }, speed);
}

typeLine(line1, typedLine1, cursor1, () => {
    setTimeout(() => {
        cursor2.style.display = "inline-block";
        typeLine(line2, typedLine2, cursor2);
    }, 500);
});
