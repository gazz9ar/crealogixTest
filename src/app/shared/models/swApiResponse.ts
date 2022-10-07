import { Film } from '../../pages/films/shared/models/Film';
export interface swApiResponse {
	count:number;
	next:any;
	previous:any;
	results:Film[]
}