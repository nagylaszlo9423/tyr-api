import { LineStringDto } from './';
export interface UpdateRouteRequest {
    title?: string;
    description?: string;
    path?: LineStringDto;
}
