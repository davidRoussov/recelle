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
          Sed eget lacinia nisl. Nam a quam a elit consequat commodo a a tortor. Vivamus ultricies pretium faucibus. Praesent nec pulvinar elit. Cras commodo malesuada eleifend. Mauris viverra turpis et elementum imperdiet. Fusce eleifend pulvinar enim, ut blandit lorem sagittis ac. Sed vitae congue augue, non dictum lacus. Nulla molestie lorem at ante faucibus commodo. Phasellus in sem eu quam varius tincidunt ut vitae nunc. Curabitur et dui vel velit accumsan vestibulum. Nulla facilisi. Aliquam aliquam ultrices pretium.
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