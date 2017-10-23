import React, { Component } from 'react';
import backgroundImage from '../../images/red7.jpeg';
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
        color: 'white',
        fontSize: '50px',
        heigth: '100px'
      },
      foobar: {
        color: '#4d0000'
      },
      middle: {
        // display: 'table-cell',
        // verticalAlign: 'middle'
        width: '100%',
        position: 'absolute',
        bottom: '40px'
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
            <h1 style={style.introTitleMessage}><strong style={style.foobar}>Re</strong>d blood <strong style={style.foobar}>cell</strong> <strong style={style.foobar}>e</strong>valuation system</h1>
          </div>
        </header>
        <section style={style.about}>
          <h2 style={style.aboutHeading}>About</h2>
          <br/>
          <p style={style.text}>
          <strong>Background</strong><br/>

Blood is essential to human life, ensuring oxygenation and nutrient transport to cells within the body (Guyton 1991). The evolution of modern medical science and blood transfusions, now sees blood products play a crucial role in more than 22 fundamental and lifesaving medical procedures (Australian Red Cross Blood Service 2016). To effectively perform these operations and deliver viable blood to patients on demand, medical facilities must store donated blood on-site. With more than 52 megalitres of blood collected globally each year, this is an enormous operation, which currently relies on outdated procedures (WHO 2013, BetterHealth Victoria 2017). The Red Blood Cell Evaluation (Recelle) system aims to rectify this, reducing blood wastage and improving patient outcomes.

<br/><br/><strong>Existing solution</strong><br/>

The current method of storing red blood cells (RBCs) is outdated, inefficient and wasteful, particularly considering recent advancements in non-invasive measurement technology. Blood comprises 3 components; (1) platelets and clotting factors for stemming bleeding (Gabriel 2015), (2) liquid for circulation, known as plasma (Hess 2010), and (3) red blood cells which oxygenate the body. The first two components are either adequately supplied, substituted with artificial substances or can be stored for long periods (Blajchman 2003, Kickler 2006). However, the storage of RBCs is currently limited to 42 days under ideal conditions, beyond which expired packs are discarded (Hess 2010). This has led to the use of a first-in, first-out system, where the oldest blood available is used first. Currently medical practitioners are unable to determine the quality of the blood being administered, nor the impact of any additives used to extend the blood's storage lifespan. The only interpretation of quality is based on the time since donation and has no regard for the non-uniform degradation of blood, leading to AU$23 million worth of RBCs being disposed of annually in Australia alone (NBA 2017). There is a prime opportunity to disrupt the current outdated system, and provide a true indicator of blood degradation whilst in storage.

<br/><br/><strong>RBC degradation in storage</strong><br/>

Whilst all RBC packs are limited to a shelf-life of 42 days, the mechanisms for their degradation during storage are well known. Referred to as storage lesion, blood cells transition from highly deformable biconcave disks to more rigid spheres whilst in storage. This change is accompanied by a reduction in flexibility, preventing them from traversing the small pathways (capillaries, arteries) in the human body (Chen et. al. 2016, Park et. al. 2016). This degradation has been proven to be non-uniform between RBC samples, occurring at different rates depending on the unique blood source and its storage environment (Koch et. al. 2008, Park et. al. 2016). Additionally, the use of additives to extend blood shelf-life has the potential to increase the variance between samples (Orlov & Karkouti 2015). Since medical practitioners must guarantee the safety of RBCs transfused to patients, they discard any blood beyond the minimum safe age (42 days) which is thought to exclude any possibility (99.7% confidence) of even a single pack having degraded dangerously. However, if a system could be developed to detect the true degradation of individual blood packs, it is conceivable that the lifespan of a significant amount of blood could be extended, reducing required blood stores, discard rates and presenting significant cost and efficiency savings to the healthcare system (Hess 2010). 
          </p>
        </section>
        <section style={style.howItWorks}>
          <h2 style={style.howItWorksHeading}>How It Works</h2>
          <br/>
          <p style={style.textWhite}>
           <strong>Measurement system</strong><br/>

Recelle aims to produce such a system by combining recent advances in measurement technology and proprietary image processing algorithms. Researchers have determined that RBC deformability is directly linked to shape, and therefore the size of the cells (Park et. al. 2016). RBC measurements have been demonstrated using a variety of methods, including micropipette aspiration and atomic force microscopy (Hess 2010). However, these methods are both expensive and require expert users. Recelle instead aims to use laser diffractometry to determine cell size and shape, a method which has been proven on a large scale but is yet to be miniaturised and tailored to a hospital operation (Kim et. al. 2015). This method involves directing a highly focused, monochromatic light though the target cells and analysing the diffraction patterns and aberrations created (Bowlt 1971).

<br/><br/><strong>Concept</strong><br/>

The Recelle system is envisaged as comprising four key components; (1) a laser sensor unit (LSU), (2) a drive unit (DU), (3) a refrigeration unit (RU) and (4) a housing and structure (HAS) to support its function. The LSU will conduct the laser measurement and sense the diffracted beam, relaying data to a nearby computer for

transmission, processing and analysis. The DU will move the LSU into position autonomously, such that an entire set of blood packs can be regularly measured without human intervention. Given the required storage temperature of RBCs is 2-6°C, these systems will need to be enclosed by the HAS and refrigerated (D’Alessandro et. al. 2010). An illustration of the overall system is shown in Figure 2.1, and more detailed drawings of the proposed mechanisms included in Figure 2.2 and 2.3. Following measurement, laser data will be interpreted using a combination of established practices and unique machine learning algorithms. A ‘health rating’ for each pack is generated by comparing the profile with an established benchmark for safe and healthy RBCs.

<br/><br/><strong>Complexity</strong><br/>

Whilst prior market analysis suggests there is a clear demand for a blood imaging system such as that proposed above (Recelle 2017), Recelle has neither the funding, nor expertise, to deliver such a complex product in a short period of time. Steinberg et. al. (2015) established that depending on the specific category of medical device, the majority of systems cost more than US$31 million, and take between 27 and 36 months to develop. Consequently, Recelle will seek to develop the imaging and processing technology to a point where it can then be licenced out to more established medical companies, for commercialisation in their own products. Such licensing agreements can generally take one of three forms; (1) certain intellectual property (IP rights) are sold for reproduction or distribution, (2) all of the IP is licensed for the reproduction, marketing and sale of the technology, or (3) all the IP necessary to create and market a product with a specific technology are licensed (Gurry 2015). Recelle expects future licensing agreements to fall under the third category, where an established organisation will take over commercialisation of the product. For investors in Recelle, this reduces the time to return on investment, reduces risk and involves more reputable parties in the development, whilst still allowing a pathway for commercialisation of the innovation. 
          </p>
        </section>
        <section style={style.about}>
          <h2 style={style.aboutHeading}>Business Model</h2>
          <br/>
          <p style={style.text}>
<strong>Mission</strong><br/>

Recelle seeks to take the initial steps in revolutionising the storage and usage of red blood cells in the developed world.

By providing advanced imaging technology, the Recelle system will enable the development of new efficient and sustainable blood management systems which prevent wastage and have the potential to impact patient health outcomes.

<br/><br/><strong>Vision</strong><br/>

We envisage healthcare systems which have done away with the outdated and binary 42-day, first-in first-out blood management system, where no emphasis is placed on the quality of the blood, only on its age. Instead, the viability of blood will be traceable, ensuring minimal wastage and allow for blood to be directed to locations in most needs, via optimisation of inventory levels.

<br/><br/><strong>Business model</strong><br/>

Recelle will operate a licensing model with client companies, incorporating both an upfront licencing fee and a royalties payment as compensation for the use of the patented hardware system and access to Recelle's Blood Imaging Process (BIP). The BIP will remain a proprietary secret of Recelle, meaning clients will have access to a secure server to have their images processed if their licence is valid and active.

This model has several advantages over commercialising the innovation within Recelle (see Table 3.1 for further details), primarily because it requires less upfront capital (only sensor development, validation and protection are required). It also frees Recelle from developing blood storage systems, including refrigeration (HVAC) which already exist on the market. Finally, it gives limited liability to Recelle and allows it to operate with large medical companies as a target market, rather than as direct competitors. Finally, the withholding of the BIP as a ‘trade secret’ will enable Recelle to deliver and revoke permissions for the use of patented technology as required. In the event the a patent break is found, but cannot be supported or prosecuted, Recelle will still have control of the BIP, and protect the value of the entire system (see Section 4 for further details).

<br/><br/><strong>Projectised development</strong><br/>

To develop the imaging technology quickly and provide a return to potential investors, Recelle will operate as a projectised business for 12-18 months, seeking to deliver on several goals, rather than set up an ongoing operation. These deliverables are the expected business outputs over the 12-18 months and thus the success of the organisation will be judged against the completion of these tasks (detailed in Section 3.5).

<br/><br/><strong>Deliverables and Exit Criteria</strong>

<br/><br/><strong>Hardware specification</strong><br/>. This deliverable ascertains to the plans and specifications required for licensees to implement and operate the Recelle blood imaging process on a hardware level. This includes but is not limited to the laser unit, sensor unit, actuation and refrigeration. Such hardware systems will have been implemented in a benchtop prototype by Recelle, tested to ensure system requirements have been met and documented to ensure the hardware is able to be integrated into licensee applications.

<br/><br/><strong>Software implementation source code</strong><br/> This software package contains all code required to implement the Recelle BIP on the specified hardware. Such code will have been implemented, tested and documented to ensure it meets system requirements and will provide licensees with proven software solutions to system implementation. This is not the underlying analysis algorithm and database, which will be covered below.

<br/><br/><strong>Analysis algorithm and database</strong><br/>.. This deliverable will contain the protected underlying database and image processing algorithms which form the backbone of the Recelle BIP and includes all proprietary data and processing algorithms required to determine the quality and degradation of blood. The BIP will remain secret as a way of protecting intellectual property, running on a secure server operated by Recelle.

<br/><br/><strong>Protection in place for all IP</strong><br/> It is important that all intellectual property and proprietary systems be protected from theft or misuse. The method of protection varies between different systems, with hardware specifications requiring patent protection both domestically and in major developed areas abroad, while software systems will need to be protected under copyright. The method for protecting the system algorithm and database deliverable is to maintain its secrecy. This frees Recelle from producing a patent which is unlikely to be entirely watertight (possibly leading to lawsuits down the road) and ensures the system is protected. The method for client access to the analysis algorithm (via a secure server) will need to be finalised.

<br/><br/><strong>Licencing agreements in place covering two countries</strong><br/> As the primary means of cashflow for the business, it’s important that by the end of the year, Recelle has licenced its BIP system in at least two different countries. This ensures that the business is geared towards multinational operation (a key part of Recelle’s vision) and ensures licencing growth is always a key priority.

<br/><br/><strong>Total IP valuation exceeding AU$3.5</strong><br/>.. By generating value through the development of the BIP, Recelle aims to hold licensable property exceeding AU$3.5 million at the end of its first year. This valuation is to be based on currently held and projected licence values (see Section 6 for further details).

<br/><br/><strong>Exit strategy and ongoing operations</strong><br/>

The deliverables outlined in Section 3.5 also act as the criteria for the company to trigger its exit strategy. Once attained (expected to be 18 months from initiation), employees beyond the founders will be dismissed from the business and the founders will no longer be paid salaries. The BIP will be moved to a secure off-site server and the facility returned to the leaser. Recelle will continue to seek further licensing deals beyond this point, however it will act as a shell, returning royalties and upfront licensing fees to its investors as further agreements are made with licensees. Whilst not paid salaries, the founders will remain committed to the business (part-time) and motivated by the potential for further return on their own investment in the business. The company will minimise overheads during ongoing operations as no facility will be required, and fess will be limited to server costs, legal consultants and basic business and financial proceedings. 
          </p>
        </section>
        <section style={style.howItWorks}>
          <h2 style={style.howItWorksHeading}>Financial Forecast</h2>
          <br/>
          <p style={style.textWhite}>
          <strong>Licensing Policy</strong><br/>

Licensing agreements made with the target market companies will include payments to Recelle of both an upfront lump sum payment as well as a running royalty rate.  The upfront fee will provide an immediate source of funding for Recelle and act as the initial income source. Royalties will then provide a sustainable income source into the future as the companies complete the development and certification of their related products and begin to make sales. In exchange, Recelle will grant the licensee the partial or complete use of the patent licence for the Recelle system. 

<br/><br/><strong>Exclusivity</strong><br/>

The level of access which a company gathers for the Recelle system will depend on specific circumstances and jurisdictions.  Rather than licensing all rights to the Recelle technology to a single company, partial licenses and exclusivity agreements are possible.  A common scenario which Recelle expects to exploit is regional exclusivity agreements.  In these cases, the licensee will be guaranteed as the only company with access and rights to sell the technology in a geographical area (e.g. North America, Asia, Europe etc.).  Other exclusivity arrangements, for example to supply public or private hospitals only) are also possible and will be determined by negotiation and considering any existing licensing agreements in the portfolio.  In terms of estimating company income due to licensing, the number of exclusivity agreements is not expected to dramatically influence monetary values.  Ultimately, whether a single universal license, or many geographical licenses are granted, Recelle expects the total value of the licensing deals to be approximately equal.  The main advantage of a universal agreement is immediate and complete market penetration.  Although it should be noted that negotiating these global agreements is likely to be far more challenging.  Whereas, it may be easier to arrange geographical exclusivity agreements, but it will take longer to accumulate multiple deals to fulfil the entire licensing value.   

