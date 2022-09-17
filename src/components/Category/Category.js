import React from "react";
import { Link } from "wouter";
import './Category.css'


function Category({ name, options = []}) {
  return (
    <section className="main-cat">
      <h3 className="cat-title">{name}</h3>
      <ul className="cat-list">
        {options.map((singleOption, index) => (
          <li key={singleOption} index={index} type="primary">
            <Link to={`/search/${singleOption}`} className='cat-link'>
              {singleOption}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Category;
