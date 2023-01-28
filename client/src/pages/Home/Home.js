import React, { useEffect, useState } from 'react'
import './Home.scss'
import axios from 'axios'
import { useFormik } from 'formik'

const Home = () => {

    const [cards, setCards] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/school')
        .then(res => {
            setCards(res.data)
            console.log(cards)
        })
    },[])
    // const formik = () => {
    //     const {
    //       values,
    //       handleChange,
    //       handleSubmit,
    //       errors,
    //       touched,
    //       handleBlur,
    //       isValid,
    //       dirty
    //     } = formik;

    //  formik = useFormik({
    //     initialValues: {
    //         firstName: '',
    //         lastName: '',
    //         subject: '',
    //         email: '',
    //     },
    //     onSubmit: (values) => {
    //         axios.post('http://localhost:8080/school', values).then(res => console.log(values))
    // }
    // })

  return (
    <div className='home__container'>
        <div className='beckend__text__top'>
            <h1>Our Teachers</h1>
        </div>
        <div className='beckend__text__middle'>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</h3>
        </div>
        <div className='beckend__text__bottom'>
            <div className='beckend__text__bottom__card'>
                {
                    cards.map((card,index) => {
                        return (
                            <div className='beckend__text__bottom__card__total' key={index}>
                                <div className='beckend__text__bottom__card__total__img'>
                                    <img src="https://preview.colorlib.com/theme/oneschool/images/person_2.jpg" alt={card.name} />
                                </div>
                                <div className='beckend__text__bottom__card__total__name'>
                                    {card.name}
                                </div>
                                <div className='beckend__text__bottom__card__total__subject'>
                                    {card.subject} 
                                </div>
                                <div className='beckend__text__bottom__card__total__desc'>
                                    {card.description}
                                </div>
                                <button onClick={() => { 
                                    axios.delete(`http://localhost:8080/school/${card._id}`)
                                    .then(() => {
                                       axios.get("http://localhost:8080/school")
                                       .then((res) => {
                                        setCards(res.data)
                                       })
                                    })
                                }}>
                                    Delete
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className='beckend__form'>
            {/* <form onSubmit={formik.handleSubmit}>
            <input
            type="firstname"
            name="firstname"
            id="firstname"
            value={formValues.firstname}
            onChange={handleChange}
            className={formErrors.firstname && "input-error"}
          />
            <input
            type="lastname"
            name="lastname"
            id="lastname"
            value={formValues.lastname}
            onChange={handleChange}
            className={formErrors.lastname && "input-error"}
          />
           <input
            type="subject"
            name="subject"
            id="subject"
            value={formValues.subject}
            onChange={handleChange}
            className={formErrors.subject && "input-error"}
          />
            
            <input
            type="password"
            name="password"
            id="password"
            value={formValues.password}
            onChange={handleChange}
            className={formErrors.password && "input-error"}
          />

            <input
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
            className={formErrors.email && "input-error"}
          />
            </form> */}
        </div>
    </div>
  )
}

export default Home