import { useEffect, useState } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import OnskerDuAKontakteEnNavVeileder, {
	NEI_PAGE_ID
} from './pages/onsker-du-a-kontakte-en-nav-veileder/OnskerDuAKontakteEnNavVeileder';
import HvilkenVeiledningTrengerDu, {
	JA_PAGE_ID,
	PAGE_ID as VEILEDNING_PAGE_ID
} from './pages/hvilken-veiledning-trenger-du/HvilkenVeiledningTrengerDu';
import { PagesState } from './pages/PagesTypes';
import PageChangeListener from './components/pange-change-listener/PageChangeListener';
import './App.less';
import { API_VEILARBOPPFOLGING_UNDER_OPPFOLGING, FETCH_CONFIG, UnderOppfolgingData } from './api/api';
import useFetch from './api/use-fetch';
import { hasData, hasFailed, isNotStartedOrPending } from './api/utils';
import Spinner from './components/spinner/spinner';
import { AlertStripeAdvarsel } from 'nav-frontend-alertstriper';
import { DITT_NAV_URL } from './utils/constants';

function App() {
	const underOppfolging = useFetch<UnderOppfolgingData>();
	const [value, setValue] = useState<PagesState>({});
	const erUnderOppfolging = hasData(underOppfolging) && underOppfolging.data.underOppfolging;

	useEffect(() => {
		underOppfolging.fetch(API_VEILARBOPPFOLGING_UNDER_OPPFOLGING, FETCH_CONFIG);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (isNotStartedOrPending(underOppfolging)) {
		return <Spinner center={true} />;
	} else if (hasFailed(underOppfolging)) {
		return (
			<AlertStripeAdvarsel className="underoppfolging__feilmelding">
				Fikk ikke kontakt med baksystem. Prøv igjen senere.
			</AlertStripeAdvarsel>
		);
	} else if (!erUnderOppfolging) {
		return (
			<AlertStripeAdvarsel className="underoppfolging__feilmelding">
				Du må være registrert hos NAV for å bruke denne tjenesten.
			</AlertStripeAdvarsel>
		);
	}

	return (
		<BrowserRouter>
			<Route
				path="/"
				exact={true}
				component={() => <OnskerDuAKontakteEnNavVeileder state={value} setState={setValue} />}
			/>
			<Route
				path={`/${VEILEDNING_PAGE_ID}`}
				component={() => <HvilkenVeiledningTrengerDu state={value} setState={setValue} />}
			/>
			<Route
				path={`/${JA_PAGE_ID}`}
				component={() => {
					window.location.assign(`${DITT_NAV_URL}goTo=registrering&visKvittering=behovsvurderingJa`);
					return null;
				}}
			/>
			<Route
				path={`/${NEI_PAGE_ID}`}
				component={() => {
					window.location.assign(`${DITT_NAV_URL}goTo=registrering&visKvittering=behovsvurderingNei`);
					return null;
				}}
			/>
			<PageChangeListener />
		</BrowserRouter>
	);
}

export default App;
