import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () =>
  <ul>
    <li><Link to="step1"> step 1</Link></li>
    <li><Link to="step2"> step 2</Link></li>
    <li><Link to="step3"> step 3</Link></li>
    <li><Link to="step4"> step 4</Link></li>
  </ul>;

export default Signup;
