import { backendAddress, generalFetch, identity } from "@/utils/queries/api"

const mercadoPagoApis = {
    proceedToPaymentInterface: "/payments/create"
}

const proceedToPaymentInterface = async(planId: string, jwtToken: string) => {
    const url = `${backendAddress}${mercadoPagoApis.proceedToPaymentInterface}`;
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwtToken}`,
    };

    const body = {
        planId: planId
    };

    return await generalFetch(url, "POST", identity, body, headers);

};

export { proceedToPaymentInterface };