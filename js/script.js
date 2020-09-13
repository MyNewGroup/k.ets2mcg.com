class GameCity {
}
const cities = new Map();
function city(cn, cne, cnl) {
    var cityInstance = new GameCity();
    cityInstance.cityName = cn;
    cityInstance.cityNameEng = cne;
    cityInstance.cityNameLoc = cnl;
    cities.set(cne, cityInstance);
}

keywords = new Map();
function put(key, value) {
    keywords.set(key, value);
}
function value(key) {
    return keywords.get(key);
}

class Translator {
    artChars = "▀█";
    isArtLine(text) {
        var strText = "";
        strText = text;
        for (let i = 0; i < strText.length; i++) {
            if (artChars.includes(strText.charAt(i))) {
                return true;
            }
        }
        return false;
    }
    translateLine(original, useOriginalCityName = false) {
        var text0 = original;
        text0 = original;
        for (let v of keywords.keys()) {
            while (text0.includes(v))
                text0 = text0.replace(v, keywords.get(v));
        }
        a: for (let v of cities.keys()) {
            while (text0.includes(v) && v !== cities.get(v)) {
                console.log(useOriginalCityName);
                var newl = "";
                if (useOriginalCityName) {
                    newl = text0.replace(v, cities.get(v).cityName);
                } else {
                    newl = text0.replace(v, cities.get(v).cityNameLoc);
                }
                if (text0 === newl) continue a;
                text0 = newl;
            }
        }
        return text0;
    }
    constructor() {
        //City Names
        city("Aalborg", "Aalborg", "올보르")
        city("Aberdeen", "Aberdeen", "애버딘")
        city("Ajaccio", "Ajaccio", "아작시오")
        city("Saint-Alban-du-Rhône", "Saint-Alban-du-Rhone", "생 알방 듀 혼느")
        city("St.Alban", "St.Alban", "생 알방")
        city("Amsterdam", "Amsterdam", "암스테르담")
        city("Bacău", "Bacau", "바커우")
        city("Bastia", "Bastia", "바스티아")
        city("Bergen", "Bergen", "베르겐")
        city("Berlin", "Berlin", "베를린")
        city("Bern", "Bern", "베른")
        city("Białystok", "Bialystok", "비아위스토크")
        city("Birmingham", "Birmingham", "버밍엄")
        city("Bonifacio", "Bonifacio", "보니파시오")
        city("Bordeaux", "Bordeaux", "보르도")
        city("Bourges", "Bourges", "부르주")
        city("Brașov", "Brasov", "브라쇼브")
        city("Bratislava", "Bratislava", "브라티슬라바")
        city("Bremen", "Bremen", "브레멘")
        city("Brest", "Brest", "브레스트")
        city("Brno", "Brno", "브르노")
        city("Brussel", "Brussels", "브뤼셀")
        city("Brussel", "Brussel", "브뤼셀")
        city("București", "Bucharest", "부쿠레슈티")
        city("Budapest", "Budapest", "부다페스트")
        city("Бургас", "Burgas", "부르가스")
        city("Banská Bystrica", "Banska Bystrica", "반스카 비스트리차")
        city("B.Bystrica", "B.Bystrica", "B.비스트리차")
        city("Calais", "Calais", "칼레")
        city("Călărași", "Calarasi", "컬러라시")
        city("Calvi", "Calvi", "칼비")
        city("Cambridge", "Cambridge", "케임브리지")
        city("Cardiff", "Cardiff", "카디프")
        city("Carlisle", "Carlisle", "칼라일")
        city("Cernavodă", "Cernavoda", "체르나보더")
        city("Civaux", "Civaux", "시보")
        city("Clermont-Ferrand", "Clermont-Ferrand", "클레르몽페랑")
        city("Clermont", "Clermont", "클레르몽")
        city("Cluj-Napoca", "Cluj-Napoca", "클루지나포카")
        city("Constanța", "Constanta", "콘스탄차")
        city("Craiova", "Craiova", "크라이오바")
        city("Daugavpils", "Daugavpils", "다우가프필스")
        city("Debrecen", "Debrecen", "데브레첸")
        city("Dijon", "Dijon", "디종")
        city("Dortmund", "Dortmund", "도르트문트")
        city("Dover", "Dover", "도버")
        city("Dresden", "Dresden", "드레스덴")
        city("Duisburg", "Duisburg", "뒤스부르크")
        city("Düsseldorf", "Dusseldorf", "뒤셀도르프")
        city("Edinburgh", "Edinburgh", "에든버러")
        city("Edirne", "Edirne", "에디르네")
        city("Erfurt", "Erfurt", "에르푸르트")
        city("Esbjerg", "Esbjerg", "에스비에르")
        city("Felixstowe", "Felixstowe", "펠릭스토우")
        city("Frankfurt am Main", "Frankfurt am Main", "프랑크푸르트 암 마인")
        city("Frankfurt", "Frankfurt", "프랑크푸르트")
        city("Frederikshavn", "Frederikshavn", "프레데릭스하운")
        city("Galați", "Galati", "갈라치")
        city("Gdańsk", "Gdansk", "그단스크")
        city("Gdynia", "Gdynia", "그디니아")
        city("Gedser", "Gedser", "게세르")
        city("Genève", "Geneva", "제네바")
        city("Genova", "Genoa", "제노바")
        city("Glasgow", "Glasgow", "글래스고")
        city("Golfech", "Golfech", "골페슈")
        city("Göteborg", "Gothenburg", "예테보리")
        city("Graz", "Graz", "그라츠")
        city("Grimsby", "Grimsby", "그림즈비")
        city("Groningen", "Groningen", "흐로닝언")
        city("Hamburg", "Hamburg", "함부르크")
        city("Hannover", "Hanover", "하노버")
        city("Harwich", "Harwich", "하리치")
        city("Helsingborg", "Helsingborg", "헬싱보리")
        city("Helsinki", "Helsinki", "헬싱키")
        city("Hirtshals", "Hirtshals", "히르트스할스")
        city("Hull", "Hull", "헐")
        city("Hunedoara", "Hunedoara", "후네도아라")
        city("Iași", "Iasi", "이아시")
        city("IJmuiden", "IJmuiden", "에이마위던")
        city("Innsbruck", "Innsbruck", "인스브루크")
        city("İstanbul", "Istanbul", "이스탄불")
        city("Jönköping", "Jonkoping", "옌셰핑")
        city("Калининград", "Kaliningrad", "칼리닌그라드")
        city("Kalmar", "Kalmar", "칼마르")
        city("Kapellskär", "Kapellskar", "카펠스카")
        city("Карлово", "Karlovo", "카를로보")
        city("Karlskrona", "Karlskrona", "칼스크로나")
        city("Kassel", "Kassel", "카셀")
        city("Katowice", "Katowice", "카토비체")
        city("Kaunas", "Kaunas", "카우나스")
        city("Kiel", "Kiel", "킬")
        city("Klagenfurt am Wörthersee", "Klagenfurt am Worthersee", "클라겐푸르트 암 뵈르테제")
        city("Klagenfurt", "Klagenfurt", "클라겐푸르트")
        city("Klaipėda", "Klaipeda", "클라이페다")
        city("København", "Copenhagen", "코펜하겐")
        city("Köln", "Cologne", "쾰른")
        city("Košice", "Kosice", "코시체")
        city("Kotka", "Kotka", "코트카")
        city("Kouvola", "Kouvola", "코우볼라")
        city("Козлодуй", "Kozloduy", "코즐로두이")
        city("Kraków", "Krakow", "크라쿠프")
        city("Kristiansand", "Kristiansand", "크리스티안산")
        city("Kunda", "Kunda", "쿤다")
        city("Lahti", "Lahti", "라티")
        city("La Rochelle", "La Rochelle", "라로셀")
        city("Saint-Laurent", "Saint-Laurent", "생로랑")
        city("St.Laurent", "St.Laurent", "생로랑")
        city("Le Havre", "Le Havre", "르아브르")
        city("Leipzig", "Leipzig", "라이프치히")
        city("Le Mans", "Le Mans", "르망")
        city("Liège", "Liege", "리에주")
        city("Liepāja", "Liepaja", "리예파야")
        city("L'Île-Rousse", "L'Ile-Rousse", "릴후스")
        city("Lille", "Lille", "릴")
        city("Limoges", "Limoges", "리모주")
        city("Linköping", "Linkoping", "린셰핑")
        city("Linz", "Linz", "린츠")
        city("Liverpool", "Liverpool", "리버풀")
        city("Łódź", "Lodz", "우치")
        city("London", "London", "런던")
        city("Loviisa", "Loviisa", "로비사")
        city("Lublin", "Lublin", "루블린")
        city("Луга", "Luga", "루가")
        city("Luxembourg", "Luxembourg", "룩셈부르크")
        city("Lyon", "Lyon", "리옹")
        city("Magdeburg", "Magdeburg", "마그데부르크")
        city("Malmö", "Malmo", "말뫼")
        city("Manchester", "Manchester", "맨체스터")
        city("Mangalia", "Mangalia", "만갈리아")
        city("Mannheim", "Mannheim", "만하임")
        city("Marseille", "Marseille", "마르세유")
        city("Mažeikiai", "Mazeikiai", "마제이카이아이")
        city("Metz", "Metz", "메스")
        city("Milano", "Milan", "밀라노")
        city("Montpellier", "Montpellier", "몽펠리에")
        city("München", "Munich", "뮌헨")
        city("Naantali", "Naantali", "난탈리")
        city("Nantes", "Nantes", "낭트")
        city("Narva", "Narva", "나르바")
        city("Newcastle-upon-Tyne", "Newcastle upon Tyne", "뉴캐슬 어폰 타인")
        city("Newcastle", "Newcastle", "뉴캐슬")
        city("Nice", "Nice", "니스")
        city("Nürnberg", "Nuremberg", "뉘른베르크")
        city("Nynäshamn", "Nynashamn", "뉘네스함")
        city("Odense", "Odense", "오덴세")
        city("Olkiluoto", "Olkiluoto", "올킬루오토")
        city("Olsztyn", "Olsztyn", "올슈틴")
        city("Örebro", "Orebro", "외레브로")
        city("Oslo", "Oslo", "오슬로")
        city("Osnabrück", "Osnabruck", "오스나브뤼크")
        city("Ostrava", "Ostrava", "오스트라바")
        city("Paldiski", "Paldiski", "팔디스키")
        city("Paluel", "Paluel", "팔루엘")
        city("Panevėžys", "Panevezys", "파네베지스")
        city("Paris", "Paris", "파리")
        city("Pärnu", "Parnu", "패르누")
        city("Pécs", "Pecs", "페치")
        city("Перник", "Pernik", "페르니크")
        city("Санкт-Петербург", "Saint Petersburg", "상트페테르부르크")
        city("С.Петербург", "St.Petersburg", "상트페테르부르크")
        city("Пирдоп", "Pirdop", "피르도프")
        city("Pitești", "Pitesti", "피테슈티")
        city("Плевен", "Pleven", "플레벤")
        city("Пловдив", "Plovdiv", "플로브디프")
        city("Plymouth", "Plymouth", "플리머스")
        city("Pori", "Pori", "포리")
        city("Porto-Vecchio", "Porto-Vecchio", "포르토 베키오")
        city("Poznań", "Poznan", "포즈난")
        city("Praha", "Prague", "프라하")
        city("Псков", "Pskov", "프스코프")
        city("Reims", "Reims", "랭스")
        city("Rennes", "Rennes", "렌")
        city("Reșița", "Resita", "레시차")
        city("Rēzekne", "Rezekne", "레제크네")
        city("Rīga", "Riga", "리가")
        city("Roscoff", "Roscoff", "로스코프")
        city("Rostock", "Rostock", "로스토크")
        city("Rotterdam", "Rotterdam", "로테르담")
        city("Русе", "Ruse", "루세")
        city("Salzburg", "Salzburg", "잘츠부르크")
        city("Sheffield", "Sheffield", "셰필드")
        city("Šiauliai", "Siauliai", "시아울리아이")
        city("Södertälje", "Sodertalje", "쇠데르텔리에")
        city("Со́фия", "Sofia", "소피아")
        city("Сосновый Бор", "Sosnovy Bor", "소스노비보르")
        city("Southampton", "Southampton", "사우샘프턴")
        city("Stavanger", "Stavanger", "스타방에르")
        city("Stockholm", "Stockholm", "스톡홀름")
        city("Strasbourg", "Strasbourg", "스트라스부르")
        city("Stuttgart", "Stuttgart", "슈투트가르트")
        city("Swansea", "Swansea", "스완지")
        city("Szczecin", "Szczecin", "슈체친")
        city("Szeged", "Szeged", "세게드")
        city("Tallinn", "Tallinn", "탈린")
        city("Tampere", "Tampere", "탐페레")
        city("Târgu Mureș", "Targu Mures", "트르구무레슈")
        city("Tartu", "Tartu", "타르투")
        city("Tekirdağ", "Tekirdag", "테키르다")
        city("Timișoara", "Timisoara", "티미쇼아라")
        city("Torino", "Turin", "토리노")
        city("Toulouse", "Toulouse", "툴루즈")
        city("Travemünde", "Travemunde", "트라베뮌데")
        city("Trelleborg", "Trelleborg", "트렐레보리")
        city("Turku", "Turku", "투르쿠")
        city("Uppsala", "Uppsala", "웁살라")
        city("Utena", "Utena", "우테나")
        city("Valmiera", "Valmiera", "발미에라")
        city("Варна", "Varna", "바르나")
        city("Västerås", "Vasteras", "베스테로스")
        city("Växjö", "Vaxjo", "벡셰")
        city("Велико Търново", "Veliko Tarnovo", "벨리코 터르노보")
        city("Venezia", "Venice", "베네치아")
        city("Ventspils", "Ventspils", "벤츠필스")
        city("Verona", "Verona", "베로나")
        city("Vilnius", "Vilnius", "빌뉴스")
        city("Выборг", "Vyborg", "비보르크")
        city("Warszawa", "Warsaw", "바르샤바")
        city("Wien", "Vienna", "비엔나")
        city("Wrocław", "Wroclaw", "브로츠와프")
        city("Zürich", "Zurich", "취리히")

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
        put("(Hotel)", "(호텔)");
        put("(Port)", "(항구)");

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
        put("Purple", "보라색");
        put("Black", "검은색");

        //Other Texts
        put("(Gas Station)", "(주유소)");
        put("Point 1 and 3", "1, 3 포인트");
        put("Convoy Leader:", "컨보이 리더:");
        put("Convoy Tail:", "컨보이 후방:");

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
const translator = new Translator();

$(document).ready(() => {
    var resultDiv = $("#result");
    var files = [];
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

    $("#isConvoy").click(() => {
        var d = $("#isConvoy");
        if (d.text() === "CONVOY") {
            d.text("여행 채널에 올리기")
            d.css("background-color", "green");
        } else {
            d.text("컨보이 채널에 올리기")
            d.css("background-color", "tomato");
        }
    })

    $("#addUrlBtn").click(() => {
        let text = $("#addUrl").val();
        $("#addUrl").val("");
        if (text.trim().length == 0) {
            alert("설정한 URL이 없습니다.");
            return;
        }
        let arr = text.trim().split("\n");
        for (let i = 0; i < arr.length; i++) {
            files.push(arr[i]);
        }
        $("#urlCount").text("사진 URL 개수: " + files.length);
    })

    $("#clearUrlBtn").click(() => {
        files = [];
        $("#urlCount").text("사진 URL 개수: " + files.length);
    })

    $("#postTrip").click(() => {
        var files0 = files.slice(0);
        var webhook = $("#token").val();
        if (webhook.length < 20) {
            alert("디스코드 웹훅 URl이 잘못되었습니다.");
            $("#postTrip").text("게시!");
            return;
        }
        var imageSizeOnce = 20;
        function getMessageContent(affectList, isFirst) {
            return JSON.stringify({
                content: JSON.stringify({
                    text: isFirst ? $("#result").val() : "",
                    convoy: $("#isConvoy").text() === "컨보이 채널에 올리기",
                    images: affectList ? files0.splice(0, Math.min(imageSizeOnce, files0.length)) : files0.slice(0, Math.min(imageSizeOnce, files0.length))
                })
            });
        }
        while (getMessageContent(false, true).length >= 2000) {
            imageSizeOnce--;
            if (imageSizeOnce == 1) {
                alert("URL이 지나치게 깁니다.");
                $("#postTrip").text("게시!");
                return;
            }
        }
        $.ajax({
            url: webhook,
            method: "POST",
            async: true,
            cache: false,
            data: getMessageContent(true, true),
            async: false,
            contentType: "application/json",
            success: () => {
            },
            error: () => {
                alert("Error!");
            }
        })
        function ddd() {
            if (files0.length <= 0) {
                alert("Finished");
                $("#postTrip").text("게시!");
                return;
            }
            imageSizeOnce = 20;
            while (getMessageContent(false, false).length >= 2000) {
                imageSizeOnce--;
                if (imageSizeOnce == 1) {
                    alert("URL이 지나치게 깁니다.");
                    $("#postTrip").text("게시!");
                    return;
                }
            }

            $.ajax({
                url: webhook,
                method: "POST",
                async: true,
                cache: false,
                data: getMessageContent(true, false),
                async: false,
                contentType: "application/json",
                success: () => {

                },
                error: () => {
                    alert("Error!");
                }
            })
            setTimeout(ddd, 1500);
        }
        ddd();
    })

    $("#process").click(() => {
        useOriginalCityName = $("#useKoreanText").prop("checked") == false;
        $("#onFinish").show();

        var text = "";
        text = $("#input").val().trim();
        $("#result").val("");

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
            curLine = curLine.trim();
            if (curLine.startsWith("> "))
                curLine = curLine.substring(2);
            curLine = curLine.trim();

            if (timeSkip && curLine.startsWith("- ")) continue;
            else if (timeSkip) timeSkip = false;

            if (translator.isArtLine(curLine)) {
                buffer = curLine;
                appendText();
                continue;
            } else if (curLine.includes("Notified") || curLine.includes("Members") || curLine.includes("@everyone") || curLine.includes("<@&")) {
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
                if (!curLine.includes("**")) {
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
                curLine = "트럭, 트레일러, 스킨: 자유";
            }

            curLine = translator.translateLine(curLine);
            buffer = curLine;
            appendText();
        }
        if (buffer.length !== 0) append();
        $("#result").val($("#result").val().trim());
    })
})
