function menu() {
    console.log("Welcome to the Turkish Console Buddy's Menu! From here you can switch between different settings, Practice and Test. To ever come back here, just enter 'menu()' into the console!")
    console.log("Practice: View 4 Turkish sentences with English translations. Then use words from the sentences to translate a given English sentence! <br/> To go into Practice, enter 'practice()' into the console.")
    console.log("Test: Translate given Turkish words to English with no context sentences. <br/> To go into Test, enter 'test()' into the console.")
    console.log("When answering a Practice or Test, enter answer(set, [answer]) into the console, [answer] being your answer.")
}

var set = 0

function practice() {
    set = Math.floor(Math.random() * 3) + 1
    if (set == 1) {
        return "<b>Practice- set 1</b>; Remember to include the set variable and your answer all lowercase when answering!<br/>" +
                " top havadadır -> the ball is in the air <br/> top yerdedir -> the ball is on the ground <br/> hava yapraktadır -> the air is at the leaf<br/>" +
                "Translate to Turkish: <br/> the leaf is in the air";
    } else if (set == 2) {
        return "<b>Practice- set 2</b>; Remember to include the set variable and your answer all lowercase when answering! <br/>" +
                " Ali, lütfen kalemi ver -> Ali, please give the pencil <br/> Erdem, kalemi al -> Erdem, take the pencil <br/> Ada, silgiyi al -> Ada, take the eraser<br/>" +
                "Translate to Turkish: <br/> Esma, please give the eraser";
    } else if (set == 3) {
        return "<b>Practice- set 3<b/>; Remember to include the set variable and your answer all lowercase when answering!<br/>" +
                " Mehmet, kağıda yaz -> Mehmet, write on the paper <br/> Meral, yazıyı sil -> Meral, erase the writing <br/> Buse, kağıdı at -> Buse, throw the paper<br/>" +
                "Translate to Turkish: <br/> Ergin, erase the paper";
    }
}

function test() {
    set = Math.floor(Math.random() * 3) + 4
    if (set == 4) {
        return "<b>Test set 1<b/>; Remember to include the set variable and your answer all lowercase when answering!<br/>" +
                "Translate to English: <br/> Ahmet, topu Mehmet'e at";
    } else if (set == 5) {
        return "<b>Test set 2<b/>; Remember to include the set variable and your answer all lowercase when answering!<br/>" +
                "Translate to English: <br/> Iclal, lütfen yaprağa yaz";
    } else if (set == 6) {
        return "<b>Test set 3<b/>; Remember to include the set variable and your answer all lowercase when answering!<br/>" +
                "Translate to English: <br/> Osman, silgiyi havaya at";
    }
}

function answer(set, answer) {
    if (set == 1) {
        if (answer == "yaprak havadadır" || answer == "Yaprak havadadır") {
            return "That's right!! Good job!!!"
        } else {
            console.log("Not quite. The answer will be after the line, so if you want to try again, you've been warned not to peek!")
            console.log("The correct answer is 'yaprak havadadır'")
        }
    } else if (set == 2) {
        if (answer == "Esma, lütfen silgiyi ver") {
            return "That's right!! Good job!!!"
        } else {
            console.log("Not quite. The answer will be after the line, so if you want to try again, you've been warned not to peek!")
            console.log("The correct answer is 'Esma, lütfen silgiyi ver'")
        }
    } else if (set == 3) {
        if (answer == "Ergin, kağıdı sil") {
            return "That's right!! Good job!!!"
        } else {
            console.log("Not quite. The answer will be after the line, so if you want to try again, you've been warned not to peek!")
            console.log("The correct answer is 'Ergin, kağıdı sil'")
        }
    } else if (set == 4) {
        if (answer == "Ahmet, throw the ball to Mehmet") {
            return "That's right!! You go, Turkish-non-Turk!!! (presumably)"
        } else {
            console.log("Not quite. The answer will be after the line, so if you want to try again, you've been warned not to peek!")
            console.log("The correct answer is 'Ahmet, throw the ball to Mehmet'")
        }
    } else if (set == 5) {
        if (answer == "Iclal, please write on the leaf") {
            return "That's right!! Don't do this though, most leaves don't work well as writing material so it'd be a waste."
        } else {
            console.log("Not quite. The answer will be after the line, so if you want to try again, you've been warned not to peek!")
            console.log("The correct answer is 'Iclal, please write on the leaf'. User, please do not write on the leaf.")
        }
    } else if (set == 6) {
        if (answer == "Osman, throw the eraser to the air") {
            return "That's right!! User, you wouldn't go around throwing erasers in the air, would you?"
        } else {
            console.log("Not quite. The answer will be after the line, so if you want to try again, you've been warned not to peek!")
            console.log("The correct answer is 'Osman, throw the eraser to the air'. I don't know why Osman would do that; they might lose the eraser after.")
        }
    }
}

function set_test(set) {
    console.log(set)
}

menu()