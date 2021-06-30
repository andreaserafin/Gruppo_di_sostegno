export class CoursePreview{
    nome: string | undefined;
    descrizione: string | undefined;
    src: string | undefined;
}

export class NewsPreview{
    titolo: string | undefined;
    descrizione: string | undefined;
    src: string | undefined;
}

export class OpendayPreview{
    luogo: string | undefined;
    numero: number | undefined;
    mese: string | undefined;
    ora: string | undefined;
    giorno: string | undefined;
}

export interface DetailNews {
    titolo: string;
    sottotitolo1: string;
    sottotitolo2: string;
    sottotitolo3: string;
    sottotitolo4: string;
    paragrafo1: string;
    paragrafo2: string;
    paragrafo3: string;
    paragrafo4: string;
    src: string;
}

export interface DetailCourse {
}