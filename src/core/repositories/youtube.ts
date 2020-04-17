import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import config from '../../config';
import mapResponse, { ImapResponse } from '../utils/mapResponse';
import { YoutubeSearch } from '../domain/entities/youtube-search';

interface searchVideoResponse {

    items: YoutubeSearch[]
}
export default class Youtube {

    youtubeAxiosInstance: AxiosInstance;

    constructor() {
        this.youtubeAxiosInstance = axios.create({
            baseURL: config.youtubeApiV3URL,
            headers: {
                key: config.youtubeAccessToken,
                Accept: 'application/json'
            },

            params: {
                key: config.youtubeAccessToken,
                access_token: config.youtubeAccessToken,
            }
        });
    }



    async searchVideo(q: string): Promise<ImapResponse<YoutubeSearch[]>> {
        const options: AxiosRequestConfig = {
            params: {
                part: 'id,snippet',
                q,
                key: config.youtubeAccessToken,
                access_token: config.youtubeAccessToken,
                maxResults: 20,
                type:'video',
                order:'rating'

            }
        }
        const { data } = await this.youtubeAxiosInstance.get('search', options)
        const items: YoutubeSearch[] = data.items;

        return mapResponse<YoutubeSearch[]>({ response: items, message: 'ok', success: true })


    }
}