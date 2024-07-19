let currentChapter = '';
let currentEpisode = '';

const chapterEpisodeParodyNames = {
    chapter0: {
        1: {
            1: `"그래서 완성도와 신뢰성을 높이고자, 레퍼런스로 교수님의 석사시절 논문을 가져올까 합니―"`,
            2: "목가적인 연구의 나날이었다"
        }
    },
    chapter1: {
        1: {
            1: "낯선 천장이다",
            2: "불가능한 경우를 제외하고 남은 것은 아무리 이상하고 믿기지 않더라도 사실",
            3: "5700자",
            4: "졸프 터커, 킴블리 터커",
            5: "잎새에 이는 바람에도 나는 괴로워했다.",
            6: "이대로 잠들어 버리면 차라리 눈 떠지지 않길",
            
        },
        2: {
            1: "야 이 병신아, 티 좀 내지마",
            2: "작가 후기",
        },
        3: {
            1: "기분 나쁘지만 함부로 건드릴 수 없는 녀석. 그런데 이제 과학을 곁들인",
            2: "소형 원자로",
            3: "타불라",
            4: "양변에 로그를 취한다",
            5: "이제야 이쪽을 보는구나",
            6: "아아― 모르는 건가. 이것은 『』이라고 한다."
        },
        4: {
            1: "간지 떨어지다",
            2: "무기여 잘 있거라",
            3: "시무라",
            4: "콩",
            5: "콩"
        },
        5:{
            1: "나의 매드 사이언티스트는 그러지 않아",
            2: "권력은 총구에서 나온다",
            3: "권력에의 의지",
            4: "내 순정을 짓밟으면 그땐 나도 매드 사이언티스트가 되는 거야"
        },
        6:{
            1: "아, 앙증맞은 21세기의 추억이여!",
            2: "기만적인 신",
            3: "시선에서 out",
            4: "난 나보다 약한 자의 명령은 듣지 않는다",
            5: "쉬겠습니다, 내 의지로.",
            6: "실제 상황은 스타크래프트가 아니다",
            7: "하루 종일도 할 수 있어"
        },
        7: {
            1: "내가 우주의 진리를 좇는데, 일신의 고강함을 좇겠느냐?"
        },
        8:{
            1: "미친 15톤 덤프트럭",
            2: "뼈와 살이 분리",
            3: "해치웠나",
            4: "흑염룡",
            5: "저…저거!"
        }
    },
    chapter2: {
        1:{
            1: "제목",
            2:"여기 빛은 없다.",
            3: "어느 철학자",
            4: "우효",
            5: "가야할 때가 언제인지를 알고 가는 마법 말의 뒷모습은 얼마나 아름다운가"
        },
        2:{
            1: "고블린, 다리가 짧아 슬픈 짐승이여.",
            2: "옳게 된 영지",
        },
        3:{
            1:"호오오오우",
            2: "희망회로",
            3: "눈사람을 만들러 가자고 말하는 여동(女童) 같은 리듬의, 경쾌한 노크 소리.",            
        },
        4:{
            1:"'내가 그의 이름을 불러주었을 때 그는 나에게로 와서 꽃이 되었다.'라고 하지 않던가.",
            2:"오, 제라툴……."
        },
        5:{
            1: "이 녀석, 한 대만 맞아",
            2: "영지 관리를 좀 대국적으로 하십시오!",
            3: "카르밀라 카른슈타인",
            4: "코에스, 크랍, 믹",
            5: "로켓배송",
            6: "수상할 정도로 아는 게 많은 꼬마",
            7: "그렇게 물으시면 대답해드리는 게 인지상정"
        },
        6:{
            1: "죽고 사는 이치는 의심하지 않습니다"
        },
        7:{
            1: "미친 소리!"
        }
        
    },
    chapter3: {
        1: {
            1: "별의 몽견관",
            2: "입문식 중 나타나는 루닌의 형상과 비유",
            3: "태양에도 특허",
            4: "무소의 뿔",
            5: "그래도 지구는 돈다"
        },
        2:{
            1: "히히히, 못 가!",
            2: "그 날개, 제 거예요.",
            3: "사람의 성격을 16가지 유형으로 나누는 검사",
            4: "그냥 시체"
        },
        3:{
            1: "철이 없었죠. 마법이 좋아서 마법학교에 왔다는 자체가."
        },
        4:{
            1: "폭풍전야. 이따금 마주칠 때마다 나를 비웃던, 지금도 비웃는 이들에게 반박을 하지 않았다. 너희가 허접한지, 내가 허접한지는 결과가 말해줄 것이다.",
            2: "내 삶의 빛, 내 몸의 불이여. 나의 죄, 나의 영혼이여.",
            3: "두드려라. 그리 하면 열릴지니",
            4: "마음을 비우면 불 속에서도 서늘하리니.",
            5: "우리 사랑은 불장난",
            6: "소수를 세자…. 소수는 1과 자기 자신으로만 나누어지는 고독한 숫자… 내게 용기를 불어넣어 주지.",
            7: "여 하나 썰고",
            8: "히포…크레토스",
            9: "아. 그런 거였나. 완벽히 이해했어.",
            10: "GLaMOS"
        }
    },
    chapter4:{
        1:{
            1:"천민이면 천민답게… 바닥을 기어라!",
            2: "내 가랑이 밑으로 지나가라",
            3: "매드 사이언티스트식 웃기"
        },
        2:{
            1: "1학년 전원이 싸우다가 클레르가 우승하는 대회"
        },
        3:{
            1: `"죽어라, 벌레 같은 놈!", "불의 세례를 받아라!"`,
            2: "왜. 무엇이 제대로 되지 않느냐?",
            3: "최대 다수의 최대 지림",
            4: "어찌하여 두려워하느냐?",
            5: "오드리 벨로바",
            6: "앗… 아아……."
        },
        4:{

        },
        5:{
            1: "지건",
            2: "클레르 씨 그렇게 안 봤는데 정말 무서운 사람이네요"
        },
        6:{
            1: "현기증 난단 말이에요. 빨리 사 주세요.",
            2: "SP샵이 말을 하네",
            3: "인공지능을 때리고 싶다는 생각이 든 건 난생 처음이다",
            4: "ㅎㅎ;; ㅈㅅ.. ㅋㅋ!!",
            5: "BANG!"
        },
        7:{
            1: "황금고블린",
            2: "선 넘네…….",
            3: "친절한 말투에 그렇지 못한 태도",
            4: "넌 나에게 모욕감을 줬어.",

        },
        8:{
            1: "비밀친구",
            2: "쓰러져라",
            3: "동서남북으로 울부짖다",
            4: "미친 놈, 미친 놈"
        },
        9:{
            1: "니우",
            2: "마하 300의 속도로 차여 본 적 있나, 채운 군?",
            3: "위버멘쉬",
            4: "사람을 때리는 게 재미 있나?"
        },
        10:{
            1: "비글, 코카 스파니엘, 미니어쳐 슈나이저",
            2: "이 졸프 터커가 제일 좋아하는 것 중 하나는… 자신이 강하다고 생각하는 놈에게「NO」라고 거절하는 것!",
            3: "……끝… 때…진 끝… 게 ……야.",
            4: "테에엥……! 똥닝겐!",
            5: "누구? 저요?"
        },
        11:{
            1: "보라돌이",
            2: "스톡피쉬",
            3: "체크메이트의 거신병",
        },

        12:{
            1: "개발살",
            2: "넌 강하다, 멜피스. 허나 난 강함을 넘어섰다.",
            3: "너도 한 방 나도 한 방.",
            4: "웰치스",
            5: "쿨피스",
            6: "부가티 시론",
            7: "관우",
            8: "나, 강림",
            9: "몰?루",
            10: "나무가 없는 곳에서 이런 개수의 통나무 말뚝을 뽑아낼 수 있다니?!"
        },

        13:{
            1: "쏘아올린 불꽃, 밑에서 볼까 옆에서 볼까?",
            2: "자다가 오줌을 쌀지도 모르겠다",
            3: "초비사아아아앙",
            4: "장하다. 파이어네이도. 레닛사를 네 손으로 멸망시켜 버리렴.",
            5: "스모커가 아니라 흰수염이 뭉게뭉게열매를 먹었다면 이럴까 싶을 정도로 막대한 양",
            6: "이제 커튼콜 시간이다",
            7: "뇌명과 함께 사라져라",
            8: "하지만 버텨냈다",
            9: "데뎃",
            10: "내가 마나를 멈췄다……. 어떤 기분이지? 마법을 쓸 수 없는데 나와 마주 선 기분은? 지금부터! 경기를 끝장내는 데! 1초도 쓰지 않겠다!"
        },
        
        
    },
    chapter5:{
        1:{
            1: "그야… 재밌으니까.",
            2: "굉장해엄청나!",
            3: "알지. 세상에서 가장 안전한 탑에서 연구만 해서 순위 매기는 조직. 제1기사단이 잡은 마족이 몇 마린줄 알아? 마탑은 제1기사단한테 안 돼.",
            4: "할 말이 많지만 하지 않을게",
        },

        2:{
            1: "장엄의 홀",
            2: "호에에~",
            3: "듣고 보니 맞는 말이군. 논리적으로 반박할 수가 없다.",
            4: "F-22",
            5: "할카스",
            6: "계란을, 한 바구니에 담는다."
        },
        3:{
            1: "위치가 딱 좋아. 산 위에 진을 친다.",
            
        },
        4:{
            1: "사람이 다섯 명이 모이면 쓰레기가 하나 있다더니.",
            2: "사망플래그",
            3: "대혼돈의 유니버스",
            4: "네 생각을 내가 안다고 네가 생각한다는 사실을 나는 안다",
            5: "적을 과대평가하는 쪽이 과소평가하는 쪽보단 낫다",
            6: "크헤헤. 이 졸프 터커님이 돌아올 줄 몰랐나 보지?",
            7: "내가 반드시 온다고 했잖아."
        },
        5:{
            1: "체스의 기물들이 스스로 의지를 지니고 움직인다면 어떨까 하는 생각.",
            2: "나에게 시간과 예산이 조금만 더 있었더라면……",
            3: "지금 전차를 몰고서 저놈들 머리통을 다 날려 버렸을 텐데.",
            4: "너를 믿지 마! 날 믿어! 너를 믿는 날 믿어! 나를 누구라고 생각하느냐!!!",
            5: "드디어 올 것이 왔군."
        },
        6:{
            1: "i포병 15 Pro Max",
            2: "숨 참고 Love Dive",
            3: "훌륭한 판단의 표본이로군.",
            4: "세상엔 대화가 통하지 않는 상대도 있기 마련… 분노를 억누르지말고 네 진정한 힘을 해방시켜 줘……. 네 기분은 알겠지만, 더 이상 참을 필요는 없어……. 내… 내가 좋아했던 법칙과 이론들을 지… 지켜다오…….",
            5: "카메하메하",
            6: "무서운 아이……!"
        },

    },
    'chapter5-3':{
        1:{
            1: "엄브렐라",
            2: "어떻게 사람 이름이 엄",
            3: "로보토미 코어",
            4: "화이트 메사",
            5: "애퍼쳐 테크",
            6: "SCP 사단",
            7: "ER8",
            8: "와타리스 하우스",
            9: "센티테크",
            10: "스칼렛 리본",
            11: "새까만 조직",
            12: "동인도 부대(East India Company)",
            13: "문워크",
            14: "어렵고, 보수도 적고, 계속되는 위험에 안전한 귀환을 보장하지 못하는 모험. 성공할 시 영광과 명예를 얻을 수 있음.",
            15: "우리가 평생 친구다!",
            16: "귀하의 능력은 출중하나 저희 부대의 인재상에는 맞지 않는 듯 하여",
            17: "날 그렇게 대한 여자는 네가 처음이야.",
            18: "나 때문에 싸우는 건 싫어!",
            19: "전 죽음을 택하겠습니다.",
            20: "마나가 잠시 꺼졌다"
        }

    },
    chapter6:{
        1:{
            1:"마족에게 빼앗긴 슈트리프를 탈환하기 위해 떠나는 당신의 각오는 이 떠오르는 아침 해보다도 더 밝은 빛으로 길을 비추고 있어요. 제국의 미래로 향하는 길을."
        },
        2:{
            1: "테츄웅",
            2: "케임브리지에서 보스턴까지 ~ 애버딘을 심장으로, 글래스고를 뼈로 삼아 런던의 눈",
            3: "절대정신"
        },
        3:{
            1: "이딴 게… 최종 보상?",
            2: "세레브한 와타시보다 더 큰 보상 따위는 있을 수 없는 데샤앗!",
            3: "그치만, 이렇게라도 하지 않으면… 채운쨩 나를 바라봐 주지 않는걸!",
            4: "술 더 갖고 와. 아니지… '더 갖고 와'가 아니야. 다 갖고 와―!",
            5: "즈큐우우웅",
            6: "첫 키스 상대는 리타가 아니야! 이 나나리다!"
        },
        4:{
            1: "너무 다루기 쉬워서 어린애도 쓸 수 있고, 쓴다."
        },
        5:{
            1: "콩",
            2: "콩",
            3: "괜찮아. 안 죽어.",
            4: "해치웠나?"
        },
        6:{
            1:"목가적 공업의 나날",
            2: "기립하시오, 당신도! 이것은 인더스트리얼(Industrial)이오!",
            3: "여러분은 온 천하에 다니며 만민에게 과학을 전파하십시오. 믿고 계약을 맺는 사람은 구원을 얻을 것이요, 믿지 않는 사람은 정죄를 받으리라!",
            4: "만세만세 만만세",
            5: "오빠 차 뽑았다, 널 데리러 가!",
            6: "99정을 만들라고요? 저희가요?",
            7: "저, 저거!"
        },
        7:{
            1:"슈트리프였던 것"
        },
        8:{
            1:"자고 일어났더니 마법에 걸려 벌레로 변신했다는 하급마족 그레고르의 이야기",
            2: "해치웠나?",
            3: "배틀비드맨",
            4: "예술은 폭발이다…….",
            5: "갈!",
            6: "그 양반, 갈 때도 예술로 가는구만."
        },
        9:{
        },

        10:{
            1:"자매들이여. 우리는 대해로 헤엄치는 물고기요, 푸른 구름 위로 날아오르는 새와 같노라."
        }
    }
};



