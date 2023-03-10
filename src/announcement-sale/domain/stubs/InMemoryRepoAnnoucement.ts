import {AnnoucementRepository} from "../announcement/annoucement-repository";
import {Announcement} from "../announcement/announcement";
import {AnnouncementId} from "../announcement/announcement-id";


export class InMemoryRepoAnnoucement implements AnnoucementRepository{


     public list = [];

    create(annouce: Announcement): Promise<void> {
        this.list.push(annouce);
        return Promise.resolve();
    }

    getAnnounce(id: AnnouncementId): Promise<Announcement> {
        return  this.list.find(a => id.equals(a.id));
    }

}
