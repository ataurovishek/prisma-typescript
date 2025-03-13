import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


async function main() {
    // await prisma.user.deleteMany()


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

    // const user = await prisma.user.createMany({
    //     data:[
    //         {
    //             name:'ataur rahman',
    //             email:'ataur@test55.com',
    //             age:
    //             55
    //         }
    //     ]
    // })
    const user = await prisma.user.findMany({
        where: {
            name: 'ataur rahman'
        },
        //    distinct:['name']   // distinct:[''property name']   ause is used within a Prisma query to ensure that the results are unique based on the specified field, in this case, the name field. This means that the query will return only one record for each unique value of the name field, effectively removing any duplicate records that have the same name.
        take: 2, // take is used to limit the number of records returned by a query. In this case, the query will return only the first two records that match the specified criteria.
        skip:1 // this is used to skip the first record and return the rest of the records that match the specified criteria.
    })

    console.log(user);

}

main().catch(e => {
    console.error(e.message);
}).finally(async () => {
    await prisma.$disconnect();
})