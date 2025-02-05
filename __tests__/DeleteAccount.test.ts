import {deleteAccount} from "../src/utils/apiUtils"

test("Elimina el usuario con nombre borrado", async () => {
    const email = 'borrado@gmail.com'
    const password = 'contraseña'
    const jwtToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdXRob3JpdGllcyI6IlVTRVIiLCJ1c2VybmFtZSI6ImJvcnJhZG8iLCJzdWIiOiJib3JyYWRvQGdtYWlsLmNvbSIsImlhdCI6MTczODczMzYyMywiZXhwIjoxNzM5MzM4NDIzfQ.4suOKTcu8sNbjraBbKbw9vPldKP2YZmEf1HQi7fhnYw'

    const res = await deleteAccount(email, password, jwtToken);
    const status = res.status
    expect(status).toBe(200)
})
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