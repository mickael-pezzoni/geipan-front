export interface Cas {

    _id: string;
    id_cas: string;
    cas_nom_dossier: string;
    cas_zone_nom: string;
    cas_zone_code: number;
    cas_zone_type: string;
    cas_AAAA: number;
    cas_MM: number;
    cas_JJ: number;
    cas_resume: string;
    cas_resume_web: string;
    cas_public: string;
    cas_temoignages_nb: number;
    cas_temoins_nb: number;
    cas_date_maj: Date;
    cas_etrangete_calc: number;
    cas_etrangete_calc_err: number;
    cas_consistance_calc: number;
    cas_consistance_calc_err: number;
    cas_classification: string;
    cas_classification_calc: string;
    cas_numEtude: string;
    files: Array<{name: string, link: string}>;
}


export interface CasClassife {
    _id: string;
    values: Array<{ 
        id_cas: string;
        cas_nom_dossier: string;
        cas_AAAA: number;}
        >
}