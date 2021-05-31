import { rest } from 'msw';
import { BesvarelseData, DialogData, NyDialogMeldingData, SvarData } from '../api/dataTypes';
import { RequestHandler } from 'msw/lib/types/handlers/RequestHandler';

export const allHandlers: RequestHandler[] = [
	rest.post('/proxy/veilarbdialog/api/dialog', (req, res, ctx) => {
		const dialogData: DialogData = {
			id: '1234',
			overskrift: '',
			henvendelser: []
		};

		const reqData = req.body as NyDialogMeldingData;

		if (reqData.dialogId !== dialogData.id) {
			dialogData.id = `${Math.floor(Math.random() * 100000)}`;
			dialogData.overskrift = reqData.overskrift!;
			dialogData.henvendelser = [{ tekst: reqData.tekst }];
		} else {
			dialogData.henvendelser.push({ tekst: reqData.tekst });
		}

		return res(ctx.delay(500), ctx.json(dialogData));
	}),
	rest.post('/proxy/veilarbvedtakinfo/api/behovsvurdering/svar', (req, res, ctx) => {
		const besvarelseData: BesvarelseData = {
			besvarelseId: 4,
			svar: [],
			sistOppdatert: ''
		};

		const reqData = req.body as SvarData;

		if (reqData.besvarelseId !== besvarelseData.besvarelseId) {
			besvarelseData.besvarelseId = Math.floor(Math.random() * 100000);
			besvarelseData.svar = [reqData];
		} else {
			besvarelseData.svar.push(reqData);
		}

		return res(ctx.delay(500), ctx.json(besvarelseData));
	}),
	rest.get('/proxy/veilarbregistrering/api/registrering', (req, res, ctx) => {
		return res(
			ctx.delay(500),
			ctx.json({
				type: 'ORDINAER',
				registrering: {
					profilering: {
						jobbetSammenhengendeSeksAvTolvSisteManeder: true,
						alder: 35,
						innsatsgruppe: 'BEHOV_FOR_ARBEIDSEVNEVURDERING'
					}
				}
			})
		);
	}),
	rest.get('/proxy/veilarboppfolging/api/underoppfolging', (req, res, ctx) => {
		return res(
			ctx.delay(500),
			ctx.json({
				underOppfolging: true
			})
		);
	})
];
