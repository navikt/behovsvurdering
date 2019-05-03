import { SvarData, BesvarelseData } from '../api/dataTypes';

const besvarelseData: BesvarelseData = {
    besvarelseId: 4,
    svar: [],
    sistOppdatert: ''
};

export function sendSvar(update: SvarData): BesvarelseData {
    if (update.besvarelseId !== besvarelseData.besvarelseId) {
        besvarelseData.besvarelseId = Math.floor(Math.random() * 100000);
        besvarelseData.svar = [update];
    } else {
        besvarelseData.svar.push(update);
    }
    return besvarelseData;

}
