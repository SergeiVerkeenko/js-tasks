const { MongoClient, ObjectId } = require('mongodb');

const MongoDBClient = new MongoClient('mongodb://localhost:27017')

const main = async () => {
    await MongoDBClient.connect()
    const db = MongoDBClient.db('HSchool')
    const collection = db.collection('students')
    // await collection.insertMany(
    //     [{ "name": "Иван Иванов", "age": 23, "email": "ivan.ivanov@example.by", "phone": "+375 (29) 123-56-90" },
    //     { "name": "Мария Петрова", "age": 27, "email": "maria.petrova@example.ru", "phone": "+375 (29) 555-55-55" },
    //     { "name": "Алексей Сидоров", "age": 21, "email": "aleksey.sidorov@example.com", "phone": "+375 (29) 999-99-99" },
    //     { "name": "Елена Кузнецова", "age": 25, "email": "elena.kuz@example.by", "phone": "+375 (29) 777-77-77" },
    //     { "name": "Дарья Плешко", "age": 25, "email": "darya.pleshko@example.ru", "phone": "+375 (29) 111-11-11" },
    //     { "name": "Марина Иванова", "age": 21, "email": "marina.ivanova@example.com", "phone": "+375 (29) 345-67-89" },
    //     { "name": "Игорь Петров", "age": 24, "email": "igor.petrov@example.com", "phone": "+375 (29) 234-56-78" },
    //     { "name": "Александра Сидорова", "age": 22, "email": "alex.sid@example.com", "phone": "+375 (29) 678-90-12" },
    //     { "name": "Сергей Кузнецов", "age": 20, "email": "sergey.kuznetsov@example.com", "phone": "+375 (29) 456-78-90" },
    //     { "name": "Олег Николаев", "age": 23, "email": "oleg.nik@example.com", "ru": "+375 (29) 678-90-12" },
    //     { "name": "Екатерина Смирнова", "age": 25, "email": "kate.smir@example.com", "phone": "+375 (29) 234-56-78" },
    //     { "name": "Артем Федоров", "age": 19, "email": "artem.fedorov@example.ru", "phone": "+375 (29) 345-67-89" },
    //     { "name": "Мария Попова", "age": 26, "email": "maria.popova@example.by", "phone": "+375 (29) 789-01-23" }]
    // )
    // const zapros_1 = await collection.find().toArray()
    // console.log(zapros_1);
    // const data = await collection.find(
    //     {
    //         $and: [
    //             { age: { $gte: 20 } },
    //             { age: { $lte: 25 } }

    //         ]
    //     }
    // ).toArray()
    // const data = await collection.findOneAndUpdate({ name: 'Елена Кузнецова' }, { $set: { age: 30 } })
    // const data = await collection.findOne({ name: 'Елена Кузнецова' })
    // const data = await collection.countDocuments()
    // const data = await collection.deleteMany(
    //     { age: { $lt: 21 } }
    // )
    // const data = await collection.find(
    //     { age: { $gte: 20 } }
    // ).toArray()

    // const deleteById = new ObjectId('644ac15dcf6665feb5ff3c98')

    // const data = await collection.deleteOne(
    //     { _id: deleteById }
    // )
    // const data = await collection.find(
    //     { email: { $regex: /.com$/gm } }
    // ).toArray()
    // const data = await collection.find(
    //     { name: { $regex: /^А/gm } }
    // ).toArray()
    // const data = await collection.find(
    //     { age: { $lt: 25 } }
    // ).toArray()
    // const data = await collection.find(
    //     { phone: { $regex: /^\+375 \(29\)/gm } }
    // ).toArray()
    // const data = await collection.find({

    //     email: {
    //         $regex: /example/gm
    //     }
    // }).toArray()
    // const data = collection.find(
    //    {name :{$regex: / /gm}}
    // )
    // const data = await collection.find(
    //     {
    //         $and: [{ name: { $regex: /^А/gm } },
    //         { phone: { $regex: /9$/gm } }
    //         ]
    //     }).toArray()
    // const data = await collection.find().sort({ age: -1 }).limit(1).toArray()
    // const data = await collection.find().sort({ age: 1 }).limit(1).toArray()
    // const data = await collection.find(
    //     { age: { $gt: 25 } }
    // ).count()
    // const data = await collection.updateOne(
    //     { name: 'Иван Иванов' }, { $set: { phone: '+375(29) 555-55 - 55' } }
    // )
    // const data = await collection.updateMany(
    //     { name: { $regex: /^М/gm } }, { $set: { age: 23 } }
    // )
    // const data = await collection.updateOne(
    //     { name: 'Елена Кузнецова' }, { $set: { email: 'elena.kuz@example.com' } }
    // )
    // const data = await collection.updateMany(
    //     {},
    //     { $set: { group: 'A1' } }
    // )
    // const f = name.length
    const data = await collection.find(
        
    ).sort().limit(1).toArray()


    console.log(data);


}

main()