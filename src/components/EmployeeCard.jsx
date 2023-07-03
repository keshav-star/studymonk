import cardImage from '../assets/brand_logo_image.png'

function CompanyCard(props) {
  return (
    <div className='border border-4 m-4 rounded-4'>
      <div className='container m-2 d-flex'>

        <div className="image m-2">
          <img width="100px" src={cardImage} alt="" />
        </div>
        
        <div className="cardtext  mx-3">
          <p>{props.name}</p>

          <div className='d-flex'>
            <h2 className='me-3'>{props.jobtitle}</h2>
            <p className='m-auto'>{props.rating}</p>
          </div>

          <p>{props.place}</p>
          
          <div className='d-flex'>
            <h1 className='fw-bold'>&#x20B9; {props.pay}</h1>
            <div id="apply" className='my-auto ms-4 px-4 py-2'>apply{"->"}</div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CompanyCard;