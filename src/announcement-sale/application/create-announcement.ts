import {AnnouncementId} from "../domain/announcement/announcement-id";
import {Price} from "../../shared-kernel-announcement/domain/price";
import {Announcement} from "../domain/announcement/announcement";
import {AnnoucementRepository} from "../domain/announcement/annoucement-repository";


export class CreateAnnouncement {

    constructor(public anounceRepository: AnnoucementRepository) {
    }


    public create(id: AnnouncementId, title: string, price: Price){

        const announce = Announcement.create(id, title, price);

        this.anounceRepository.create(announce);


        //announce.pullDomainEvent();



    }

}
