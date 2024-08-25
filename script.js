let chapterEpisodeParodyNames = {};
let currentChapter = '';
let currentEpisode = '';
let isMobileView = false;

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    chapterEpisodeParodyNames = data;
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
    checkViewportSize();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    const navContainer = document.getElementById('navContainer');
    const sidebar = document.getElementById('sidebar');
    const detailArea = document.getElementById('detailArea');
    
    modal.style.display = 'none';
    navContainer.style.display = 'grid';
    sidebar.classList.remove('hidden');
    detailArea.classList.remove('active');
    
    initializeMotifParodyList();
    initializeDetailArea();
    document.body.style.overflow = '';
}

function loadEpisodes(chapter) {
    const episodeList = document.getElementById('episodeList');
    const motifParodyList = document.getElementById('motifParodyList');
    episodeList.innerHTML = '<h3>에피소드 목록</h3>';
    motifParodyList.innerHTML = '<h3>패러디 목록</h3>';
    initializeDetailArea();
    
    const episodeObject = chapterEpisodeParodyNames[chapter] || {};
    const episodeCount = Object.keys(episodeObject).length;
    
    for (let i = 1; i <= episodeCount; i++) {
        const button = document.createElement('button');
        button.textContent = `에피소드 ${i}`;
        button.onclick = () => loadContent(chapter, i);
        episodeList.appendChild(button);
    }
}

function loadContent(chapter, episode) {
    currentEpisode = episode;
    const episodeList = document.getElementById('episodeList');
    
    episodeList.querySelectorAll('button').forEach(btn => btn.classList.remove('selected-area'));
    const selectedEpisodeButton = episodeList.querySelector(`button:nth-child(${episode + 1})`);
    selectedEpisodeButton.classList.add('selected-area');
    
    loadMotifParody(chapter, episode);
}

function loadMotifParody(chapter, episode) {
    const motifParodyList = document.getElementById('motifParodyList');
    motifParodyList.innerHTML = '<h3>패러디 목록</h3>';
    
    const parodyNames = chapterEpisodeParodyNames[chapter]?.[episode] || {};
    
    Object.keys(parodyNames).forEach(index => {
        const button = document.createElement('button');
        const parodyName = parodyNames[index];
        button.textContent = parodyName;
        button.onclick = () => showMotifParody(chapter, episode, index);
        motifParodyList.appendChild(button);
    });

    if (isMobileView) {
        const sidebar = document.getElementById('sidebar');
        sidebar.scrollTop = sidebar.scrollHeight;
    }
}

function showMotifParody(chapter, episode, parodyIndex) {
    const contentFrame = document.getElementById('contentFrame');
    contentFrame.src = `/MadScientist/${chapter}/${episode}_parody${parodyIndex}.html`;
    
    contentFrame.onload = function() {
        adjustImagePaths(contentFrame);
        applyResponsiveStyles(contentFrame);
    };

    if (isMobileView) {
        const sidebar = document.getElementById('sidebar');
        const detailArea = document.getElementById('detailArea');
        sidebar.classList.add('hidden');
        detailArea.classList.add('active');
    }
}

function adjustImagePaths(iframe) {
    const images = iframe.contentDocument.getElementsByTagName('img');
    for (let img of images) {
        if (!img.src.startsWith('/MadScientist/')) {
            img.src = '/MadScientist/img/' + img.src.split('/').pop();
        }
    }
}

function applyResponsiveStyles(iframe) {
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    
    const style = iframeDoc.createElement('style');
    style.textContent = `
        body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            width: 100%;
        }
        img {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto;
        }
    `;
    iframeDoc.head.appendChild(style);

    let meta = iframeDoc.querySelector('meta[name="viewport"]');
    if (!meta) {
        meta = iframeDoc.createElement('meta');
        meta.name = 'viewport';
        iframeDoc.head.appendChild(meta);
    }
    meta.content = 'width=device-width, initial-scale=1';
}

function initializeDetailArea() {
    const contentFrame = document.getElementById('contentFrame');
    contentFrame.src = '';
}

function initializeMotifParodyList() {
    const motifParodyList = document.getElementById('motifParodyList');
    motifParodyList.innerHTML = '<h3>패러디 목록</h3>';
}

function checkViewportSize() {
    isMobileView = window.innerWidth <= 768;
    const closeButton = document.querySelector('.close');
    if (isMobileView) {
        closeButton.onclick = closeModalMobile;
    } else {
        closeButton.onclick = closeModal;
    }
}

function closeModalMobile() {
    const sidebar = document.getElementById('sidebar');
    const detailArea = document.getElementById('detailArea');
    
    if (detailArea.classList.contains('active')) {
        sidebar.classList.remove('hidden');
        detailArea.classList.remove('active');
    } else {
        closeModal();
    }
}

window.addEventListener('resize', checkViewportSize);

document.addEventListener('DOMContentLoaded', () => {
    checkViewportSize();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (isMobileView) {
            closeModalMobile();
        } else {
            closeModal();
        }
    }
});