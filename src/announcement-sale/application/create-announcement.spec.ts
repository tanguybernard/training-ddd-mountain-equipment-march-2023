import {DataSource} from "typeorm";
import {AppDataSource} from "../../data-source";
import {AnnouncementId} from "../domain/announcement/announcement-id";
import {Announcement} from "../domain/announcement/announcement";
import {Price} from "../../shared-kernel-announcement/domain/price";
import {AnnoucementRepository} from "../domain/announcement/annoucement-repository";
import {CreateAnnouncement} from "./create-announcement";
import {InMemoryRepoAnnoucement} from "../domain/stubs/InMemoryRepoAnnoucement";

describe(`${CreateAnnouncement.name}`, () => {
    let useCase: CreateAnnouncement;
    let init: DataSource;

    let repo: AnnoucementRepository;
    beforeEach(async () => {

        init = await AppDataSource.initialize();


        repo = new InMemoryRepoAnnoucement();

        useCase = new CreateAnnouncement(repo);

    });

    afterEach(() => {
        init.destroy()
    });

    it('should create a new annouce', async () => {

        await useCase.create(new AnnouncementId("toto"), "Surf", new Price(40));

        const anouncementCreated = await repo.getAnnounce(new AnnouncementId("toto"));
        expect(anouncementCreated.title).toEqual("Surf");


    })
})
