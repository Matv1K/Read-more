import {useState} from 'react'

import "./Layout.scss";

const Layout = () => {
    const [readMoreShown, setReadMoreShown] = useState(false);

    const str = 'rrrrrr qwre qwerrrrrrrrrrrr asdlkjffffffffffffffffffffffffffffffffffffffffffffffffffffffffff asfjlkdasdfewtwdddddddd asfjkldasfjkdl asfkjdl jkasfld kasfjld asfjlk dkasfd lka sjdfkjasf asdfffffffffffff ';
    const limit = 150;

    const symbols = [...str];

    const handleClick = () => {
        setReadMoreShown(prevState => !prevState);
    }

  return (
    <div style={{maxWidth: '352px', borderRadius: '20px', padding: '20px 24px', backgroundColor: '#FFFFFF'}}>
      <div className="section" style={{borderBottom: '1px solid #333', marginBottom: '24px', paddingBottom: '24px'}}>
        
        <h3 style={{marginBottom: '16px', fontSize: '20px', fontWeight: 700, color: '#232134'}}>
          Biography
        </h3>

        <p className="text" style={{ fontSize: 14, marginBottom: '20px' }}>
        {
            readMoreShown ? str : str.substring(0, limit)
        }
        </p>

        {
            symbols.length > limit ? <a href='#' onClick={handleClick} style={{textDecoration: 'none', display: 'inline-block', fontSize: 14, color: '#752993', fontWeight: 500}}>
            {readMoreShown ? 'Hide': 'Read more'}
        </a> : null
        } 


        <div>
          <div className="data" style={{ marginBottom: 20 }}>
            <h4 style={{marginBottom: '4px', marginTop: '20px',  fontSize: '14px', fontWeight: 600, color: '#232134'}}>
              Location
            </h4>
            <p className="text" style={{ fontSize: 14 }}>Los angeles</p>
          </div>

          <div className="data" style={{ marginBottom: 0 }}>
            <h4 style={{marginBottom: '4px', fontSize: '14px', fontWeight: 600, color: '#232134'}}>
              Current position
            </h4>
            <p className="text" style={{ fontSize: 14 }}>Position</p>
          </div>
        </div>
      </div>

      <div className="section" style={{borderBottom: '1px solid #333', marginBottom: '24px', paddingBottom: '24px'}}>
        <h3 style={{marginBottom: '16px', fontSize: '20px', fontWeight: 700, color: '#232134'}}>
          Area of expertise
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20}}>
          <a href='#' style={{ padding: "2px 12px", backgroundColor: '#999', color: '#333', borderRadius: 8, fontWeight: 500, textDecoration: 'none' }} >Rights</a>
          <a href='#' style={{ padding: "2px 12px", backgroundColor: '#999', color: '#333', borderRadius: 8, fontWeight: 500, textDecoration: 'none' }} >Cryptocurrecy</a>
          <a href='#' style={{ padding: "2px 12px", backgroundColor: '#999', color: '#333', borderRadius: 8, fontWeight: 500, textDecoration: 'none' }} >Health</a>
          <a href='#' style={{ padding: "2px 12px", backgroundColor: '#999', color: '#333', borderRadius: 8, fontWeight: 500, textDecoration: 'none' }} >Health</a>
          <a href='#' style={{ padding: "2px 12px", backgroundColor: '#999', color: '#333', borderRadius: 8, fontWeight: 500, textDecoration: 'none' }}>Rights</a>
          <a href='#' style={{ padding: "2px 12px", backgroundColor: '#999', color: '#333', borderRadius: 8, fontWeight: 500, textDecoration: 'none' }} >Cryptocurrecy</a>
        </div>
      </div>

      <div className="section" style={{borderBottom: '1px solid #333', marginBottom: '24px', paddingBottom: '24px'}}>
        <h3 style={{marginBottom: '16px', fontSize: '20px', fontWeight: 700, color: '#232134'}}>
          Education
        </h3>

        <div className="data" style={{ marginBottom: 20 }}>
          <h4 style={{marginBottom: '4px', fontSize: '14px', fontWeight: 600, color: '#232134'}}>
            Name of university
          </h4>
          <p className="text" style={{ fontSize: 14 }}>Degree</p>
          <p className="text" style={{ fontSize: 14 }}>2022 - 2022</p>
        </div>

        <div className="data" style={{ marginBottom: 0 }}>
          <h4 style={{marginBottom: '4px', fontSize: '14px', fontWeight: 600, color: '#232134'}}>
            Name of university
          </h4>
          <p className="text" style={{ fontSize: 14 }}>Degree</p>
          <p className="text"  style={{ fontSize: 14 }}>2022 - 2022</p>
        </div>
      </div>

      <div className="section" style={{borderBottom: '1px solid #333', marginBottom: '24px', paddingBottom: '24px'}}>
        <h3 style={{marginBottom: '16px', fontSize: '20px', fontWeight: 700, color: '#232134'}}>
          Affiliations
        </h3>

        <div className="data" style={{ marginBottom: 20 }}>
          <h4 style={{marginBottom: '4px', fontSize: '14px', fontWeight: 600, color: '#232134'}}>
            Name of organization
          </h4>
          <p className="text" style={{ fontSize: 14 }}>Role</p>
          <p className="text" style={{ fontSize: 14 }}>2022 - 2022</p>
        </div>

        <div className="data" style={{ marginBottom: 20 }}>
          <h4 style={{marginBottom: '4px', fontSize: '14px', fontWeight: 600, color: '#232134'}}>
            Name of organization
          </h4>
          <p className="text" style={{ fontSize: 14 }}>Role</p>
          <p className="text" style={{ fontSize: 14 }}>2022 - 2022</p>
        </div>

        <div className="data" style={{ marginBottom: 0 }}>
          <h4 style={{marginBottom: '4px', fontSize: '14px', fontWeight: 600, color: '#232134'}}>
            Name of organization
          </h4>
          <p className="text" style={{ fontSize: 14 }}>Role</p>
          <p className="text" style={{ fontSize: 14 }}>2022 - 2022</p>
        </div>
      </div>

      <div
        className="section"
        style={{ marginBottom: 0, borderBottom: 'none' }}
      >
        <h3 style={{marginBottom: '16px', fontSize: '20px', fontWeight: 700, color: '#232134'}}>
          Socials
        </h3>
        
      </div>
    </div>
  )
}

export default Layout;