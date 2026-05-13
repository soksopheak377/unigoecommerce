import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import { TextField, Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import logo from "../../Assets/images/logo.png";

const SignIn = () => {

    const constext = useContext(AppContext);
    useEffect(() => {
        constext.setIsHeaderFooterShow(false);
    }, []);
    return (
        <>
            <section className="section signInPage">
                <div className="container">
                    <div className="formWrapper">
                        <div className="logoimg">
                            <img src={logo} alt="Logo" />
                        </div>
                        <h1 className="title">Sign In</h1>
                        <form className="signInForm">
                            <div className="form-group">
                                <TextField id="standard-basic" label="Email" required variant="standard" />
                            </div>
                            <div className="form-group">
                                <TextField id="standard-basic" label="Password" type="password" required variant="standard" />
                            </div>
                            <br />
                            <a href="#" className="border-effect cursor">Forgot Password?</a>
                            <br />
                            <div className="d-flex align-items-center mt-3 mb-3 row">
                                <Button className="btn-2bbef9 col btn-lg btn-big text-white">Sign In</Button>
                                <Link to="/" className="btn-lg btn-big col">
                                    <Button onClick={()=>constext.setIsHeaderFooterShow(true)} className="btn-lg btn-big col ml-3" variant="outlined">Cancel</Button>
                                </Link>
                            </div>
                            <p>Not Yet Registered? <Link to="/signup" className="border-effect">Sign Up</Link></p>
                        </form>

                        <div className="socialsignIn">
                            <h5 className="mt-3 text-center">Or continue with social account</h5>
                            <div className="socialButtons">
                                <button className="socialButton google">
                                    <FcGoogle size={30} />
                                </button>
                                <button className="socialButton facebook">
                                    <FaFacebookF size={30} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignIn;