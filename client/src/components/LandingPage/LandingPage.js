import React, { Component } from 'react';
import backgroundImage from '../../images/red4.jpg';
import LandingMenuBar from './LandingMenuBar';
import AppFooter from '../AppFooter';

class LandingPage extends Component {
  render() {
    const style = {
      intro: {
        backgroundImage: `url(${backgroundImage })`,
        height: '100vh',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'table'
      },
      introTitleMessage: {
        backgroundColor: 'rgba(56,56,56,0.7)',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        padding: '100px',
        color: 'white'
      },
      middle: {
        display: 'table-cell',
        verticalAlign: 'middle'
      },
      about: {
        backgroundColor: '#F9F89F9',
        padding: '40px'
      },
      aboutHeading: {
        margin: '0px',
        textAlign: 'center'
      },
      howItWorksHeading: {
        margin: '0px',
        textAlign: 'center',
        color: 'white'
      },
      howItWorks: {
        backgroundColor: '#ad1c0c',
        padding: '40px'
      },
      howItWorksTable: {
        color: 'white'
      },
      text: {
        margin: '0px'
      },
      textWhite: {
        margin: '0px',
        color: 'white'
      },
    };

    return (
      <div>
        <div style={{position: 'absolute', width: '100%'}}><LandingMenuBar introActive={true}/></div>
        <header style={style.intro}>
          <div style={style.middle}>
            <h1 style={style.introTitleMessage}><strong>Re</strong>d blood <strong>cell</strong> <strong>e</strong>valuation system</h1>
          </div>
        </header>
        <section style={style.about}>
          <h2 style={style.aboutHeading}>About</h2>
          <br/>
          <p style={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu justo vitae ipsum posuere dictum sed ut nisi. Praesent id nibh turpis. Quisque suscipit justo sit amet metus vulputate, in faucibus lectus imperdiet. Nullam vehicula tempus nibh, at commodo sem dictum id. Aliquam eu est a dui vulputate ultricies. In ac rhoncus erat. Fusce fringilla, dolor non blandit auctor, ex lacus hendrerit lacus, quis ornare augue nibh non erat. Maecenas dignissim augue sem, a elementum mi placerat ut. Maecenas mauris urna, ullamcorper ut bibendum non, tristique non tortor. Morbi imperdiet libero vitae nisi congue rhoncus. Donec et sollicitudin elit. Nunc eget sem odio.

Vivamus nec tincidunt metus, vel sagittis quam. In dignissim, magna sit amet mattis venenatis, sem diam cursus quam, vitae mattis neque nisl eu mauris. Morbi iaculis nec velit eget accumsan. Morbi fermentum orci at erat tincidunt, at aliquet sapien placerat. Curabitur quis erat nibh. Cras malesuada eros vitae molestie fermentum. Proin nec enim ornare, euismod sapien a, fringilla quam. Pellentesque vitae mauris erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras non varius neque. Mauris consectetur id erat id malesuada. Duis a pharetra enim. Donec sollicitudin at magna pulvinar mattis. Nullam semper lobortis hendrerit.

Nam luctus ullamcorper lectus eget venenatis. Sed facilisis ut quam id fermentum. Sed lacus est, vulputate ac sapien in, rutrum finibus mi. Proin commodo libero dolor, nec semper orci vulputate vel. Nulla semper, sapien a finibus porttitor, magna arcu dapibus ipsum, eget commodo leo velit ac dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris sit amet eros a mi pellentesque faucibus. Praesent scelerisque tellus sed ipsum hendrerit scelerisque.
          </p>
        </section>
        <section style={style.howItWorks}>
          <h2 style={style.howItWorksHeading}>How It Works</h2>
          <br/>
          <p style={style.textWhite}>
          Donec ac arcu a lacus molestie consequat sed eleifend turpis. Curabitur placerat elit nec fermentum placerat. Etiam felis metus, placerat eu neque quis, ultricies auctor erat. Praesent eget augue turpis. Vestibulum tortor purus, feugiat et massa vitae, accumsan rutrum urna. Sed ornare quam neque, non dignissim risus tincidunt eu. In varius cursus dictum. Nulla non metus a mauris ultricies porttitor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque id elit condimentum, luctus metus eu, fringilla velit. Phasellus ac pulvinar justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent suscipit tellus lorem, a hendrerit metus porta sed. Suspendisse auctor, massa non suscipit egestas, nisl purus consequat purus, sit amet vulputate mi justo eu felis. Quisque non elementum leo. Praesent justo dui, vulputate sit amet augue ut, cursus semper odio.
          
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut orci est, dignissim vel imperdiet id, fermentum nec ex. Donec venenatis ipsum ipsum, ut consectetur nunc vehicula non. Praesent suscipit rhoncus magna, quis condimentum augue accumsan et. Etiam consequat, erat a porta mollis, lacus nisl varius augue, at rutrum neque nulla in odio. Mauris elementum suscipit dui, eu rhoncus lacus rutrum ut. Vestibulum eu ullamcorper sem, vel tincidunt tellus. Aenean elementum felis id mi convallis blandit. Pellentesque in lorem non sem varius auctor. Vivamus varius, leo a fringilla pellentesque, leo libero ullamcorper est, sed aliquet turpis turpis vel urna. In hac habitasse platea dictumst. Fusce in elementum mauris. Aenean ac porta turpis, sit amet tristique quam.
          
          Pellentesque mi ante, posuere eu malesuada scelerisque, consectetur in metus. Aenean vel euismod ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut eu facilisis mauris. Cras lectus nisi, porttitor ac aliquet quis, auctor in leo. Curabitur at pulvinar risus, in fermentum dui. Cras ac efficitur dui, malesuada maximus nisl. Vivamus vehicula augue ut nunc malesuada, efficitur varius nunc rhoncus. Cras lorem diam, feugiat quis suscipit non, efficitur eget arcu.
          
          Aliquam sodales fermentum nisl, ut cursus nisi fringilla a. Nunc rhoncus enim diam, at tempus sapien tempus vitae. Donec quis fermentum metus. Sed molestie est non elit elementum, at porttitor nisl viverra. Suspendisse velit nunc, vestibulum a augue quis, tristique faucibus dui. Nulla aliquam nunc a ligula eleifend sagittis. Nunc ut ultrices augue. Morbi ante leo, elementum a porttitor a, vulputate ac lacus. Ut eu lobortis tellus, nec condimentum nibh. Sed mattis est in mi bibendum, sed aliquam enim efficitur. Phasellus vehicula nunc et dapibus ultrices. Quisque suscipit accumsan lorem, vel malesuada dui imperdiet sit amet. Donec sollicitudin lorem magna, ut tristique massa interdum in. Nulla egestas pellentesque nisi et gravida. Phasellus nec feugiat tortor, et vestibulum enim.
          
          Ut vel fermentum risus, vitae finibus urna. Vivamus mollis varius aliquet. Vestibulum sit amet nunc at mi ornare tempus in sit amet nulla. Proin pretium lectus neque, nec commodo justo interdum ut. Mauris lobortis turpis non lorem euismod euismod. Nam non eros volutpat, aliquet nulla eu, cursus lectus. Curabitur cursus nibh vel felis ullamcorper, ac accumsan neque lacinia. Maecenas sagittis congue dolor, non porttitor ex egestas sit amet. Quisque egestas tempor tortor sit amet commodo. Nullam tempus massa tellus, feugiat sollicitudin nisi consequat a. Sed nec odio ultricies, pretium urna nec, finibus eros.
          
          Aliquam erat volutpat. Duis viverra purus ut quam ullamcorper aliquet. Nam vulputate varius semper. Sed a urna non tortor auctor condimentum. Duis eu augue nisl. Nullam at diam odio. Sed ullamcorper iaculis velit, vel finibus risus gravida vel. Donec bibendum justo nec velit euismod eleifend. Aliquam erat volutpat.
          
          In tortor nisi, malesuada a nulla at, iaculis luctus purus. Suspendisse facilisis, ligula vitae laoreet vulputate, mi leo porta lacus, eu consectetur ante lorem ac ex. In hac habitasse platea dictumst. Pellentesque id metus at lectus elementum placerat. Donec eu arcu et eros gravida sollicitudin. Phasellus odio elit, ornare nec sem non, ultrices volutpat massa. Integer a sem gravida turpis ultrices semper. Vestibulum imperdiet sollicitudin eleifend. Nullam commodo, neque in mollis posuere, ante felis tincidunt leo, non tincidunt massa nunc non justo. Fusce iaculis elementum erat et egestas. Suspendisse libero ipsum, dictum quis semper sit amet, fringilla sit amet lorem.
          </p>
        </section>
        <section style={style.about}>
          <h2 style={style.aboutHeading}>Features</h2>
          <br/>
          <p style={style.text}>
          Integer a imperdiet neque. Sed vel erat vel odio vestibulum blandit eu vitae orci. Donec nec pretium nisi. Vivamus laoreet tellus eget neque cursus, eu cursus massa maximus. Sed feugiat, felis sed accumsan bibendum, justo urna cursus diam, ac pellentesque ligula ligula id odio. Phasellus sed vestibulum mauris. Etiam nec purus diam. Cras lacinia, turpis at interdum facilisis, arcu mauris vestibulum dolor, eu dictum lacus libero sit amet eros. Nam maximus aliquam sem eget sollicitudin. Sed nunc nibh, egestas in eleifend id, aliquam eu augue.
          
          Curabitur sit amet erat eget turpis ornare maximus. Vestibulum eget vulputate felis. Integer quis mi euismod, molestie leo vitae, pulvinar leo. Etiam mauris tellus, ultrices in felis sit amet, ornare accumsan magna. Praesent nec pretium purus, a malesuada ante. Nulla sed semper dui, in tincidunt ante. Morbi eleifend urna nisl, laoreet tincidunt nisi elementum vitae.
          
          Nulla vel feugiat ante. Mauris eu urna tellus. Sed id arcu nibh. Ut dolor urna, suscipit a posuere quis, tincidunt in quam. Vivamus luctus sollicitudin mauris. Donec libero nibh, aliquet vitae eros a, condimentum commodo arcu. Suspendisse non iaculis diam. Vivamus sit amet placerat leo, eu eleifend est. Suspendisse quis sollicitudin nibh. Donec eu leo augue. Maecenas hendrerit nibh quis dolor laoreet lobortis.  
          </p>
        </section>
        <AppFooter/>
      </div>
    )
  }
}

export default LandingPage;