function openModal(chapter) {
    currentChapter = chapter;
    const modal = document.getElementById('modal');
    const navContainer = document.getElementById('navContainer');
    modal.style.display = 'block';
    navContainer.style.display = 'none';
    loadEpisodes(chapter);
}

function closeModal() {
    const modal = document.getElementById('modal');
    const navContainer = document.getElementById('navContainer');
    modal.style.display = 'none';
    navContainer.style.display = 'flex';
    initializeMotifParodyList();
    initializeDetailArea();
}

function loadEpisodes(chapter) {
    const episodeList = document.getElementById('episodeList');
    const motifParodyList = document.getElementById('motifParodyList');
    episodeList.innerHTML = '';
    motifParodyList.innerHTML = '';
    initializeDetailArea();
    
    // 해당 챕터의 에피소드 객체를 가져옵니다.
    const episodeObject = chapterEpisodeParodyNames[chapter] || {};
    
    // 에피소드 객체의 키 개수를 세어 에피소드 수를 결정합니다.
    const episodeCount = Object.keys(episodeObject).length;
    
    // 해당 챕터의 에피소드 수만큼 버튼을 생성합니다.
    for (let i = 1; i <= episodeCount; i++) {
        const button = document.createElement('button');
        button.textContent = `${i}`;
        button.onclick = () => loadContent(chapter, i);
        episodeList.appendChild(button);
    }
}

