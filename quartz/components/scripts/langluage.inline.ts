const repositories = {
    en: 'hakuguen.github.io/design-o-sphereEN',
    vn: 'hakuguen.github.io/design-o-sphereVN'
  };
  
  type Language = 'en' | 'vn';
  let currentLanguage: Language = 'en'; // Default language
  
  function toggleLanguage(): void {
    currentLanguage = currentLanguage === 'en' ? 'vn' : 'en';
    redirectToCorrespondingNote();
  }
  
  function redirectToCorrespondingNote(): void {
    const currentNoteName = getCurrentNoteName(); // Implement this function based on your application
    const correspondingNoteUrl = getCorrespondingNoteUrl(currentNoteName, currentLanguage);
    window.location.href = correspondingNoteUrl;
  }
  
  function getCurrentNoteName(): string {
    // This should be implemented based on how you can identify notes in your application.
    // For example, you might use the URL, a data attribute, or another method.
    return ''; // Placeholder return
  }
  
  function getCorrespondingNoteUrl(noteName: string, language: Language): string {
    // Implement the logic to construct the URL for the note's counterpart in the selected language.
    // This might involve replacing part of the current URL, or looking up a mapping.
    return `${repositories[language]}/${noteName}`;
  }