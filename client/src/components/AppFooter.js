import React, { Component } from 'react';

class AppFooter extends Component {
  render() {
    const style = {
      bigFoot: {
        backgroundColor: '#3d3d3d',
        padding: '40px'
      },
      textWhite: {
        margin: '0px',
        color: 'white'
      },
      littleFoot: {
        backgroundColor: '#565555',
        textAlign: 'center'
      },
      footerText: {
        margin: '0px',
        color: '#B0B0B0',
        paddingTop: '20px',
        paddingBottom: '20px'
      }
    };

    return (
      <div>
        <section style={style.bigFoot}>
          <p style={style.textWhite}>
          Recelle offers potential investors (to an amount of AU$400,000) a unique opportunity to be early shareholders (20% equity) in a novel product, aimed at reducing waste and cost in the medical sector, whilst assuring blood transfusion safety.  As the Recelle team are relatively inexperienced, investors willing to contribute and mentor within the company structure will be most valued.  Initial investment will target early phase development and IP protection, in preparation for subsequent licensing deals with major medical firms (to an estimated value of AU$3.5 million, and an early investor ROI of AU$720,000 or 80%).  The Recelle system benefits healthcare efficiency by applying recent advances in laser, sensor and measurement technology to overcome existing, outdated procedures for red blood cell storage, and stands as a unique, innovative and viable investment opportunity.  
          </p>
        </section>
        <footer style={style.littleFoot}>
          <p style={style.footerText}>Ⓒ 2017 Recelle.</p>
        </footer>
      </div>
    );
  }
}

export default AppFooter;