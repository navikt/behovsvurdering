interface SisteStillingType {
    sisteStilling: {
        label: string,
        konseptId: number,
        styrk08: string,
    };
}

export interface RegistreringDataType {
    registrering: SisteStillingType;

}
export default SisteStillingType;