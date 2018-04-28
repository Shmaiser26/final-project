import {checkLang} from "./checkLang";
const testString = document.querySelector(".test-string");

const testText = {
    en : "the main factor in the greatest world upheavals has always been oral speech and not a printed word",
    ru : "главным фактором величайших мировых переворотов всегда была устная речь, а не печатное слово",
    ua : "головним фактором найбільших світових переворотів завжди була усна мова, а не друковане слово"
}

function setTestString() {
    const currentLang = localStorage.getItem("lang");
testString.textContent = testText[currentLang];

}

export {
    testText, setTestString, testString
}