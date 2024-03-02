import { QuartzComponentConstructor } from "./types"
export default (() => {
  function LanguageToggle() {
    return <a class="red-text" href="https://hakuguen.github.io/design-o-sphereEN"
    >
    ENGLISH
 </a>
  }
 
  LanguageToggle.css = `
  p.red-text {
    color: red;
  }
  `
 
  return LanguageToggle
}) satisfies QuartzComponentConstructor
