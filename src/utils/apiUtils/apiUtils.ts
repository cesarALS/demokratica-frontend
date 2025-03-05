// No sé qué tan importante sea que esto esté acá o en environment variables.
// Otro detalle: eventualemnte, el dominio del back y del front será el mismo
export const backendAddress = process.env.NEXT_PUBLIC_API_URL;
// export const backendAddress = "http://localhost:8080/api";

// Lo ideal es que todas las llamadas a la api usen esta generalizada función.
export async function generalFetch<T>(
  url: string, 
  method: string, 
  transformData: (res: [] | object) => T, 
  body?: object, 
  headers?: HeadersInit
): Promise<{ status: number; data?: T; error?: string }> {
  let res;
  try {
    res = await fetch(url, {
      method: method,
      body: body ? JSON.stringify(body) : undefined,
      headers: headers ? headers: undefined
    });

    if (!res.ok) {
      return { status: res.status, error: res.statusText };
    }

  } catch (error) {
    return { status: 500, error: error instanceof Error ? error.message : "Error inesperado" };
  }

  let params = {}
  try {
    params = await res.json();
  /* eslint-disable @typescript-eslint/no-unused-vars */
  } catch (err) {}

  const returnData = transformData(params);
  return { status: res.status, data: returnData };
};

// No hace ninguna transformación a los datos de regreso de la API. 
// Se puede importar cuando otra función acepte la estructura de datos exacta que da la API
export function identity(res: [] | object){return res}  
