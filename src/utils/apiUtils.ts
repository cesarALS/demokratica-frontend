// No sé qué tan importante sea que esto esté acá o en environment variables.
// Otro detalle: eventualemnte, el dominio del back y del front será el mismo
// Y otro detalle: si de pronto el backend está corriendo en local, esta dirección habría que cambiarla por la dirección donde está corriendo el back en local
const backendAddress = "https://demokraticabackend.onrender.com";

interface ApiReturns {
  status: number,
  error?: string,
}

interface ApiCreateUserReturns extends ApiReturns {
  userInfo: {username: string, email: string} | null
}

async function createUser(email: string, username: string, password: string): Promise<ApiCreateUserReturns> {
    
    // Nota: Están muy expuestas las contraseñas. Deberían ir en el body
    const url = `${backendAddress}/unase?email=${encodeURIComponent(email)}&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    
    try {
        const res = await fetch(url, {
            method: "POST"
        });
            
        if (!res.ok){
          return {
            status: res.status,
            userInfo: null
          }
        }
        
        const params = await res.json();
        
        return {
          status: res.status,
          userInfo: {
            username: params.username,
            email: params.email
          }
        };

    } catch (error) {
      if (error instanceof Error){        
        return {status: 500, error: error.message, userInfo: null};
      } else {
        console.error(error);
        return {status: 500, error: "Raro error en el servidor", userInfo: null};        
      }
    }    
}

interface ApiLoginReturns extends ApiReturns {
  userInfo: {email: string, username: string} | null
}

async function login(email: string, password: string): Promise<ApiLoginReturns> {
    
    // Nota: Están muy expuestas las contraseñas. Deberían ir en el body. La solicitud debería ser GET
  const url = `${backendAddress}/ingrese?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;

  console.log(url);
  
  try {
      const res = await fetch(url, {
          method: "POST"
      });
          
      if (!res.ok){
        console.log("Aquí")
        return {
          status: res.status,
          userInfo: null
        }
      } 
      
      const params = await res.json();

      return {
        status: res.status,
        userInfo: {
          username: params.username,
          email: params.email,
        }
      };

  } catch (error) {
    if (error instanceof Error){        
      return {status: 500, error: error.message, userInfo: null};
    } else {
      console.error(error);
      return {status: 500, error: "Raro error en el servidor", userInfo: null};        
    }
  }    
}

export { createUser, login };