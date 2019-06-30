export interface Band {
  name: string;
  recordLabel: string;
}

export interface MusicFestival {
  name: string;
  bands: Band[];
}

export interface Bands {
  bands: Band[]
}

export type MusicFestivalData = Array<MusicFestival | Bands>

export type MusicFestivalDataDto = Array<MusicFestivalDto | BandsDto>

export class BandDto implements Band {
  name: string;
  recordLabel: string;
}

export class BandsDto implements Bands {
  bands: BandDto[]
}

export class MusicFestivalDto implements MusicFestival {
  name: string;
  bands: BandDto[];
}