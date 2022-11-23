import { Field, Form, Formik, ErrorMessage } from "formik"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../App"
import { data } from "../data"
import '../styles/login.css'

export const Login = () => {
    //add a reload
    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()
    const [notFoundUser, setNotFoundUser] = useState(true);
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user-cred'))
        console.log('user = ',user)//null , better get the user from a context
        if (user)
            setUser(user);
            navigate('/', {
                replace: true,
            })
    }, [])

    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            onSubmit={values => {
                console.log(values)
                //check if the user is exist
                for (let i = 0; i < data.length; i++) {
                    if (data[i].email === values.email && data[i].password === values.password) {
                        //user exist => login process
                        localStorage.setItem('user-cred', JSON.stringify({
                            email: values.email,
                            password: values.password
                        }));
                        navigate('/', {
                            replace: true,
                            // state: {}
                        })
                        break ;
                    }
                }
                //user not found Error
                console.log('user not found!')
            }}
            validate={(values) => {
                let errors = {};
                if (!values['email'])
                    errors.email = 'Required'
                else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                )
                    errors.email = 'Invalid Email address'
                if (!values['password'])
                    errors.password = 'Required'
                else if (values.password.length < 8)
                    errors.password = 'minimum length for password is 8'
                return errors;
            }}
        >
            {() => (
                <div className="login">
                    <div className="card">
                        <div className="title">Login</div>
                        <Form className="form">
                            {/**abstract the onsubmit handler  */}
                            <div className="field">
                                <label htmlFor="email">email</label>
                                <Field required placeholder='email@example.com' className='input' type="email" id="email" name="email"/>
                                <ErrorMessage name="email" component='span'/>
                            </div>
                            <div className="field">
                                <label htmlFor="password">password</label>
                                <Field required placeholder='password' className='input' type="password" id="password" name="password"/>
                                <ErrorMessage name="password" component='span'/>
                            </div>
                            <button type="submit" className="submit-btn">Login</button>
                        </Form>
                    </div>
                </div>
            )}
        </Formik>
    )
}