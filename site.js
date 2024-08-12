
const audio = new Audio("audio/Drive.mp3");

$("#mainBody").one("click", function () {
    audio.loop = true;
    audio.play();

    ChangeStatement("Strap in, the fun is about to begin!");

    setTimeout(
        function () {
            ChangeStatement("It\'s showtime!");
            Thrust(0.5);
            SpeedChange(0.5);

            setTimeout(
                function () {
                    Thrust(0.3);
                    SpeedChange(0.3);

                    setTimeout(
                        function () {
                            Thrust(0.8);
                            SpeedChangeSideway(0.8);

                            setTimeout(
                                function () {
                                    Thrust(0.5);
                                    SpeedChange(0.5);

                                    setTimeout(
                                        function () {
                                            Thrust(0.8);
                                            SpeedChange(0.8);
                                            audio.volume = 0.5;

                                            setTimeout(
                                                function () {
                                                    NoThrust(1.2);
                                                    SpeedChange(1.2);
                                                    audio.volume = 0.2;

                                                    setTimeout(
                                                        function () {
                                                            NoThrust();
                                                            SpeedChange(0);
                                                            audio.pause();
                                                            ChangeStatement("Hope your drive was a hoot!");
                                                        }, 3000);

                                                }, 2000);

                                        }, 14000);

                                }, 9500);

                        }, 15000);

                }, 2000);

        }, 19500);
});

function SpeedChange(speedInSeconds) {
    $('div .line').css({
        "animation": "road " + speedInSeconds +"s linear infinite"
    });
}

function Thrust(inSeconds) {
    $('html').css({
        "animation": "shake " + inSeconds +"s",
        "animation-iteration-count": "infinite"
    });
}

function SpeedChangeSideway(speedInSeconds) {
    $('div .line').css({
        "animation": "road " + speedInSeconds + "s linear infinite, sideLight " + speedInSeconds + "s 0.3s"
    });
}

function NoThrust() {
    $('html').css({
        "animation": "",
        "animation-iteration-count": ""
    });
}

function ChangeStatement(textValue) {
    $("#statement").text(textValue);
}