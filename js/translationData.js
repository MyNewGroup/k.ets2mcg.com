keywords = new Map();
function put(key, value) {
    keywords.set(key, value);
}
function value(key) {
    return keywords.get(key);
}
class Translator {
    translate(original) {
        var text0 = original;
        text0 = original;
        for (let v of keywords.keys()) {
            while (text0.includes(v))
                text0 = text0.replace(v, keywords.get(v));
        }
        return text0;
    }
    constructor() {
        //City Names
        put("Amsterdam", "암스테르담");
        put("Bern", "베른");
        put("Berlin", "베를린");
        put("Bremen", "브레멘");
        put("Calais", "칼레");
        put("Carlisle", "칼라일");
        put("Cologne", "쾰른");
        put("Dijon", "디종");
        put("Dortmund", "도르트문트");
        put("Dover", "도버");
        put("Duisburg", "뒤스부르크");
        put("Dusseldorf", "뒤셀도르프");
        put("Erfurt", "에르푸르트");
        put("Frankfurt am Main", "프랑크푸르트 암 마인");
        put("Frankfurt", "프랑크푸르트");
        put("Graz", "그라츠");
        put("Hamburg", "함부르크");
        put("Hannover", "하노버");
        put("Innsbruck", "인스브루크");
        put("Klagenfurt", "클라겐푸르트");
        put("Lille", "릴");
        put("London", "런던");
        put("Luxembourg", "룩셈부르크");
        put("Lyon", "리옹");
        put("Mannheim", "만하임");
        put("Metz", "메스");
        put("Milan", "밀라노");
        put("Munich", "뮌헨");
        put("Nuremberg", "뉘른베르크");
        put("Paris", "파리");
        put("Prague", "프라하");
        put("Reims", "랭스");
        put("Rotterdam", "로테르담");
        put("Salzburg", "잘츠부르크");
        put("Strasbourg", "스트라스부르");
        put("Szczecin", "슈체친");
        put("Venice", "베네치아");
        put("Verona", "베로나");
        put("Zurich", "취리히");
        put("Stuttgart", "슈투트가르트");

        //Company Names
        put("Quarry", "채석장");
        put("Service", "정비소");
        put("Car Parking", "주차장");
        put("LKW", "LKS");
        put("Strokes", "발작");
        put("Port calais", "칼레 항구");
        put("Port Calais", "칼레 항구");
        put("Port dover", "도버 항구");
        put("Port Dover", "도버 항구");
        put("Hotel", "호텔");

        //Month Names
        put("January", "01");
        put("February", "02");
        put("March", "03");
        put("April", "04");
        put("May", "05");
        put("June", "06");
        put("July", "07");
        put("August", "08");
        put("September", "09");
        put("October", "10");
        put("November", "11");
        put("December", "12");

        //Color Names
        put("Blue", "파란색");
        put("Red", "빨간색");
        put("Green", "초록색");
        put("Orange", "주황색");
        put("White", "흰색");
        put("Yellow", "노란색");
        put("Gray", "회색");

        //Other Texts
        put("(Gas Station)", "(주유소)");
        put("Point 1 and 3", "1, 3 포인트");

        // Sentences
        put("Rules", "규칙");
        put("Join Discord to talk", "디스코드 음성 채팅방에 참여합니다");
        put("Listen to instructions of ETS2MCG Staff", "ETS2MCG 스태프의 지시에 따릅니다");
        put("Please take truck, trailer and skin like the detailed description above or photos below and follow our parking slot", "아래에 안내된 트럭, 트레일러, 스킨을 사용하고 주차 위치를 준수합니다");
        put("Please arrive at the starting point before 10 minutes", "출발 시간 10분 전에는 출발 장소에 도착합니다");
        put("When arrived finishing point, don't out", "목적지 도착 후 게임을 끄지 마세요");
        put("Wait for people to come and take photos", "모든 사람들이 도착해 사진을 찍을 때 까지 기다립니다");
    }
}

const artChars = "▀█";
const translator = new Translator();

