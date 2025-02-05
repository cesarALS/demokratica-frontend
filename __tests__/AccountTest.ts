import {deleteAccount, createUser, getUser} from "../src/utils/apiUtils"
/*
    Este conjunto de pruebas crea un usuario de prueba en la BD (la real),
    lee el contenido de su JWT consultando al backend y luego lo elimina
    para no dejar nada en la BD.

    NO SON PRUEBAS UNITARIAS porque no se está usando una BD imitada (mock)
    sino que se está usando la real.
    
    Si el sistema pasa las pruebas significa que las APIs del frontend están
    bien hechas y funcionales
*/

let jwtToken: string = "";
const testEmail = "test@outlook.com"
const testUsername = "test"
const testPassword = "test"

test("Crear usuario de prueba", async () => {
    const email = testEmail
    const username = testUsername
    const password = testPassword

    const res = await createUser(email, username, password)
    expect(res.status).toBe(201)

    jwtToken = (res.data?.jwtToken === undefined) ? "error" : res.data.jwtToken
})

test("Leer el JWT del usuario de prueba", async () => {
    const res = await getUser(jwtToken)

    expect(res.status).toBe(200)

    const user = res.data?.user
    expect(user?.username).toBe(testUsername)
    expect(user?.email).toBe(testEmail)
})

test("Borrar el usuario de prueba", async () => {
    const res = await deleteAccount(testEmail, testUsername, jwtToken)

    expect(res.status).toBe(200)
})


/*test("Elimina el usuario con nombre borrado", async () => {
    const email = 'borrado@gmail.com'
    const password = 'contraseña'
    const jwtToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdXRob3JpdGllcyI6IlVTRVIiLCJ1c2VybmFtZSI6ImJvcnJhZG8iLCJzdWIiOiJib3JyYWRvQGdtYWlsLmNvbSIsImlhdCI6MTczODczMzYyMywiZXhwIjoxNzM5MzM4NDIzfQ.4suOKTcu8sNbjraBbKbw9vPldKP2YZmEf1HQi7fhnYw'

    const res = await deleteAccount(email, password, jwtToken);
    const status = res.status
    expect(status).toBe(200)
})*/
// Mock the fetch function globally
/*global.fetch = jest.fn();


describe('deleteAccount', () => {
    const email = 'test@example.com';
    const password = 'password123';
    const jwtToken = 'sample-jwt-token';

    it('should return 200 when the account is deleted successfully', async () => {
        // Mock fetch to simulate a 200 response
        (fetch as jest.Mock).mockResolvedValue({
            ok: true,
            status: 200,
            json: async () => ({ message: 'Account deleted' }), // Simulating a JSON response
        });

        // Call the method with the mock data
        const statusCode = await deleteAccount(email, password, jwtToken);

        // Assert that the status code returned is 200
        expect(statusCode).toBe(200);

        // Optionally, check that fetch was called with the correct URL and method
        expect(fetch).toHaveBeenCalledWith('https://api.example.com/delete-account', expect.objectContaining({
            method: 'DELETE',
            headers: expect.objectContaining({
                'Authorization': `Bearer ${jwtToken}`,
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({ email, password }),
        }));
    });

    it('should throw an error if the server returns a non-200 status', async () => {
        // Mock fetch to simulate a failure response
        (fetch as jest.Mock).mockResolvedValue({
            ok: false,
            status: 500,
            json: async () => ({ message: 'Internal server error' }),
        });

        // Expect the method to throw an error when it fails
        await expect(deleteAccount(email, password, jwtToken)).rejects.toThrow('Failed to delete account');
    });
});
*/