import { Cas } from './cas';
import { Temoignage } from './temoignage';

export interface ResultsPage {

    page: number;
    totalPage: number;
    totalData: number;
    results: any;
}
