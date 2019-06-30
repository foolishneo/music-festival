import { MusicFestivalData, MusicFestival, Bands, MusicFestivalDto } from '../dto/festivals.dto';

export function getFestivalBands(incoming: MusicFestivalData) {
  const recordLabels = [];
  const bands = [];
  const bandsOfRecordLabel = [];
  const festivalsOfBand = [];

  const addItem = (theArray: Array<string>, item:string) => {
    if (theArray.indexOf(item) === -1) {
      theArray.push(item);
      theArray = theArray.sort();
    }
  }

  incoming.map(item => {
    item.bands.map(band => {
      band.recordLabel = (band.recordLabel === undefined || band.recordLabel === '')
      ? 'Unsigned bands' : band.recordLabel;
      
      addItem(recordLabels,band.recordLabel);
      addItem(bands, band.name);      
    });
  });

  incoming.map(item => {
    let theFestival = undefined;
    if (Object.keys(item).indexOf('name') !== -1) {
      theFestival = (item as MusicFestival).name;
    }
    item.bands.map(band => {
      let recPos = recordLabels.indexOf(band.recordLabel);
      if (bandsOfRecordLabel[recPos] === undefined) {
        bandsOfRecordLabel[recPos] = [band.name]
      } else {
        addItem(bandsOfRecordLabel[recPos], band.name)
      }
      if (theFestival) {
        let bandPos = bands.indexOf(band.name);
        if (festivalsOfBand[bandPos] === undefined) {
          festivalsOfBand[bandPos] = [theFestival]
        } else {
          addItem(festivalsOfBand[bandPos],theFestival)
        }
      }
    });
  });

  return {
    recordLabels: recordLabels,
    bandsOfRecordLabel: bandsOfRecordLabel,
    bands: bands,
    festivalsOfBand: festivalsOfBand
  };
}