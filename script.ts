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
    // const user = await prisma.user.findMany({
    //     where: {
    //         // name: { not: 'ataur' }This query filters out users whose name is exactly 'ataur'.
    //         // name: { notIn: ['ataur','irfan'] }
    //         // name: { in: ['ataur','irfan'] },
    //         // age:{lt:50} here this query retrives all the users whose age is less than 50 ,less than 50
    //         // AND:[{email:{startsWith:'ataur'}},{name:'ataur rahman'}]  //The AND clause contains an array of conditions, and each condition is an object specifying a field and the criteria it must meet. In this case, the AND clause includes two conditions:
    //         // OR: [{ email: { startsWith: 'irfan' } }, { age: { gt: 20 } }] //The OR clause is similar to the AND clause, but it returns records that match any of the specified conditions. In this case, the OR clause includes two conditions:
    //         // NOT: { name: 'ataur rahman' } //The NOT clause is used to exclude records that match the specified criteria. In this case, the query will return all records except those with the name 'ataur'.
    //         //    userPreference:{
    //         //     emailUpdates:false
    //         //    } querying from the related table which is associate with user

    //         writtenPosts: {
    //             some: {
    //                 title:{startsWith:'Test'}
    //             }
    //         }
    //     },
    //     // orderBy:{
    //     //     age:'desc'
    //     // },
    //     // //    distinct:['name']   // distinct:[''property name']   ause is used within a Prisma query to ensure that the results are unique based on the specified field, in this case, the name field. This means that the query will return only one record for each unique value of the name field, effectively removing any duplicate records that have the same name.
    //     // take: 2, // take is used to limit the number of records returned by a query. In this case, the query will return only the first two records that match the specified criteria.
    //     // skip:1 // this is used to skip the first record and return the rest of the records that match the specified criteria.
    // })

    // const user = await prisma.post.findMany({
    //     where:{
    //         author:{
    //             is:{
    //                 age:27
    //             },
    //             isNot:{
    //                 name:'ataur rahman'
    //             }
    //         }
    //     }
    // })

    const user = await prisma.user.update({
        where: {
            email: 'irfan@gmail.com'
        },
        data: {
            userPreference: {
                connect: {
                    id: "dacf3e72-aa32-4744-ba22-c9ec3717caf3"
                }
            }
        }
    })


    // const user = await prisma.userPreference.create({
    //     data:{
    //       emailUpdates:true
    //     },
    // })

    console.log(user);

}

main().catch(e => {
    console.error(e.message);
}).finally(async () => {
    await prisma.$disconnect();
})