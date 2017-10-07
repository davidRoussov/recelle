import React, { Component } from 'react';

class Analysis extends Component {
  render() {

    const packetTRs = dummyData.map(data => {
      return (
        <tr>
          <td>{data.packetID}</td>
          <td>{data.dateAdded}</td>
          <td>{data.lastScanned}</td>
          <td>{data.rating}</td>
        </tr>
      );
    });

    return (
      <div>
        <table className='table table-striped table-hover'>
          <thead>
            <tr>
              <th>Packet ID</th>
              <th>Date Added</th>
              <th>Last scanned</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {packetTRs}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Analysis;

const dummyData = [

  {
    packetID: '10217',
    dateAdded: '2017-10-8',
    lastScanned: '2017-10-6',
    rating: '38'
  },

  {
    packetID: '10218',
    dateAdded: '2017-10-2',
    lastScanned: '2017-10-3',
    rating: '17'
  },

  {
    packetID: '10219',
    dateAdded: '2017-10-7',
    lastScanned: '2017-10-2',
    rating: '70'
  },

  {
    packetID: '10220',
    dateAdded: '2017-10-4',
    lastScanned: '2017-10-2',
    rating: '47'
  },

  {
    packetID: '10221',
    dateAdded: '2017-10-0',
    lastScanned: '2017-10-7',
    rating: '71'
  },

  {
    packetID: '10222',
    dateAdded: '2017-10-1',
    lastScanned: '2017-10-9',
    rating: '58'
  },

  {
    packetID: '10223',
    dateAdded: '2017-10-1',
    lastScanned: '2017-10-8',
    rating: '65'
  },

  {
    packetID: '10224',
    dateAdded: '2017-10-1',
    lastScanned: '2017-10-9',
    rating: '43'
  },

  {
    packetID: '10225',
    dateAdded: '2017-10-9',
    lastScanned: '2017-10-8',
    rating: '62'
  },

  {
    packetID: '10226',
    dateAdded: '2017-10-9',
    lastScanned: '2017-10-9',
    rating: '97'
  },

  {
    packetID: '10227',
    dateAdded: '2017-10-6',
    lastScanned: '2017-10-2',
    rating: '49'
  },

  {
    packetID: '10228',
    dateAdded: '2017-10-1',
    lastScanned: '2017-10-1',
    rating: '60'
  },

  {
    packetID: '10229',
    dateAdded: '2017-10-0',
    lastScanned: '2017-10-0',
    rating: '20'
  },

  {
    packetID: '10230',
    dateAdded: '2017-10-7',
    lastScanned: '2017-10-8',
    rating: '5'
  },

  {
    packetID: '10231',
    dateAdded: '2017-10-0',
    lastScanned: '2017-10-8',
    rating: '40'
  },

  {
    packetID: '10232',
    dateAdded: '2017-10-3',
    lastScanned: '2017-10-6',
    rating: '68'
  },

  {
    packetID: '10233',
    dateAdded: '2017-10-8',
    lastScanned: '2017-10-9',
    rating: '67'
  },

  {
    packetID: '10234',
    dateAdded: '2017-10-4',
    lastScanned: '2017-10-2',
    rating: '15'
  },

  {
    packetID: '10235',
    dateAdded: '2017-10-8',
    lastScanned: '2017-10-5',
    rating: '15'
  },

  {
    packetID: '10236',
    dateAdded: '2017-10-9',
    lastScanned: '2017-10-1',
    rating: '86'
  },

  {
    packetID: '10237',
    dateAdded: '2017-10-7',
    lastScanned: '2017-10-7',
    rating: '4'
  },

  {
    packetID: '10238',
    dateAdded: '2017-10-4',
    lastScanned: '2017-10-6',
    rating: '91'
  },

  {
    packetID: '10239',
    dateAdded: '2017-10-7',
    lastScanned: '2017-10-2',
    rating: '100'
  },

  {
    packetID: '10240',
    dateAdded: '2017-10-1',
    lastScanned: '2017-10-1',
    rating: '85'
  },

  {
    packetID: '10241',
    dateAdded: '2017-10-9',
    lastScanned: '2017-10-9',
    rating: '58'
  },

  {
    packetID: '10242',
    dateAdded: '2017-10-3',
    lastScanned: '2017-10-3',
    rating: '85'
  },

  {
    packetID: '10243',
    dateAdded: '2017-10-9',
    lastScanned: '2017-10-0',
    rating: '86'
  },

  {
    packetID: '10244',
    dateAdded: '2017-10-0',
    lastScanned: '2017-10-0',
    rating: '13'
  },

  {
    packetID: '10245',
    dateAdded: '2017-10-7',
    lastScanned: '2017-10-5',
    rating: '77'
  },

  {
    packetID: '10246',
    dateAdded: '2017-10-2',
    lastScanned: '2017-10-6',
    rating: '96'
  },

  {
    packetID: '10247',
    dateAdded: '2017-10-2',
    lastScanned: '2017-10-4',
    rating: '54'
  },

  {
    packetID: '10248',
    dateAdded: '2017-10-5',
    lastScanned: '2017-10-2',
    rating: '46'
  },

  {
    packetID: '10249',
    dateAdded: '2017-10-6',
    lastScanned: '2017-10-9',
    rating: '37'
  },

  {
    packetID: '10250',
    dateAdded: '2017-10-0',
    lastScanned: '2017-10-9',
    rating: '18'
  },

  {
    packetID: '10251',
    dateAdded: '2017-10-6',
    lastScanned: '2017-10-4',
    rating: '18'
  },

  {
    packetID: '10252',
    dateAdded: '2017-10-8',
    lastScanned: '2017-10-4',
    rating: '95'
  },

  {
    packetID: '10253',
    dateAdded: '2017-10-3',
    lastScanned: '2017-10-8',
    rating: '62'
  },

  {
    packetID: '10254',
    dateAdded: '2017-10-0',
    lastScanned: '2017-10-1',
    rating: '28'
  },

  {
    packetID: '10255',
    dateAdded: '2017-10-6',
    lastScanned: '2017-10-3',
    rating: '28'
  },

  {
    packetID: '10256',
    dateAdded: '2017-10-2',
    lastScanned: '2017-10-5',
    rating: '23'
  },

  {
    packetID: '10257',
    dateAdded: '2017-10-1',
    lastScanned: '2017-10-2',
    rating: '18'
  },

  {
    packetID: '10258',
    dateAdded: '2017-10-7',
    lastScanned: '2017-10-1',
    rating: '51'
  },

  {
    packetID: '10259',
    dateAdded: '2017-10-4',
    lastScanned: '2017-10-3',
    rating: '9'
  },

  {
    packetID: '10260',
    dateAdded: '2017-10-7',
    lastScanned: '2017-10-5',
    rating: '16'
  },

  {
    packetID: '10261',
    dateAdded: '2017-10-9',
    lastScanned: '2017-10-1',
    rating: '11'
  },

  {
    packetID: '10262',
    dateAdded: '2017-10-7',
    lastScanned: '2017-10-6',
    rating: '43'
  },

  {
    packetID: '10263',
    dateAdded: '2017-10-0',
    lastScanned: '2017-10-1',
    rating: '37'
  },

  {
    packetID: '10264',
    dateAdded: '2017-10-3',
    lastScanned: '2017-10-5',
    rating: '24'
  },

  {
    packetID: '10265',
    dateAdded: '2017-10-3',
    lastScanned: '2017-10-6',
    rating: '64'
  },

  {
    packetID: '10266',
    dateAdded: '2017-10-9',
    lastScanned: '2017-10-2',
    rating: '75'
  },

  {
    packetID: '10267',
    dateAdded: '2017-10-4',
    lastScanned: '2017-10-1',
    rating: '49'
  },

  {
    packetID: '10268',
    dateAdded: '2017-10-1',
    lastScanned: '2017-10-1',
    rating: '32'
  },

  {
    packetID: '10269',
    dateAdded: '2017-10-2',
    lastScanned: '2017-10-7',
    rating: '6'
  },

  {
    packetID: '10270',
    dateAdded: '2017-10-4',
    lastScanned: '2017-10-5',
    rating: '88'
  },

  {
    packetID: '10271',
    dateAdded: '2017-10-4',
    lastScanned: '2017-10-8',
    rating: '15'
  },

  {
    packetID: '10272',
    dateAdded: '2017-10-2',
    lastScanned: '2017-10-6',
    rating: '10'
  },

  {
    packetID: '10273',
    dateAdded: '2017-10-0',
    lastScanned: '2017-10-5',
    rating: '88'
  },

  {
    packetID: '10274',
    dateAdded: '2017-10-0',
    lastScanned: '2017-10-6',
    rating: '56'
  },

  {
    packetID: '10275',
    dateAdded: '2017-10-7',
    lastScanned: '2017-10-5',
    rating: '29'
  },

  {
    packetID: '10276',
    dateAdded: '2017-10-2',
    lastScanned: '2017-10-8',
    rating: '17'
  },

  {
    packetID: '10277',
    dateAdded: '2017-10-0',
    lastScanned: '2017-10-3',
    rating: '35'
  },

  {
    packetID: '10278',
    dateAdded: '2017-10-5',
    lastScanned: '2017-10-6',
    rating: '22'
  },

  {
    packetID: '10279',
    dateAdded: '2017-10-8',
    lastScanned: '2017-10-3',
    rating: '6'
  },

  {
    packetID: '10280',
    dateAdded: '2017-10-6',
    lastScanned: '2017-10-2',
    rating: '76'
  },

  {
    packetID: '10281',
    dateAdded: '2017-10-9',
    lastScanned: '2017-10-3',
    rating: '87'
  },

  {
    packetID: '10282',
    dateAdded: '2017-10-1',
    lastScanned: '2017-10-5',
    rating: '82'
  },

  {
    packetID: '10283',
    dateAdded: '2017-10-5',
    lastScanned: '2017-10-1',
    rating: '100'
  },

  {
    packetID: '10284',
    dateAdded: '2017-10-2',
    lastScanned: '2017-10-1',
    rating: '49'
  },

  {
    packetID: '10285',
    dateAdded: '2017-10-4',
    lastScanned: '2017-10-2',
    rating: '27'
  },

  {
    packetID: '10286',
    dateAdded: '2017-10-7',
    lastScanned: '2017-10-5',
    rating: '93'
  },

  {
    packetID: '10287',
    dateAdded: '2017-10-8',
    lastScanned: '2017-10-6',
    rating: '2'
  },

  {
    packetID: '10288',
    dateAdded: '2017-10-0',
    lastScanned: '2017-10-8',
    rating: '14'
  },

  {
    packetID: '10289',
    dateAdded: '2017-10-5',
    lastScanned: '2017-10-6',
    rating: '92'
  },

  {
    packetID: '10290',
    dateAdded: '2017-10-1',
    lastScanned: '2017-10-0',
    rating: '21'
  },

  {
    packetID: '10291',
    dateAdded: '2017-10-9',
    lastScanned: '2017-10-5',
    rating: '85'
  },

  {
    packetID: '10292',
    dateAdded: '2017-10-0',
    lastScanned: '2017-10-8',
    rating: '25'
  },

  {
    packetID: '10293',
    dateAdded: '2017-10-6',
    lastScanned: '2017-10-9',
    rating: '55'
  },

  {
    packetID: '10294',
    dateAdded: '2017-10-9',
    lastScanned: '2017-10-9',
    rating: '12'
  },

  {
    packetID: '10295',
    dateAdded: '2017-10-9',
    lastScanned: '2017-10-8',
    rating: '89'
  },

  {
    packetID: '10296',
    dateAdded: '2017-10-3',
    lastScanned: '2017-10-6',
    rating: '72'
  },

  {
    packetID: '10297',
    dateAdded: '2017-10-2',
    lastScanned: '2017-10-3',
    rating: '53'
  },

  {
    packetID: '10298',
    dateAdded: '2017-10-2',
    lastScanned: '2017-10-1',
    rating: '21'
  },

  {
    packetID: '10299',
    dateAdded: '2017-10-6',
    lastScanned: '2017-10-1',
    rating: '47'
  },

  {
    packetID: '10300',
    dateAdded: '2017-10-1',
    lastScanned: '2017-10-5',
    rating: '42'
  },

  {
    packetID: '10301',
    dateAdded: '2017-10-6',
    lastScanned: '2017-10-5',
    rating: '30'
  },

  {
    packetID: '10302',
    dateAdded: '2017-10-0',
    lastScanned: '2017-10-1',
    rating: '98'
  },

  {
    packetID: '10303',
    dateAdded: '2017-10-9',
    lastScanned: '2017-10-1',
    rating: '90'
  },

  {
    packetID: '10304',
    dateAdded: '2017-10-1',
    lastScanned: '2017-10-1',
    rating: '14'
  },

  {
    packetID: '10305',
    dateAdded: '2017-10-4',
    lastScanned: '2017-10-9',
    rating: '68'
  },

  {
    packetID: '10306',
    dateAdded: '2017-10-7',
    lastScanned: '2017-10-6',
    rating: '81'
  },

  {
    packetID: '10307',
    dateAdded: '2017-10-5',
    lastScanned: '2017-10-0',
    rating: '22'
  },

  {
    packetID: '10308',
    dateAdded: '2017-10-6',
    lastScanned: '2017-10-6',
    rating: '41'
  },

  {
    packetID: '10309',
    dateAdded: '2017-10-5',
    lastScanned: '2017-10-5',
    rating: '53'
  },

  {
    packetID: '10310',
    dateAdded: '2017-10-0',
    lastScanned: '2017-10-1',
    rating: '8'
  },

  {
    packetID: '10311',
    dateAdded: '2017-10-0',
    lastScanned: '2017-10-5',
    rating: '12'
  },

  {
    packetID: '10312',
    dateAdded: '2017-10-3',
    lastScanned: '2017-10-7',
    rating: '8'
  },

  {
    packetID: '10313',
    dateAdded: '2017-10-3',
    lastScanned: '2017-10-5',
    rating: '11'
  },

  {
    packetID: '10314',
    dateAdded: '2017-10-0',
    lastScanned: '2017-10-6',
    rating: '38'
  },

  {
    packetID: '10315',
    dateAdded: '2017-10-4',
    lastScanned: '2017-10-6',
    rating: '11'
  },

  {
    packetID: '10316',
    dateAdded: '2017-10-6',
    lastScanned: '2017-10-6',
    rating: '74'
  },

  {
    packetID: '10317',
    dateAdded: '2017-10-6',
    lastScanned: '2017-10-0',
    rating: '96'
  },

  {
    packetID: '10318',
    dateAdded: '2017-10-2',
    lastScanned: '2017-10-7',
    rating: '77'
  },

  {
    packetID: '10319',
    dateAdded: '2017-10-9',
    lastScanned: '2017-10-8',
    rating: '89'
  },

  {
    packetID: '10320',
    dateAdded: '2017-10-7',
    lastScanned: '2017-10-3',
    rating: '17'
  },

  {
    packetID: '10321',
    dateAdded: '2017-10-6',
    lastScanned: '2017-10-9',
    rating: '18'
  },

  {
    packetID: '10322',
    dateAdded: '2017-10-6',
    lastScanned: '2017-10-1',
    rating: '53'
  },

  {
    packetID: '10323',
    dateAdded: '2017-10-6',
    lastScanned: '2017-10-4',
    rating: '53'
  },

  {
    packetID: '10324',
    dateAdded: '2017-10-3',
    lastScanned: '2017-10-0',
    rating: '72'
  },

  {
    packetID: '10325',
    dateAdded: '2017-10-0',
    lastScanned: '2017-10-7',
    rating: '39'
  },

  {
    packetID: '10326',
    dateAdded: '2017-10-1',
    lastScanned: '2017-10-9',
    rating: '22'
  },

  {
    packetID: '10327',
    dateAdded: '2017-10-3',
    lastScanned: '2017-10-2',
    rating: '84'
  },

  {
    packetID: '10328',
    dateAdded: '2017-10-5',
    lastScanned: '2017-10-6',
    rating: '58'
  },

  {
    packetID: '10329',
    dateAdded: '2017-10-5',
    lastScanned: '2017-10-0',
    rating: '89'
  },

  {
    packetID: '10330',
    dateAdded: '2017-10-4',
    lastScanned: '2017-10-1',
    rating: '30'
  },

  {
    packetID: '10331',
    dateAdded: '2017-10-7',
    lastScanned: '2017-10-7',
    rating: '52'
  },

  {
    packetID: '10332',
    dateAdded: '2017-10-8',
    lastScanned: '2017-10-0',
    rating: '35'
  },

  {
    packetID: '10333',
    dateAdded: '2017-10-5',
    lastScanned: '2017-10-0',
    rating: '72'
  },

  {
    packetID: '10334',
    dateAdded: '2017-10-1',
    lastScanned: '2017-10-9',
    rating: '32'
  },

  {
    packetID: '10335',
    dateAdded: '2017-10-9',
    lastScanned: '2017-10-9',
    rating: '97'
  },

  {
    packetID: '10336',
    dateAdded: '2017-10-4',
    lastScanned: '2017-10-2',
    rating: '30'
  },

  {
    packetID: '10337',
    dateAdded: '2017-10-4',
    lastScanned: '2017-10-7',
    rating: '81'
  },

  {
    packetID: '10338',
    dateAdded: '2017-10-3',
    lastScanned: '2017-10-4',
    rating: '46'
  },

  {
    packetID: '10339',
    dateAdded: '2017-10-2',
    lastScanned: '2017-10-8',
    rating: '74'
  },

  {
    packetID: '10340',
    dateAdded: '2017-10-3',
    lastScanned: '2017-10-6',
    rating: '68'
  },

  {
    packetID: '10341',
    dateAdded: '2017-10-0',
    lastScanned: '2017-10-6',
    rating: '12'
  },

  {
    packetID: '10342',
    dateAdded: '2017-10-8',
    lastScanned: '2017-10-5',
    rating: '1'
  },

  {
    packetID: '10343',
    dateAdded: '2017-10-4',
    lastScanned: '2017-10-7',
    rating: '32'
  },

  {
    packetID: '10344',
    dateAdded: '2017-10-0',
    lastScanned: '2017-10-0',
    rating: '99'
  },

  {
    packetID: '10345',
    dateAdded: '2017-10-2',
    lastScanned: '2017-10-9',
    rating: '72'
  },

  {
    packetID: '10346',
    dateAdded: '2017-10-4',
    lastScanned: '2017-10-7',
    rating: '46'
  },

  {
    packetID: '10347',
    dateAdded: '2017-10-7',
    lastScanned: '2017-10-1',
    rating: '1'
  },

  {
    packetID: '10348',
    dateAdded: '2017-10-7',
    lastScanned: '2017-10-8',
    rating: '31'
  },

  {
    packetID: '10349',
    dateAdded: '2017-10-9',
    lastScanned: '2017-10-8',
    rating: '40'
  },

  {
    packetID: '10350',
    dateAdded: '2017-10-8',
    lastScanned: '2017-10-9',
    rating: '12'
  },

  {
    packetID: '10351',
    dateAdded: '2017-10-5',
    lastScanned: '2017-10-9',
    rating: '67'
  },

  {
    packetID: '10352',
    dateAdded: '2017-10-4',
    lastScanned: '2017-10-3',
    rating: '5'
  },

  {
    packetID: '10353',
    dateAdded: '2017-10-9',
    lastScanned: '2017-10-9',
    rating: '41'
  },

  {
    packetID: '10354',
    dateAdded: '2017-10-9',
    lastScanned: '2017-10-6',
    rating: '87'
  },

  {
    packetID: '10355',
    dateAdded: '2017-10-9',
    lastScanned: '2017-10-2',
    rating: '27'
  },

  {
    packetID: '10356',
    dateAdded: '2017-10-8',
    lastScanned: '2017-10-8',
    rating: '88'
  },

  {
    packetID: '10357',
    dateAdded: '2017-10-8',
    lastScanned: '2017-10-3',
    rating: '53'
  },

  {
    packetID: '10358',
    dateAdded: '2017-10-4',
    lastScanned: '2017-10-9',
    rating: '89'
  }
];