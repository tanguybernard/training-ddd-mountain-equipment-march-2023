import {AnnoucementRepository} from "../../domain/announcement/annoucement-repository";
import {Announcement} from "../../domain/announcement/announcement";
import {AnnouncementId} from "../../domain/announcement/announcement-id";


export class PostgresREpoAnouncement implements AnnoucementRepository{
    create(annouce: Announcement): Promise<void> {
        return Promise.resolve(undefined);
    }

    getAnnounce(id: AnnouncementId): Promise<Announcement> {
        return Promise.resolve(undefined);
    }

}
