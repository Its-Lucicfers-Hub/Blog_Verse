function SignIn() {
    return (
        <div className="min-h-screen border-0 flex justify-center items-center bg-blue-100">
            <form className="border-0 flex flex-col items-center w-[28%] h-[530px] rounded-[30px] bg-white p-5 shadow-lg shadow-[rgb(59,130,246)]" action="">
                <h1 className="text-2xl font-bold mt-5 mb-2">Sign In</h1>
                <h6 className="text-gray-500 mb-5">Access your account</h6>
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-semibold">Email Address</label>
                    <input className="outline border-1 border-gray-400/10 focus:border-gray-400/100 w-[350px] h-[55px] p-2 mb-5 rounded-[10px] focus:outline-[rgb(59,130,246)] focus:shadow focus:shadow-[rgb(59,130,246)] transition-all duration-200" type="email" placeholder="sample@gmail.com" required></input>
                </div>
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-semibold">Password</label>
                    <input className="outline border-1 focus:border-gray-400/100 border-gray-400/10 w-[350px] h-[55px] p-2 mb-5 rounded-[10px] focus:outline-[rgb(59,130,246)] focus:shadow focus:shadow-[rgb(59,130,246)] transition-all duration-200" type="password" placeholder="sample123" maxLength={12} required></input>
                </div>
                <div className="flex gap-33 mb-5">
                    <div className="flex flex-row gap-2">
                        <input id="checkbox" type="checkbox" />
                        <label htmlFor="checkbox">Remember</label>
                    </div>
                    <a className="text-blue-700 hover:underline transition-all" href="#">Forget Password?</a>
                </div>
                <button className="border-0 w-[350px] h-[50px] bg-blue-900 rounded-[10px] hover:bg-blue-500 transition-colors text-white cursor-pointer transform hover:scale-110 duration-100 ease-in transition-transform" type="submit">Sign In</button>
                <hr className="w-[350px] m-5 mt-7 opacity-20"></hr>
                <label className="">Don't have an account?<a className="text-blue-700 hover:underline transition-all" href="#">Create One here</a></label>
            </form>
        </div>
    )
}

export default SignIn