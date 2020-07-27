export interface Temoignage {

    _id: string;
    id_cas: number;
    id_temoignage: string;
    //Date tem_chrono;
    obs_chrono: string;
    tem_nom_dossier: string;
    tem_resume: string;
    tem_Ti_type: string;
    tem_age: string;
    tem_genre: string;
    tem_adr_commune: string;
    cas_numEtude: string;
    tem_adr_CP: string;
    obs_1_adr_dpt: string;
    tem_adr_dpt: string;
    tem_adr_pays: string;
    tem_xp_activite_type: string;
    tem_xp_astro: string;
    tem_obs_moyen: string;
    tem_numSEPRA: string;
    id_observation: string;
    obs_nb: string;
    obs_commune_or_trajet: string;
    obs_AAAA: string;
    obs_MM: string;
    obs_JJ: string;
    obs_date_heure: Date;
    obs_1_lat: string;
    obs_1_lon: string;
}
