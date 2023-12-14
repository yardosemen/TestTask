export const send = async (values) => {
     try {
        const response = await fetch('https://65590262e93ca47020a9fce8.mockapi.io/insert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        if (response.ok) {
            return response.json();
        } else {
        console.error('Failed to send data');
        }
    } catch (error) {
        console.error('Error sending data:', error);
    }
}