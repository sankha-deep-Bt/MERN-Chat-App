import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center mx-auto min-w-96'>
    <div className='w-full p-6 rounded-lg shadow-md bg-blue-500'>
        <h1 className='text-3xl text-center font-semibold text-gray-300'>Signup <span className='text-sky-200'>BtChat</span></h1>
        <form >
            <div>
                <label className='label p-2'><span className='text-base label-text text-white'>Full Name</span></label>
                <input type="text" placeholder ="John Doe" className='w-full input input-bordered h-10' />
            </div>
            <div>
                <label className='label p-2 text-white'><span className='text-base label-text text-white'>Username</span></label>
                <input type="text" placeholder ="johndoe" className='w-full input input-bordered h-10' />
            </div>
            <div>
                <label className='label'><span className='text-base label-text text-white'>Password</span></label>
                <input type="password" placeholder ="Enter password" className='w-full input input-bordered h-10' />
            </div>
            <div>
                <label className='label'><span className='text-base label-text text-white'>Confirm Password</span></label>
                <input type="password" placeholder ="Confirm password" className='w-full input input-bordered h-10' />
            </div>
            {/* Gender check-box */}
            <GenderCheckBox/>
            <a href="#" className='text-sm text-white hover:underline hover:text-blue-600 mt-2 inline-block'>
                Already have an account?
            </a>

            <button className='btn btn-sm btn-block mt-2 bg-blue-700 hover:bg-blue-800 text-white border-none'>Signup</button>
        </form>
        </div>
    </div>
    
  )
}

export default SignUp

