export interface KommuneOgLedigeStillinger {
    kommunenavn: string;
    fylkesnavn: string;
    hovedkategori: {
        kategori: string;
        antallStillinger: number
    };
    underkategori: {
        kategori: string;
        antallStillinger: number
    };
}