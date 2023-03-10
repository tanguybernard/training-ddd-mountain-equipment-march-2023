import {AnnouncementId} from "./announcement-id";
import {Announcement} from "./announcement";


export interface AnnoucementRepository {


    getAnnounce(id: AnnouncementId) : Promise<Announcement>;

    create(annouce: Announcement) : Promise<void>;


}
