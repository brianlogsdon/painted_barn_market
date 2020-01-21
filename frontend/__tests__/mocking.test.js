describe('mocking learning', () => {
    it('mocks', () => {
        const fetchDogs = jest.fn();
        fetchDogs();
        expect(fetchDogs).toHaveBeenCalled();
        console.log(fetchDogs); 
    })
})