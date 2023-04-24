import React, { Fragment,useState } from 'react'
import './faq.css'
import bannerImage from '../../assets/image/image-1.png'
import arrowImage from '../../assets/image/image-2.png'

const Faq = ({userList}) => {
  const [prevSelectedUserId,setPrevSelectedUserId]=useState('')
  const handleAccordion=(e,selecteduserId)=>{
   prevSelectedUserId!==selecteduserId?setPrevSelectedUserId(selecteduserId):null
   console.log(e);
  }
  console.log(prevSelectedUserId);
  return (
    <Fragment>
      <section className='Faq'>
        <div className="container">
          <div className="even-column">
            <div>
              <img src={bannerImage} alt="" />
              <h3 className='primary-heading'>Faq</h3>
            </div>
            <div className='accordion'>

              <ul>
                {
                  userList.map((user)=>{

               return (
                 <li key={user?.id} onClick={
                   (e) => handleAccordion(e,user?.id)
                 }>
                  <h3>{user?.name}</h3>
                   <span id='arrow' className={`arrow-${prevSelectedUserId === user?.id && "down "} `}>
                  </span>
                  <p className={(prevSelectedUserId===user?.id)?"show":null}>company bs:{user?.company.bs} company catchPhrase:{user?.company?.catchPhrase} phone:{user?.phone} email: {user?.email} website: {user?.website}</p>
                  {/* <p className={`${prevSelectedUserId === user?.id && "show"} `}>company bs:{user?.company.bs} company catchPhrase:{user?.company?.catchPhrase} phone:{user?.phone} email: {user?.email} website: {user?.website}</p> */}
                </li>
                )

                  })
                }

                {/* <li>
                  <h3>How does react work?</h3>
                  <span></span>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero sit labore ducimus perferendis error. Quam animi laborum quia laudantium reprehenderit hic quasi, provident, ad soluta, corporis alias nihil odio dicta.</p>
                </li>
                <li>
                  <h3>How does react work?</h3>
                  <span></span>
                  <p></p>
                </li>
                <li>
                  <h3>How does react work?</h3>
                  <span></span>
                  <p></p>
                </li> */}


              </ul>

            </div>
          </div>
        </div>
      </section>

    </Fragment>
  )
}

export default Faq