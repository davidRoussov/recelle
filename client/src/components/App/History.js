import React, { Component } from 'react';
import { Button, ButtonGroup, FormControl, ControlLabel, Radio, FormGroup } from 'react-bootstrap';

class History extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const style = {
      container: {
        height: '100%'
      },
      heading: {
        margin: '0px',
        marginBottom: '20px'
      },
      packetsContainer: {
        height: '100%',
        width: '250px',
        float: 'left',
        textAlign: 'center',
        padding: '20px'
      },
      packetButtonGroup: {
        width: '100%'
      },
      packetButton: {
        width: '80%',
        marginLeft: '10%'
      },
      formContainer: {
        height: '100%',
        marginLeft: '250px',
        padding: '20px'
      },
      formElement: {
        marginBottom: '20px'
      }
    };

    const packetButtons = dummyData.map((data, i) => {
      return (
        <Button 
          style={style.packetButton} 
          bsStyle={ (this.state && this.state.currentPacket && this.state.currentPacket.packetID === data.packetID) ? 'primary' : 'default' }
          key={i}
          onClick={() => this.setState({ currentPacket: data })}
        >
        {data.packetID}</Button>
      );
    });

    return (
      <div style={style.container}>

        <div style={style.packetsContainer}>
          <h4 style={style.heading}>Select a packet to evaluate</h4>
          <ButtonGroup vertical style={style.packetButtonGroup}>
            {packetButtons}
          </ButtonGroup>
        </div>

        <div style={style.formContainer}>

          { this.state.currentPacket ?

            <div>
              <h4 style={style.heading}>Evaluate packet {this.state.currentPacket.packetID}</h4>

              <form>

                <ControlLabel>Enter reason for transfusion</ControlLabel>
                <FormControl
                  style={style.formElement}
                  placeholder='Reason for transfusion'
                ></FormControl>

                <hr/>

                <ControlLabel>Subjective measure of patient outcomes (10: very good response; 1: very bad response)</ControlLabel>
                <FormGroup>
                  <Radio name="subjective-rating"inline>1</Radio>
                  <Radio name="subjective-rating"inline>2</Radio>
                  <Radio name="subjective-rating"inline>3</Radio>
                  <Radio name="subjective-rating"inline>4</Radio>
                  <Radio name="subjective-rating"inline>5</Radio>
                  <Radio name="subjective-rating"inline>6</Radio>
                  <Radio name="subjective-rating"inline>7</Radio>
                  <Radio name="subjective-rating"inline>8</Radio>
                  <Radio name="subjective-rating"inline>9</Radio>
                  <Radio name="subjective-rating"inline>10</Radio>
                </FormGroup>

                <hr/>

                <Button
                  type='submit'
                  bsStyle='success'
                >Submit</Button>
              </form>
            </div>

            : null

          }
          
        </div>

      </div>
    );
  }
}

export default History;

