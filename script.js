let chapterEpisodeParodyNames = {};
let currentChapter = '';
let currentEpisode = '';

// 페이지 로드 시 JSON 데이터를 가져옵니다.
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    chapterEpisodeParodyNames = data;
    // 네비게이션 아이템을 초기화합니다.
    initializeNavItems();
  })
  .catch(error => console.error('Error loading the JSON data:', error));

function initializeNavItems() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => openModal(item.dataset.chapter));
  });
}

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
    contentFrame.src = `/MadScientist/${chapter}/${episode}_parody${parodyIndex}.html`;
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
});

// ESC 키 이벤트 리스너
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});