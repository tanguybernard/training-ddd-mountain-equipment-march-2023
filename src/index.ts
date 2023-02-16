import 'module-alias/register';
import {initServer} from "./app";
import { PORT, AMQP_URL } from './env';
import {AppDataSource} from "./data-source";
import {DomainEvents} from "./shared-kernel/domain-event-dispatching/domain-events";
import CarRentedEvent from "./leasing/application-core/driver/domain/events/car-rented-event";
import CarRentedEventHandler
    from "./leasing/application-core/car/application/event-handlers/car-rented-event-handler";
import CarPgRepository from "./leasing/infrastructure/postgres/car/car-repository";
import CarDto from "./leasing/infrastructure/postgres/car/car-dto";
import CarDao from "./leasing/infrastructure/postgres/car/car-dao";
import LeasingFactory from "./leasing/leasing-factory";

import amqplib, { Channel, Connection } from 'amqplib'

AppDataSource.initialize().then(async () => {

    /*console.log("Inserting a new car into the database...")
    const car = new CarDto()

    car.name = "Toyota"
    car.id = "VFS1V2009ASIV2009"
    await AppDataSource.manager.save(car)
    console.log("Saved a new car with id: " + car.id)

    console.log("Loading car from the database...")
    const carFound = await AppDataSource.manager.find(CarDto)
    console.log("Loaded car: ", carFound);
*/

}).catch(error => console.log(error))

DomainEvents.register(new CarRentedEventHandler(LeasingFactory.carRepository()), CarRentedEvent.name);




/*
const queue = 'tasks';
console.log("GOGO")
amqplib.connect(amqpUrl, (err, conn) => {
    if (err) throw err;

    console.log("AMQPLIB READY")
    // Listener
    conn.createChannel((err, ch2) => {
        if (err) throw err;

        ch2.assertQueue(queue);

        ch2.consume(queue, (msg) => {
            if (msg !== null) {
                console.log(msg.content.toString());
                ch2.ack(msg);
            } else {
                console.log('Consumer cancelled by server');
            }
        });
    });

    // Sender
    conn.createChannel((err, ch1) => {
        if (err) throw err;

        ch1.assertQueue(queue);

        setInterval(() => {
            ch1.sendToQueue(queue, Buffer.from('something to do'));
        }, 1000);
    });
});

*/

const server =  initServer().listen(PORT, () => {
    console.log(`[${process.env.NODE_ENV}] Server is listening on port ${PORT}`);
});


connect()
let channel: Channel, connection: Connection

// connect to rabbitmq
async function connect() {
    try {
        // rabbitmq default port is 5672
        const amqpServer = AMQP_URL || 'amqp://localhost:5673';
        connection = await amqplib.connect(amqpServer)
        channel = await connection.createChannel()

        // make sure that the order channel is created, if not this statement will create it
        await channel.assertQueue('order')


        // consume all the orders that are not acknowledged
        await channel.consume('order', (data) => {
            console.log(`Received ${Buffer.from(data!.content)}`)
            channel.ack(data!);
        })


        channel.sendToQueue(
            'order',
            Buffer.from(
                JSON.stringify({
                    msg: "Hello From TS DDD PROJECT",
                    date: new Date(),
                }),
            ),
        )

    } catch (error) {
        console.log(error)
    }
}

export default server;
