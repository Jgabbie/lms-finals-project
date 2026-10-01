import { TextField, Button, Typography, Link, Snackbar, Alert, Box } from '@mui/material'
// import { VisibilityOff, Visibility } from '@mui/icons-material'
import { useState } from 'react'
import ResetPasswordGraphic from "../assets/graphics/undraw_secure-password_9qv4.svg"

export default function ResetPassword() {

    const [notification, setNotification] = useState({
        open: false,
        message: "",
        severity: "success"
    })


    const showNotification = (message, severity = "success") => {
        setNotification({
            open: true,
            message,
            severity
        })
    }

    const closeNotification = () => {
        setNotification((prev => ({
            ...prev,
            open: false
        })))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        showNotification("One-Time-Pin (OTP) sent! Please check your email.", "success")
    }



    return (
        <>
            <div className=' relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 px-4 py-10'>

                <div className='absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-200/60 ' />
                <div className='absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-indigo-200/60 ' />
                <div className='absolute top-1/3 -right-20 w-64 h-64 rounded-full bg-blue-200/60 ' />

                <div className='relative z-10 w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16'>
                    {/* left */}
                    <div className='w-full lg:w-1/2 flex items-center justify-center'>
                        <div className='w-full max-w-lg'>
                            <Box
                                component="img"
                                src={ResetPasswordGraphic}
                                alt='Reset Password Graphics'
                                className='w-full max-w-lg h-auto object-contain'
                            />
                        </div>
                    </div>


                    {/* right */}
                    <div className='w-full lg:w-1/2 flex items-center justify-center'>
                        <div className='w-full max-w-md bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-10'>

                            <div className='text-center mb-8'>
                                <Typography variant='h5' className='font-bold text-slate-800'>
                                    Forgot Password?
                                </Typography>
                                <Typography variant='body2' className='text-slate-500 mt-2'>
                                    Please enter your email so we can send you a One-Time-Pin (OTP) for reseting your password.
                                </Typography>
                            </div>

                            <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                                <TextField label="Email Address" type='email' variant='outlined' fullWidth required />

                                <Button type='submit' variant='contained' size='large' className='bg-blue-600 hover:bg-blue-700 normal-case shadow-none rounded-lg py-3 mt-2 text-base font-medium'>
                                    Reset Password
                                </Button>
                            </form>

                            <div className='mt-8 text-center'>
                                <Typography variant='body2' className='text-slate-600'>
                                    Remembered your password?

                                    <Link href="/login" underline='hover' className='!ml-4 text-blue-600 font-bold cursor-pointer'>
                                        Login here
                                    </Link>
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Snackbar
                open={notification.open}
                autoHideDuration={3000}
                onClose={closeNotification}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
            >
                <Alert
                    onClose={closeNotification}
                    severity={notification.severity}
                    variant='filled'
                    sx={{ width: "100%" }}
                >
                    {notification.message}
                </Alert>
            </Snackbar>
        </>
    )
}
