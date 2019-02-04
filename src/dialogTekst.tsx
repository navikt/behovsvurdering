
export const getSpmText = (svar1: string, svar2: string) => {
    return `${LettEllerVanskeligTekstMap[svar1]}\n${KanDuFinneJobbTekstMap[svar2]}`
};

const LettEllerVanskeligTekstMap =
    {
        lett: 'Lett å få jobb',
        vanskelig: 'Vanskelig å få jobb',
        usikker: 'Usikker på om det er lett/vanskelig å få jobb'
    };
const KanDuFinneJobbTekstMap =
    {
        ja: 'Trenger ikke veiledning fra NAV',
        nei: 'Trenger mye veiledning fra NAV',
        usikker: 'Kan trenge veiledning fra NAV'
    };