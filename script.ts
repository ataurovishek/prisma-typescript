import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


async function main() {
    await prisma.user.deleteMany()


    // this is only for creating one user 

    // const user = await prisma.user.create({
    //     data: {
    //         name: 'ataur rahman',
    //         email: 'ataurovishek@gmail.com.',
    //         age: 27,
    //         userPreference: {
    //             create: {
    //                 emailUpdates: true
    //             }
    //         }
    //     },
    //     select:{
    //         name:true,
    //         userPreference:{
    //             select:{
    //                 id:true
    //             }
    //         }
    //     }
    // })
    // console.log(user);

    // this is for creating multiple users 
    const user = await prisma.user.createMany({
        data: [
            {
                name: 'ataur rahman',
                email: 'ataurovishek@gmail.com',
                age: 27

            }, {
                name: 'irfan rahman',
                email: 'irfan@gmail.com',
                age: 25
            }
        ]
    })
    console.log(user);

}

main().catch(e => {
    console.error(e.message);
}).finally(async () => {
    await prisma.$disconnect();
})