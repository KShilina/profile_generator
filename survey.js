const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "What is your name? Nicknames are also acceptable :) ",
  (answer) => {
    console.log(`Nice to meet you, ${answer}`);

    rl.question("What is an activity you like doing? ", (answer) => {
      console.log(` ${answer} Sounds interesting.`);

      rl.question("What do you listen to while doing that?  ", (answer) => {
        console.log(`Great choice.. ${answer}`);

        rl.question(
          "Which meal is your favorite (eg: dinner, brunch, etc.)? ",
          (answer) => {
            console.log(` ${answer} is very impontant to have.`);

            rl.question(
              "What is your favorite thing to eat for that meal? ",
              (answer) => {
                console.log(` ${answer} must be delicious.`);

                rl.question(
                  "Which sport is your absolute favorite? ",
                  (answer) => {
                    console.log(` ${answer} good choise.`);

                    rl.question(
                      "What is your superpower? In a few words, tell us what you are amazing at! ",
                      (answer) => {
                        console.log(` ${answer} sounds magic.`);

                        rl.close();
                      }
                    );
                  }
                );
              }
            );
          }
        );
      });
    });
  }
);