<br/><br/><strong>Duration</strong><br/>

As Recelle will be maintaining the processing software as proprietary (trade secret) knowledge, it will also be possible to have licensing agreements for fixed periods (5 years, 10 years etc.).  At the end of the agreed licensing deal, the licensee will have access and knowledge of all the hardware components, but will remain dependent on the Recelle server for processing.  In these cases, this access can be revoked, and prevent such a company continuing to sell a useful product without paying further royalties or upfront licensing fees to Recelle and its investors.   

<br/><br/><strong>Licensed Grant</strong><br/>

The grant of the licensing agreement will outline that the licensee is granted the right to “make, use or sell” the technology being licensed (Smith et. al. 2005). Made clear will be the inclusivity of the nature of the agreement – that is, the licensee will not have exclusive rights to the IP, allowing for Recelle to deal with multiple prospective companies. The grant will also allow in certain circumstances for sublicensing agreements to be made on behalf of Recelle by the licensee to allow for the spread of the Recelle system into markets impenetrable by our company but accessible to the licensee. 

<br/><br/><strong>Compensations Arrangements</strong><br/>

The grant will clearly outline the cost of the licence to the licensee, as well as the royalty rate and period. 

<br/><br/><strong>Upfront Fee</strong><br/>

Recelle will charge an upfront fee to purchase the patent licence for the Recelle system. This figure will be determined based on factors related to the company, such as market penetration, revenue, R&D funding, location, and more. As a guide, this fee will most likely range from US$500 thousand to US$2.5 million (AU$630 thousand to AU$3.2 million). This range of fees captures the majority of upfront licence fees for medical devices and diagnostics in the United States (Parr 2016). At the lower end of this range would be the upfront charge to a biotechnology developer operating in the relatively small Australian market, while the higher end of this range would be the charge to a company in the United States.  While less than 20% of medical licensing agreements include upfront fees (Parr 2016), Recelle aims to include this revenue source in the agreement to provide an immediate return on investment for shareholders. 

