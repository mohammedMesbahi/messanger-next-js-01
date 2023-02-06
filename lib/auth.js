import axios from "axios";

export const signUpUser = async (data) => {
    axios.post('/api/signup', { data })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}