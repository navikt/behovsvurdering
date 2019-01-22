interface Gateadresse {
    landkode: string;
    tilleggsadresse?: string;
    postnummer: string;
    poststed: string;
    husnummer: number;
    husbokstav?: string;
    kommunenummer: string;
    gatenavn?: string;
    bolignummer?: string;
    gatenummer?: number;
}


interface BostedsAdresse {
    strukturertAdresse: {
        Gateadresse: Gateadresse
    }
}

interface BoligInformasjonType {
    midlertidigAdresseNorge? : BostedsAdresse;
    bostedsadresse?: BostedsAdresse;
}

export default BoligInformasjonType;