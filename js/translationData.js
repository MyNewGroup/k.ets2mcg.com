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
        put("Aalborg", "올보르"); put("Aberdeen", "애버딘");
        put("Amsterdam", "암스테르담"); put("Ancona", "안코나"); put("Banská Bystrica", "반스카 비스트리차");
        put("B.Bystrica", "B.비스트리차"); put("Bari", "바리"); put("Bergen", "베르겐");
        put("Berlin", "베를린"); put("Bern", "베른"); put("Bialystok", "비아위스토크");
        put("Birmingham", "버밍엄"); put("Bologna", "볼로냐"); put("Bordeaux", "보르도");
        put("Bourges", "부르주"); put("Bratislava", "브라티슬라바"); put("Bremen", "브레멘");
        put("Brest", "브레스트"); put("Brno", "브르노"); put("Brussels", "브뤼셀");
        put("Budapest", "부다페스트"); put("Calais", "칼레"); put("Cambridge", "케임브리지");
        put("Cardiff", "카디프"); put("Carlisle", "칼라일"); put("Cassino", "카시노");
        put("Catania", "카타니아"); put("Catanzaro", "카탄차로"); put("Civaux", "시보");
        put("Clermont-Ferrand", "클레르몽페랑"); put("Clermont", "클레르몽"); put("Daugavpils", "다우가프필스");
        put("Debrecen", "데브레첸"); put("Dijon", "디종"); put("Dortmund", "도르트문트");
        put("Dover", "도버"); put("Dresden", "드레스덴"); put("Duisburg", "뒤스부르크");
        put("Düsseldorf", "뒤셀도르프"); put("Edinburgh", "에든버러"); put("Erfurt", "에르푸르트");
        put("Esbjerg", "에스비에르"); put("Europort", "유로포트"); put("Felixstowe", "펠릭스토우");
        put("Florence", "피렌체"); put("Frankfurt am Main", "프랑크푸르트 암 마인"); put("Frankfurt", "프랑크푸르트");
        put("Frederikshavn", "프레데릭스하운"); put("Gdańsk", "그단스크"); put("Gdynia", "그디니아");
        put("Ajaccio", "아작시오"); put("Bacău", "바커우"); put("Bastia", "바스티아");
        put("Bonifacio", "보니파시오"); put("Brăila", "브러일라"); put("Brașov", "브라쇼브");
        put("Bucharest", "부쿠레슈티"); put("Burgas", "부르가스"); put("Cagliari", "칼리아리");
        put("Călărași", "컬러라시"); put("Calvi", "칼비"); put("Cernavodă", "체르나보더");
        put("Cluj-Napoca", "클루지나포카"); put("Constanța", "콘스탄차"); put("Craiova", "크라이오바");
        put("Edirne", "에디르네"); put("Folkestone", "포크스턴"); put("Galați", "갈라치");
        put("Gedser", "게세르"); put("Geneva", "제네바"); put("Genoa", "제노바");
        put("Glasgow", "글래스고"); put("Golfech", "골페슈"); put("Gothenburg", "예테보리");
        put("Graz", "그라츠"); put("Grimsby", "그림즈비"); put("Groningen", "흐로닝언");
        put("Hamburg", "함부르크"); put("Hanover", "하노버"); put("Harwich", "하리치");
        put("Helsingborg", "헬싱보리"); put("Helsinki", "헬싱키"); put("Hirtshals", "히르트스할스");
        put("Hull", "헐"); put("Hunedoara", "후네도아라"); put("Iași", "이아시");
        put("IJmuiden", "에이마위던"); put("Innsbruck", "인스브루크"); put("İstanbul", "이스탄불");
        put("Jönköping", "옌셰핑"); put("Kalmar", "칼마르"); put("Kaliningrad", "칼리닌그라드");
        put("Kapellskär", "카펠스카"); put("Karlovo", "카를로보"); put("Karlskrona", "칼스크로나");
        put("Katowice", "카토비체"); put("Kassel", "카셀"); put("Kaunas", "카우나스");
        put("Kiel", "킬"); put("Klagenfurt am Wörthersee", "클라겐푸르트 암 뵈르테제"); put("Klagenfurt", "클라겐푸르트");
        put("Klaipėda", "클라이페다"); put("Copenhagen", "코펜하겐"); put("Cologne", "쾰른");
        put("Košice", "코시체"); put("Kotka", "코트카"); put("Kouvola", "코우볼라");
        put("Kozloduy", "코즐로두이"); put("Kraków", "크라쿠프"); put("Kristiansand", "크리스티안산");
        put("Kunda", "쿤다"); put("Lahti", "라티"); put("La Rochelle", "라로셀");
        put("Le Havre", "르아브르"); put("Le Mans", "르망"); put("Leipzig", "라이프치히");
        put("Liège", "리에주"); put("Liepāja", "리예파야"); put("L'Île-Rousse", "릴후스");
        put("Lille", "릴"); put("Limoges", "리모주"); put("Linköping", "린셰핑");
        put("Linz", "린츠"); put("Liverpool", "리버풀"); put("Livorno", "리보르노");
        put("Łódź", "우치"); put("London", "런던"); put("Loviisa", "로비사");
        put("Lublin", "루블린"); put("Luga", "루가"); put("Luxembourg", "룩셈부르크");
        put("Lyon", "리옹"); put("Magdeburg", "마그데부르크"); put("Malmö", "말뫼");
        put("Manchester", "맨체스터"); put("Mangalia", "만갈리아"); put("Mannheim", "만하임");
        put("Marseille", "마르세유"); put("Mažeikiai", "마제이카이아이"); put("Messina", "메시나");
        put("Metz", "메스"); put("Milan", "밀라노"); put("Montpellier", "몽펠리에");
        put("Munich", "뮌헨"); put("Naantali", "난탈리"); put("Nantes", "낭트");
        put("Naples", "나폴리"); put("Narva", "나르바"); put("Newcastle upon Tyne", "뉴캐슬 어폰 타인");
        put("Newcastle", "뉴캐슬"); put("Nice", "니스"); put("Nuremberg", "뉘른베르크");
        put("Nynäshamn", "뉘네스함"); put("Odense", "오덴세"); put("Olbia", "올비아");
        put("Olkiluoto", "올킬루오토"); put("Olsztyn", "올슈틴"); put("Örebro", "외레브로");
        put("Oslo", "오슬로"); put("Osnabrück", "오스나브뤼크"); put("Ostrava", "오스트라바");
        put("Paldiski", "팔디스키"); put("Palermo", "팔레르모"); put("Paluel", "팔루엘");
        put("Panevėžys", "파네베지스"); put("Paris", "파리"); put("Parma", "파르마");
        put("Pärnu", "패르누"); put("Pécs", "페치"); put("Pernik", "페르니크");
        put("Pescara", "페스카라"); put("Pirdop", "피르도프"); put("Pitești", "피테슈티");
        put("Pleven", "플레벤"); put("Plovdiv", "플로브디프"); put("Plymouth", "플리머스");
        put("Pori", "포리"); put("Porto-Vecchio", "포르토 베키오"); put("Poznań", "포즈난");
        put("Prague", "프라하"); put("Pskov", "프스코프"); put("Reims", "랭스");
        put("Rennes", "렌"); put("Reșița", "레시차"); put("Rēzekne", "레제크네");
        put("Riga", "리가"); put("Rome", "로마"); put("Roscoff", "로스코프");
        put("Rostock", "로스토크"); put("Rotterdam", "로테르담"); put("Ruse", "루세");
        put("Saint-Alban-du-Rhône", "생 알방 듀 혼느"); put("Smârdan", "스므르단"); put("St.Alban", "생 알방");
        put("Saint-Laurent", "생로랑"); put("St.Laurent", "생로랑"); put("Saint Petersburg", "상트페테르부르크");
        put("St.Petersburg", "상트페테르부르크"); put("Salzburg", "잘츠부르크"); put("Sassari", "사사리");
        put("Sheffield", "셰필드"); put("Šiauliai", "시아울리아이"); put("Södertälje", "쇠데르텔리에");
        put("Sofia", "소피아"); put("Sosnovy Bor", "소스노비보르"); put("Southampton", "사우샘프턴");
        put("Stavanger", "스타방에르"); put("Stockholm", "스톡홀름"); put("Strasbourg", "스트라스부르");
        put("Stuttgart", "슈투트가르트"); put("Suzzara", "수자라"); put("Swansea", "스완지");
        put("Szczecin", "슈체친"); put("Szeged", "세게드"); put("Tallinn", "탈린");
        put("Tampere", "탐페레"); put("Taranto", "타란토"); put("Târgu Mureș", "트르구무레슈");
        put("Tartu", "타르투"); put("Tekirdağ", "테키르다"); put("Terni", "테르니");
        put("Timișoara", "티미쇼아라"); put("Toulouse", "툴루즈"); put("Turin", "토리노");
        put("Travemünde", "트라베뮌데"); put("Trelleborg", "트렐레보리"); put("Turku", "투르쿠");
        put("Tyne", "타인"); put("Uppsala", "웁살라"); put("Utena", "우테나");
        put("Valmiera", "발미에라"); put("Varna", "바르나"); put("Västerås", "베스테로스");
        put("Växjö", "벡셰"); put("Veliko Tarnovo", "벨리코 터르노보"); put("Venice", "베네치아");
        put("Ventspils", "벤츠필스"); put("Verona", "베로나"); put("Villa San Giovanni", "빌라 산 조반니");
        put("Villa S.Giovanni", "빌라 산 조반니"); put("Vilnius", "빌뉴스"); put("Vyborg", "비보르크");
        put("Warsaw", "바르샤바"); put("Vienna", "비엔나"); put("Wrocław", "브로츠와프");
        put("Zürich", "취리히"); put("Aberdeen", "애버딘"); put("Alamogordo", "앨라모고도");
        put("Albuquerque", "앨버커키"); put("Artesia", "아르테시아"); put("Astoria", "애스토리아");
        put("Bakersfield", "베이커스필드"); put("Barstow", "바스토"); put("Bellingham", "벨링햄");
        put("Bend", "벤드"); put("Burns", "번즈"); put("Camp Verde", "캠프 베르드");
        put("Carlsbad", "칼즈배드"); put("Carson City", "카슨 시티"); put("Cedar City", "시더 시티");
        put("Clifton", "클리프턴"); put("Clovis", "클로비스"); put("Colville", "콜빌");
        put("Coos Bay", "코어스 베이"); put("Ehrenberg", "에렌버그"); put("El Centro", "엘센트로");
        put("Elko", "엘코"); put("Ely", "일리"); put("Eugene", "유진");
        put("Eureka", "유레카"); put("Everett", "에버렛"); put("Farmington", "파밍턴");
        put("Flagstaff", "플래그스태프"); put("Fresno", "프레즈노"); put("Gallup", "갤럽");
        put("Grand Canyon", "그랜드 캐니언"); put("Grand Canyon Village", "그랜드 캐니언 빌리지"); put("Grand Coulee", "그랜드 쿨리");
        put("Hobbs", "홉스"); put("Holbrook", "홀브룩"); put("Hornbrook", "혼브룩");
        put("Huron", "휴런"); put("Jackpot", "잭팟"); put("Kayenta", "카이옌타");
        put("Kennewick", "케너윅"); put("Kingman", "킹맨"); put("Klamath Falls", "클래머스 폴스");
        put("Lakeview", "레이크뷰"); put("Las Cruces", "라스크루시스"); put("Las Vegas", "라스베이거스");
        put("Logan", "로건"); put("Longview", "롱뷰"); put("Los Angeles", "로스앤젤레스");
        put("Medford", "메드퍼드"); put("Moab", "모아브"); put("Newport", "뉴포트");
        put("Nogales", "노게일스"); put("Oakdale", "오크데일"); put("Oakland", "오클랜드");
        put("Ogden", "오그던"); put("Olympia", "올림피아"); put("Omak", "오마크");
        put("Ontario", "온타리오"); put("Oxnard", "옥스나드"); put("Page", "페이지");
        put("Pajarito Rest Area", "파자리토 휴게소"); put("Pedro Travel Centre", "페드로 여행센터"); put("Pendleton", "펜들턴");
        put("Phoenix", "피닉스"); put("Pioche", "피오세"); put("Port Angeles", "포트앤젤레스");
        put("Portland", "포틀랜드"); put("Price", "프라이스"); put("Primm", "프림");
        put("Provo", "프로보"); put("Raton", "래턴"); put("Redding", "레딩");
        put("Reno", "리노"); put("Roswell", "로즈웰"); put("Sacramento", "새크라멘토");
        put("Salem", "세일럼"); put("Salina", "살리나"); put("Salt Lake City", "솔트레이크 시티");
        put("San Diego", "샌디에이고"); put("San Francisco", "샌프란시스코"); put("San Rafael", "샌 라파엘");
        put("San Simon", "샌 사이먼"); put("Santa Cruz", "산타크루즈"); put("Santa Fe", "산타페");
        put("Santa Maria", "산타마리아"); put("Seattle", "시애틀"); put("Show Low", "쇼로");
        put("Sierra Vista", "시에라 비스타"); put("Socorro", "소코로"); put("Spokane", "스포캔");
        put("St. George", "세인트 조지"); put("Stockton", "스톡턴"); put("Tacoma", "타코마");
        put("The Dalles", "더 댈러스"); put("Tonopah", "토노파"); put("Truckee", "트러키");
        put("Tucson", "투손"); put("Tucumcari", "투컴캐리"); put("Ukiah", "유키아");
        put("Vancouver", "밴쿠버"); put("Vernal", "버날"); put("Wenatchee", "웨나치");
        put("Winnemucca", "위네뮤카"); put("Yakima", "야키마"); put("Yuma", "유마");
        put("Aberdeen", "애버딘"); put("Alamogordo", "앨라모고도"); put("Albuquerque", "앨버커키");
        put("Artesia", "아르테시아"); put("Astoria", "애스토리아"); put("Bakersfield", "베이커스필드");
        put("Barstow", "바스토"); put("Bellingham", "벨링햄"); put("Bend", "벤드");
        put("Burns", "번즈"); put("Camp Verde", "캠프 베르드"); put("Carlsbad", "칼즈배드");
        put("Carson City", "카슨 시티"); put("Cedar City", "시더 시티"); put("Clifton", "클리프턴");
        put("Clovis", "클로비스"); put("Colville", "콜빌"); put("Coos Bay", "코어스 베이");
        put("Ehrenberg", "에렌버그"); put("El Centro", "엘센트로"); put("Elko", "엘코");
        put("Ely", "일리"); put("Eugene", "유진"); put("Eureka", "유레카");
        put("Everett", "에버렛"); put("Farmington", "파밍턴"); put("Flagstaff", "플래그스태프");
        put("Fresno", "프레즈노"); put("Gallup", "갤럽"); put("Grand Canyon", "그랜드 캐니언");
        put("Grand Canyon Village", "그랜드 캐니언 빌리지"); put("Grand Coulee", "그랜드 쿨리"); put("Hobbs", "홉스");
        put("Holbrook", "홀브룩"); put("Hornbrook", "혼브룩"); put("Huron", "휴런");
        put("Jackpot", "잭팟"); put("Kayenta", "카이옌타"); put("Kennewick", "케너윅");
        put("Kingman", "킹맨"); put("Klamath Falls", "클래머스 폴스"); put("Lakeview", "레이크뷰");
        put("Las Cruces", "라스크루시스"); put("Las Vegas", "라스베이거스"); put("Logan", "로건");
        put("Longview", "롱뷰"); put("Los Angeles", "로스앤젤레스"); put("Medford", "메드퍼드");
        put("Moab", "모아브"); put("Newport", "뉴포트"); put("Nogales", "노게일스");
        put("Oakdale", "오크데일"); put("Oakland", "오클랜드"); put("Ogden", "오그던");
        put("Olympia", "올림피아"); put("Omak", "오마크"); put("Ontario", "온타리오");
        put("Oxnard", "옥스나드"); put("Page", "페이지"); put("Pajarito Rest Area", "파자리토 휴게소");
        put("Pedro Travel Center", "페드로 여행센터"); put("Pendleton", "펜들턴"); put("Phoenix", "피닉스");
        put("Pioche", "피오세"); put("Port Angeles", "포트앤젤레스"); put("Portland", "포틀랜드");
        put("Price", "프라이스"); put("Primm", "프림"); put("Provo", "프로보");
        put("Raton", "래턴"); put("Redding", "레딩"); put("Reno", "리노");
        put("Roswell", "로즈웰"); put("Sacramento", "새크라멘토"); put("Salem", "세일럼");
        put("Salina", "살리나"); put("Salt Lake City", "솔트레이크 시티"); put("San Diego", "샌디에이고");
        put("San Francisco", "샌프란시스코"); put("San Rafael", "샌 라파엘"); put("San Simon", "샌 사이먼");
        put("Santa Cruz", "산타크루즈"); put("Santa Fe", "산타페"); put("Santa Maria", "산타마리아");
        put("Seattle", "시애틀"); put("Show Low", "쇼로"); put("Sierra Vista", "시에라 비스타");
        put("Socorro", "소코로"); put("Spokane", "스포캔"); put("St. George", "세인트 조지");
        put("Stockton", "스톡턴"); put("Tacoma", "타코마"); put("The Dalles", "더 댈러스");
        put("Tonopah", "토노파"); put("Truckee", "트러키"); put("Tucson", "투손");
        put("Tucumcari", "투컴캐리"); put("Ukiah", "유키아"); put("Vancouver", "밴쿠버");
        put("Vernal", "버날"); put("Wenatchee", "웨나치"); put("Winnemucca", "위네뮤카");
        put("Yakima", "야키마"); put("Yuma", "유마"); put("Aalborg", "올보르");
        put("Aberdeen", "애버딘"); put("Amsterdam", "암스테르담"); put("Ancona", "안코나");
        put("Banská Bystrica", "반스카 비스트리차"); put("B.Bystrica", "B.비스트리차"); put("Bari", "바리");
        put("Bergen", "베르겐"); put("Berlin", "베를린"); put("Bern", "베른");
        put("Bialystok", "비아위스토크"); put("Birmingham", "버밍엄"); put("Bologna", "볼로냐");
        put("Bordeaux", "보르도"); put("Bourges", "부르주"); put("Bratislava", "브라티슬라바");
        put("Bremen", "브레멘"); put("Brest", "브레스트"); put("Brno", "브르노");
        put("Brussels", "브뤼셀"); put("Budapest", "부다페스트"); put("Cagliari", "칼리아리");
        put("Calais", "칼레"); put("Cambridge", "케임브리지"); put("Cardiff", "카디프");
        put("Carlisle", "칼라일"); put("Cassino", "카시노"); put("Catania", "카타니아");
        put("Catanzaro", "카탄차로"); put("Civaux", "시보"); put("Clermont-Ferrand", "클레르몽페랑");
        put("Clermont", "클레르몽"); put("Daugavpils", "다우가프필스"); put("Debrecen", "데브레첸");
        put("Dijon", "디종"); put("Dortmund", "도르트문트"); put("Dover", "도버");
        put("Dresden", "드레스덴"); put("Duisburg", "뒤스부르크"); put("Düsseldorf", "뒤셀도르프");
        put("Edinburgh", "에든버러"); put("Erfurt", "에르푸르트"); put("Esbjerg", "에스비에르");
        put("Europort", "유로포트"); put("Felixstowe", "펠릭스토우"); put("Florence", "피렌체");
        put("Folkestone", "포크스턴"); put("Frankfurt am Main", "프랑크푸르트 암 마인"); put("Frankfurt", "프랑크푸르트");
        put("Frederikshavn", "프레데릭스하운"); put("Gdańsk", "그단스크"); put("Gdynia", "그디니아");
        put("Gedser", "게세르"); put("Geneva", "제네바"); put("Genoa", "제노바");
        put("Glasgow", "글래스고"); put("Golfech", "골페슈"); put("Gothenburg", "예테보리");
        put("Graz", "그라츠"); put("Grimsby", "그림즈비"); put("Groningen", "흐로닝언");
        put("Hamburg", "함부르크"); put("Hanover", "하노버"); put("Harwich", "하리치");
        put("Helsingborg", "헬싱보리"); put("Helsinki", "헬싱키"); put("Hirtshals", "히르트스할스");
        put("Hull", "헐"); put("IJmuiden", "에이마위던"); put("Innsbruck", "인스브루크");
        put("Jönköping", "옌셰핑"); put("Kalmar", "칼마르"); put("Kaliningrad", "칼리닌그라드");
        put("Kapellskär", "카펠스카"); put("Karlskrona", "칼스크로나"); put("Katowice", "카토비체");
        put("Kassel", "카셀"); put("Kaunas", "카우나스"); put("Kiel", "킬");
        put("Klagenfurt am Wörthersee", "클라겐푸르트 암 뵈르테제"); put("Klagenfurt", "클라겐푸르트"); put("Klaipėda", "클라이페다");
        put("Copenhagen", "코펜하겐"); put("Cologne", "쾰른"); put("Košice", "코시체");
        put("Kotka", "코트카"); put("Kouvola", "코우볼라"); put("Kraków", "크라쿠프");
        put("Kristiansand", "크리스티안산"); put("Kunda", "쿤다"); put("Lahti", "라티");
        put("La Rochelle", "라로셀"); put("Le Havre", "르아브르"); put("Le Mans", "르망");
        put("Leipzig", "라이프치히"); put("Liège", "리에주"); put("Liepāja", "리예파야");
        put("Lille", "릴"); put("Limoges", "리모주"); put("Linköping", "린셰핑");
        put("Linz", "린츠"); put("Liverpool", "리버풀"); put("Livorno", "리보르노");
        put("Łódź", "우치"); put("London", "런던"); put("Loviisa", "로비사");
        put("Lublin", "루블린"); put("Luga", "루가"); put("Luxembourg", "룩셈부르크");
        put("Lyon", "리옹"); put("Magdeburg", "마그데부르크"); put("Malmö", "말뫼");
        put("Manchester", "맨체스터"); put("Mannheim", "만하임"); put("Marseille", "마르세유");
        put("Mažeikiai", "마제이카이아이"); put("Messina", "메시나"); put("Metz", "메스");
        put("Milan", "밀라노"); put("Montpellier", "몽펠리에"); put("Munich", "뮌헨");
        put("Naantali", "난탈리"); put("Nantes", "낭트"); put("Naples", "나폴리");
        put("Narva", "나르바"); put("Newcastle upon Tyne", "뉴캐슬 어폰 타인"); put("Newcastle", "뉴캐슬");
        put("Nice", "니스"); put("Nuremberg", "뉘른베르크"); put("Nynäshamn", "뉘네스함");
        put("Odense", "오덴세"); put("Olbia", "올비아"); put("Olkiluoto", "올킬루오토");
        put("Olsztyn", "올슈틴"); put("Örebro", "외레브로"); put("Oslo", "오슬로");
        put("Osnabrück", "오스나브뤼크"); put("Ostrava", "오스트라바"); put("Paldiski", "팔디스키");
        put("Palermo", "팔레르모"); put("Paluel", "팔루엘"); put("Panevėžys", "파네베지스");
        put("Paris", "파리"); put("Parma", "파르마"); put("Pärnu", "패르누");
        put("Pécs", "페치"); put("Pescara", "페스카라"); put("Plymouth", "플리머스");
        put("Pori", "포리"); put("Poznań", "포즈난"); put("Prague", "프라하");
        put("Pskov", "프스코프"); put("Reims", "랭스"); put("Rennes", "렌");
        put("Rēzekne", "레제크네"); put("Riga", "리가"); put("Rome", "로마");
        put("Roscoff", "로스코프"); put("Rostock", "로스토크"); put("Rotterdam", "로테르담");
        put("Saint-Alban-du-Rhône", "생 알방 듀 혼느"); put("St.Alban", "생 알방"); put("Saint-Laurent", "생로랑");
        put("St.Laurent", "생로랑"); put("Saint Petersburg", "상트페테르부르크"); put("St.Petersburg", "상트페테르부르크");
        put("Salzburg", "잘츠부르크"); put("Sassari", "사사리"); put("Sheffield", "셰필드");
        put("Šiauliai", "시아울리아이"); put("Södertälje", "쇠데르텔리에"); put("Sosnovy Bor", "소스노비보르");
        put("Southampton", "사우샘프턴"); put("Stavanger", "스타방에르"); put("Stockholm", "스톡홀름");
        put("Strasbourg", "스트라스부르"); put("Stuttgart", "슈투트가르트"); put("Suzzara", "수자라");
        put("Swansea", "스완지"); put("Szczecin", "슈체친"); put("Szeged", "세게드");
        put("Tallinn", "탈린"); put("Tampere", "탐페레"); put("Taranto", "타란토");
        put("Tartu", "타르투"); put("Terni", "테르니"); put("Toulouse", "툴루즈");
        put("Turin", "토리노"); put("Travemünde", "트라베뮌데"); put("Trelleborg", "트렐레보리");
        put("Turku", "투르쿠"); put("Tyne", "타인"); put("Uppsala", "웁살라");
        put("Utena", "우테나"); put("Valmiera", "발미에라"); put("Västerås", "베스테로스");
        put("Växjö", "벡셰"); put("Venice", "베네치아"); put("Ventspils", "벤츠필스");
        put("Verona", "베로나"); put("Villa San Giovanni", "빌라 산 조반니"); put("Villa S.Giovanni", "빌라 산 조반니");
        put("Vilnius", "빌뉴스"); put("Vyborg", "비보르크"); put("Warsaw", "바르샤바");
        put("Vienna", "비엔나"); put("Wrocław", "브로츠와프"); put("Zürich", "취리히");
        put("Ajaccio", "아작시오"); put("Bacău", "바커우"); put("Bastia", "바스티아");
        put("Bonifacio", "보니파시오"); put("Brăila", "브러일라"); put("Brașov", "브라쇼브");
        put("Bucharest", "부쿠레슈티"); put("Burgas", "부르가스"); put("Călărași", "컬러라시");
        put("Calvi", "칼비"); put("Cernavodă", "체르나보더"); put("Cluj-Napoca", "클루지나포카");
        put("Constanța", "콘스탄차"); put("Craiova", "크라이오바"); put("Edirne", "에디르네");
        put("Galați", "갈라치"); put("Hunedoara", "후네도아라"); put("Iași", "이아시");
        put("İstanbul", "이스탄불"); put("Karlovo", "카를로보"); put("Kozloduy", "코즐로두이");
        put("L'Île-Rousse", "릴후스"); put("Mangalia", "만갈리아"); put("Pernik", "페르니크");
        put("Pirdop", "피르도프"); put("Pitești", "피테슈티"); put("Pleven", "플레벤");
        put("Plovdiv", "플로브디프"); put("Porto-Vecchio", "포르토 베키오"); put("Reșița", "레시차");
        put("Ruse", "루세"); put("Smârdan", "스므르단"); put("Sofia", "소피아");
        put("Târgu Mureș", "트르구무레슈"); put("Tekirdağ", "테키르다"); put("Timișoara", "티미쇼아라");
        put("Varna", "바르나"); put("Veliko Tarnovo", "벨리코 터르노보"); put("Aberdeen", "애버딘");
        put("Alamogordo", "앨라모고도"); put("Albuquerque", "앨버커키"); put("Artesia", "아르테시아");
        put("Astoria", "애스토리아"); put("Bakersfield", "베이커스필드"); put("Barstow", "바스토");
        put("Bellingham", "벨링햄"); put("Bend", "벤드"); put("Burns", "번즈");
        put("Camp Verde", "캠프 베르드"); put("Carlsbad", "칼즈배드"); put("Carson City", "카슨 시티");
        put("Cedar City", "시더 시티"); put("Clifton", "클리프턴"); put("Clovis", "클로비스");
        put("Colville", "콜빌"); put("Coos Bay", "코어스 베이"); put("Ehrenberg", "에렌버그");
        put("El Centro", "엘센트로"); put("Elko", "엘코"); put("Ely", "일리");
        put("Eugene", "유진"); put("Eureka", "유레카"); put("Everett", "에버렛");
        put("Farmington", "파밍턴"); put("Flagstaff", "플래그스태프"); put("Fresno", "프레즈노");
        put("Gallup", "갤럽"); put("Grand Canyon", "그랜드 캐니언"); put("Grand Canyon Village", "그랜드 캐니언 빌리지");
        put("Grand Coulee", "그랜드 쿨리"); put("Hobbs", "홉스"); put("Holbrook", "홀브룩");
        put("Hornbrook", "혼브룩"); put("Huron", "휴런"); put("Jackpot", "잭팟");
        put("Kayenta", "카이옌타"); put("Kennewick", "케너윅"); put("Kingman", "킹맨");
        put("Klamath Falls", "클래머스 폴스"); put("Lakeview", "레이크뷰"); put("Las Cruces", "라스크루시스");
        put("Las Vegas", "라스베이거스"); put("Logan", "로건"); put("Longview", "롱뷰");
        put("Los Angeles", "로스앤젤레스"); put("Medford", "메드퍼드"); put("Moab", "모아브");
        put("Newport", "뉴포트"); put("Nogales", "노게일스"); put("Oakdale", "오크데일");
        put("Oakland", "오클랜드"); put("Ogden", "오그던"); put("Olympia", "올림피아");
        put("Omak", "오마크"); put("Ontario", "온타리오"); put("Oxnard", "옥스나드");
        put("Page", "페이지"); put("Pajarito Rest Area", "파자리토 휴게소"); put("Pedro Travel Centre", "페드로 여행센터");
        put("Pendleton", "펜들턴"); put("Phoenix", "피닉스"); put("Pioche", "피오세");
        put("Port Angeles", "포트앤젤레스"); put("Portland", "포틀랜드"); put("Price", "프라이스");
        put("Primm", "프림"); put("Provo", "프로보"); put("Raton", "래턴");
        put("Redding", "레딩"); put("Reno", "리노"); put("Roswell", "로즈웰");
        put("Sacramento", "새크라멘토"); put("Salem", "세일럼"); put("Salina", "살리나");
        put("Salt Lake City", "솔트레이크 시티"); put("San Diego", "샌디에이고"); put("San Francisco", "샌프란시스코");
        put("San Rafael", "샌 라파엘"); put("San Simon", "샌 사이먼"); put("Santa Cruz", "산타크루즈");
        put("Santa Fe", "산타페"); put("Santa Maria", "산타마리아"); put("Seattle", "시애틀");
        put("Show Low", "쇼로"); put("Sierra Vista", "시에라 비스타"); put("Socorro", "소코로");
        put("Spokane", "스포캔"); put("St. George", "세인트 조지"); put("Stockton", "스톡턴");
        put("Tacoma", "타코마"); put("The Dalles", "더 댈러스"); put("Tonopah", "토노파");
        put("Truckee", "트러키"); put("Tucson", "투손"); put("Tucumcari", "투컴캐리");
        put("Ukiah", "유키아"); put("Vancouver", "밴쿠버"); put("Vernal", "버날");
        put("Wenatchee", "웨나치"); put("Winnemucca", "위네뮤카"); put("Yakima", "야키마");
        put("Yuma", "유마"); put("Aalborg", "올보르"); put("Aberdeen", "애버딘");
        put("Ajaccio", "아작시오"); put("Amsterdam", "암스테르담"); put("Ancona", "안코나");
        put("Bacău", "바커우"); put("Banská Bystrica", "반스카 비스트리차"); put("B.Bystrica", "B.비스트리차");
        put("Bari", "바리"); put("Bastia", "바스티아"); put("Bergen", "베르겐");
        put("Berlin", "베를린"); put("Bern", "베른"); put("Bialystok", "비아위스토크");
        put("Birmingham", "버밍엄"); put("Bologna", "볼로냐"); put("Bonifacio", "보니파시오");
        put("Bordeaux", "보르도"); put("Bourges", "부르주"); put("Brăila", "브러일라");
        put("Bratislava", "브라티슬라바"); put("Brașov", "브라쇼브"); put("Bremen", "브레멘");
        put("Brest", "브레스트"); put("Brno", "브르노"); put("Brussels", "브뤼셀");
        put("Bucharest", "부쿠레슈티"); put("Budapest", "부다페스트"); put("Burgas", "부르가스");
        put("Cagliari", "칼리아리"); put("Calais", "칼레"); put("Călărași", "컬러라시");
        put("Calvi", "칼비"); put("Cambridge", "케임브리지"); put("Cardiff", "카디프");
        put("Carlisle", "칼라일"); put("Cassino", "카시노"); put("Catania", "카타니아");
        put("Catanzaro", "카탄차로"); put("Cernavodă", "체르나보더"); put("Civaux", "시보");
        put("Clermont-Ferrand", "클레르몽페랑"); put("Clermont", "클레르몽"); put("Cluj-Napoca", "클루지나포카");
        put("Constanța", "콘스탄차"); put("Craiova", "크라이오바"); put("Daugavpils", "다우가프필스");
        put("Debrecen", "데브레첸"); put("Dijon", "디종"); put("Dortmund", "도르트문트");
        put("Dover", "도버"); put("Dresden", "드레스덴"); put("Duisburg", "뒤스부르크");
        put("Düsseldorf", "뒤셀도르프"); put("Edinburgh", "에든버러"); put("Edirne", "에디르네");
        put("Erfurt", "에르푸르트"); put("Esbjerg", "에스비에르"); put("Europort", "유로포트");
        put("Felixstowe", "펠릭스토우"); put("Florence", "피렌체"); put("Folkestone", "포크스턴");
        put("Frankfurt am Main", "프랑크푸르트 암 마인"); put("Frankfurt", "프랑크푸르트"); put("Frederikshavn", "프레데릭스하운");
        put("Galați", "갈라치"); put("Gdańsk", "그단스크"); put("Gdynia", "그디니아");
        put("Gedser", "게세르"); put("Geneva", "제네바"); put("Genoa", "제노바");
        put("Glasgow", "글래스고"); put("Golfech", "골페슈"); put("Gothenburg", "예테보리");
        put("Graz", "그라츠"); put("Grimsby", "그림즈비"); put("Groningen", "흐로닝언");
        put("Hamburg", "함부르크"); put("Hanover", "하노버"); put("Harwich", "하리치");
        put("Helsingborg", "헬싱보리"); put("Helsinki", "헬싱키"); put("Hirtshals", "히르트스할스");
        put("Hull", "헐"); put("Hunedoara", "후네도아라"); put("Iași", "이아시");
        put("IJmuiden", "에이마위던"); put("Innsbruck", "인스브루크"); put("İstanbul", "이스탄불");
        put("Jönköping", "옌셰핑"); put("Kalmar", "칼마르"); put("Kaliningrad", "칼리닌그라드");
        put("Kapellskär", "카펠스카"); put("Karlovo", "카를로보"); put("Karlskrona", "칼스크로나");
        put("Katowice", "카토비체"); put("Kassel", "카셀"); put("Kaunas", "카우나스");
        put("Kiel", "킬"); put("Klagenfurt am Wörthersee", "클라겐푸르트 암 뵈르테제"); put("Klagenfurt", "클라겐푸르트");
        put("Klaipėda", "클라이페다"); put("Copenhagen", "코펜하겐"); put("Cologne", "쾰른");
        put("Košice", "코시체"); put("Kotka", "코트카"); put("Kouvola", "코우볼라");
        put("Kozloduy", "코즐로두이"); put("Kraków", "크라쿠프"); put("Kristiansand", "크리스티안산");
        put("Kunda", "쿤다"); put("Lahti", "라티"); put("La Rochelle", "라로셀");
        put("Le Havre", "르아브르"); put("Le Mans", "르망"); put("Leipzig", "라이프치히");
        put("Liège", "리에주"); put("Liepāja", "리예파야"); put("L'Île-Rousse", "릴후스");
        put("Lille", "릴"); put("Limoges", "리모주"); put("Linköping", "린셰핑");
        put("Linz", "린츠"); put("Liverpool", "리버풀"); put("Livorno", "리보르노");
        put("Łódź", "우치"); put("London", "런던"); put("Loviisa", "로비사");
        put("Lublin", "루블린"); put("Luga", "루가"); put("Luxembourg", "룩셈부르크");
        put("Lyon", "리옹"); put("Magdeburg", "마그데부르크"); put("Malmö", "말뫼");
        put("Manchester", "맨체스터"); put("Mangalia", "만갈리아"); put("Mannheim", "만하임");
        put("Marseille", "마르세유"); put("Mažeikiai", "마제이카이아이"); put("Messina", "메시나");
        put("Metz", "메스"); put("Milan", "밀라노"); put("Montpellier", "몽펠리에");
        put("Munich", "뮌헨"); put("Naantali", "난탈리"); put("Nantes", "낭트");
        put("Naples", "나폴리"); put("Narva", "나르바"); put("Newcastle upon Tyne", "뉴캐슬 어폰 타인");
        put("Newcastle", "뉴캐슬"); put("Nice", "니스"); put("Nuremberg", "뉘른베르크");
        put("Nynäshamn", "뉘네스함"); put("Odense", "오덴세"); put("Olbia", "올비아");
        put("Olkiluoto", "올킬루오토"); put("Olsztyn", "올슈틴"); put("Örebro", "외레브로");
        put("Oslo", "오슬로"); put("Osnabrück", "오스나브뤼크"); put("Ostrava", "오스트라바");
        put("Paldiski", "팔디스키"); put("Palermo", "팔레르모"); put("Paluel", "팔루엘");
        put("Panevėžys", "파네베지스"); put("Paris", "파리"); put("Parma", "파르마");
        put("Pärnu", "패르누"); put("Pécs", "페치"); put("Pernik", "페르니크");
        put("Pescara", "페스카라"); put("Pirdop", "피르도프"); put("Pitești", "피테슈티");
        put("Pleven", "플레벤"); put("Plovdiv", "플로브디프"); put("Plymouth", "플리머스");
        put("Pori", "포리"); put("Porto-Vecchio", "포르토 베키오"); put("Poznań", "포즈난");
        put("Prague", "프라하"); put("Pskov", "프스코프"); put("Reims", "랭스");
        put("Rennes", "렌"); put("Reșița", "레시차"); put("Rēzekne", "레제크네");
        put("Riga", "리가"); put("Rome", "로마"); put("Roscoff", "로스코프");
        put("Rostock", "로스토크"); put("Rotterdam", "로테르담"); put("Ruse", "루세");
        put("Saint-Alban-du-Rhône", "생 알방 듀 혼느"); put("Smârdan", "스므르단"); put("St.Alban", "생 알방");
        put("Saint-Laurent", "생로랑"); put("St.Laurent", "생로랑"); put("Saint Petersburg", "상트페테르부르크");
        put("St.Petersburg", "상트페테르부르크"); put("Salzburg", "잘츠부르크"); put("Sassari", "사사리");
        put("Sheffield", "셰필드"); put("Šiauliai", "시아울리아이"); put("Södertälje", "쇠데르텔리에");
        put("Sofia", "소피아"); put("Sosnovy Bor", "소스노비보르"); put("Southampton", "사우샘프턴");
        put("Stavanger", "스타방에르"); put("Stockholm", "스톡홀름"); put("Strasbourg", "스트라스부르");
        put("Stuttgart", "슈투트가르트"); put("Suzzara", "수자라"); put("Swansea", "스완지");
        put("Szczecin", "슈체친"); put("Szeged", "세게드"); put("Tallinn", "탈린");
        put("Tampere", "탐페레"); put("Taranto", "타란토"); put("Târgu Mureș", "트르구무레슈");
        put("Tartu", "타르투"); put("Tekirdağ", "테키르다"); put("Terni", "테르니");
        put("Timișoara", "티미쇼아라"); put("Toulouse", "툴루즈"); put("Turin", "토리노");
        put("Travemünde", "트라베뮌데"); put("Trelleborg", "트렐레보리"); put("Turku", "투르쿠");
        put("Tyne", "타인"); put("Uppsala", "웁살라"); put("Utena", "우테나");
        put("Valmiera", "발미에라"); put("Varna", "바르나"); put("Västerås", "베스테로스");
        put("Växjö", "벡셰"); put("Veliko Tarnovo", "벨리코 터르노보"); put("Venice", "베네치아");
        put("Ventspils", "벤츠필스"); put("Verona", "베로나"); put("Villa San Giovanni", "빌라 산 조반니");
        put("Villa S.Giovanni", "빌라 산 조반니"); put("Vilnius", "빌뉴스"); put("Vyborg", "비보르크");
        put("Warsaw", "바르샤바"); put("Vienna", "비엔나"); put("Wrocław", "브로츠와프");
        put("Zürich", "취리히");

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
            d.text("TRIP")
            d.css("background-color", "green");
        } else {
            d.text("CONVOY")
            d.css("background-color", "tomato");
        }
    })

    $("#addUrlBtn").click(() => {
        let text = $("#addUrl").val();
        $("#addUrl").val("");
        if (text.trim().length == 0) {
            alert("NO URL SPECIFIED");
            return;
        }
        let arr = text.trim().split("\n");
        for (let i = 0; i < arr.length; i++) {
            files.push(arr[i]);
        }
        $("#urlCount").text("Photo URLs: " + files.length);
    })

    $("#clearUrlBtn").click(() => {
        files = [];
        $("#urlCount").text("Photo URLs: " + files.length);
    })

    $("#postTrip").click(() => {
        $("#postTrip").text("UPLOADING");
        var files0 = files.slice(0);
        var webhook = $("#token").val();
        if (webhook.length < 20) {
            alert("Wrong webhook url");
            $("#postTrip").text("UPLOAD");
            return;
        }
        $.ajax({
            url: webhook,
            method: "POST",
            async: true,
            cache: false,
            data: JSON.stringify({
                content: JSON.stringify({
                    text: $("#result").val(),
                    convoy: $("#isConvoy").text() === "CONVOY",
                    images: files0.splice(0, Math.min(7, files0.length))
                })
            }),
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
                $("#postTrip").text("UPLOAD");
                return;
            }
            $.ajax({
                url: webhook,
                method: "POST",
                async: true,
                cache: false,
                data: JSON.stringify({
                    content: JSON.stringify({
                        text: "",
                        convoy: $("#isConvoy").text() === "CONVOY",
                        images: files0.splice(0, Math.min(7, files0.length))
                    })
                }),
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
            if (curLine.startsWith("> "))
                curLine = curLine.substring(2);

            if (timeSkip && curLine.startsWith("- ")) continue;
            else if (timeSkip) timeSkip = false;

            if (isArtLine(curLine)) {
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