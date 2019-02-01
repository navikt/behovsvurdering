//@ts-ignore

import * as React from "react";

import Veilederpanel from 'nav-frontend-veilederpanel';

interface VeilederPanelProps {
    children?: React.ReactNode | React.ReactChild | React.ReactChildren,
    type?: 'normal' | 'plakat',
    className?: string
}

function VeilederPanel(props: VeilederPanelProps) {


    return (
        <div className="nav-veilederpanel-wrapper">
            <Veilederpanel type={props.type}
                           svg={getSvg() }
                           kompakt={true}>
                {props.children}
            </Veilederpanel>
        </div>
    );
}

function getSvg() {
    return <svg width="100px" height="100px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <circle id="path-1" cx="50" cy="50" r="50"></circle>
                <path d="M38.3689052,0.335235703 C41.3376285,1.12162906 45.7453682,3.29251598 49.4109441,6.85799606 C53.0765626,10.4235176 56,15.7859336 56,19.9471694 L56,44.9565217 L0,44.9565217 L0,19.9471694 C0,15.794346 2.86171448,10.4410671 6.46079003,6.87962984 C10.1773709,3.20191608 14.6802466,1.00125714 17.6301242,0.271569064 C17.6850427,5.16944295 22.3067566,10.2173913 28,10.2173913 C33.668578,10.2173913 38.274891,5.21308764 38.3689052,0.335235703 Z" id="path-3"></path>
                <path d="M42.9545455,28.7777778 C38.8035579,23.9892932 36.869012,13.723186 36.869012,13.8676915 C21.7234126,10.5737924 6.2546611,13.2686392 6.14483533,13.644517 C4.64566029,18.7584325 -2.27373675e-13,28.7777778 -2.27373675e-13,28.7777778 C-2.27373675e-13,12.3333333 3.07241767,0 21.5069237,0 C38.9172904,0 42.9545455,12.3333333 42.9545455,28.7777778 Z" id="path-5"></path>
                <path d="M13.3095238,13.2142857 C13.3095238,11.4391705 16.9763952,11 21.5,11 C26.0236048,11 29.6904762,11.4391705 29.6904762,13.2142857 C29.6904762,14.9894009 27.4253976,18.6550682 21.5,18.6550682 C15.5746024,18.6550682 13.3095238,14.9894009 13.3095238,13.2142857 Z M21.2549116,8.95201591 C18.0850435,8.95201591 16.4007853,9.84457403 11.7703527,11.0956266 C5.18999633,12.8735105 2.15,7.89313612 1.075,3 C0.458195138,0.192455674 -4.54747351e-13,1.37334746 -4.54747351e-13,1.37334746 C-4.54747351e-13,20.5529018 13.1166422,27.0286824 21.6745238,27.0286824 C30.3674324,27.0286824 43,20.7992345 43,1 C43,0.559472803 42.1298868,0.77632943 41.9761905,1.37334746 C41.0728329,4.88235052 42.0922368,13.8133549 30.4384476,11.0956266 C26.3587391,9.41570358 24.4247797,8.95201591 21.2549116,8.95201591 Z" id="path-7"></path>
            </defs>
            <g id="Brukerhistorier" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="FO-1853" transform="translate(-15.000000, -610.000000)">
                    <g id="Group-4" transform="translate(15.000000, 610.000000)">
                        <g id="spotlight/-person">
                            <g id="-80/-Blå">
                                <mask id="mask-2" fill="white">
                                    <use xlinkHref="#path-1"></use>
                                </mask>
                                <g id="Mask"></g>
                                <g id="⚙️/farger/-60/-Dyp-blå" mask="url(#mask-2)">
                                    <g transform="translate(-8.000000, 0.000000)" id="⚙️/farge/-Dyp-blå/-60">
                                        <g>
                                            <polygon id="Fill-22" fill="#99BDCD" points="0 100 126 100 126 0 0 0"></polygon>
                                        </g>
                                    </g>
                                </g>
                                <g id="mennesker/mann/-forfra-copy" mask="url(#mask-2)">
                                    <g transform="translate(15.000000, 8.000000)" id="Group">
                                        <g transform="translate(7.205882, 0.000000)">
                                            <path d="M48.0978566,39.2291418 C46.3327832,45.2401631 42.7351352,50.2358516 38.0933857,53.2650786 L38.325564,55.858724 L38.3242529,55.9642224 L35.8735401,77.34375 L20.3304605,77.34375 L20.2658975,76.8945814 L17.2610693,55.9274044 L17.3723726,53.3050412 C12.7298556,50.2985078 9.12433796,45.3282751 7.33996992,39.3403742 C7.01786157,39.5557892 6.63622582,39.6807065 6.22435021,39.6807065 L6.22435021,39.1576087 L6.22435021,39.6807065 C5.04887443,39.6807065 4.11764706,38.6603804 4.11764706,37.4243262 L4.11764706,30.4299389 C4.11764706,29.1953817 5.04652813,28.1752076 6.21977128,28.1725595 C7.32181592,15.2598435 16.4984044,5.15625 27.7020204,5.15625 C38.9080718,5.15625 48.0868376,15.2641236 49.1859305,28.1804261 C49.2445521,28.175214 49.3039007,28.1725543 49.3638851,28.1725543 C50.5405914,28.1725543 51.4705882,29.1931649 51.4705882,30.4299389 L51.4705882,37.4243262 C51.4705882,38.6609909 50.5406626,39.6807065 49.3638851,39.6807065 L49.3638851,39.1576087 L49.3638851,39.6807065 C48.8861625,39.6807065 48.4487818,39.512182 48.0978566,39.2291418 Z" id="Combined-Shape" fill="#E7E5E2" fillRule="nonzero"></path>
                                            <g id="mennesker/X⚙️/⚙️-kropp/voksen/Forfra/-rundhals" transform="translate(0.000000, 51.562500)">
                                                <g id="Group" transform="translate(0.000000, 2.043478)">
                                                    <mask id="mask-4" fill="white">
                                                        <use xlinkHref="#path-3"></use>
                                                    </mask>
                                                    <use id="Mask" fill="#D8A25D" xlinkHref="#path-3"></use>
                                                    <g id="V⚙️/STYLING/farge/-Dyp-blå/+20" mask="url(#mask-4)" fill="#0C5472">
                                                        <g transform="translate(-37.333333, -28.608696)" id="Fill-62">
                                                            <polygon points="0 102 131 102 131 0 0 0"></polygon>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                            <g id="mennesker/X⚙️/⚙️mann/-hår/-forfra/-kort-" transform="translate(5.147059, 0.000000)">
                                                <g id="g/hårfarge/-sort" transform="translate(1.022727, 1.027778)">
                                                    <mask id="mask-6" fill="white">
                                                        <use xlinkHref="#path-5"></use>
                                                    </mask>
                                                    <g id="Mask"></g>
                                                    <g id="mennesker/⚙️/hårfarge/-sort" mask="url(#mask-6)" fill="#3E3832">
                                                        <g transform="translate(-15.340909, -26.722222)" id="hårfarge/-sort">
                                                            <rect x="0" y="0" width="71" height="81"></rect>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                            <g id="mennesker/X⚙️/⚙️-ansikt-voksen/forfra/-glad" transform="translate(11.323529, 25.781250)">
                                                <g id="Group" transform="translate(6.794118, 0.000000)">
                                                    <path d="M2.25729706,6.36086 C0.852855882,6.48076 0.459767647,4.13446 0.882944118,2.60216 C0.962532353,2.31176 1.42744412,0.98956 2.25050294,0.98956 C3.07259118,0.98956 3.43559118,1.71226 3.48606176,1.83656 C4.09073824,3.33036 3.79373824,6.22886 2.25729706,6.36086" id="Fill-42" fill="#635E59"></path>
                                                    <path d="M17.9317147,6.36086 C19.3361559,6.48076 19.7292441,4.13446 19.3060676,2.60216 C19.2264794,2.31176 18.7615676,0.98956 17.9385088,0.98956 C17.1164206,0.98956 16.7534206,1.71226 16.70295,1.83656 C16.0982735,3.33036 16.3952735,6.22886 17.9317147,6.36086" id="Fill-44" fill="#635E59"></path>
                                                    <path d="M10.5398812,9.05836716 C11.3658377,8.91427089 11.9299299,9.00470168 12.1319477,9.28569012 C12.8944671,10.3477916 12.6505697,11.4714472 11.342362,12.3938745 C10.6545423,12.8786802 9.70778117,13.0493138 9.20656021,12.7979213 C8.96146822,12.6749928 8.67485264,12.8005175 8.5663864,13.0782884 C8.45792016,13.3560593 8.56867721,13.6808903 8.8137692,13.8038187 C9.64216114,14.2193072 10.9160936,13.9897079 11.8550159,13.3279142 C13.6327926,12.0743902 14.0396432,10.1999952 12.8845946,8.59114621 C12.3958052,7.91128443 11.5305653,7.77257602 10.3922129,7.97117284 C10.1273125,8.01738733 9.94562502,8.29822831 9.98640251,8.59844873 C10.02718,8.89866915 10.2749809,9.10458164 10.5398812,9.05836716 Z" id="Stroke-46" fill="#59514B" fillRule="nonzero"></path>
                                                    <path d="M16.0718427,17.0779849 C16.0280671,17.1916211 15.9276803,17.409196 15.7663459,17.6957877 C15.4932468,18.1809164 15.1503028,18.6672831 14.733777,19.1208306 C13.4925613,20.4723686 11.8770109,21.2538858 9.82082815,21.1824085 C7.81592529,21.1127139 6.20759637,20.3432567 4.94662306,19.102456 C4.48365225,18.6468916 4.10142364,18.1590111 3.79590709,17.6727058 C3.6157442,17.3859319 3.50324943,17.1684995 3.45404894,17.0551948 C3.33570314,16.7826539 3.04481962,16.6704459 2.80434243,16.8045712 C2.56386524,16.9386964 2.46485819,17.2683644 2.583204,17.5409052 C2.65448711,17.7050645 2.79321149,17.9731941 3.00525519,18.3107142 C3.3534163,18.8648988 3.78635665,19.4175083 4.31029805,19.9330679 C5.73376673,21.3337645 7.55292961,22.204089 9.79107185,22.2818915 C12.1217523,22.3629108 13.9850377,21.4615527 15.4062238,19.9140481 C15.8814223,19.3966128 16.2720358,18.8426407 16.5845866,18.2874307 C16.7746423,17.9498191 16.8982562,17.6819025 16.9613514,17.5181151 C17.0685913,17.2397332 16.9564032,16.9155336 16.7107721,16.7939951 C16.4651411,16.6724565 16.1790826,16.7996031 16.0718427,17.0779849 Z" id="Stroke-48" fill="#59514B" fillRule="nonzero"></path>
                                                </g>
                                            </g>
                                            <g id="mennesker/X⚙️/⚙️mann/-skjegg/-forfra/-kort" transform="translate(6.176471, 30.937500)">
                                                <g id="hårfarge/-brunn" transform="translate(0.000000, 1.000000)">
                                                    <mask id="mask-8" fill="white">
                                                        <use xlinkHref="#path-7"></use>
                                                    </mask>
                                                    <g id="Mask"></g>
                                                    <g id="mennesker/⚙️/hårfarge/-sort" mask="url(#mask-8)" fill="#3E3832">
                                                        <g transform="translate(-11.261905, -23.357143)" id="hårfarge/-sort">
                                                            <rect x="0" y="0" width="71" height="85"></rect>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g id="nav-id/-kort/-rød" transform="translate(58.000000, 76.000000)">
                            <g id="NAV-Copy-2" transform="translate(0.000000, -1.000000)">
                                <g id="Group-11">
                                    <g id="Navansatt-dame">
                                        <g transform="translate(0.000000, 0.750000)">
                                            <path d="M16.7475923,12.25 L1.25148066,12.25 C0.559921718,12.25 0,11.6815537 0,10.9794661 L0,2.52147502 C0,1.81938741 0.559921718,1.25 1.25148066,1.25 L16.7475923,1.25 C17.4391513,1.25 18,1.81938741 18,2.52147502 L18,10.9794661 C18,11.6815537 17.4391513,12.25 16.7475923,12.25" id="Fill-97" fill="#D2242A"></path>
                                            <path d="M12.8637337,7.25829484 C12.8637337,9.33546875 11.1718134,11.0214062 9.08398732,11.0214062 C6.99261051,11.0214062 5.29980254,9.33546875 5.29980254,7.25829484 C5.29980254,5.18112092 6.99261051,3.49518342 9.08398732,3.49518342 C11.1718134,3.49518342 12.8637337,5.18112092 12.8637337,7.25829484" id="Fill-98" fill="#FFFFFF"></path>
                                            <polygon id="Fill-99" fill="#FFFFFF" points="4.18416486 8.91703125 3.44650181 8.91703125 4.23476268 6.99440897 4.97420109 6.99440897"></polygon>
                                            <polygon id="Fill-100" fill="#FFFFFF" points="13.4809384 8.91703125 13.0237826 8.91703125 13.8120435 6.99440897 14.2691993 6.99440897"></polygon>
                                            <polygon id="Fill-101" fill="#FFFFFF" points="14.7426884 8.91703125 14.5491739 8.91703125 15.3356594 6.99440897 15.5291739 6.99440897"></polygon>
                                            <path d="M6.21091848,8.90775815 L6.79146196,8.90775815 C6.82164312,8.90775815 6.84472283,8.8847962 6.84472283,8.85565217 L6.84472283,7.0566712 C6.84472283,7.02752717 6.82164312,7.00456522 6.79146196,7.00456522 L6.20470471,7.00456522 C6.16564674,7.00456522 6.13724094,7.03459239 6.13724094,7.07256793 L5.90644384,7.63866848 C5.89224094,7.6678125 5.91532065,7.70313859 5.94638949,7.70313859 L6.11238587,7.70313859 C6.13724094,7.70313859 6.15854529,7.72168478 6.15854529,7.7490625 L6.15854529,8.85565217 C6.15854529,8.8847962 6.181625,8.90775815 6.21091848,8.90775815" id="Fill-102" fill="#C52D35"></path>
                                            <path d="M7.47222464,8.90775815 L8.05454348,8.90775815 C8.08472464,8.90775815 8.11046739,8.8847962 8.11046739,8.85565217 L8.11046739,7.0566712 C8.11046739,7.02752717 8.08472464,7.00456522 8.05454348,7.00456522 L7.1491087,7.00456522 C7.11093841,7.00456522 7.08075725,7.03459239 7.08075725,7.07256793 L6.84907246,7.63866848 L6.76918116,7.70313859 L7.23255072,7.70313859 C7.33552174,7.70313859 7.41985145,7.78438859 7.41985145,7.88860054 L7.41985145,8.85565217 C7.41985145,8.8847962 7.44293116,8.90775815 7.47222464,8.90775815" id="Fill-103" fill="#C52D35"></path>
                                            <path d="M10.0762373,7.00474185 L9.49391848,7.00474185 C9.464625,7.00474185 9.44065761,7.0277038 9.44065761,7.05684783 L9.44065761,8.8558288 C9.44065761,8.88497283 9.464625,8.90793478 9.49391848,8.90793478 L10.0824511,8.90793478 C10.1215091,8.90793478 10.1499149,8.87790761 10.1499149,8.83993207 L10.380712,8.27383152 C10.3949149,8.2429212 10.3727228,8.20936141 10.3372156,8.20936141 L10.1765453,8.20936141 C10.1499149,8.20936141 10.1312736,8.18816576 10.1312736,8.16432065 L10.1312736,7.05684783 C10.1312736,7.0277038 10.1046431,7.00474185 10.0762373,7.00474185" id="Fill-104" fill="#C52D35"></path>
                                            <path d="M7.68109601,8.90775815 L8.06368659,8.90775815 C8.1009692,8.90775815 8.13115036,8.87684783 8.13115036,8.84063859 L8.36194746,8.27277174 C8.37526268,8.24274457 8.35307065,8.20830163 8.31933877,8.20830163 L8.1577808,8.20830163 L7.68109601,8.90775815 Z" id="Fill-105" fill="#C52D35"></path>
                                            <path d="M11.6344728,7.00474185 L12.3268641,7.00474185 C12.360596,7.00474185 12.3845634,7.03653533 12.3703605,7.06744565 L11.6371359,8.87879076 C11.6318098,8.89733696 11.6149438,8.90793478 11.5945272,8.90793478 L10.9678243,8.90793478 L11.5892011,7.03565217 C11.5963025,7.01710598 11.6149438,7.00474185 11.6344728,7.00474185" id="Fill-106" fill="#C52D35"></path>
                                            <path d="M10.7663207,7.00474185 L9.78720833,7.00474185 C9.7179692,7.00474185 10.0686033,7.07186141 10.0934583,7.13456522 L10.7858496,8.84788043 C10.8000525,8.88585598 10.8355598,8.90793478 10.8746178,8.90793478 L11.4684764,8.90793478 L10.8577518,7.06921196 C10.8444366,7.02858696 10.807154,7.00474185 10.7663207,7.00474185" id="Fill-107" fill="#C52D35"></path>
                                            <path d="M9.48788225,7.615 C9.48788225,7.99828804 9.43905978,8.02125 9.43905978,8.02125 C9.43905978,8.02125 9.38402355,7.6538587 9.0990779,7.6538587 C8.81945833,7.6538587 8.75554529,7.8163587 8.75554529,7.93735054 C8.75554529,8.07777174 8.89846196,8.20936141 8.97835326,8.20936141 L9.48788225,8.20936141 L9.18695833,8.8726087 C9.17630616,8.8946875 9.15500181,8.90793478 9.13103442,8.90793478 L8.89934964,8.90793478 C8.65701268,8.90793478 8.02409601,8.5917663 8.02409601,7.97974185 C8.02409601,7.36683424 8.49456703,7.00474185 8.8869221,7.00474185 C9.21092572,7.00474185 9.48788225,7.22641304 9.48788225,7.615 Z" id="Fill-108" fill="#C52D35"></path>
                                            <path d="M9.93110145,2.99602582 L8.32528623,2.99602582 C8.20633696,2.99602582 8.11046739,2.90064538 8.11046739,2.78230299 L8.11046739,2.51294158 C8.11046739,2.39548234 8.20633696,2.29921875 8.32528623,2.29921875 L9.93110145,2.29921875 C10.0500507,2.29921875 10.1459203,2.39548234 10.1459203,2.51294158 L10.1459203,2.78230299 C10.1459203,2.90064538 10.0500507,2.99602582 9.93110145,2.99602582" id="Fill-109" fill="#5A1F57"></path>
                                            <polygon id="Fill-110" fill="#C2B5CF" points="8.66331522 2.75 9.59360507 2.75 9.59360507 0.25 8.66331522 0.25"></polygon>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
}

export default VeilederPanel;