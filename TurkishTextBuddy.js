var set = 0
var pset = 0
function practice() {
    if (parseInt(document.getElementById('practiceset').value) == 1 || parseInt(document.getElementById('practiceset').value) == 2 || parseInt(document.getElementById('practiceset').value) == 3) {
        set = parseInt(document.getElementById('practiceset').value)
        pset = 0
    }
    while (set == pset) {
        set = Math.floor(Math.random() * 3) + 1
    }
    pset = set
    if (set == 1) {
        return "<b>Practice- set 1</b>; Remember to use Turkish characters when answering (if having trouble, copy-pasting works)!<br/>" +
                " top havadadır -> the ball is in the air <br/> top yerdedir -> the ball is on the ground <br/> hava yapraktadır -> the air is at the leaf<br/>" +
                "Translate to Turkish: <br/> the leaf is in the air";
    } else if (set == 2) {
        return "<b>Practice- set 2</b>; Remember to use Turkish characters when answering (if having trouble, copy-pasting works)! <br/>" +
                " Ali, lütfen kalemi ver -> Ali, please give the pencil <br/> Erdem, kalemi al -> Erdem, take the pencil <br/> Ada, silgiyi al -> Ada, take the eraser<br/>" +
                "Translate to Turkish: <br/> Esma, please give the eraser";
    } else if (set == 3) {
        return "<b>Practice- set 3</b>; Remember to use Turkish characters when answering (if having trouble, copy-pasting works)!<br/>" +
                " Mehmet, kağıda yaz -> Mehmet, write on the paper <br/> Meral, yazıyı sil -> Meral, erase the writing <br/> Buse, kağıdı at -> Buse, throw the paper<br/>" +
                "Translate to Turkish: <br/> Ergin, erase the paper";
    }
}

function test() {
    if (parseInt(document.getElementById('testset').value) == 1 || parseInt(document.getElementById('testset').value) == 2 || parseInt(document.getElementById('testset').value) == 3) {
        set = parseInt(document.getElementById('testset').value) + 3
        pset = 0
    }

    while (set == pset) {
        set = Math.floor(Math.random() * 3) + 4
    }
    pset = set
    if (set == 4) {
        return "<b>Test set 1</b>; Remember to use Turkish characters when answering (if having trouble, copy-pasting works)!<br/>" +
                "Translate to English: <br/> Ahmet, topu Mehmet'e at";
    } else if (set == 5) {
        return "<b>Test set 2</b>; Remember to use Turkish characters when answering (if having trouble, copy-pasting works)!<br/>" +
                "Translate to English: <br/> Iclal, lütfen yaprağa yaz";
    } else if (set == 6) {
        return "<b>Test set 3</b>; Remember to use Turkish characters when answering (if having trouble, copy-pasting works)!<br/>" +
                "Translate to English: <br/> Osman, silgiyi havaya at";
    }
}

function answer(set) {
    var answer = document.getElementById('answer').value
    if (set == 1) {
        if (answer == "yaprak havadadır" || answer == "Yaprak havadadır") {
            return "That's right!! Good job!!!"
        } else {
            return "Not quite. The answer will be after this line, so if you want to try again, you've been warned not to peek!<br/>" +
            "The correct answer is 'yaprak havadadır'"
        }
    } else if (set == 2) {
        if (answer == "Esma, lütfen silgiyi ver") {
            return "That's right!! Good job!!!"
        } else {
            return "Not quite. The answer will be after this line, so if you want to try again, you've been warned not to peek!<br/>" +
            "The correct answer is 'Esma, lütfen silgiyi ver'"
        }
    } else if (set == 3) {
        if (answer == "Ergin, kağıdı sil") {
            return "That's right!! Good job!!!"
        } else {
            return "Not quite. The answer will be after this line, so if you want to try again, you've been warned not to peek! <br/>" +
            "The correct answer is 'Ergin, kağıdı sil'"
        }
    } else if (set == 4) {
        if (answer == "Ahmet, throw the ball to Mehmet") {
            return "That's right!! You go, Turkish-non-Turk!!! (presumably)"
        } else {
            return "Not quite. The answer will be after this line, so if you want to try again, you've been warned not to peek!<br/>" +
            "The correct answer is 'Ahmet, throw the ball to Mehmet'. I hope Ahmet is not throwing the ball to hurt Mehmet. You wouldn't hurt a friend, would you, User?"
        }
    } else if (set == 5) {
        if (answer == "Iclal, please write on the leaf") {
            return "That's right!! Don't do this though, most leaves don't work well as writing material so it'd be a waste."
        } else {
            return "Not quite. The answer will be after this line, so if you want to try again, you've been warned not to peek!<br/>" +
            "The correct answer is 'Iclal, please write on the leaf'. User, please do not write on the leaf."
        }
    } else if (set == 6) {
        if (answer == "Osman, throw the eraser to the air") {
            return "That's right!! User, you wouldn't go around throwing erasers in the air, would you?"
        } else {
            return "Not quite. The answer will be after this line, so if you want to try again, you've been warned not to peek!<br/>" +
            "The correct answer is 'Osman, throw the eraser to the air'. I don't know why Osman would do that; they might lose the eraser after."
        }
    }
}

function devtest() {
    var ans = document.getElementById('answer').value
    return (ans)
}
let log_state = 0
function changelogstate() {
    if (log_state == 0) {
        log_state = 1
        document.getElementById('changelog').innerHTML = document.getElementById('changelogtext').innerHTML
        return ("Close Changelog")
    } else if (log_state == 1) {
        log_state = 0
        document.getElementById('changelog').innerHTML = ""
        return ("Open Changelog")
    }
}

menu()