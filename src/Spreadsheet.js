import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Spreadsheet = () => {
  return (
    <>

    <section className='link-container'>
    <Button className='link' target="_blank" rel='no-referrer' href="https://docs.google.com/spreadsheets/d/1sgu637RDSw7o_AE4EoP4TrOKlkUZLvSMv3YNL-9A1I8/edit?usp=sharing" variant="primary">CLICK TO VIEW FILE</Button>{' '}
    </section>
      <div className="doc-container">
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSMqyO8FZgrMKpqRxWqjFaN07uWn52gPyoCf2biv1X1wfthMxcrUQ3FzP46u8EHki6EanfCqjQpmZ-T/pubhtml?widget=true&amp;headers=false"
          title="Sheet"
          width="90%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
    </>
  );
};

export default Spreadsheet;