<br/><br/><strong>Royalties</strong><br/>

Recelle will set a required 5% return on profits from sales of any products using the Recelle system by licensees. A 5% royalty rate is the most common rate for medical devices (Parr 2016). 

<br/><br/><strong>Investment Proposal</strong><br/>

Recelle requests a AU$400,000 investment in exchange for a 20% stake in company shares. 

<br/><br/><strong>Expected Returns</strong><br/>

After 18 months, the investor can expect a 20% share to return AU$720,000, given the final company balance of AU$3.6 million (see Section 6.3), which indicates an 80% return on investment 

Note: While the value of Recelle is likely to be far higher than simply the company funds (intangible value, assets, unlicensed IP etc.), it is assumed that the investor will look to operate in this 18-month window. 

<br/><br/><strong>Investor Profile</strong><br/>

Recelle is looking for committed, passionate investors, preferably with experience in the medical industry. Investors possessing existing contacts and networks with possible licensees will be sought out keenly. An investor (or representative of the investment group) with these traits and qualities may be invited to join the Board of Directors (see Section 5.1.1).  

<br/><br/><strong>Cash Flow</strong><br/>

This cash flow model considers the first 18 months of business operations. After an initial investment of $400,000, company funds will reach $3.6 million within 18 months (see Appendix B for complete month-by-month details). 