function loadContent(chapter, episode) {
    currentEpisode = episode;
    const episodeList = document.getElementById('episodeList');
    const contentFrame = document.getElementById('contentFrame');
    
    episodeList.querySelectorAll('button').forEach(btn => btn.classList.remove('selected-area'));
    const selectedEpisodeButton = episodeList.querySelector(`button:nth-child(${episode})`);
    selectedEpisodeButton.classList.add('selected-area');
    
    
    loadMotifParody(chapter, episode);
}

function loadMotifParody(chapter, episode) {
    const motifParodyList = document.getElementById('motifParodyList');
    motifParodyList.innerHTML = '';
    
    // 해당 챕터와 에피소드의 패러디 이름 객체를 가져옵니다.
    const parodyNames = chapterEpisodeParodyNames[chapter]?.[episode] || {};
    
    // 패러디 이름 객체의 키를 순회하며 버튼을 생성합니다.
    Object.keys(parodyNames).forEach(index => {
        const button = document.createElement('button');
        const parodyName = parodyNames[index];
        button.textContent = parodyName;
        button.onclick = () => showMotifParody(chapter, episode, index);
        motifParodyList.appendChild(button);
    });
}

function showMotifParody(chapter, episode, parodyIndex) {
    const contentFrame = document.getElementById('contentFrame');
    contentFrame.src = `/${chapter}/${episode}_parody${parodyIndex}.html`;
}

function initializeDetailArea() {
    const contentFrame = document.getElementById('contentFrame');
    contentFrame.src = '';
}

function initializeMotifParodyList() {
    const motifParodyList = document.getElementById('motifParodyList');
    motifParodyList.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', () => {
    const listArea = document.querySelector('.list-area');
    const contentArea = document.querySelector('.content-area');
    const motifParodyList = document.getElementById('motifParodyList');
    const navItems = document.querySelectorAll('.nav-item');

    listArea.addEventListener('click', (event) => {
        if (event.target === listArea) {
            initializeMotifParodyList();
            initializeDetailArea();
        }
    });

    contentArea.addEventListener('click', (event) => {
        if (event.target === contentArea) {
            initializeDetailArea();
        }
    });

    motifParodyList.addEventListener('click', (event) => {
        if (event.target === motifParodyList) {
            initializeDetailArea();
        }
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => openModal(item.dataset.chapter));
    });
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});