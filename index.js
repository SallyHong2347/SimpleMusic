// play sound
function playSound(musicName) {
  let sound = new Audio(musicName);
  sound.play();
}

// corresponding sound
function makeSound(ele) {
  switch(ele) {
    // percusion
    case "w":
      playSound("sounds/tom-1.mp3");
      break;
    case "a":
      playSound("sounds/tom-2.mp3");
      break;
    case "s":
      playSound("sounds/tom-3.mp3");
      break;
    case "d":
      playSound("sounds/tom-4.mp3");      
      break;
    case "j":
      playSound("sounds/kick-bass.mp3");
      break;
    case "k":
      playSound("sounds/crash.mp3");
      break;
    case "l":
      playSound("sounds/snare.mp3");
      break;
    // notes
    case "1":
      playSound("sounds/do.wav");
      break;
    case "2":
      playSound("sounds/re.wav");
      break;
    case "3":
      playSound("sounds/mi.wav");
      break;
    case "4":
      playSound("sounds/fa.wav");
      break;
    case "5":
      playSound("sounds/so.wav");
      break;
    case "6":
      playSound("sounds/la.wav");
      break;
    case "7":
      playSound("sounds/ti.mp3");
      break;
    case "8":
      playSound("sounds/do2.wav");
      break;
    }
}

// playing sound visual
function getTapped(name) {
  var ele = $("."+name);
  ele.addClass("pressed");
  setTimeout(function () {
    ele.removeClass("pressed");
  }, 100);
}

// convert number to piano key
function convert(char) {
  switch (char) {
    case "1":
      return "do";
    case "2":
      return "re";
    case "3":
      return "mi";
    case "4":
      return "fa";
    case "5":
      return "so";
    case "6":
      return "la";
    case "7":
      return "ti";
    case "8":
      return "do2";
    default:
      return char;
  }
}




// use mouse click to trigger sound
$(".drum, .note").click(function() {
  makeSound(this.textContent);
  getTapped(convert(this.textContent));
});

// $(".note").click(function () {
//   makeSound(this.textContent);
//   let classArr = this.className.split(" "); // split class by space
//   getTapped(classArr[0]);
// });


// use keyboard to trigger sound
$(document).keypress(function(event) {
  makeSound(event.key);
  getTapped(convert(event.key));
});


// play the sequence from player input
function playSequence(seq1, seq2) {
  let str1 = $(seq1).val();
  let str2 = $(seq2).val();
  let maxLength = Math.max(str1.length, str2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < str1.length) {
      setTimeout(makeSound, 200 * i, str1[i]);
      setTimeout(getTapped, 200 * i, convert(str1[i]));
    }
    if (i < str2.length) {
      setTimeout(makeSound, 200 * i, str2[i]);
      setTimeout(getTapped, 200 * i, convert(str2[i]));
    }

  }
}

$(".play").click(function () {
  playSequence(".input1", ".input2");
});