<br/><br/><strong>Income</strong><br/>

Total estimated income (including investment) over the first 18 months comes to $4,050,000. 

<br/><br/><strong>Investment</strong><br/>

Funding required from early-investor(s) will total $400,000. 

<br/><br/><strong>Upfront Fees</strong><br/>

It is assumed that the deliverable of licensing deals in two different countries in the first 18 months is met, and that these licensing deals were secured in Australia and the United States. Given the size of each of these markets, we estimate that these licensing deals will be worth AU$650 thousand and AU$3 million, respectively (see Section 6.1.4.1), thus generating $3.65 million in revenue. 

<br/><br/><strong>Royalties</strong><br/>

No income from royalty fees is expected in the first 18 months of operation, as there is unlikely to be sales of any products involving the Recelle system by licensees. 

<br/><br/><strong>Expenses</strong><br/>

Total estimated expenses over the first 18 months come to $443,818. 

<br/><br/><strong>Remuneration</strong><br/>

The six founders of Recelle agree to work on an initial salary of $30,000. This is approximately half the salary of a graduate engineer (PayScale 2017), which is appropriate as founders will be working on a part-time basis. The marketing strategist will be paid $50,000 per annum, a median rate for marketing managers in the ACT (PayScale 2017). The marketing team consisting of the marketing consultant and strategist will start work in the 9th and 10th months of operation respectively and be paid $6,150 per month each. A legal consultant will manage legal aspects of patent filing, with total commission-based fees estimated to reach $17,200 in total (full break-down of payments in TABLE, fees gathered from IPWatchdog 2017). 

