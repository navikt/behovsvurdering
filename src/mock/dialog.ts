export function opprettDialog(update: any) {
    const dialogId = 1;
    return {
        dialogId: dialogId,
        overskrift: update.overskrift,
        tekst: update.tekst,
        sendt: new Date(),
    };
}
