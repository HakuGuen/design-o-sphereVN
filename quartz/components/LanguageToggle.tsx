import { QuartzComponentConstructor } from "./types"
export default (() => {
  function LanguageToggle() {
    return <a class="red-text" href="https://designosphere.wiki/EN"
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
