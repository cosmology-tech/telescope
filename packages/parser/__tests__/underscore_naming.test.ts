it('naming', () => {
    [
        'header_1',
        'header_2',
        'he__ader_1',
        'header___1',
        'hea___der_123',
    ].map(fieldName => {
        const regexp = /([a-zA-Z0-9]+)[_]+([0-9]+)$/;
        if (regexp.test(fieldName)) {
            const matches = fieldName.match(regexp);
            if (matches?.length) {
                const begin = fieldName.split(matches[1])[0];
                const newName = `${begin}${matches[1]}${matches[2]}`
                expect(newName).toMatchSnapshot();
            }
        }
    })
});
