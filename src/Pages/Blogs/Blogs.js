import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='p-5 main-div'>
                <div>
                    <h1 className='p-5 text-center'>Blogs </h1>
                </div>   

                <div className='faq w-50 mx-auto text-center'>
                     <h1 className='text-center text-color'> Question No:1 </h1>
                        <p className='qus text-color '>
                            What is the difference between authentication and authorization?
                        </p>

                        <p >
                        Authentication is the process of verifying who someone is.
                        whereas authorization is the process of verifying what specific applications, files, and data a user has access to.
                        </p>

                        <p>
                        Authentication is the first step of a good identity and access management process.
                        Authorization always takes place after authentication.
                        Authentication is visible to and partially changeable by the user.	
                        Authorization is not visible to or changeable by the user.
                
                
                        </p>
                <div>
                    <h1 className='text-center text-color'> Question No:2 </h1>
                    <p className='qus'>
                    Why are you using Firebase? What other options do you have to implement authentication?
                        </p>
                        <p>
                        Firebase cerate by google  you can use Firebase free.    
                        Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick.
                        It's easy to start a project with Firebase or add a Firebase to your project. It allows real-time database connection
                        </p>
                        <p  className='qus text-color'>
                        You Can implement authentication for Firebase
                        </p>
                        <p className='qus'>
                            1.Google Login
                            2.GitHub Login
                            3.Facebook Login
                            4.email and password Login
                            5.Play Games.
                            6.Phone.
                            7.Game Center.
                            8. Apple.
                            9.Twitter.
                            10.Yahoo.
                            11.Microsoft.
                        </p>
                </div> 
                </div>        
        </div>
    );
};

export default Blogs;