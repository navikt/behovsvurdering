import Veilederpanel from 'nav-frontend-veilederpanel';
import { ReactComponent as VeilederSvg } from './nav-ansatt.svg';
import './feilmelding.less';
import Lenke from 'nav-frontend-lenker';

const Feilmelding = () => {
	return (
		<div className="feilmelding">
			<Veilederpanel type="plakat" svg={<VeilederSvg />} fargetema="feilmelding">
				På grunn av feil i systemene våre kan vi ikke sende svaret ditt akkurat nå. Vi anbefaler deg å&nbsp;
				<Lenke href="https://www.nav.no/398761/kontakt-teknisk-brukerstøtte-nav.no">
					kontakte teknisk brukerstøtte.
				</Lenke>
			</Veilederpanel>
		</div>
	);
};
export default Feilmelding;
