# DDD Training Template Typescript

<h1>WORK IN PROGRESS</h1>

Separation between domain event and integration event


## Goal : Leasing car

Two BC REgistration and Leasing

Pool of car leasing, or to repair before leasing

Add car, integration event  => consumer leasing BC to be rented

See: _CarReadyToRentIntegrationEvent_


## Skeleton


- src
  - bounded-context-name
    - application-core
      - aggregate-name
        - application
        - domain
      - ports
    - infrastructure
    - presentation
    - tests


## Idea

Idea for a domain event:

A user rent a car, the status of user is update to Car Rented.
When is release the car, a domain event is emmited, the user status change to "FreeToRentACar"

Domain event: Driver(Aggregate) rent car => Car(Aggregate) status updated to RENTED


See: CarRentedEvent


## Credits


Example:

https://www.mirkosertic.de/blog/2013/04/domain-driven-design-example/

Example library:

https://github.com/ddd-cqrs-es/BookLibrary/blob/master/BookingLibrary.Domain.Core/AggregateRoot.cs

https://github.com/ddd-cqrs-es/BookLibrary/tree/master/BookingLibrary.Domain.Core

https://github.com/ddd-by-examples/library

https://medium.com/nick-tune-tech-strategy-blog/ddd-pattern-library-contexts-d6ae81f462ef


Update aggregate:

https://khalilstemmler.com/articles/typescript-domain-driven-design/updating-aggregates-in-domain-driven-design/


Domain event

https://lostechies.com/jimmybogard/2010/04/08/strengthening-your-domain-domain-events/

https://udidahan.com/2009/06/14/domain-events-salvation/

https://khalilstemmler.com/articles/typescript-domain-driven-design/chain-business-logic-domain-events/

Domain event vs Integration event:

https://devblogs.microsoft.com/cesardelatorre/domain-events-vs-integration-events-in-domain-driven-design-and-microservices-architectures/

https://github.com/kgrzybek/modular-monolith-with-ddd
