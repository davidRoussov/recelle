import React, { Component } from 'react';

const dummyData = [
  {
    packetID: '114',
    dateAdded: '2017-10-02',
    lastScanned: '2017-10-07',
    rating: '80'
  },
  {
    packetID: '115',
    dateAdded: '2017-10-02',
    lastScanned: '2017-10-07',
    rating: '74'
  },
  {
    packetID: '116',
    dateAdded: '2017-10-02',
    lastScanned: '2017-10-07',
    rating: '83'
  },
  {
    packetID: '117',
    dateAdded: '2017-10-02',
    lastScanned: '2017-10-07',
    rating: '84'
  },
  {
    packetID: '118',
    dateAdded: '2017-10-02',
    lastScanned: '2017-10-07',
    rating: '95'
  },
  {
    packetID: '119',
    dateAdded: '2017-10-02',
    lastScanned: '2017-10-07',
    rating: '66'
  },
  {
    packetID: '120',
    dateAdded: '2017-10-03',
    lastScanned: '2017-10-07',
    rating: '71'
  },
  {
    packetID: '121',
    dateAdded: '2017-10-01',
    lastScanned: '2017-10-07',
    rating: '71'
  },
  {
    packetID: '122',
    dateAdded: '2017-10-04',
    lastScanned: '2017-10-07',
    rating: '70'
  },
  {
    packetID: '123',
    dateAdded: '2017-10-03',
    lastScanned: '2017-10-07',
    rating: '90'
  },

];

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