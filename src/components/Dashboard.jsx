import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { loadData, updateLogo, updateText } from '../redux/actions/dataAction'
import { CgSpinner } from 'react-icons/cg'

function Dashboard() {

  const dispatch = useDispatch();
  const { text, loading, error, message } = useSelector((state) => state.data);
  const [newText, setNewText] = useState(text ? text : '');

  const handleTextChange = (event) => {
    setNewText(event.target.value);
  };

  const handleTextUpdate = async (e) => {
    e.preventDefault()
    await dispatch(updateText(newText));
    dispatch(loadData());
  };


  const [profileImage, setProfileImage] = useState('')
  const [image, setImage] = useState(null)

  const handleLogoChange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setProfileImage(reader.result);
      setImage(file);
    };
  };


  const handleLogoUpdate = async (e) => {
    e.preventDefault()
    //created formdata
    const myForm = new FormData()
    myForm.append('file', image)
    await dispatch(updateLogo(myForm))
    dispatch(loadData())
  };

  if (message) {
    toast.success(message)
    dispatch({ type: "clearMessage" })
  }

  if (error) {
    toast.success(error)
    dispatch({ type: "clearError" })
  }


  return (
    <section className='space-y-10 mx-2'>
      <h1 className='font-bold text-2xl text-center mt-6'>Dashboard</h1>
      <div>
        <form onSubmit={handleTextUpdate} className='flex mt-14 justify-center space-x-5 items-center'>
          <label htmlFor="text" className='font-bold'>Text:</label>
          <input className="bg-gray-200 text-gray-900 rounded-xl block w-64 p-3 font-semibold border-none" type="text" id="text" value={newText} onChange={handleTextChange} placeholder='Input Text...' />
          <button className={`bg-maincolor-100 text-white p-1 font-medium rounded-md w-28 shadow-sm ${loading && 'cursor-not-allowed'}`} type='submit' disabled={loading ? true : false} >
            {
              loading ? (<>
                <CgSpinner className='animate-spin text-2xl mx-auto' />
              </>) : (
                <>
                  Update Text
                </>
              )
            }
          </button>
        </form>
      </div>
      <div>
        <form onSubmit={handleLogoUpdate} className='flex justify-center space-x-5 items-center'>
          <label htmlFor="logo" className='font-bold'>Logo:</label>
          {profileImage && <img src={profileImage} className="h-9 w-9" alt="Logo" />}
          <input className='className="mt-1 block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 w-64' required type="file" id="logo" onChange={handleLogoChange} />
          <button accept='image/*' className={`bg-maincolor-100 text-white p-1 font-medium rounded-md w-28 shadow-sm ${loading && 'cursor-not-allowed'}`} type='submit' disabled={loading ? true : false} >
            {
              loading ? (<>
                <CgSpinner className='animate-spin text-2xl mx-auto' />
              </>) : (
                <>
                  Update Logo
                </>
              )
            }
          </button>
        </form>
      </div>
    </section>
  );
}

export default Dashboard;