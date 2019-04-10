import { DialogData, NyDialogMeldingData } from '../api/dataTypes';

const dialogData: DialogData = {
    id: '123',
    overskrift: '',
    henvendelser: [],
};

export function opprettDialog(update: NyDialogMeldingData): DialogData {
    if (update.dialogId !== dialogData.id) {
        dialogData.overskrift = update.overskrift!;
    }
    dialogData.henvendelser.push({tekst: update.tekst});
    return dialogData;

}
