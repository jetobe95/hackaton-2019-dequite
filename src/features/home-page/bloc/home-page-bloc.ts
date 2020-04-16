import Youtube from "../../../core/repositories/youtube";
import { ImapResponse } from "../../../core/utils/mapResponse";
import { YoutubeSearch } from "../../../core/domain/entities/youtube-search";

export default class HomePageBloc {
    yotubeRepository = new Youtube()

    async search(q: string):Promise<ImapResponse<YoutubeSearch[]>> {
        const response = await this.yotubeRepository.searchVideo(q);
        return response
    }

}