import { fakerES_MX as faker } from '@faker-js/faker'

export const generateUser = () => {

    const products = []
    for (let index = 0; index < 3; index++) {
        products.push(generateProduct())
    }
    return {
        name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        birthDate: faker.date.birthdate(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        gender: faker.person.sex(),
        products
    }
}

export const generateProduct = () => {
    return {
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        department: faker.commerce.department(),
        stock: 10,
        id: faker.database.mongodbObjectId(),
        image: faker.image.urlPicsumPhotos()
    }
}