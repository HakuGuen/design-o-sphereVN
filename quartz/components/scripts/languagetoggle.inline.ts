type Language = 'en' | 'vn';

const repositories = {
  en: 'designosphere.wiki/EN',
  vn: 'designosphere.wiki/VN'
};

// This function needs to be adapted to your specific application logic
function getCurrentNoteName(): string {
  // Example of extracting the note name from the URL
  // Adjust the logic based on how your URLs are structured
  const urlParts = window.location.pathname.split('/');
  return urlParts[urlParts.length - 1]; // Assuming the note name is the last part of the URL
}

function getCorrespondingNoteUrl(noteName: string, language: Language): string {
  // Construct the URL for the note's counterpart in the selected language
  return `${repositories[language]}/${noteName}`;
}

let currentLanguage: Language = 'en'; // Default language

function toggleLanguage(): void {
  currentLanguage = currentLanguage === 'en' ? 'vn' : 'en';
  redirectToCorrespondingNote();
}

function redirectToCorrespondingNote(): void {
  const currentNoteName = getCurrentNoteName();
  const correspondingNoteUrl = getCorrespondingNoteUrl(currentNoteName, currentLanguage);
  window.location.href = correspondingNoteUrl;
}

function injectStyles(): void {
    const styles = `
    /* Styles omitted for brevity */
    `;
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}

function createLanguageToggleButton(): void {
    const button = document.createElement('button');
    button.textContent = currentLanguage === 'en' ? 'Tiếng Việt' : 'English';
    button.className = 'language-toggle';
    button.onclick = toggleLanguage; // Updated to reference the new toggleLanguage function

    const header = document.querySelector('header');
    if (header) {
        header.appendChild(button);
    } else {
        console.error('Header element not found');
    }
}

function initLanguageToggle(): void {
    // Attempt to dynamically determine the initial language if possible
    currentLanguage = document.documentElement.lang as Language || 'en';
    injectStyles();
    createLanguageToggleButton();
}

export { initLanguageToggle };