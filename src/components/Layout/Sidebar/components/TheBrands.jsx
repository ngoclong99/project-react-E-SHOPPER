import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

TheBrands.propTypes = {}

function TheBrands(props) {
  return (
    <Fragment>
      <div className="brands_products">
        <h2>Brands</h2>
        <div className="brands-name">
          <ul className="nav nav-pills nav-stacked">
            <li>
              <a href="#">
                <span className="pull-right">(50)</span>Acne
              </a>
            </li>
            <li>
              <a href="#">
                <span className="pull-right">(56)</span>Grüne Erde
              </a>
            </li>
            <li>
              <a href="#">
                <span className="pull-right">(27)</span>Albiro
              </a>
            </li>
            <li>
              <a href="#">
                <span className="pull-right">(32)</span>Ronhill
              </a>
            </li>
            <li>
              <a href="#">
                <span className="pull-right">(5)</span>Oddmolly
              </a>
            </li>
            <li>
              <a href="#">
                <span className="pull-right">(9)</span>Boudestijn
              </a>
            </li>
            <li>
              <a href="#">
                <span className="pull-right">(4)</span>Rösch creative culture
              </a>
            </li>
          </ul>
        </div>
        {/* <!--/brands_products--> */}
      </div>
    </Fragment>
  )
}

export default TheBrands
