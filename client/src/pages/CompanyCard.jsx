import { useState } from 'react';
import CompanyCardDesign from '../components/CompanyCardDesign';
import CompanyCardFinished from '../components/CompanyCardFinished';

function CompanyCard () {

const [showDesign, setShowDesign] = useState(true);
const toggleDesign = () => {
  console.log('toggleDesign called');
  setShowDesign(!showDesign);
}

const [designData, setDesignData] = useState({});

  return (
    <>
      {showDesign ? <CompanyCardDesign toggleDesign={toggleDesign} setDesignData={setDesignData} /> : <CompanyCardFinished designData={designData} />}
    </>
  )
}

export default CompanyCard;