import React from 'react'
import './details.scss'

const Details = () => {
  return (
    <div className='fullDetails'>
        <h3>Personal Information</h3>
        <div className='personalDetails up'>
            <div>
                <h4>FULL NAME</h4>
                <p>Grace Effiom</p>
            </div>
            <div>
                <h4>PHONE NUMBER</h4>
                <p>07060780922</p>
            </div>
            <div>
                <h4>EMAIL ADDRESS</h4>
                <p>grace@gmail.com</p>
            </div>
            <div>
                <h4>BVN</h4>
                <p>07060780922</p>
            </div>
            <div>
                <h4>GENDER</h4>
                <p>Female</p>
            </div>
        </div>
        <div className='personalDetails down'>
            <div>
                <h4>MARITAL STATUS</h4>
                <p>Single</p>
            </div>
            <div>
                <h4>CHILDREN</h4>
                <p>None</p>
            </div>
            <div>
                <h4>TYPE OF RESIDENCE</h4>
                <p>Parent’s Apartment</p>
            </div>
        </div>
        <hr />

        <h3>Education and Employment</h3>
        <div className='personalDetails up'>
            <div>
                <h4>LEVEL OF EDUCATION</h4>
                <p>B.Sc</p>
            </div>
            <div>
                <h4>EMPLOYMENT STATUS</h4>
                <p>Employed</p>
            </div>
            <div>
                <h4>SECTOR OF EMPLOYMENT</h4>
                <p>FinTech</p>
            </div>
            <div>
                <h4>DURATION OF EMPLOYMENT</h4>
                <p>2 years</p>
            </div>
        </div>
        <div className='personalDetails down-employ'>
            <div>
                <h4>OFFICE EMAIL</h4>
                <p>grace@lendsqr.com</p>
            </div>
            <div>
                <h4>MONTHLY INCOME</h4>
                <p>₦200,000.00- ₦400,000.00</p>
            </div>
            <div>
                <h4>LOAN REPAYMENT</h4>
                <p>40,000</p>
            </div>
        </div>
        <hr />

        <h3>Socials</h3>
        <div className='personalDetails down'>
            <div>
                <h4>TWITTER</h4>
                <p>@grace_effiom</p>
            </div>
            <div>
                <h4>FACEBOOK</h4>
                <p>Grace Effiom</p>
            </div>
            <div>
                <h4>INSTAGRAM</h4>
                <p>@grace_effiom</p>
            </div>
        </div>
        <hr />

        <h3>Guarantor</h3>
        <div className='personalDetails down'>
            <div>
                <h4>FULL NAME</h4>
                <p>Debby Ogana</p>
            </div>
            <div>
                <h4>PHONE NUMBER</h4>
                <p>07060780922</p>
            </div>
            <div>
                <h4>EMAIL ADDRESS</h4>
                <p>debby@gmail.com</p>
            </div>
            <div>
                <h4>RELATIONSHIP</h4>
                <p>Sister</p>
            </div>
        </div>
        <hr />
        
        <div className='personalDetails down'>
            <div>
                <h4>FULL NAME</h4>
                <p>Debby Ogana</p>
            </div>
            <div>
                <h4>PHONE NUMBER</h4>
                <p>07060780922</p>
            </div>
            <div>
                <h4>EMAIL ADDRESS</h4>
                <p>debby@gmail.com</p>
            </div>
            <div>
                <h4>RELATIONSHIP</h4>
                <p>Sister</p>
            </div>
        </div>
    </div>
  )
}

export default Details