import React from 'react'

export default function Login() {
    return (
        <div className='login'>
            <form style={{ width: 500 }}>
                <h1 style={{ textAlign: "center" }} className="py-2">
                    Login Page
                </h1>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example1">Email address</label>
                    <input type="email" id="form2Example1" class="form-control" />

                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example2">Password</label>
                    <input type="password" id="form2Example2" class="form-control" />

                </div>
                <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

                <div class="text-center">

                </div>
            </form>
        </div>
    )
}
