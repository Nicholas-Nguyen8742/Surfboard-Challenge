import axios from 'axios';

/*Email Validation*/
export const emailValidation = (email) => {
    const emailValidation = /^\S+@\S+\.\S+$/;
        if (emailValidation.test(email)){
            return false;
        }
        return true;
}

/*Confirm Password Match Password*/
export const confirmPasswordValid = () => {
    if (this.state.password !== this.state.confirmPassword) {
        return false;
    }
    return true;
}

/*Is Empty Password*/
export const isEmptyPassword = () => {
    const { passsword } = this.state;
    if (passsword === "") {
        return false;
    }
    return true;
}

/*Handles Login POST Request*/
export const handleLogin = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    axios
        .post('http://localhost:8080/auth/login', {
            email,
            password
        })
        .then((response) => {
            console.log(response);
            sessionStorage.setItem("token", response.data.token);
            this.setState({ success: true, user: response.data.user.id });
            event.target.reset();
        })
        .catch((error) => {
            this.setState({ error: error.response.data });
        });
};

/*Handles Form Change Events*/
export const handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
    });
};

/*Handles REgiser POST Request*/
export const handleRegister = (event) => {
    event.preventDefault();
    const { name, email, position, password } = this.state;
    axios
        .post("http://localhost:8080/auth/register", {
            name,
            email,
            position,
            password
        })
        .then(() => {
            this.setState({ redirect: true, success: true, error: "" });
            event.target.reset();
        })
        .catch((error) => {
            this.setState({ success: false, error: error.response.data });
        });
};