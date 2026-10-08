const testData = {
    login: {
        email: "xyztest@gmail.com",
        password: "Kathy@18"
    },
    invalidLogin: {
        email: "xyz@gmail.com",
        password: "abc.13"
    },
    paymentDetails: {
        name: "Kathy",
        cardNumber: "1234567890123456",
        cvc: "123",
        expiryMonth: "12",
        expiryYear: "2025"
    }
};

module.exports = { testData };