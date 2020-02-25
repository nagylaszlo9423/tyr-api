import { LineStringDto } from './';
export interface CreateRouteRequest {
    title?: string;
    description?: string;
    path?: LineStringDto;
}
