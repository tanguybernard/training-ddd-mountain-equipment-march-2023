import {AggregateRoot} from "../../../shared-kernel/aggregate-root";
import {AnnouncementId} from "./announcement-id";
import {Price} from "../../../shared-kernel-announcement/domain/price";


export class Announcement {

    private constructor(public id: AnnouncementId, public title: string, public price: Price) {

    }


    static create(id: AnnouncementId, title: string, price: Price): Announcement{
        return new Announcement(id, title, price);
    }


}