const dummyData = [
  { packetID: '10158', dateAdded: '2017-10-7', lastScanned: '2017-10-6', rating: '0' }, { packetID: '10159', dateAdded: '2017-10-3', lastScanned: '2017-10-5', rating: '0' }, { packetID: '10160', dateAdded: '2017-10-4', lastScanned: '2017-10-5', rating: '0' }, { packetID: '10161', dateAdded: '2017-10-0', lastScanned: '2017-10-5', rating: '0' }, { packetID: '10162', dateAdded: '2017-10-7', lastScanned: '2017-10-5', rating: '0' }, { packetID: '10163', dateAdded: '2017-10-7', lastScanned: '2017-10-8', rating: '0' }, { packetID: '10164', dateAdded: '2017-10-8', lastScanned: '2017-10-3', rating: '0' }, { packetID: '10165', dateAdded: '2017-10-7', lastScanned: '2017-10-9', rating: '0' }, { packetID: '10166', dateAdded: '2017-10-3', lastScanned: '2017-10-1', rating: '0' }, { packetID: '10167', dateAdded: '2017-10-2', lastScanned: '2017-10-6', rating: '0' }, { packetID: '10168', dateAdded: '2017-10-7', lastScanned: '2017-10-3', rating: '0' }, { packetID: '10169', dateAdded: '2017-10-8', lastScanned: '2017-10-7', rating: '0' }, { packetID: '10170', dateAdded: '2017-10-8', lastScanned: '2017-10-0', rating: '0' }, { packetID: '10171', dateAdded: '2017-10-4', lastScanned: '2017-10-3', rating: '0' }, { packetID: '10172', dateAdded: '2017-10-9', lastScanned: '2017-10-0', rating: '0' }, { packetID: '10173', dateAdded: '2017-10-5', lastScanned: '2017-10-0', rating: '0' }, { packetID: '10174', dateAdded: '2017-10-4', lastScanned: '2017-10-3', rating: '0' }, { packetID: '10175', dateAdded: '2017-10-5', lastScanned: '2017-10-5', rating: '0' }, { packetID: '10176', dateAdded: '2017-10-9', lastScanned: '2017-10-7', rating: '0' }, { packetID: '10177', dateAdded: '2017-10-5', lastScanned: '2017-10-5', rating: '0' }, { packetID: '10178', dateAdded: '2017-10-4', lastScanned: '2017-10-4', rating: '0' }, { packetID: '10179', dateAdded: '2017-10-0', lastScanned: '2017-10-6', rating: '0' }, { packetID: '10180', dateAdded: '2017-10-6', lastScanned: '2017-10-1', rating: '0' }, { packetID: '10181', dateAdded: '2017-10-0', lastScanned: '2017-10-8', rating: '0' }, { packetID: '10182', dateAdded: '2017-10-7', lastScanned: '2017-10-8', rating: '0' }, { packetID: '10183', dateAdded: '2017-10-7', lastScanned: '2017-10-8', rating: '0' }, { packetID: '10184', dateAdded: '2017-10-7', lastScanned: '2017-10-3', rating: '0' }, { packetID: '10185', dateAdded: '2017-10-1', lastScanned: '2017-10-6', rating: '0' }, { packetID: '10186', dateAdded: '2017-10-0', lastScanned: '2017-10-7', rating: '0' }, { packetID: '10187', dateAdded: '2017-10-6', lastScanned: '2017-10-5', rating: '0' }, { packetID: '10188', dateAdded: '2017-10-8', lastScanned: '2017-10-7', rating: '0' }, { packetID: '10189', dateAdded: '2017-10-6', lastScanned: '2017-10-0', rating: '0' }, { packetID: '10190', dateAdded: '2017-10-6', lastScanned: '2017-10-1', rating: '0' }, { packetID: '10191', dateAdded: '2017-10-1', lastScanned: '2017-10-6', rating: '0' }, { packetID: '10192', dateAdded: '2017-10-4', lastScanned: '2017-10-9', rating: '0' }, { packetID: '10193', dateAdded: '2017-10-3', lastScanned: '2017-10-9', rating: '0' }, { packetID: '10194', dateAdded: '2017-10-0', lastScanned: '2017-10-6', rating: '0' }, { packetID: '10195', dateAdded: '2017-10-3', lastScanned: '2017-10-9', rating: '0' }, { packetID: '10196', dateAdded: '2017-10-3', lastScanned: '2017-10-2', rating: '0' }, { packetID: '10197', dateAdded: '2017-10-6', lastScanned: '2017-10-4', rating: '0' }, { packetID: '10198', dateAdded: '2017-10-2', lastScanned: '2017-10-5', rating: '0' }, { packetID: '10199', dateAdded: '2017-10-3', lastScanned: '2017-10-0', rating: '0' }, { packetID: '10200', dateAdded: '2017-10-9', lastScanned: '2017-10-5', rating: '0' }, { packetID: '10201', dateAdded: '2017-10-0', lastScanned: '2017-10-2', rating: '0' }, { packetID: '10202', dateAdded: '2017-10-7', lastScanned: '2017-10-1', rating: '0' }, { packetID: '10203', dateAdded: '2017-10-9', lastScanned: '2017-10-2', rating: '0' }, { packetID: '10204', dateAdded: '2017-10-2', lastScanned: '2017-10-2', rating: '0' }, { packetID: '10205', dateAdded: '2017-10-3', lastScanned: '2017-10-0', rating: '0' }, { packetID: '10206', dateAdded: '2017-10-7', lastScanned: '2017-10-7', rating: '0' }, { packetID: '10207', dateAdded: '2017-10-1', lastScanned: '2017-10-0', rating: '0' }, { packetID: '10208', dateAdded: '2017-10-2', lastScanned: '2017-10-0', rating: '0' }, { packetID: '10209', dateAdded: '2017-10-1', lastScanned: '2017-10-1', rating: '0' }, { packetID: '10210', dateAdded: '2017-10-6', lastScanned: '2017-10-9', rating: '0' }, { packetID: '10211', dateAdded: '2017-10-8', lastScanned: '2017-10-4', rating: '0' }, { packetID: '10212', dateAdded: '2017-10-9', lastScanned: '2017-10-1', rating: '0' }, { packetID: '10213', dateAdded: '2017-10-8', lastScanned: '2017-10-1', rating: '0' }, { packetID: '10214', dateAdded: '2017-10-9', lastScanned: '2017-10-7', rating: '0' }, { packetID: '10215', dateAdded: '2017-10-5', lastScanned: '2017-10-3', rating: '0' }, { packetID: '10216', dateAdded: '2017-10-3', lastScanned: '2017-10-5', rating: '0' }
  ];