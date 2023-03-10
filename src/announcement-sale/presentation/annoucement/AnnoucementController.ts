import {CreateAnnouncement} from "../../application/create-announcement";
import {AnnouncementId} from "../../domain/announcement/announcement-id";
import {Price} from "../../../shared-kernel-announcement/domain/price";


export class AnnoucementController{



    constructor(public useCaseCreate: CreateAnnouncement) {


    }


    create(){
        return (req, res) => {
            const id = req.id;
            const title= req.title;
            const price = req.price;
             this.useCaseCreate.create(new AnnouncementId(id), title, new Price(price))

            return res.send(200);
        }
    }

}
