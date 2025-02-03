enum plan {
    Gratuito = 0,
    Plus = 1,
    Premium = 2,
    Profesional = 3,
}

interface DemokraticaUser{
    username: string;
    email: string;
    plan: plan;
}

export { DemokraticaUser }