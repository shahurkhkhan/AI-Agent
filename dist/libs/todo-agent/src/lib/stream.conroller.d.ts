import { Observable } from 'rxjs';
type MessageEvent = {
    data: {
        status: string;
        message: string;
    };
};
export declare class StreamController {
    stream(): Observable<MessageEvent>;
}
export {};
