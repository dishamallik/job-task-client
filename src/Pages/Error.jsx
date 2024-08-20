import React from 'react';
import { Link } from 'react-router-dom';
import error from "../assets/400 Error Bad Request-cuate.png"


const Error = () => {
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen">
  <div className="text-center">
    <img src={error} alt="Error" className="w-96 mx-auto" />
    <Link to="/">
      <button className="btn btn-outline bg-yellow-200 mt-5">Go home back</button>
    </Link>
  </div>
</div>
    </div>
    );
};

export default Error;