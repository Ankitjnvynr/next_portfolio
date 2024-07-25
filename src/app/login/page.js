// pages/login.js

import LoginForm from "@/components/LoginForm";



const Login = () => {
    return (
        <div className="max-w-[1300px] w-[95%] m-auto bg-white shadow-lg my-4 rounded-xl overflow-hidden ">
            <h1>Login</h1>
            <LoginForm />
        </div>
    );
};

export default Login;