<br/><br/><strong>Equipment</strong><br/>

Equipment required for a diffractometry prototype includes a sensor and laser, priced at $1,320 (RS 2017) and $900 (Thorlabs 2011) each, respectively. Computer-aided design (CAD) and printed circuit board (PCB) design software would be required; a six-month subscription to CAD program Autodesk Inventor Professional at $330 a month (Autodesk 2017) in addition to PCB design program Altima Designer 2013 with a one-off payment of US$2,995 (AU$3,813, Altima 2013) totals $5,793. Three workbenches come to a total cost of $837 at $297 each (Bunnings 2017). Office equipment is estimated to total $2,000, and a computer server to be installed in month 10 of operation is estimated to cost $4,500 to purchase (GizmoFish 2013). $20,000 is estimated to be the cost of various manufactured parts required throughout the build. 

<br/><br/><strong>Commercial Property Rent and Utilities</strong><br/>

Assuming a standard Canberra office space rent cost of $350 per square metre per annum, and around 150 square metres of office space for 8-9 employees, there will be an approximate cost of $4375 per month. Water, electricity, internet and phone services will cost approximately $70, $173, $80, and $320 a month respectively, giving a total of $5,018 a month in rent and utilities costs. 

<br/><br/><strong>Travel</strong><br/>

Assuming a deal will be negotiated with a biotech company based in the United States, aircraft travel can be estimated to total $15,000 in the first 18 months of operation ($1,500 return cost for two travellers, bimonthly from 6-12th month of operation and the 17th month). Connecting transport (taxis or buses) and accommodation are estimated to cost $60 and $585 ($117 per night) each trip, respectively.  

<br/><br/><strong>Company Registration</strong><br/>

Registering Recelle Pty. Ltd. through the Australian Securities and Investments Commission (ASIC) will cost $479 (Australian Government 2017). Annual company review fees must be paid annually from the second year of company registration; for a proprietary company, this is $254 (ASIC 2013). 

<br/><br/><strong>Patents</strong><br/>

In Australia, application fees for a standard patent total $370 (IP Australia 2016). Filing this Australian provisional application, as well as an international application through the Patent Cooperation Treaty (PCT) will accelerate patenting in overseas territories (IP Australia 2016). A PCT application gives patent protection in 151 countries worldwide. PCT application fees total $5,399. Initially, we estimate that two patents will be filed – protecting the overall blood health testing system and the specific laser diffractometry scheme. Therefore, a total cost of $5,769 related to patent filing. 

<br/><br/><strong>Administration</strong><br/>

Recelle will reserve $200 for online advertisements for vacant positions (see Section 5). 
          </p>
        </section>
        <AppFooter/>
      </div>
    )
  }
}

export default LandingPage;