function isArtLine(text) {
    var strText = "";
    strText = text;
    for (let i = 0; i < strText.length; i++) {
        if (artChars.includes(strText.charAt(i))) {
            return true;
        }
    }
    return false;
}
$(document).ready(() => {
    var resultDiv = $("#result");
    $(".emojiIncluded").each((_, elem) => {
        twemoji.parse(elem), {
            folder: 'svg',
            ext: 'svg'
        };
    });

    $("#copy").click(() => {
        const el = document.createElement('textarea');
        el.value = $("#result").val().trim();
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    })

    $("#postTrip").click(() => {
        var webhook = $("#token").val();
        function sendImage(url) {
            $.ajax({
                url: webhook,
                method: "POST",
                async: true,
                cache: false,
                data: JSON.stringify({
                    file: {
                        url: url
                    }
                }),
                contentType: "application/json",
                success: () => {
                    
                },
                error: () => {
                    alert("Error!");
                }
            })
        }
        $.ajax({
            url: webhook,
            method: "POST",
            async: true,
            cache: false,
            data: JSON.stringify({
                content: $("#result").val() 
            }),
            contentType: "application/json",
            success: () => {
                
            },
            error: () => {
                alert("Error!");
            }
        })
        var index = 0;
        var files = $("#files").val().trim().split("\n");
        function sendOne() {
            if(index >= files.length) {
                alert("Posted ALL!");
                return;
            }
            sendImage(files[index++]);
            setTimeout(sendOne, 1200);
        }
        sendOne();
    })

    $("#process").click(() => {
        $("#onFinish").show();

        var text = "";
        text = $("#input").val().trim();

        var buffer = "";

        function appendText() {
            console.log(buffer);
            resultDiv.val(resultDiv.val() + buffer.trim() + "\n");
            buffer = "";
        }

        var lines = text.split('\n');
        var timeSkip = false;
        for (let i = 0; i < lines.length; i++) {
            let curLine = lines[i];
            if (curLine.startsWith("> "))
                curLine = curLine.substring(2);

            if (timeSkip && curLine.startsWith("- ")) continue;
            else if (timeSkip) timeSkip = false;

            if (isArtLine(curLine)) {
                buffer = curLine;
                appendText();
                continue;
            } else if (curLine.includes("Notified") || curLine.includes("@everyone") || curLine.includes("<@&")) {
                buffer = "<@&666307984644898826>";
                appendText();
                continue;
            } else if (curLine.match(/.*★\s*ETS2MCG [tT][hH][eE] [tT][rR][iI][pP] [oO][nN] (.*[dD][aA][yY])\s*★.*/)) {
                let dayName = curLine.match(/.*★\s*ETS2MCG [tT][hH][eE] [tT][rR][iI][pP] [oO][nN] (.*[dD][aA][yY])\s*★.*/)[1].toLowerCase();
                if (dayName === "sunday") {
                    dayName = "일요일";
                } else if (dayName === "monday") {
                    dayName = "월요일";
                } else if (dayName === "tuesday") {
                    dayName = "화요일";
                } else if (dayName === "wednesday") {
                    dayName = "수요일";
                } else if (dayName === "thursday") {
                    dayName = "목요일";
                } else if (dayName === "friday") {
                    dayName = "금요일";
                } else if (dayName === "saturday") {
                    dayName = "토요일";
                }
                buffer = "**★ ETS2MCG " + dayName + " 여행 ★**";
                appendText();
                continue;
            } else if (curLine.includes("ETS2MCG Team Convoy")) {
                buffer = "**★ ETS2MCG 팀 컨보이 ★**";
                appendText();
                continue;
            } else if (curLine.includes("★") && (curLine.includes("Convoy") || curLine.includes("DLC") || curLine.includes("Trip"))) {
                if(!curLine.includes("**")) {
                    curLine = "**" + curLine + "**";
                }
                buffer = curLine;
                appendText();
                continue;
            }

            if (curLine.startsWith("Date:")) {
                let date = curLine.substring(5).trim();
                let dates = date.split(" ");
                if (dates.length == 3) {
                    let year = dates[2];
                    let month = dates[1];
                    let day = dates[0];

                    if (day.length == 1) day = "0" + day;
                    curLine = "날짜: " + year + "-" + month + "-" + day;
                } else {
                    curLine = "날짜: " + date;
                }
            } else if (curLine.startsWith("Route:")) {
                curLine = "경로:" + curLine.substring(6);
            } else if (curLine.startsWith("Start:")) {
                curLine = "출발:" + curLine.substring(6);
            } else if (curLine.startsWith("Stop:")) {
                curLine = "정차:" + curLine.substring(5);
            } else if (curLine.startsWith("Finish:")) {
                curLine = "도착:" + curLine.substring(7);
            } else if (curLine.startsWith("Truck:")) {
                curLine = "트럭:" + curLine.substring(6);
            } else if (curLine.startsWith("Trailer:")) {
                let data = curLine.substring(8);
                if (data.includes("Own Trailer")) {
                    data = " 자유";
                }
                curLine = "트레일러:" + data;
            } else if (curLine.startsWith("Skin:")) {
                curLine = "스킨:" + curLine.substring(5);
            } else if (curLine.startsWith("Server:")) {
                curLine = "서버:" + curLine.substring(7);
            } else if (curLine.startsWith("Chassis:")) {
                curLine = "섀시:" + curLine.substring(8);
            } else if (curLine.startsWith("Classic:")) {
                curLine = "(섀시라고 써야되는데 또 클래식이라 썼음)클래식:" + curLine.substring(8);
            } else if (curLine.startsWith("Time:")) {
                timeSkip = true;
                curLine = "시간: 22:00";
                buffer = curLine;
                appendText();
                continue;
            } else if (curLine.startsWith("- Truck: ")) {
                curLine = "- 트럭: " + curLine.substring(9);
            } else if (curLine.startsWith("- Trailer: ")) {
                curLine = "- 트레일러: " + curLine.substring(11);
            } else if (curLine.includes("Truck") && curLine.includes("Trailer") && curLine.includes("Skin") && curLine.includes("Free")) {
                curLine = "트럭, 트레일러, 스킨: 자유 (MCG Korea 스킨 사용 가능 <#703089691863285821>)";
            }

            curLine = translator.translate(curLine);
            buffer = curLine;
            appendText();
        }
        if (buffer.length !== 0) append();
        $("#result").val($("#result").val().trim());
    })
})